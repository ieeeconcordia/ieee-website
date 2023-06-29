import { MongoClient, ObjectId } from "mongodb";
import fs from "fs";
import clientPromise from ".";

const LOCAL_COPY_FILE = "lib/local/projects.json";
let localCopyUpToDate = false;


async function connectToDb() {
  const client = await clientPromise;
  const db = await client.db("main");
  const collection = await db.collection("projects");
  return collection;
}

async function getProjectsFromLocalCopy() {
  if (!localCopyUpToDate) await updateLocalCopy();
  return await readLocalCopy();
}


export async function getProjects() {
  try {
    const projects = await getProjectsFromLocalCopy();
    return { projects: projects};
  } catch (error) {
    return handleProjectError(error);
  }
}

export async function getproject(projectId) {
  try {
    const projects = await getProjectsFromLocalCopy();
    const foundproject = projects.find((project) => project._id === projectId);

    if (foundproject) return foundproject;

    const collection = await connectToDb();
    const result = await collection.findOne({ _id: new ObjectId(projectId) });
    const serializedResult = { ...result, _id: result._id.toString() };
    return serializedResult;
  } catch (error) {
    return handleProjectError(error);
  }
}

export async function createproject(project) {
  try {
    console.error("Adding a project ", project);
    const collection = await connectToDb();
    const result = await collection.insertOne(project);
   updateLocalCopy();
    if (result.insertedCount === 1) {
      return { success: true };
    } else {
      throw new DatabaseError("Failed to create one project");
    }
    
  } catch (error) {
    if (error instanceof DatabaseError) {
      return { error: error.message };
    } else {
      return { error: "Failed to create one project" };
    }
  }
}

async function updateLocalCopy() {
  try {

    const collection = await connectToDb();
    const serializedprojects = await collection.find({}).map((project) => ({
      ...project,
      _id: project._id.toString(),
    })).toArray();

    const jsonString = JSON.stringify(serializedprojects);
    await fs.promises.writeFile(LOCAL_COPY_FILE, jsonString);
  } catch (error) {
    throw new DatabaseError("Failed to update local copy");
  }
}

async function readLocalCopy() {
  try {
    const data = await fs.promises.readFile(LOCAL_COPY_FILE, "utf-8");
    let projects;
    try {
      projects = JSON.parse(data);
    } catch (error) {
      throw new LocalCopyError("Error parsing JSON");
    }

    if (Array.isArray(projects)) {
      return projects;
    } else {
      throw new LocalCopyError("Local copy is not an array");
    }
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new LocalCopyError("Local copy file not found");
    } else {
      throw error;
    }
  }
}

async function handleProjectError(error) {
  if (error instanceof DatabaseError) {
    return { error: "Failed to fetch project from the database!" };
  } else if (error instanceof LocalCopyError) {
    return { error: "Failed to fetch project from the local copy!" };
  } else {
    return { error: "Failed to fetch project!" };
  }
}

class DatabaseError extends Error {
  constructor(message) {
    super(message);
    this.name = "DatabaseError";
  }
}

class LocalCopyError extends Error {
  constructor(message) {
    super(message);
    this.name = "LocalCopyError";
  }
}

(async () => {
  if (!localCopyUpToDate) updateLocalCopy();
  localCopyUpToDate = true;
})();
