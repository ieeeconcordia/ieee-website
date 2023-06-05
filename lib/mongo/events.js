import { getEffectiveConstraintOfTypeParameter } from "typescript";
import clientPromise from ".";
import { ObjectId } from "mongodb";

let client;
let db;
let events;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db("IEEE-db");
    events = await db.collection("events");
  } catch (error) {
    throw new Error("Failed to connect");
  }
}

(async () => {
  await init();
})();

export async function getEvents() {
  try {
    if (!events) await init();
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
    if (!events) await init();
    const result = await events.findOne({_id: new ObjectId(eventId)});
    const serializedResult = {...result,  _id : result._id.toString()}; 
    return serializedResult;
  } catch (error) {
    console.log(error.message);
    return {
      error: "Failed to fetch event!",
    };
  }
}

export async function createEvent(event) {
  try {
    if (!events) await init();
    await events.insertOne(event);
    console.log("In create event method!");
  } catch (error) {
    console.error(error);
    return {error : "Failed to create one event"}
  }
}
