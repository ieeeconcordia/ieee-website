import { SUPABASE_URL, HEADERS } from "@/lib/supabase";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      // Fetch the latest entry from Supabase
      const response = await fetch(`${SUPABASE_URL}?order=timestamp.desc&limit=1`, {
        headers: HEADERS
      });
      
      // Handle non-OK responses
      if (!response.ok) {
        console.error(`Error: Received status ${response.status}`);
        return res.status(500).json({ error: `Failed to fetch data from Supabase: ${response.statusText}` });
      }

      const data = await response.json();

      // Check for empty data or unexpected format
      if (!data || data.length === 0 || !data[0].hasOwnProperty("is_open")) {
        console.error('Error: Unexpected response format or empty data', data);
        return res.status(500).json({ error: 'Unexpected response format or no data available' });
      }

      // Respond with the formatted data
      res.status(200).json({
        status: data[0].is_open ? "open" : "closed",
        timestamp: data[0].timestamp
      });
    } catch (error) {
      console.error('Error fetching lab status:', error);
      res.status(500).json({ error: error.message || 'Failed to fetch lab status' });
    }
  } else {
    res.status(405).end(); // Method not allowed
  }
}
