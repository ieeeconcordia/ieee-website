import EventCard from "../cards/EventCard";

export default function Events() {
  return (
    <div className="flex flex-col justify-center text-center">
      <h4>Events</h4>
      <p>
        Forem ipsum dolora asdklasjdkasdj sit amet, consectetur adipiscing elit.
        Etiam eu turpis molestie, dictum est a
      </p>
      <div className="flex flex-row justify-center gap-2">
        <EventCard />
      </div>
    </div>
  );
}
