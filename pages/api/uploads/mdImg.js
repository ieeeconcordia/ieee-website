import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { join } from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Determine the destination folder based on the file type
    if (file.mimetype === 'text/markdown') {
      cb(null, join(process.cwd(), 'contents'));
    } else if (file.mimetype.startsWith('image/')) {
      cb(null, join(process.cwd(), 'uploads'));
    } else {
      cb(new Error('Invalid file type'));
    }
  },
  filename: (req, file, cb) => {
    const filename = uuidv4() + path.extname(file.originalname);
    cb(null, filename);
  },
});

const upload = multer({ storage });

export default upload.array('files')(async function handler(req, res) {
  try {
    const { files } = req;
    console.log(files)

    // Process the uploaded files
    // Save the file paths or perform further operations

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});
