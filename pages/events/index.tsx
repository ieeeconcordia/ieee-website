import Link from "next/link";
import { getAllEvents } from "@/lib/events.js";
import RootLayout from "@/pages/layout";
import EventCard from "@/components/cards/EventCard";
import { SponsorshipSection } from "@/components/SponsorshipSection";

export async function getStaticProps() {
  const events = await getAllEvents();
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
          <h2 className="font-lora font-bold text-headline-m sm:text-display-m text-secondary pb-6">
            Events
          </h2>
          <p className="font-raleway text-start sm:text-center text-title-gray text-title-m sm:text-title-l">
            Expand your knowledge with our academic events. Network and connect
            with like-minded individuals at our social events, and showcase your
            skills in our exciting competitions.
          </p>
        </div>

        <div className="w-fit grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-6 sm:gap-10 pt-6">
          {events.map((event: any, index: any) => (
            <EventCard
              key={event.slug}
              _id={event.slug}
              name={event.name}
              date={event.date}
              location={event.location}
              time={event.time}
              price={event.price}
              eventType={event.eventType}
              description={event.description}
              image={event.image}
              organizer={""}
              sponsors={""}
            />
          ))}
        </div>
      </div>

      <SponsorshipSection />
    </RootLayout>
  );
}
