import RootLayout from "@/pages/layout";
import ProjectCard from "@/components/cards/ProjectCard";
import { SponsorshipSection } from "@/components/SponsorshipSection";
import { getAllProjects } from "@/lib/projects";
import { Suspense } from "react";
import Loading from "@/components/animations/Loading";


export async function getStaticProps() {
  const projects = await getAllProjects();
  console.log(projects)
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
          <h2 className="font-lora font-bold text-headline-m sm:text-headline-l text-secondary pb-3">
            Projects
          </h2>
          <p className="font-raleway text-title-gray text-title-m sm:text-headline-s">
            Forem ipsum dolora asdklasjdkasdj sit amet, consectetur adipiscing
            elit. Etiam eu turpis molestie, dictum est a
          </p>
          {projects.length == 0 ? (
            <div className="w-full flex flex-col text-center justify-center ">
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
                {projects.map(
                  (project: any, index: any) =>
                    (
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
        </div>

        <SponsorshipSection />
      </RootLayout>
    </>
  );
}
