import React from "react";
import RootLayout from "../layout";
import styles from "@/styles/markdown.module.css";
import Link from "next/link";
import client from "@/tina/__generated__/client";
import { useTina } from "tinacms/dist/react";
import moment from "moment";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default function IEEEXtreme(props: any) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  console.log(props);

  const date = moment(data.event.date).format("MMMM Do, h:mm a");

  return (
    <RootLayout>
      <div className="max-w-4xl md:max-w-full flex flex-col px-8 sm:px-20 xl:px-section mb-2">
        <h1 className="font-lora font-bold text-center text-headline-l text-secondary pb-4">
          IEEEXtreme
        </h1>
      </div>
      <div className={styles.markdown}>
        <img
          src="IEEEXtreme.webp"
          alt="IEEEXtreme Banner"
          className="w-full max-h-80 object-cover"
        />
        <div>
          <ul>
            <li>Date: {date}</li>
            <li>Location: {data.event.location}</li>
            <li>Time: {data.event.time}</li>
          </ul>
          <TinaMarkdown content={data.event.body} />
        </div>
      </div>
    </RootLayout>
  );
}

export const getStaticProps = async ({ params }: any) => {
  let data = {};
  let query = {};
  let variables = { relativePath: `${params.filename}.md` };
  try {
    const res = await client.queries.event(variables);
    console.log(res);
    query = res.query;
    data = res.data;
    variables = res.variables;
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: {
      variables: variables,
      data: data,
      query: query,
      //myOtherProp: 'some-other-data',
    },
  };
};

export const getStaticPaths = async () => {
  const eventsListData = await client.queries.eventConnection();

  return {
    paths: eventsListData.data.eventConnection?.edges?.map((event) => ({
      params: { filename: event?.node?._sys.filename },
    })),
    fallback: false,
  };
};
