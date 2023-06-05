import { useEffect, useState } from "react";
import RootLayout from "@/pages/layout";
import EventCard from "@/components/cards/EventCard";
import ProjectCard from "@/components/cards/ProjectCard";
import { SponsorshipSection } from "@/components/SponsorshipSection";
import { getEvents } from "@/lib/mongo/events";

// Fetch all events and pass them as a prop to the Events component
export async function getStaticProps() {
  const { events } = await getEvents();
  return {
    props: { events },
  };
}
export default function Home({ events }: any) {
  return (
    <div className="">
      <RootLayout>
        <section className="flex flex-col gap-6 px-section pb-20">
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

        <section className="flex flex-col gap-16 text-center justify-center px-section pb-20">
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
                key={event._id}
                _id={event._id}
                eventName={event.eventName}
                date={event.date}
                location={event.location}
                time={event.time}
                fee={event.fee}
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

        <SponsorshipSection />
      </RootLayout>
    </div>
  );
}
