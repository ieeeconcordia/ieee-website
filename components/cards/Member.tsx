import Link from "next/link";
import React from "react";
import { IoLogoLinkedin, IoMail, IoMailOutline } from "react-icons/io5";

export const Member = () => {
  return (
    <div className="w-80 flex flex-col justify-start bg-white border rounded-xl mb-8">
      {/* Image */}
      <div className="h-56 bg-slate-400 rounded-lg m-4"></div>

      {/* Details */}
      <div className="w-full flex flex-col px-4 pb-4 gap-3 text-start rounded-b-xl">
        {/* Name & Tags */}
        <div>
          <h3 className="w-full text-title-l font-semibold font-raleway text-black leading-5">
            Full Name
          </h3>
          <p className=" text-label-l font-light">Position - Program</p>
        </div>

        {/* Details */}
        <p className="text-sm text-gray-600">
          Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus
        </p>

        <div className="flex flex-row gap-4 items-center">
            <Link href={""}> <IoMailOutline size={35}/></Link>
            <Link href={""}> <IoLogoLinkedin size={28} /></Link>
        </div>
      </div>
    </div>
  );
};
