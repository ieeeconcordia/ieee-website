"use client";
import { useState, useEffect, SetStateAction } from "react";
import EventsPlaceHolder from "./placeholder/EventsPlaceholder";
import EventCard from "./cards/EventCard";
import { getEvents } from "@/lib/tina";
import { SimpleBtn } from "./buttons/SimpleBtn";

export default function EventCardList({ maxEvents }: { maxEvents: number }) {
  const [events, setEvents] = useState<Array<{ [key: string]: any }>>([]);
  const [isLoading, setLoading] = useState(false);

  if (!maxEvents) maxEvents = 3;

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      const events = await getEvents();
      if (!events) return;
      setEvents(events);
      setLoading(false);
    };
    fetchContent();
  }, []); // Removed variables from dependency array as it's not defined

  if (isLoading) return <p>Loading...</p>;

  if (!events) return <p>No events found</p>;

  return (
    <div className="flex flex-col text-center items-center justify-items-center gap-6">
      {events.length == 0 ? (
        <EventsPlaceHolder />
      ) : (
        <div
          className="w-fit grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-6 sm:gap-10 
      "
        >
          {events.map(
            (event: any, index: any) =>
              index <= maxEvents && <EventCard key={event._id} event={event} />
          )}
        </div>
      )}
      {events.length == 0 ? (
        <></>
      ) : (
        <SimpleBtn text="See more..." href="/events" />
      )}
    </div>
  );
}
