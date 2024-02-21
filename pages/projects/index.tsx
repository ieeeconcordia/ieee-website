import RootLayout from "@/pages/layout";
import ProjectCard from "@/components/cards/ProjectCard";
import { SponsorshipSection } from "@/components/SponsorshipSection";
import { getAllProjects } from "@/lib/projects";
import { Suspense } from "react";
import Loading from "@/components/animations/Loading";
import ProjectsPlaceHolder from "@/components/placeholder/ProjectsPlaceholder";
// import { firestore } from "@/lib/firebase";
// import { getDocs, collection, DocumentData } from "firebase/firestore";

// export async function getStaticProps() {
//   const projectsQuerySnapshot = await getDocs(collection(firestore, "Project"));
//   const projects: { id: string; data: DocumentData }[] = [];
//   projectsQuerySnapshot.forEach((doc) => {
//     projects.push({
//       id: doc.id,
//       data: doc.data(),
//     });
//     console.log("Event: " + doc.data());
//   });
//   return {
//     props: {
//       projects,
//     },
//   };
// }

export default function Projects({ projects }: any) {
  return (
    <>
      <RootLayout>
        <div className="flex flex-col text-center items-center justify-items-center gap-6 px-8 pb-16 sm:px-20 xl:px-section md:pb-14">
          <h2 className="font-lora font-bold text-headline-l text-secondary pb-6">
            Projects
          </h2>
          <p className="font-raleway text-center text-gray-700 text-title-s md:text-lg">
            Starting projects as a student can be daunting, and finishing them
            can be just as challenging. That&apos;s why we offer planned{" "}
            <b>projects in groups of 3 or 4 for 2-3 weeks</b>, with the support
            of our dedicated Director of Projects. Our Director of Projects will
            be there to answer any questions you may have and provide guidance
            throughout the entire process.
          </p>
          <ProjectsPlaceHolder />
        </div>

        <SponsorshipSection />
      </RootLayout>
    </>
  );
}
