/*import RootLayout from "../layout";
import styles from "@/styles/markdown.module.css";
import { useTina } from "tinacms/dist/react";
import moment from "moment";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import client from "@/tina/__generated__/client"; // Ensure the client is properly imported

export default function Projects(props: any) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  console.log("Fetched project data:", data);

  // Safeguard: Ensure data.projects exists before accessing fields
  if (!data?.projects) {
    return <div>Error: Project data is missing!</div>;
  }

  // Formatting the start and end dates for display
  const startDate = data.projects.startdate
    ? moment(data.projects.startdate).format("MMMM Do, YYYY")
    : "Start date not available";

  const endDate = data.projects.enddate
    ? moment(data.projects.enddate).format("MMMM Do, YYYY")
    : null;

  return (
    <RootLayout>
      <div className="max-w-4xl md:max-w-full flex flex-col px-8 sm:px-20 xl:px-section mb-2">
        <h1 className="font-lora font-bold text-center text-headline-l text-secondary pb-4">
          {data.projects.title}
        </h1>
      </div>
      <div className={styles.markdown}>
        {// image section}
        <img
          src={data.projects.image}
          alt={data.projects.title}
          className="w-full max-h-80 object-cover"
        />
        
        {// project info section}
        <div className="bg-gray-100 p-4 my-4 rounded-md shadow-md">
          <ul className="list-disc pl-5">
            <li><strong>Date:</strong> {startDate}</li>
            {endDate && <li><strong>End Date:</strong> {endDate}</li>}
            {data.projects.leader && (
              <li><strong>Project Leader:</strong> {data.projects.leader}</li>
            )}
            {data.projects.level && (
              <li><strong>Level:</strong> {data.projects.level}</li>
            )}
          </ul>
        </div>

        {// about project info section }
        <div className="py-4">
          <h2 className="font-semibold text-xl mb-4">About The Project</h2>

          {//rendering tina body with markdown}
          <TinaMarkdown content={data.projects.body} />
        </div>
      </div>
    </RootLayout>
  );
}



export const getStaticProps = async ({ params }: any) => {
  let data = {};
  let query = {};
  let variables = { relativePath: `${params.slug}.md` };

  try {
    // Use the correct query (projects) to fetch the single project
    const res = await client.queries.projects(variables);
    query = res.query;
    data = res.data;

    // Log the full response to see if 'projects' is defined
    console.log("Fetched data in getStaticProps:", res);

   
  } catch (error) {
    console.error("Error fetching project data:", error);
  }

  return {
    props: {
      variables,
      data, // Pass the single project data as a JSON serializable object
      query,
    },
  };
};

export const getStaticPaths = async () => {
  // Fetch the project slugs for generating the paths
  const projectsListData = await client.queries.projectsConnection();

  return {
    paths: projectsListData.data.projectsConnection?.edges?.map((project) => ({
      params: { slug: project?.node?._sys.filename }, // Ensure the slug matches the file name
    })),
    fallback: false, // `false` means non-existent pages return 404
  };
};

*/
// "The objective of this project is to design, develop, and deploy a custom remote-controlled (RC) drone that showcases advanced features such as autonomous flight, real-time FPV (First Person View) video transmission, obstacle avoidance and robust navigation capabilities. This project will involve a multidisciplinary team working collaboratively to integrate skills and technologies in aerodynamics, electronics, design and software development.

// this file slug works but doesnt displayp orperly 

import RootLayout from "../layout";
import styles from "@/styles/markdown.module.css";
import { useTina } from "tinacms/dist/react";
import moment from "moment";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import client from "@/tina/__generated__/client"; // Ensure the client is properly imported
import Link from "next/link";
import { BsDiscord } from "react-icons/bs";

export default function Projects(props: any) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  console.log("Fetched project data:", data);

  // Safeguard: Ensure data.projects exists before accessing fields
  if (!data?.projects) {
    return <div>Error: Project data is missing!</div>;
  }

  // Formatting the start and end dates for display
  const startDate = data.projects.startdate
    ? moment(data.projects.startdate).format("MMMM Do, YYYY")
    : "Start date not available";

  const endDate = data.projects.enddate
    ? moment(data.projects.enddate).format("MMMM Do, YYYY")
    : null;

  return (
    <RootLayout>
    <div className="max-w-4xl md:max-w-full flex flex-col px-8 sm:px-20 xl:px-section mb-2">
      <h1 className="font-lora font-bold text-center text-headline-l text-secondary pb-4">
        {data.projects.title}
      </h1>
    </div>
    <div className={styles.markdown }>
      <img
        src={data.projects.image}
        alt={data.projects.title}
        className="w-full max-h-80 object-cover"
      />
      <div className={styles.normalFontLi}>
      <ul className="list-disc pl-5">
            {/* Ensure each list item has a unique key to avoid the warning */}
            <li key="Duration">
              <strong>Duration:</strong> {startDate} {endDate && `to ${endDate}`}</li>
            {data.projects.level && (
              <li key="level"> <strong>Level:</strong> {data.projects.level}</li>
            )}
          </ul>
        <TinaMarkdown content={data.projects.body} />
        <ul className={styles.bottomContainer}>
            {data.projects.leader && (
              <>
                <li className={styles.noBullet} key="anotherItem">
                <Link
                    href={data.projects.link}
                    className="w-fit flex flex-row gap-2 justify-center items-center text-white bg-discord px-4 py-2 rounded-md shadow-md hover:shadow-lg"
                  >
                    <BsDiscord color="#ffffff" />
                    IEEE Concordia
                </Link>
                </li>
                <li className={styles.noBullet} key="leader">
                  <strong>Project by:</strong> {data.projects.leader}
                </li>
              </>
            )}
          </ul>
      </div>

    </div>
  </RootLayout>
  );
}

// Static props and paths remain unchanged
export const getStaticProps = async ({ params }: any) => {
  let data = {};
  let query = {};
  let variables = { relativePath: `${params.slug}.md` };

  try {
    // Use the correct query (projects) to fetch the single project
    const res = await client.queries.projects(variables);
    query = res.query;
    data = res.data;

    // Log the full response to see if 'projects' is defined
    console.log("Fetched data in getStaticProps:", res);

  } catch (error) {
    console.error("Error fetching project data:", error);
  }

  return {
    props: {
      variables,
      data, // Pass the single project data as a JSON serializable object
      query,
    },
  };
};

export const getStaticPaths = async () => {
  // Fetch the project slugs for generating the paths
  const projectsListData = await client.queries.projectsConnection();

  return {
    paths: projectsListData.data.projectsConnection?.edges?.map((project) => ({
      params: { slug: project?.node?._sys.filename }, // Ensure the slug matches the file name
    })),
    fallback: false, // `false` means non-existent pages return 404
  };
};
