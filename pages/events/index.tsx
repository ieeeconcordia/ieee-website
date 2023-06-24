import Link from "next/link";
import { getAllEvents } from "@/lib/events.js";
import RootLayout from "@/pages/layout";
import EventCard from "@/components/cards/EventCard";

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
          <h2 className="font-lora font-bold text-headline-m sm:text-headline-l text-secondary pb-3">
            Events
          </h2>
          <p className="font-raleway text-title-gray text-title-m sm:text-headline-s">
            Forem ipsum dolora asdklasjdkasdj sit amet, consectetur adipiscing
            elit. Etiam eu turpis molestie, dictum est a
          </p>
        </div>

        <div className="flex flex-row justify-center gap-7 flex-wrap">
          {events.map((event: any) => {
            return (
              <div
                key={event._id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-10"
              >
                <EventCard
                  key={event.slug}
                  _id={event.slug}
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
    </RootLayout>
  );
}
