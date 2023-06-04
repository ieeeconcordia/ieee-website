import Link from "next/link";
import React from "react";

export const SponsorshipBtn = (props: any) => {
  return (
    <Link href={""}>
      <div className={" w-fit py-3 px-5 bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-400 text-white font-raleway font-semibold text-label-l rounded-md"}>
        {props.text}
      </div>
    </Link>
  );
};

export const SponsorshipBtnNav = () => {
  return (
    <Link href={""}>
      <div className={" w-fit py-3 px-5 bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-400 text-white font-raleway font-semibold text-label-l rounded-md"}>
        Sponsorship!
      </div>
    </Link>
  );
};
