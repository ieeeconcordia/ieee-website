import { getAllEvents } from "@/lib/events.js";
import RootLayout from "@/pages/layout";
import EventCard from "@/components/cards/EventCard";
import { SponsorshipSection } from "@/components/SponsorshipSection";
import EventsPlaceHolder from "@/components/placeholder/EventsPlaceholder";
import Loading from "@/components/animations/Loading";
import { Suspense } from "react";
import { firestore } from "@/lib/firebase";
import events from "events";
import { getDocs, collection, DocumentData } from "firebase/firestore";

export async function getStaticProps() {
  const eventsQuerySnapshot = await getDocs(collection(firestore, "Event"));
  const events: { id: string; data: DocumentData }[] = [];
  eventsQuerySnapshot.forEach((doc) => {
    events.push({
      id: doc.id,
      data: doc.data(),
    });
    console.log("Event: " + doc.data());
  });
  return {
    props: {
      events,
    },
  };
}
export default function Events({ events }: any) {
  return (
    <RootLayout>
      <div className="flex flex-col text-center items-center justify-items-center gap-6 px-8 pb-16 sm:px-20 xl:px-section md:pb-14">
        <div className="">
          <h2 className="font-lora font-bold text-headline-l text-secondary pb-6">
            Events
          </h2>
          <p className="font-raleway text-center text-gray-700 text-title-s md:text-lg">
            Expand your knowledge with our academic events. Network and connect
            with like-minded individuals at our social events, and showcase your
            skills in our exciting competitions.
          </p>
        </div>

        {events.length == 0 ? (
          <EventsPlaceHolder />
        ) : (
          <Suspense fallback={<Loading />}>
            <div
              className="w-fit grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-6 sm:gap-10 
            "
            >
              {events.map((event: any, index: any) => (
                <EventCard
                  key={event.id}
                  _id={event.id}
                  name={event.data.title}
                  date={event.data.date}
                  location={event.data.location}
                  time={event.data.time}
                  price={event.data.price}
                  eventType={event.data.eventType}
                  description={event.data.description}
                  image={event.data.image}
                  organizer={""}
                  sponsors={""}
                />
              ))}
            </div>
          </Suspense>
        )}
      </div>

      <SponsorshipSection />
    </RootLayout>
  );
}
