import RootLayout from "@/pages/layout";
import ProjectCard from "@/components/cards/ProjectCard";
import { Suspense } from "react";
import Loading from "@/components/animations/Loading";
import ProjectsPlaceHolder from "@/components/placeholder/ProjectsPlaceholder";
import { getProjects } from "@/lib/tina";

export async function getStaticProps({ params }: any) {
  const projects = await getProjects();
  return {
    props: {
      projects,
    },
  };
}

export function formatDate(dateTime: string | number | Date) {
  const date = new Date(dateTime);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Projects({ projects }: any) {
  return (
    <RootLayout>
      {/* Hero Banner */}
      <div className="w-full bg-[#128DCD] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Starting projects as a student can be daunting, and finishing them
            can be just as challenging. That's why we offer planned projects in
            groups of 3-4 for 2-3 weeks, with the support of our dedicated
            Director of Projects.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="bg-[#128DCD] text-white px-8 py-4 rounded-t-xl">
            <h2 className="text-2xl font-bold">All Projects</h2>
            <p className="text-white/80">Join guided group projects and build something amazing</p>
          </div>
          <div className="bg-white border border-t-0 border-[#B3DAE6] rounded-b-xl p-8">
            {projects.length === 0 ? (
              <ProjectsPlaceHolder />
            ) : (
              <Suspense fallback={<Loading />}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project: any) => (
                    <ProjectCard
                      key={project.id}
                      _id={project.id}
                      title={project.title}
                      startdate={formatDate(project.startdate)}
                      enddate={formatDate(project.enddate)}
                      level={project.level}
                      leader={project.leader}
                      image={project.image}
                      link={project.link}
                    />
                  ))}
                </div>
              </Suspense>
            )}
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
