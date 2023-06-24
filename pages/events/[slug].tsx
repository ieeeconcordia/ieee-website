import { getEventData, getEventSlugs } from "@/lib/events";
import RootLayout from "../layout";
import styles from "@/styles/markdown.module.css";

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
  return (
    <RootLayout>
      <h1>{eventData.name}</h1>
      <div
        className={styles.markdown}
        dangerouslySetInnerHTML={{ __html: eventData.contentHtml }}
      />
    </RootLayout>
  );
}
