import{getProjects, createProject, getProject} from "@/lib/mongo/projects";

const projectHandler = async (req, res) => {
  if (req.method === "GET") {
    if (req.query.id) {
      try {
        const { project, error } = await getProject(req.query.id);
        if (error) throw new Error(error);

        return res.status(200).json({ project });
      } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: error.message });
      }
    } else {
      try {
        const { project, error } = await getProjects();
        if (error) throw new Error(error);

        return res.status(200).json({ project });
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    }
  } else if (req.method === "POST") {
    try {
      const project = JSON.parse(req.body);
      await createProject(project);

      return res.status(201).json({ message: "Event created successfully" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} is not allowed`);
};

export default projectHandler;
