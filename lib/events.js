import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const eventsDirectory = path.join(process.cwd(), "content/events");

export function getEventSlugs() {
  return fs.readdirSync(eventsDirectory);
}

export async function getEventData(slug) {
  const fullPath = path.join(eventsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...data,
  };
}

//return all the events found in content/events
export async function getAllEvents() {
  const slugs = getEventSlugs();
  const events = await Promise.all(
    slugs.map((slug) => getEventData(slug.replace(/\.md$/, "")))
  );
  return events.sort((a, b) => (a.date < b.date ? 1 : -1));
}
