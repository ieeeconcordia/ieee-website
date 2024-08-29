import { getProjectData, getProjectSlugs } from "@/lib/projects";
import RootLayout from "../layout";
import styles from "@/styles/markdown.module.css";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import client from "@/tina/__generated__/client";
import { useTina } from "tinacms/dist/react";
import moment from "moment";
import { TinaMarkdown } from "tinacms/dist/rich-text";

// export async function getStaticPaths() {
//   const paths = getProjectSlugs().map((slug) => ({
//     params: {
//       slug: slug.replace(/\.md$/, ""),
//     },
//   }));
//   console.log(paths);

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }: any) {
//   console.log(params)
//   const projectData = await getProjectData(params.slug);
//   return {
//     props: {
//       projectData,
//     },
//   };
// }

// export default function Projects({ projectData }: any) {
//   console.log(projectData);
//   return (
//     <RootLayout>
//       <div className="max-w-4xl md:max-w-full flex flex-col gap-2 px-8 sm:px-20 xl:px-section">
//         <h1 className="font-lora font-bold text-center text-headline-l text-secondary pb-4">
//           {projectData.name}
//         </h1>
//         <img
//           src={`/api/uploads/${encodeURIComponent(projectData.image)}`}
//           alt=""
//           className="w-full max-h-80 object-cover rounded-lg mb-2"
//         />
//       </div>
//       <div
//         className={styles.markdown}
//         dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}
//       />
//     </RootLayout>
//   );
// }


export default function Projects(props: any) {
  console.log("ss",props)
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  console.log("var",props.variables)
  console.log("data",props.data.project)
 return (
    <RootLayout>
      <div className="max-w-4xl md:max-w-full flex flex-col px-8 sm:px-20 xl:px-section mb-2">
        <h1 className="font-lora font-bold text-center text-headline-l text-secondary pb-4">
          {data.project.title}
        </h1>
      </div>
      <div className={styles.markdown}>
        <img
          src={data.project.image}
          alt={data.project.title}
          className="w-full max-h-80 object-cover"
        />
        <div>
          <ul>
            <li>Date: {data.project.startdate}</li>
            <li>Location: {data.project.location}</li>
            <li>Time: {data.project.time}</li>
            <li>Body: {data.project.body}</li>
          </ul>
          <TinaMarkdown content={data.project.body} />
        </div>
      </div>
    </RootLayout>
  );
}

export const getStaticProps = async ({ params }: any) => {
  let data = {};
  let query = {};
  let variables = { relativePath: `${params.slug}.md` };  // Ensure this is the correct variable
  try {
    const res = await client.queries.projects(variables);
    console.log(res);  // Check what res.data contains
    query = res.query;
    data = res.data;  // Ensure that res.data contains a project object
    variables = res.variables;
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: {
      variables: variables,
      data: data,
      query: query,
    },
  };
};

export const getStaticPaths = async () => {
  const projectsListData = await client.queries.projectsConnection();
console.log("projectsListData",projectsListData.data.projectsConnection.edges?.find(x=>x?.node?.title == 'soldering'))
  return {
    paths: projectsListData.data.projectsConnection?.edges?.map((project) => ({
      params: { slug : project?.node?._sys.filename },
    })),
    fallback: false,
  };
};
