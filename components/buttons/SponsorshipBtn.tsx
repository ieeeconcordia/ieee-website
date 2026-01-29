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
      <p className="inline-block py-3 px-6 bg-primary text-primary-foreground font-raleway font-semibold text-title-m rounded-lg hover:opacity-90 transition">
        {text}
      </p>
    </Link>
  );
};

export const SponsorshipBtnNav = () => {
  return (
    <Link href="/contact#sponsorship">
      <div
        className={
          "w-full min-w-fit text-center py-3 px-5 bg-primary text-primary-foreground font-raleway font-semibold text-label-l rounded-lg hover:opacity-90 transition"
        }
      >
        Sponsorship
      </div>
    </Link>
  );
};
