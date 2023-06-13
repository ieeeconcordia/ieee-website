import RootLayout from "@/pages/layout";
import ProjectCard from "@/components/cards/ProjectCard";
import { SponsorshipSection } from "@/components/SponsorshipSection";

export default function Projects() {
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
          <div className="w-fit grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-6 sm:gap-10 pt-6">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>

        <SponsorshipSection />
      </RootLayout>
    </>
  );
}
