import { MongoClient } from "mongodb";

async function connectToDatabase() {
  console.log(process.env.MONGODB_URI);
  const client = new MongoClient(process.env.MONGODB_URI);

  await client.connect();

  const db = client.db("IEEE-db");
  const collection = db.collection("statusReports");

  return { client, db, collection };
}

export { connectToDatabase };
