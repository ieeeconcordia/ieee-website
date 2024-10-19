import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "event",
        label: "Events",
        path: "content/events",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "string",
            name: "location",
            label: "Location",
            required: true,
          },
          {
            type: "string",
            name: "time",
            label: "Time (24h)",
            required: true,
          },
          {
            type: "number",
            name: "price",
            label: "Price",
          },
          {
            type: "string",
            name: "type",
            label: "Event type",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Event Card Description",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Event Image",
            required: true,
          },
          {
            type: "string",
            name: "organizer",
            label: "Organizer",
          },
          {
            type: "string",
            name: "sponsors",
            label: "Sponsors",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "member",
        label: "Members",
        path: "content/members",
        fields: [
          {
            type: "image",
            name: "image",
            label: "Image",
            required: true,
          },
          {
            type: "string",
            name: "role",
            label: "Role",
            required: true,
            isTitle: true,
          },
          {
            type: "string",
            name: "name",
            label: "Name",
            required: true,
          },
          {
            type: "string",
            name: "email",
            label: "Email",
            required: true,
          },
          {
            type: "string",
            name: "program",
            label: "Program",
          },
          {
            type: "string",
            name: "linkedin",
            label: "LinkedIn",
          },
          {
            type: "string",
            name: "github",
            label: "Github",
          },
        ],
      },
      {
        name: "projects",
        label: "Projects",
        path: "content/projects",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "leader",
            label: "Lead By",
          },

          {
            type: "datetime",
            name: "startdate",
            label: "Start Date",
          },
          {
            type: "datetime",
            name: "enddate",
            label: "End Date",
          },
          {
            type: "string",
            name: "level",
            label: "Level",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "image",
            name: "image",
            label: "Image",
          },
          {
            type: "image",
            list: true,  
            name: "gallery",
            label: "Gallery Images",
            description: "Add images to showcase in the gallery",
          },
          {
            type: "string",
            name: "link",
            label: "Link"
          }
          
        ],
      },
    ],
  },
});
