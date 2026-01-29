import React, { useState } from "react";
import RootLayout from "../layout";
import Link from "next/link";
import client from "@/tina/__generated__/client";
import { useTina } from "tinacms/dist/react";
import moment from "moment";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { IoCalendarOutline, IoLocationSharp, IoTimeOutline, IoArrowBack } from "react-icons/io5";

export default function EventDetail(props: any) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const [imgError, setImgError] = useState(false);

  const date = moment(data.event.date).format("MMMM Do, YYYY");

  return (
    <RootLayout>
      {/* Hero Banner */}
      <div className="w-full bg-[#128DCD] text-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Link href="/events" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4">
            <IoArrowBack size={18} />
            Back to Events
          </Link>
          <h1 className="text-3xl font-bold">{data.event.title}</h1>
        </div>
      </div>

      {/* Content */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Image */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-[#B3DAE6] rounded-lg overflow-hidden sticky top-6">
                <div className="h-64 bg-gray-100">
                  {!imgError && data.event.image ? (
                    <img
                      src={data.event.image}
                      alt={data.event.title}
                      className="w-full h-full object-cover"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#128DCD] to-[#0e7ab8]">
                      <span className="text-white text-4xl font-bold opacity-40">IEEE</span>
                    </div>
                  )}
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <IoCalendarOutline size={20} className="text-[#128DCD]" />
                    <span>{date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <IoTimeOutline size={20} className="text-[#128DCD]" />
                    <span>{data.event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <IoLocationSharp size={20} className="text-[#128DCD]" />
                    <span>{data.event.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-[#B3DAE6] rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Event Details</h2>
                <div className="prose prose-gray max-w-none">
                  <TinaMarkdown content={data.event.body} />
                </div>
              </div>
            </div>
          </div>
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
