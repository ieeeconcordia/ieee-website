import { getEvents } from "@/lib/mongo/events";
import RootLayout from "@/pages/layout";
import EventCard from "@/components/cards/EventCard";
import { SponsorshipSection } from "@/components/SponsorshipSection";
import EventForm from "@/components/forms/EventForm";

// Fetch all events and pass them as a prop to the Events component
export async function getStaticProps() {
  const { events } = await getEvents();
  return {
    props: { events },
  };
}

export default function Events({ events }: any) {
  return (
    <RootLayout>
      <div className="flex flex-col justify-center text-center gap-7 p-container pb-16">
        <h2 className="text-display-m font-lora font-bold text-secondary">
          Events
        </h2>
        <p className="text-title-m font-raleway text-title-gray">
          Forem ipsum dolora asdklasjdkasdj sit amet, consectetur adipiscing
          elit. Etiam eu turpis molestie, dictum est a
        </p>

        <div className="flex flex-row justify-center gap-7 flex-wrap">
          {events.map((event: any) => {
            return (
              <div
                key={event._id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-10"
              >
                <EventCard
                  key={event._id}
                  _id={event._id}
                  name={event.name}
                  date={event.date}
                  location={event.location}
                  time={event.time}
                  price={event.price}
                  image={event.image}
                  eventType={event.eventType}
                />
              </div>
            );
          })}
        </div>
      </div>
      <SponsorshipSection />
      <EventForm></EventForm>
    </RootLayout>
  );
}
