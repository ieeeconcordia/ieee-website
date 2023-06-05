import { MongoClient, ObjectId } from "mongodb";
import clientPromise from ".";

async function connectToDb() {
  const client = await clientPromise;
  const db = await client.db("IEEE-db");
  const events = await db.collection("events");
  return events;
}

export async function getEvents() {
  try {
    const events = await connectToDb();
    const result = await events.find({}).map((event) => ({
      ...event,
      _id: event._id.toString(),
    })).toArray();
    return { events: result };
  } catch (error) {
    return { error: "Failed to fetch events!" };
  }
}

export async function getEvent(eventId) {
  try {
    const events = await connectToDb();
    const result = await events.findOne({_id: new ObjectId(eventId)});
    const serializedResult = {...result,  _id : result._id.toString()};
    return serializedResult;
  } catch (error) {
    console.log(error.message);
    return { error: "Failed to fetch event!" };
  }
}

export async function createEvent(event) {
  try {
    const events = await connectToDb();
    await events.insertOne(event);
    console.log("In create event method!");
  } catch (error) {
    console.error(error);
    return {error : "Failed to create one event"};
  }
}
