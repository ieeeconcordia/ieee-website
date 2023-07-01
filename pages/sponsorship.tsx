import React from "react";
import RootLayout from "./layout";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import sponsors from "@/public/sponsors/DummySponsor.png";
import SponsorshipPackage from "../SponsorshipPackage.pdf";
import Image from "next/image";
import { SponsorshipBtn } from "@/components/buttons/SponsorshipBtn";
import Link from "next/link";

export default function sponsorship() {
  return (
    <RootLayout>
      <div className="flex flex-col items-center justify-items-center px-8 pb-16 sm:px-20 xl:px-section md:pb-14 ">
        <div className="w-full flex flex-col gap-8">
          <h2 className="font-lora font-bold text-center text-headline-m sm:text-headline-l text-secondary pb-3">
            Sponsorship
          </h2>
          <p className="font-raleway text-start text-title-gray text-title-m font-bold sm:text-headline-s pb-4">
            Want to become a sponsor?
          </p>
        </div>

        <div className="font-raleway text-black text-title-s sm:text-title-m">
          Contact our{" "}
          <a href="mailto:sponsor@ieeeconcordia.ca" className="underline">
            Vice-President of External Affairs{" "}
          </a>
          to learn more about how you can be a part of our vision for a more
          enriching experience as a student at the Gina Cody School of
          Engineering and Computer Science.
          <br />
          <br />
          Access the 2022-2023 sponsorship package by{" "}
          <Link
            href="../SponsorshipPackage.pdf"
            rel="noopener noreferrer"
            className="underline"
          >
            clicking here
          </Link>
          .
          <br />
          <br />
          <br />
        </div>
        <div className="px-4 flex flex-col md:flex-row items-start md:justify-center gap-2 md:gap-6 p-4 bg-sky-300 rounded-lg">
          <Image src={sponsors} alt={""} className="w-40" />
          <Image src={sponsors} alt={""} className="w-40" />
          <Image src={sponsors} alt={""} className="w-40" />
          <Image src={sponsors} alt={""} className="w-40" />
        </div>
      </div>
    </RootLayout>
  );
}
