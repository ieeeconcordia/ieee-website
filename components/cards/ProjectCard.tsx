import React from "react";
import {
  IoTimeOutline,
  IoLocationSharp,
  IoArrowForward,
} from "react-icons/io5";

export default function ProjectCard() {
  return (
    <div className="w-72 sm:w-80 flex flex-col justify-start bg-white border rounded-xl">
      <div className="h-44 sm:h-56 bg-slate-400 rounded-t-xl">
        <div className="w-fit h-8 py-1 px-4 sm:px-6 bg-yellow-400 rounded-tl-lg text-white font-raleway">
          Electrical
        </div>
      </div>
      <div className="w-full flex flex-col p-4 gap-3 text-start rounded-b-xl">
        {/* Name & Tags */}
        <div>
          <h3 className="w-full text-title-l font-semibold font-raleway text-black">Project Name</h3>
          <p className="italic text-sm font-light">Additional tags</p>
        </div>

        {/* Date & Location */}
        <div className="flex flex-row items-center text-sm gap-1 text-gray-600">
            <IoTimeOutline size={24} color="gray" /> Duration
        </div>
        {/* Details */}
        <p className="text-sm text-gray-600">
          Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus
        </p>

        {/* Learn more */}
        <div className="flex flex-row gap-2 items-center text-body-l text-cyan-400">
          <div className="w-fit rounded p-1 bg-gradient-to-r from-cyan-400 to-sky-400">
            <IoArrowForward size={16} color="white" />
          </div>
          Learn More
        </div>
      </div>
    </div>
  );
}
