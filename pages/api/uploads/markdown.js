import multer from "multer";
import path from "path";

// Configure multer to specify the destination and filename for uploaded images
const storage = multer.diskStorage({
  destination: "./content/events/",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

export const config = {
  api: {
    bodyParser: false, // Disable body parsing, multer will handle it
  },
};

export default async function handler(req, res) {
  try {
    await upload.single("file")(req, res, (error) => {
      if (error instanceof multer.MulterError) {
        console.error(error);
        res.status(400).json({ error: "Error uploading markdown file" });
      } else if (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
      } else {
        // File uploaded successfully, you can perform additional operations here
        const imagePath = path.join("/content/events", req.file.filename);
        res.status(200).json({ imagePath });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
}
