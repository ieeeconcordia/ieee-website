import RootLayout from "@/pages/layout";
import EventCard from "@/components/cards/EventCard";
import EventsPlaceHolder from "@/components/placeholder/EventsPlaceholder";
import Loading from "@/components/animations/Loading";
import { Suspense } from "react";
import { getEvents } from "@/lib/tina";
import { splitAndSortEvents } from "@/content/eventslist";

export async function getStaticProps({ params }: any) {
  const events = await getEvents();
  return {
    props: {
      events,
    },
  };
}

export default function Events({ events }: any) {
  const {
    sortedUpcomingEvents: upcomingEvents,
    sortedPassedEvents: passedEvents,
  } = splitAndSortEvents(events);
  events = upcomingEvents.concat(passedEvents);

  return (
    <RootLayout>
      {/* Hero Banner */}
      <div className="w-full bg-[#128DCD] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold mb-4">Events</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Expand your knowledge with our academic events, network and connect
            with like-minded individuals at our social events, and showcase your
            skills in our exciting competitions.
          </p>
        </div>
      </div>

      {/* Events Grid */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="bg-[#128DCD] text-white px-8 py-4 rounded-t-xl">
            <h2 className="text-2xl font-bold">All Events</h2>
            <p className="text-white/80">Workshops, networking, and competitions to level up your skills</p>
          </div>
          <div className="bg-white border border-t-0 border-[#B3DAE6] rounded-b-xl p-8">
            {events.length === 0 ? (
              <EventsPlaceHolder />
            ) : (
              <Suspense fallback={<Loading />}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {events.map((event: any) => (
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
                      organizer=""
                      sponsors=""
                      link={event.link}
                      tags=""
                    />
                  ))}
                </div>
              </Suspense>
            )}
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
