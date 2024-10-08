import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export function getProjectSlugs() {
  return fs.readdirSync(projectsDirectory);
}

export async function getProjectData(slug) {
  const fullPath = path.join(projectsDirectory, `${slug}.md`);
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

//return all the projects found in content/projects
export async function getAllProjects() {
  const slugs = getProjectSlugs();
  const projects = await Promise.all(
    slugs.map((slug) => getProjectData(slug.replace(/\.md$/, "")))
  );
  return projects.sort((a, b) => (a.date < b.date ? 1 : -1));
}