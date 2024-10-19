import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const directory = path.join(process.cwd(), "public", "sponsors");

  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      const images = files.filter((file) => {
        const extension = path.extname(file).toLowerCase();
        return (
          extension === ".jpg" ||
          extension === ".jpeg" ||
          extension === ".png" ||
          extension === ".gif"
        );
      });

      res.status(200).json({ images });
    }
  });
}
