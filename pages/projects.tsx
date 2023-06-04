import RootLayout from "./layout";
import EventCard from "../components/cards/EventCard";
import { useEffect, useState } from "react";
import ProjectCard from "@/components/cards/ProjectCard";
import { SponsorshipSection } from "@/components/SponsorshipSection";

export default function projects() {
  return (
    <>
      <RootLayout>
        <div className="flex flex-col justify-center text-center gap-7 p-container pb-16">
          <h2 className="text-headline-l font-lora font-bold text-secondary">Projects</h2>
          <p className="text-title-m font-raleway text-title-gray">
            Forem ipsum dolora asdklasjdkasdj sit amet, consectetur adipiscing
            elit. Etiam eu turpis molestie, dictum est a
          </p>
          <div className="flex flex-row justify-center gap-10">
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
