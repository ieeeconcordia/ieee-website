
import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
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
    startDate : {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    price : {
      type: String,
      required : true
    },
     tags : {
      type: Array,
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

const ProjectModel = mongoose.models.Event || mongoose.model('Project', projectSchema);

export default ProjectModel;
