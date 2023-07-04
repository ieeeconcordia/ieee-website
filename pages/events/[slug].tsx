import { getEventData, getEventSlugs } from "@/lib/events";
import RootLayout from "../layout";
import styles from "@/styles/markdown.module.css";
import Image from "next/image";

export async function getStaticPaths() {
  const paths = getEventSlugs().map((slug) => ({
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
  const eventData = await getEventData(params.slug);
  return {
    props: {
      eventData,
    },
  };
}

export default function Event({ eventData }: any) {
  console.log(eventData);
  return (
    <RootLayout>
      <div className="max-w-4xl md:max-w-full flex flex-col gap-2 px-8 sm:px-20 xl:px-section">
        <h1 className="font-lora font-bold text-center text-headline-l text-secondary pb-4">
          {eventData.name}
        </h1>
        <img
          src={`/api/uploads/${encodeURIComponent(eventData.image)}`}
          alt=""
          className="w-full max-h-80 object-cover rounded-lg mb-2"
        />
      </div>
      <div
        className={styles.markdown}
        dangerouslySetInnerHTML={{ __html: eventData.contentHtml }}
      />
    </RootLayout>
  );
}
