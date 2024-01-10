import EventCardList from "@/components/EventCardList";
import React from "react";

export default function Eventlist() {
  return (
    <div>
      <EventCardList maxNumber={3} />
    </div>
  );
}
