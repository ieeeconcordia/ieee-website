import { MongoClient } from "mongodb";

async function connectToDatabase() {
  const client = new MongoClient(process.env.MONGODB_URI);

  await client.connect();

  const db = client.db("IEEE-db");
  const collection = db.collection("events");

  return { client, db, collection };
}

export { connectToDatabase };
