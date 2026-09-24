import fs from "fs/promises";
import path from "path";
import { getSponsors } from "@/lib/tina";

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif", ".webp"];

// Falls back to whatever is sitting in public/sponsors when the Tina collection
// is empty or unreachable, so the marquee never goes blank.
async function readSponsorFolder() {
  const directory = path.join(process.cwd(), "public", "sponsors");
  const files = await fs.readdir(directory);

  return files
    .filter((file) => IMAGE_EXTENSIONS.includes(path.extname(file).toLowerCase()))
    .map((file) => ({
      name: path.basename(file, path.extname(file)),
      logo: `/sponsors/${file}`,
      link: null,
    }));
}

export default async function handler(req, res) {
  let sponsors = [];
  let source = "tina";

  try {
    sponsors = (await getSponsors()).filter((sponsor) => sponsor.logo);
  } catch (err) {
    console.error("Failed to fetch sponsors from Tina, falling back:", err);
    sponsors = [];
  }

  if (sponsors.length === 0) {
    source = "filesystem";
    try {
      sponsors = await readSponsorFolder();
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
  }

  res.status(200).json({
    sponsors,
    source,
    // Kept so any older caller reading `images` still works.
    images: sponsors.map((sponsor) => sponsor.logo.replace("/sponsors/", "")),
  });
}
