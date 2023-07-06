import React from "react";
import sponsors from "../public/sponsors/DummySponsor.png";
import Image from "next/image";
import { SponsorshipBtn } from "./buttons/SponsorshipBtn";

export const SponsorshipSection = () => {
  return (
    <div className="flex flex-col bg-sponsorship gap-16 text-start items-center px-8 py-10 pb-16 sm:px-20 xl:px-section md:pb-14">
      <div>
        <h2 className="font-lora font-bold text-headline-l sm:text-display-m text-center text-white pb-12">
          Sponsors
        </h2>
        <p className="font-raleway text-title-m sm:text-title-l text-white">
          Our sponsors are vital to our success, and we are deeply grateful for
          their support. With their generosity, we can host a variety of events
          and projects and provide cutting-edge equipment for electrical and
          electronics endeavors. From technical expertise to essential products
          and funding, <b>our sponsors enable us to strive for technical
          excellence</b>.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8">
        <Image src={sponsors} alt={""} className="w-40" />
        <Image src={sponsors} alt={""} className="w-40" />
        <Image src={sponsors} alt={""} className="w-40" />
        <Image src={sponsors} alt={""} className="w-40" />
      </div>

      <p className="font-raleway text-title-m sm:text-title-l text-white">
        As a sponsor of Concordia IEEE, you <b>become an integral part of our
        association</b>, making a positive impact on tutorials, competitions, and
        the wider university community. Join us and help empower future
        engineers as they pursue excellence. Together, we can achieve remarkable
        growth and accomplish great things.
      </p>
      <SponsorshipBtn text={"Become a sponsor!"} />
    </div>
  );
};
