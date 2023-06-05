import Link from "next/link";
import { createEvent, getEvent, getEvents } from "@/lib/mongo/events";

export async function getStaticPaths() {
  let res = await fetch("http://localhost:3000/api/events", {
    method: "GET",
  });
  const data = await res.json();

  const paths = data.events.map((events) => {
    return {
      params: { id: events._id.toString() },
    };
  });

  return { paths: paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const  result= await getEvent(id);
  return {
    props: { event : result },
  };
}
export default function PostDetail({event}) {
  return (
    <div className="flex-items flex-col">
      {event.eventName}---{event.date}
      <Link href="/events">Go Back</Link>
    </div>
  );
}
