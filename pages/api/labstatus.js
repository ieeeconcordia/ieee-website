// pages/api/labstatus.js
import { SUPABASE_URL, HEADERS } from "@/lib/supabase";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      // Replace `door_sensor` with your actual Supabase table if it’s different
      const response = await fetch(`${SUPABASE_URL}/door_sensor?order=timestamp.desc&limit=1`, {
        headers: HEADERS
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data from Supabase");
      }

      const data = await response.json();
      
      // Assuming `is_open` and `timestamp` are fields in the response
      if (data.length > 0) {
        res.status(200).json({
          status: data[0].is_open ? "open" : "closed",
          timestamp: data[0].timestamp
        });
      } else {
        res.status(404).json({ error: "No lab status data available" });
      }
    } catch (error) {
      console.error("Error fetching lab status:", error);
      res.status(500).json({ error: "Failed to fetch lab status" });
    }
  } else {
    res.status(405).end(); // Method not allowed
  }
}
