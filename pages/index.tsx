import { useEffect, useState, Suspense } from "react";
import RootLayout from "@/pages/layout";
import EventCard from "@/components/cards/EventCard";
import ProjectCard from "@/components/cards/ProjectCard";
import { SponsorshipSection } from "@/components/SponsorshipSection";
import { getAllEvents } from "@/lib/events";
import { SimpleBtn } from "@/components/buttons/SimpleBtn";
import Loading from "@/components/animations/Loading";

// Fetch all events and pass them as a prop to the Events component
export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events,
    },
  };
}

export default function Home({ events }: any) {
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    // Simulate async loading
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Set a timeout to simulate loading time
  }, []);

  return (
    <div className="">
      <RootLayout>
        <section className="max-w-4xl md:max-w-full flex flex-col gap-6 px-8 pb-16 sm:px-20 xl:px-section md:pb-20">
          <h4 className="font-raleway font-semibold text-headline-l text-secondary">
            About IEEE Concordia
          </h4>
          <p className="font-raleway font-title-gray text-title-m ">
            Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos.
          </p>
        </section>

        <section className="flex flex-col text-center items-center justify-items-center gap-6 px-8 pb-16 sm:px-20 xl:px-section md:pb-14">
          <div className="">
            <h2 className="font-lora font-bold text-headline-m sm:text-headline-l text-secondary pb-3">
              Events
            </h2>
            <p className="font-raleway text-title-gray text-title-m sm:text-headline-s">
              Forem ipsum dolora asdklasjdkasdj sit amet, consectetur adipiscing
              elit. Etiam eu turpis molestie, dictum est a
            </p>
          </div>
          <Suspense fallback={<Loading />}>
            <div className="w-fit grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-6 sm:gap-10 pb-6">
              {events.map(
                (event: any, index: any) =>
                  index < 3 && (
                    <EventCard
                      key={event.slug}
                      _id={event.slug}
                      name={event.name}
                      date={event.date}
                      location={event.location}
                      time={event.time}
                      price={event.price}
                      eventType={event.eventType}
                      description={event.description}
                      image={event.image}
                      organizer={""}
                      sponsors={""}
                    />
                  )
              )}
            </div>
          </Suspense>
          <SimpleBtn text="See more..." href="/events/" />
        </section>

        <section className="flex flex-col text-center items-center justify-items-center gap-6 px-8 pb-16 sm:px-20 xl:px-section md:pb-14">
          <div className="">
            <h2 className="font-lora font-bold text-headline-m sm:text-headline-l text-secondary pb-3">
              Projects
            </h2>
            <p className="font-raleway text-title-gray text-title-m sm:text-headline-s">
              Forem ipsum dolora asdklasjdkasdj sit amet, consectetur adipiscing
              elit. Etiam eu turpis molestie, dictum est a
            </p>
          </div>

          <div className="w-fit grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-6 sm:gap-10 pb-6">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>

          <SimpleBtn text="See more..." href="/projects" />
        </section>

        {/* 

        <section className="flex flex-col text-center justify-center gap-6 px-8 pb-16 sm:px-20 xl:px-section md:pb-20">
          <div className="">
            <h2 className="font-lora font-bold text-headline-m sm:text-headline-l text-secondary pb-3">
              Projects
            </h2>
            <p className="font-raleway text-title-gray text-title-m sm:text-headline-s">
              Forem ipsum dolora asdklasjdkasdj sit amet, consectetur adipiscing
              elit. Etiam eu turpis molestie, dictum est a
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </section>

        {/* <section className="flex flex-col gap-16 text-center justify-center px-section pb-20">
          <div className="">
            <h2 className="font-lora font-bold text-headline-l text-secondary pb-3">
              Events
            </h2>
            <p className="font-raleway text-title-m text-title-gray">
              Forem ipsum dolora asdklasjdkasdj sit amet, consectetur adipiscing
              elit. Etiam eu turpis molestie, dictum est a
            </p>
          </div>

          <div className="flex flex-row justify-center gap-5 sm:gap-6 md:gap-10">
            {events.slice(0, 3).map((event: any) => (
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
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-16 text-center justify-center px-section pb-20">
          <div className="">
            <h2 className="font-lora font-bold text-headline-l text-secondary pb-3">
              Projects
            </h2>
            <p className="font-raleway text-title-m text-title-gray">
              Forem ipsum dolora asdklasjdkasdj sit amet, consectetur adipiscing
              elit. Etiam eu turpis molestie, dictum est a
            </p>
          </div>
          <div className="flex flex-row justify-center gap-10">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </section>

         */}
        <SponsorshipSection />
      </RootLayout>
    </div>
  );
}
