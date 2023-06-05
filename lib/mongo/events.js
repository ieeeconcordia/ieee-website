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

export async function getEvents() {
  try {
    if (!localCopyUpToDate) await updateLocalCopy();
    const events = await readLocalCopy();
    return { events: events };
  } catch (error) {
    return { error: "Failed to fetch events!" };
  }
}

export async function getEvent(eventId) {
  try {
    if (!localCopyUpToDate) await updateLocalCopy();
    const events = await readLocalCopy();

    if (Array.isArray(events) && events.length > 0) {
      const foundEvent = events.find((event) => event._id === eventId);
      if (foundEvent) return foundEvent;
    }

    // if event is not on the local json file
    const collection = await connectToDb();
    const result = await collection.findOne({ _id: new ObjectId(eventId) });
    const serializedResult = { ...result, _id: result._id.toString() };
    return serializedResult;
  } catch (error) {
    console.error(error);
    return { error: "Failed to fetch event!" };
  }
}

export async function createEvent(event) {
  try {
    const events = await connectToDb();
    const result = await events.insertOne(event);
    if (result.insertedCount === 1) {
      console.log("In create event method!");
      return { success: true };
    } else {
      return { error: "Failed to create one event" };
    }
  } catch (error) {
    console.error("Error : ", error);
    return { error: "Failed to create one event" };
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
    console.error("Error : ", error);
  }
}

async function readLocalCopy() {
  try {
    const data = await fs.promises.readFile(LOCAL_COPY_FILE, "utf-8");
    let events;
    try {
      events = JSON.parse(data);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return [];
    }

    if (Array.isArray(events)) {
      return events;
    } else {
      console.error("Local copy is not an array");
      return [];
    }
  } catch (error) {
    console.log("Error:", error);
    return [];
  }
}

(async () => {
  await updateLocalCopy();
  localCopyUpToDate = true;
})();
