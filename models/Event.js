import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    price : {
      type: String,
      required : true
    },
    eventType : {
      type: String,
      required: true,
    },
    organizer :{
      type: String,
      required : true
    },
    sponsors: {
      type: Array,
    },
  },
  { collection: 'events' }
);

const EventModel = mongoose.models.Event || mongoose.model('Event', eventSchema);

export default EventModel;
