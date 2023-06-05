import Link from "next/link";
import { getEvent, getEvents } from "@/lib/mongo/events";
import RootLayout from "@/pages/layout";

// Generate static paths for all events
export async function getStaticPaths() {
  const { events } = await getEvents();
  
  // Map events to an array of paths with their respective IDs
  const paths = events.map((event:any) => ({
    params: { id: event._id },
  }));

  return { paths, fallback: false };
}

// Fetch the event data and pass it as a prop to the EventDetail component
export async function getStaticProps({ params: { id } }) {
  const event = await getEvent(id);
  return {
    props: { event },
  };
}

export default function EventDetail({ event: { eventName, date, location, fee, time, eventType   } }: any) {
  return (
  <RootLayout>
    <div className="flex-items flex-row">
      {eventName}---{date} --- {location} -- {fee} --- 
      <Link href="/events">Go Back</Link>
    </div>
  </RootLayout>
  );
}
