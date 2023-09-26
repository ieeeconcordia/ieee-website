import { MongoClient } from "mongodb";

async function connectToDatabase() {
  console.log(process.env.MONGODB_URI);
  const client = new MongoClient(
    "mongodb+srv://webmaster:bits4bytes@ieee-db.4rk1mly.mongodb.net/?retryWrites=true&w=majority"
  );

  await client.connect();

  const db = client.db("IEEE-db");
  const collection = db.collection("statusReports");

  return { client, db, collection };
}

export { connectToDatabase };
