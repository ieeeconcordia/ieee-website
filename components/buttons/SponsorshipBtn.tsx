import Link from "next/link";
import React from "react";

export const SponsorshipBtn = () => {
  return (
    <Link href={""}>
      <div className={" w-fit py-3 px-5 bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-400 text-white font-raleway font-semibold text-label-l"}>
        Become a sponsor
      </div>
    </Link>
  );
};

export const SponsorshipBtnNav = () => {
  return (
    <Link href={""}>
      <div className={" w-fit py-3 px-5 bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-400 text-white font-raleway font-semibold text-label-l"}>
        Sponsorship!
      </div>
    </Link>
  );
};
