// pages/api/labstatus.js
import { SUPABASE_URL, HEADERS } from "@/lib/supabase";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const response = await fetch(`${SUPABASE_URL}?order=timestamp.desc&limit=1`, {
        headers: HEADERS
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      
      // Convert the data to match your previous API response format
      res.status(200).json({
        status: data[0].is_open ? "open" : "closed",
        timestamp: data[0].timestamp
      });
    } catch (error) {
      console.error('Error fetching lab status:', error);
      res.status(500).json({ error: 'Failed to fetch lab status' });
    }
  } else {
    res.status(405).end(); // Method not allowed
  }
}