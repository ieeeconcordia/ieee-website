import { getEvents } from "@/lib/mongo/events";
import RootLayout from "@/pages/layout";
import EventCard from "@/components/cards/EventCard";
import { SponsorshipSection } from "@/components/SponsorshipSection";

// Fetch all events and pass them as a prop to the Events component
export async function getStaticProps() {
  const { events } = await getEvents();
  return {
    props: { events },
  };
}

// Render the Events component with the fetched events
export default function Events({ events }:any) {
  return (
    <RootLayout>
      <div className="flex flex-col justify-center text-center gap-7 p-container pb-16">
        <h2 className="text-display-m font-lora font-bold text-secondary">Events</h2>
        <p className="text-title-m font-raleway text-title-gray">
          Forem ipsum dolora asdklasjdkasdj sit amet, consectetur adipiscing
          elit. Etiam eu turpis molestie, dictum est a
        </p>
        <div className="flex flex-row justify-center gap-10">
          {events.map(({ _id, eventName, date, location, time, fee, eventType }) => (
            <EventCard
              key={_id}
              _id={_id}
              eventName={eventName}
              date={date}
              location={location}
              time={time}
              fee={fee}
              eventType={eventType}
            />
          ))}
        </div>
      </div>
      <SponsorshipSection />
    </RootLayout>
  );
}
