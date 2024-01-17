import RootLayout from "@/pages/layout";
import EventCard from "@/components/cards/EventCard";
import { SponsorshipSection } from "@/components/SponsorshipSection";
import EventsPlaceHolder from "@/components/placeholder/EventsPlaceholder";
import Loading from "@/components/animations/Loading";
import { Suspense } from "react";
import { getEvents } from "@/lib/tina";
import { eventlist, splitAndSortEvents } from "@/content/eventslist";
import { get } from "http";

export async function getStaticProps({ params }: any) {
  const events = await getEvents();
  return {
    props: {
      events,
    },
  };
}
export default function Events({ events }: any) {
  // const {
  //   sortedUpcomingEvents: upcomingEvents,
  //   sortedPassedEvents: passedEvents,
  // } = splitAndSortEvents(eventlist);
  // const events = upcomingEvents.concat(passedEvents);
  console.log(events);

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
                  name={event.title}
                  date={event.date}
                  location={event.location}
                  time={event.time}
                  price={event.price}
                  eventType={event.eventType}
                  description={event.description}
                  image={event.image}
                  organizer={""}
                  sponsors={""}
                  link={event.link}
                  tags={""}
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
