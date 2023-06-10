import { getEventData, getEventSlugs } from '@/lib/events';

export async function getStaticPaths() {
  const paths = getEventSlugs().map((slug) => ({
    params: {
      slug: slug.replace(/\.md$/, ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params } : any ) {
  const eventData = await getEventData(params.slug);
  return {
    props: {
      eventData,
    },
  };
}

export default function Event({ eventData }: any) {
  return (
    <div>
      <h1>{eventData.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: eventData.contentHtml }} />
    </div>
  );
}

