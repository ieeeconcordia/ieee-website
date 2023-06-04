import RootLayout from "./layout";
import EventCard from "../components/cards/EventCard";
import { useEffect, useState } from "react";
import { SponsorshipSection } from "@/components/SponsorshipSection";

async function getEvents() {
  let res = await fetch("http://localhost:3000/api/events", {
    method: "GET",
  });
  let data = await res.json();
  return data.events;
}

export default function Events() {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getEvents();
        setEvents(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <RootLayout>
        <div className="flex flex-col justify-center text-center gap-7 p-container pb-16">
          <h2 className="text-display-m font-lora font-bold text-secondary">Events</h2>
          <p className="text-title-m font-raleway text-title-gray">
            Forem ipsum dolora asdklasjdkasdj sit amet, consectetur adipiscing
            elit. Etiam eu turpis molestie, dictum est a
          </p>
          <div className="flex flex-row justify-center gap-10">
            {events.map((event: any) => (
              <EventCard
                key={event._id}
                id={event._id}
                eventName={event.eventName}
                date={event.date}
                location={event.location}
                time={event.time}
                fee={event.fee}
                eventType={event.eventType}
              />
            ))}
          </div>
        </div>
        <SponsorshipSection />
      </RootLayout>
    </>
  );
}
