import RootLayout from "@/pages/layout";
import ProjectCard from "@/components/cards/ProjectCard";
import { SponsorshipSection } from "@/components/SponsorshipSection";
import { getAllProjects } from "@/lib/projects";
import { Suspense } from "react";
import Loading from "@/components/animations/Loading";

export async function getStaticProps() {
  const projects = await getAllProjects();
  console.log(projects);
  return {
    props: {
      projects,
    },
  };
}

export default function Projects({ projects }: any) {
  return (
    <>
      <RootLayout>
        <div className="flex flex-col text-center items-center justify-items-center gap-6 px-8 pb-16 sm:px-20 xl:px-section md:pb-14">
          <h2 className="font-lora font-bold text-headline-m sm:text-display-m text-secondary pb-6">
            Projects
          </h2>
          <p className="font-raleway text-start text-title-gray text-title-m sm:text-title-l">
            Starting projects as a student can be daunting, and finishing them
            can be just as challenging. That's why we offer planned projects in
            groups of 3 or 4 for 2-3 weeks, with the support of our dedicated
            Director of Projects. Our Director of Projects will be there to
            answer any questions you may have and provide guidance throughout
            the entire process. 
            <br/>
            <br/>
            By joining these planned projects, you'll not
            only get started on your project but also receive support to help
            you successfully complete it. Collaborate with like-minded peers,
            overcome obstacles together, and achieve your project goals with
            confidence.
          </p>
          {projects.length == 0 ? (
            <div className="w-full flex flex-col text-center justify-center shadow-md p-4 border border-gray-200 rounded-lg">
              <div className="font-raleway text-display-s font-semibold">
                No events?
              </div>
              <div className="text-title-gray text-title-m">
                Check in later for any updates!
              </div>
            </div>
          ) : (
            <Suspense fallback={<Loading />}>
              <div
                className="w-fit grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-6 sm:gap-10 
            "
              >
                {projects.map((project: any, index: any) => (
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
                ))}
              </div>
            </Suspense>
          )}
        </div>

        <SponsorshipSection />
      </RootLayout>
    </>
  );
}
