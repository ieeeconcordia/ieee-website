import { useEffect, useState, Suspense } from "react";
import RootLayout from "@/pages/layout";
import EventCard from "@/components/cards/EventCard";
import ProjectCard from "@/components/cards/ProjectCard";
import { SponsorshipSection } from "@/components/SponsorshipSection";
import { getAllEvents } from "@/lib/events";
import { getAllProjects } from "@/lib/projects";
import { SimpleBtn } from "@/components/buttons/SimpleBtn";
import Loading from "@/components/animations/Loading";
import EventsPlaceHolder from "@/components/placeholder/EventsPlaceholder";
import ProjectsPlaceHolder from "@/components/placeholder/ProjectsPlaceholder";
import LandingVideo from "@/components/LandingVideo";
import Navbar from "@/components/navbar/HomeNavbar";
import Footer from "@/components/Footer";
import { eventlist, splitAndSortEvents } from "@/content/eventslist";
// Fetch all events and pass them as a prop to the Events component
export async function getStaticProps() {
  const events = await getAllEvents();
  const projects = await getAllProjects();

  return {
    props: {
      events,
      projects,
    },
  };
}

const projects: any[] = [];

export default function Home() {
  const {
    sortedUpcomingEvents: upcomingEvents,
    sortedPassedEvents: passedEvents,
  } = splitAndSortEvents(eventlist);
  const events = upcomingEvents.concat(passedEvents);
  console.log(events);

  return (
    <div className="">
      <Navbar />
      <LandingVideo />
      <section className="max-w-4xl md:max-w-full flex flex-col gap-6 px-8 pb-10 sm:px-20 xl:px-section md:pb-20 pt-16">
        <h4 className="font-raleway font-semibold text-headline-l  text-secondary">
          About IEEE Concordia
        </h4>
        <p className="font-raleway text-title-s md:text-lg ">
          IEEE Concordia Student Branch is a student chapter of IEEE (Institute
          of Electrical and Electronics Engineers), the world&apos;s largest
          technical professional organization. Our mission, just like IEEE, is
          to foster technical and professional excellence. Through networking
          events, tutorials, and competitions and our lab we foster a supportive
          community where you can discover your passion and excel in your
          personal and professional growth and have fun in the process!
        </p>
      </section>

      <section className="flex flex-col text-center items-center justify-items-center gap-8 px-8 pb-10 sm:px-20 xl:px-section md:pb-14">
        <div className="">
          <h2 className="font-lora font-bold text-headline-l text-secondary pb-8">
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
              {events.map(
                (event: any, index: any) =>
                  index < 3 && (
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
                  )
              )}
            </div>
          </Suspense>
        )}
        {events.length == 0 ? (
          <></>
        ) : (
          <SimpleBtn text="See more..." href="/events" />
        )}
      </section>

      <section className="flex flex-col text-center items-center justify-items-center gap-6 px-8 pb-10 sm:px-20 xl:px-section md:pb-14">
        <div className="">
          <h2 className="font-lora  font-bold text-headline-l text-secondary pb-8">
            Projects
          </h2>
          <p className="font-raleway sm:text-center text-gray-700 text-title-s md:text-lg">
            Starting and finishing projects as a student can be daunting. Join
            our planned projects in groups of 3 or 4 for 2-3 weeks, with the
            guidance of our Director of Projects.
          </p>
        </div>

        {projects.length == 0 ? (
          <ProjectsPlaceHolder />
        ) : (
          <Suspense fallback={<Loading />}>
            <div
              className="w-fit grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-6 sm:gap-10 
            "
            >
              {projects.map(
                (project: any, index: any) =>
                  index < 3 && (
                    <ProjectCard
                      key={project.slug}
                      _id={project.slug}
                      name={project.name}
                      date={project.date}
                      location={project.location}
                      time={project.time}
                      price={project.price}
                      eventType={project.eventType}
                      description={project.description}
                      image={project.image}
                      organizer={""}
                      sponsors={""}
                    />
                  )
              )}
            </div>
          </Suspense>
        )}

        {projects.length == 0 ? (
          <></>
        ) : (
          <SimpleBtn text="See more..." href="/projects" />
        )}
      </section>
      <SponsorshipSection />
      <Footer />
    </div>
  );
}
