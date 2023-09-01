import RootLayout from "@/pages/layout";
import EventCard from "@/components/cards/EventCard";
import { SponsorshipSection } from "@/components/SponsorshipSection";
import EventsPlaceHolder from "@/components/placeholder/EventsPlaceholder";
import Loading from "@/components/animations/Loading";
import { Suspense } from "react";
import { firestore } from "@/lib/firebase";
import { getDocs, collection, DocumentData } from "firebase/firestore";

const events = [
  {
    Title: "Robowars",
    Date: "Mar 14th, 2024",
    Location: "TBA",
    Type: "Competition",
    Time: "9:00-17:00",
    Description:
      "Robowars is a competitive robotic event that invites passionate and enthusiastic participants from all over Montreal and beyond to showcase their engineering skills.",
    Price: "TBA",
    Organizer: "Ardalan Jamshidi",
    Sponsors: "TBA",
    Image: "Robowars.png",
    link: "robowars",
  },
  {
    Title: "Warhacks",
    Date: "Feb 18th, 2024",
    Location: "TBA",
    Type: "Competition",
    Time: "TBA",
    Description:
      "Warhacks is a one-day event designed to introduce you to the world of hardware hackathon. Come spend the day with us, and you will get to build your robot from scratch.",
    price: "TBA",
    Organizer: "Minh Huynh",
    Sponsors: "TBA",
    Image: "Warhacks.png",
    link: "warhacks",
  },
  {
    Title: "IEEEXtreme",
    Date: "Oct 28th, 2023",
    Location: "TBA",
    Type: "Competition",
    Time: "TBA",
    Description:
      "IEEEXtreme is a global 24-hour marathon during which teams of three or four programmers are given a set of programming questions to solve.",
    Price: "TBA",
    Organizer: "Ardalan Jamshidi",
    Sponsors: "TBA",
    Image: "IEEEXtreme.png",
    link: "ieeextreme",
  },
  {
    Title: "IEEE Day",
    Date: "Oct 3rd, 2023",
    Location: "TBA",
    Type: "Social",
    Time: "TBA",
    Description:
      "IEEE Day is an annual celebration of IEEE around the world that recognizes and acknowledges the dedication and vision of IEEE.",
    Price: "TBA",
    Organizer: "Shami Ivan Senga",
    Sponsors: "TBA",
    Image: "IEEE-Day.png",
    link: "ieee-day",
  },
];

export async function getStaticProps() {
  const eventsQuerySnapshot = await getDocs(collection(firestore, "Event"));
  const events: { id: string; data: DocumentData }[] = [];
  eventsQuerySnapshot.forEach((doc) => {
    events.push({
      id: doc.id,
      data: doc.data(),
    });
    console.log("Event: " + doc.data());
  });
  return {
    props: {
      events,
    },
  };
}
export default function Events() {
  return (
    <RootLayout>
      <div className="flex flex-col text-center items-center justify-items-center gap-6 px-8 pb-16 sm:px-20 xl:px-section md:pb-14">
        <div className="">
          <h2 className="font-lora font-bold text-headline-l text-secondary pb-6">
            Events
          </h2>
          <p className="font-raleway text-center text-gray-700 text-title-s md:text-lg">
            Expand your knowledge with our academic events. Network and connect
            with like-minded individuals at our social events, and showcase your
            skills in our exciting competitions.
          </p>
        </div>

        {events.length == 0 ? (
          <EventsPlaceHolder />
        ) : (
          <Suspense fallback={<Loading />}>
            <div
              className="w-fit grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-6 sm:gap-10 
            "
            >
              {events.map((event: any, index: any) => (
                <EventCard
                  key={event.id}
                  _id={event.id}
                  name={event.Title}
                  date={event.Date}
                  location={event.Location}
                  time={event.Time}
                  price={event.Price}
                  eventType={event.Type}
                  description={event.Description}
                  image={event.Image}
                  organizer={""}
                  sponsors={""}
                  link={event.link}
                  tags={""}
                />
              ))}
            </div>
          </Suspense>
        )}
      </div>

      <SponsorshipSection />
    </RootLayout>
  );
}
