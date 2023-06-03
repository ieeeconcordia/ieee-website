import EventCard from "../cards/EventCard";

export default function Events() {
  return (
    <div className="flex flex-col justify-center text-center gap-7">
      <h2>Events</h2>
      <p>
        Forem ipsum dolora asdklasjdkasdj sit amet, consectetur adipiscing elit.
        Etiam eu turpis molestie, dictum est a
      </p>
      <div className="flex flex-row justify-center gap-6">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
}
