import { createUser } from "../../../lib/mongo/users";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const user = JSON.parse(req.body);
      await createUser(user);

      return res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${req.method} is not allowed`);
};

export default handler;
