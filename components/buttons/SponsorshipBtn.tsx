import sponsorship from "@/pages/sponsorship";
import Link from "next/link";
import React from "react";

interface SponsorshipBtnProps {
  link: string;
  text: string;
}

export const SponsorshipBtn = ({ link, text }: SponsorshipBtnProps) => {
  return (
    <Link href={link}>
      <a className="inline-block py-4 px-6 bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-400 text-white font-raleway font-semibold text-title-m rounded-md shadow-md">
        {text}
      </a>
    </Link>
  );
};

export const SponsorshipBtnNav = () => {
  return (
    <Link href={"/sponsorship"}>
      <div
        className={
          " w-full min-w-fit text-center py-3 px-5 bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-400 text-white font-raleway font-semibold text-label-l rounded-md shadow-md"
        }
      >
        Sponsorship!
      </div>
    </Link>
  );
};
