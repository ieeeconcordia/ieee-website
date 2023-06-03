import RootLayout from "./layout";
import EventCard from "../components/cards/EventCard";

export default function Events() {
  return (
    <>
      <RootLayout>
        <div className="flex flex-col justify-center text-center gap-7 p-container">
          <h2 className="text-headline-l font-lora font-bold text-secondary">Events</h2>
          <p className="text-title-m font-raleway text-title-gray">
            Forem ipsum dolora asdklasjdkasdj sit amet, consectetur adipiscing
            elit. Etiam eu turpis molestie, dictum est a
          </p>
          <div className="flex flex-row justify-center gap-6">
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
      </RootLayout>
    </>
  );
}
