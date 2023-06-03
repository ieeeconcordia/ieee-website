import RootLayout from "./layout";
import EventCard from "../components/cards/EventCard.js";
import EventForm from "../components/forms/EventForm.js";
export default function Home() {
  return (
    <div>
      <RootLayout>
        <h1>Welcome to ieee concordia</h1>
        <section>
          <h4>About Us</h4>
          <p>
            Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos.
          </p>
        </section>

        <section>
          <h2>Events</h2>
          <p>
            Forem ipsum dolora asdklasjdkasdj sit amet, consectetur adipiscing
            elit. Etiam eu turpis molestie, dictum est a
          </p>
          <div className="flex flex-row justify-center gap-6">
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </section>

        <EventForm />
      </RootLayout>
    </div>
  );
}
