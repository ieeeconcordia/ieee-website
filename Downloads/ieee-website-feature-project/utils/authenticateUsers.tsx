import { MongoClient, Db } from "mongodb";

const uri = "mongodb+srv://webmaster:bits4bytes@ieee-db.4rk1mly.mongodb.net/?retryWrites=true&w=majority";

interface User {
    email: string;
    password: string;
    name: string;
  }

  async function authenticateUser(
    email: string,
    password: string
  ): Promise<User | null> {
    const client = new MongoClient(uri);
  
    try {
      await client.connect();
  
      const db: Db = client.db("IEEE-db");
      const users = db.collection<User>("users");
  
      const user = await users.findOne({ email, password });
  
      return user ?? null;
    } catch (error) {
      console.error(error);
      return null;
    } finally {
      await client.close();
    }
  }
  
  export default authenticateUser;