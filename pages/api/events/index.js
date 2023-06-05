import { createEvent, getEvent, getEvents } from "../../../lib/mongo/events";

const handler = async (req, res) => {
  
  if (req.method === "GET") {
    if (req.query.id) {
      try {
        const { event, error } = await getEvent(req.query.id);
        if (error) throw new Error(error);

        return res.status(200).json({ event });
      } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: error.message });
      }
    } else {
      try {
        const { events, error } = await getEvents();
        if (error) throw new Error(error);

        return res.status(200).json({ events });
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    }
  } else if (req.method === "POST") {
    try {
      const event = JSON.parse(req.body);
      await createEvent(event);

      return res.status(201).json({ message: "Event created successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} is not allowed`);
};

export default handler;
