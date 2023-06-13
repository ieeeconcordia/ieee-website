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
      <div className="flex flex-col text-center items-center justify-items-center gap-6 px-8 pb-16 sm:px-20 xl:px-section md:pb-14">
        <div className="">
          <h2 className="font-lora font-bold text-headline-m sm:text-headline-l text-secondary pb-3">
            Events
          </h2>
          <p className="font-raleway text-title-gray text-title-m sm:text-headline-s">
            Forem ipsum dolora asdklasjdkasdj sit amet, consectetur adipiscing
            elit. Etiam eu turpis molestie, dictum est a
          </p>
        </div>

        <div className="w-fit grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-6 sm:gap-10 pt-6">
          {events.map((event: any, index: any) => (
            <EventCard
              key={event._id}
              _id={event._id}
              name={event.eventName}
              date={event.date}
              location={event.location}
              time={event.time}
              price={event.fee}
              eventType={event.eventType}
              description={""}
              image={""}
              organizer={""}
              sponsors={""}
            />
          ))}
        </div>
      </div>
      <SponsorshipSection />
      <EventForm></EventForm>
    </RootLayout>
  );
}
