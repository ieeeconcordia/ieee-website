import React from "react";
import sponsors from "../public/sponsors/DummySponsor.png";
import Image from "next/image";
import { SponsorshipBtn } from "./buttons/SponsorshipBtn";

export const SponsorshipSection = () => {
  return (
    <div className="flex flex-col bg-sponsorship gap-16 text-center items-center p-10">
      <div>
        <h2 className="font-lora font-bold text-display-m text-white pb-8">
          Sponsors
        </h2>
      <p className="font-raleway text-title-m text-white">
        Forem ipsum dolora asdklasjdkasdj sit amet, consectetur adipiscing elit.
        Etiam eu turpis molestie, dictum est a
      </p>
      </div>
      
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <Image src={sponsors} alt={""} className="w-40" />
        <Image src={sponsors} alt={""} className="w-40" />
        <Image src={sponsors} alt={""} className="w-40" />
        <Image src={sponsors} alt={""} className="w-40" />
      </div>
      <SponsorshipBtn text={"Become a sponsor!"}/>
    </div>
  );
};
