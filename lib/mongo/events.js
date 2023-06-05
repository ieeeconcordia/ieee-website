import { MongoClient, ObjectId } from "mongodb";
import fs from "fs";
import clientPromise from ".";

const LOCAL_COPY_FILE = "lib/local/events.json";
let localCopyUpToDate = false;


async function connectToDb() {
  const client = await clientPromise;
  const db = await client.db("IEEE-db");
  const events = await db.collection("events");
  return events;
}

async function getEventsFromLocalCopy() {
  if (!localCopyUpToDate) await updateLocalCopy();
  return await readLocalCopy();
}


export async function getEvents() {
  try {
    const events = await getEventsFromLocalCopy();
    return { events: events };
  } catch (error) {
    return handleEventError(error);
  }
}

export async function getEvent(eventId) {
  try {
    const events = await getEventsFromLocalCopy();
    const foundEvent = events.find((event) => event._id === eventId);

    if (foundEvent) return foundEvent;

    const collection = await connectToDb();
    const result = await collection.findOne({ _id: new ObjectId(eventId) });
    const serializedResult = { ...result, _id: result._id.toString() };
    return serializedResult;
  } catch (error) {
    return handleEventError(error);
  }
}

export async function createEvent(event) {
  try {
    const collection = await connectToDb();
    const result = await collection.insertOne(event);
    if (result.insertedCount === 1) {
      updateLocalCopy();
      return { success: true };
    } else {
      throw new DatabaseError("Failed to create one event");
    }
  } catch (error) {
    if (error instanceof DatabaseError) {
      return { error: error.message };
    } else {
      return { error: "Failed to create one event" };
    }
  }
}

async function updateLocalCopy() {
  try {
    const collection = await connectToDb();
    const events = await collection.find({}).map((event) => ({
      ...event,
      _id: event._id.toString(),
    })).toArray();

    const jsonString = JSON.stringify(events);
    await fs.promises.writeFile(LOCAL_COPY_FILE, jsonString);
  } catch (error) {
    throw new DatabaseError("Failed to update local copy");
  }
}

async function readLocalCopy() {
  try {
    const data = await fs.promises.readFile(LOCAL_COPY_FILE, "utf-8");
    let events;
    try {
      events = JSON.parse(data);
    } catch (error) {
      throw new LocalCopyError("Error parsing JSON");
    }

    if (Array.isArray(events)) {
      return events;
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

async function handleEventError(error) {
  if (error instanceof DatabaseError) {
    return { error: "Failed to fetch event from the database!" };
  } else if (error instanceof LocalCopyError) {
    return { error: "Failed to fetch event from the local copy!" };
  } else {
    return { error: "Failed to fetch event!" };
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
