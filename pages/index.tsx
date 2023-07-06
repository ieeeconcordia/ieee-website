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

// Fetch all events and pass them as a prop to the Events component
export async function getStaticProps() {
  const events = await getAllEvents();
  const projects = await getAllProjects();
  console.log(projects);
  return {
    props: {
      events,
      projects,
    },
  };
}

export default function Home({ events, projects }: any) {
  // Simulate lading animation
  // const [loading, setLoading] = useState(true); // Add a loading state

  // useEffect(() => {
  //   // Simulate async loading
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000); // Set a timeout to simulate loading time
  // }, []);

  return (
    <div className="">
      <RootLayout>
        <section className="max-w-4xl md:max-w-full flex flex-col gap-6 px-8 pb-10 sm:px-20 xl:px-section md:pb-20">
          <h4 className="font-raleway font-semibold text-headline-l text-secondary">
            About IEEE Concordia
          </h4>
          <p className="font-raleway text-title-m sm:text-title-l ">
            <b>IEEE Concordia Student Branch</b> is a student chapter of IEEE
            (Institute of Electrical and Electronics Engineers), the
            world&apos;s largest technical professional organization. Our
            mission, just like IEEE, is to foster technical and professional
            excellence. Through networking events, tutorials, and competitions
            and our lab we foster a supportive community where you can discover
            your passion and excel in your personal and professional growth and
            have fun in the process!
          </p>
        </section>

        <section className="flex flex-col text-center items-center justify-items-center gap-8 px-8 pb-10 sm:px-20 xl:px-section md:pb-14">
          <div className="">
            <h2 className="font-lora font-bold text-headline-l sm:text-display-m text-secondary pb-6">
              Events
            </h2>
            <p className="font-raleway text-start sm:text-center text-gray-700 text-title-m sm:text-headline-s">
              <b>Expand your knowledge</b> with our academic events. Network and
              connect with like-minded individuals at our social events, and
              showcase your skills in our exciting competitions.
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
          )}
          {events.length == 0 ? (
            <></>
          ) : (
            <SimpleBtn text="See more..." href="/projects" />
          )}
        </section>

        <section className="flex flex-col text-center items-center justify-items-center gap-6 px-8 pb-10 sm:px-20 xl:px-section md:pb-14">
          <div className="">
            <h2 className="font-lora  font-bold text-headline-l sm:text-display-m text-secondary pb-6">
              Projects
            </h2>
            <p className="font-raleway text-start sm:text-center text-gray-700 text-title-m sm:text-headline-s">
              Starting and finishing projects as a student can be daunting. Join
              our planned <b>projects in groups of 3 or 4 for 2-3 weeks</b>,
              with the guidance of our Director of Projects. Get support from
              start to finish and collaborate with like-minded peers. Take the
              first step and join our community today.
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
      </RootLayout>
    </div>
  );
}
