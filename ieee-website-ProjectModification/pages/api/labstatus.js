import { connectToDatabase } from "@/lib/mongodb"; // Import the MongoDB connection function

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { db, collection } = await connectToDatabase();

    // Sort documents by the "timestamp" field in descending order
    const data = await collection
      .find({})
      .sort({ time: -1 })
      .limit(1)
      .toArray();

    res.status(200).json(data[0]); // Return the first (latest) document
  } else {
    res.status(405).end(); // Method not allowed
  }
}
