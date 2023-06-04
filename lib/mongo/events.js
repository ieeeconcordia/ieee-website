import clientPromise from ".";
import { ObjectId } from 'mongodb';

let client
let db
let events

async function init() {
    if(db) return 
    try {
        client = await clientPromise;
        db = await client.db("IEEE-db")
        events = await db.collection('events')
    } catch (error) {
        throw new Error('Failed to connect');
    }
}

;(async () => {
    await init()
})()

export async function getEvents() {
    try {
        if (!events) await init()
        const result = await events.find({}).map(event => ({...event, _id: event._id.toString()})).toArray()
        return { events: result }
    } catch (error) {
        return { error: 'Failed to fetch events!'}
    }
}

export async function getEvent(eventId) {
    console.log(eventId);
    try {
      if (!events) await init();
      const result = await events.find();
      return { event: result };
    } catch (error) {
      return { error: 'Failed to fetch event!' };
    }
  }

export async function createEvent(event) {
    try {
        if (!events) await init()
        await events.insertOne(event);
        console.log("In create event method!")
    } catch (error) {
      console.error(error);s
    }
}
