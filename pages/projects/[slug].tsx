import { getProjectData, getProjectSlugs } from "@/lib/projects";
import RootLayout from "../layout";
import styles from "@/styles/markdown.module.css";
import Image from "next/image";

export async function getStaticPaths() {
  const paths = getProjectSlugs().map((slug) => ({
    params: {
      slug: slug.replace(/\.md$/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const projectData = await getProjectData(params.slug);
  return {
    props: {
      projectData,
    },
  };
}

export default function Event({ projectData }: any) {
  console.log(projectData);
  return (
    <RootLayout>
      <div className="max-w-4xl md:max-w-full flex flex-col gap-2 px-8 sm:px-20 xl:px-section">
        <h1 className="font-lora font-bold text-center text-headline-l text-secondary pb-4">
          {projectData.name}
        </h1>
        <img
          src={`/api/uploads/${encodeURIComponent(projectData.image)}`}
          alt=""
          className="w-full max-h-80 object-cover rounded-lg mb-2"
        />
      </div>
      <div
        className={styles.markdown}
        dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}
      />
    </RootLayout>
  );
}
