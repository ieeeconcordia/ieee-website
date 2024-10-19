import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { IoArrowForward, IoTimeOutline, IoPeople } from "react-icons/io5";
import { RiMapPinTimeLine } from "react-icons/ri";
import moment from "moment"; // Import moment for date formatting

type ProjectProps = {
  _id: string;
  title: string;
  leader: string;
  startdate: string | null;
  enddate: string | null;
  level: string;
  image: string;
  link: string;
};

export default function ProjectCard({
  _id,
  title,
  leader,
  startdate,
  enddate,
  level,
  image,
  link,
}: ProjectProps) {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push({
      pathname: `/projects/${link}`,
      query: _id,
    });
  };

  // Safeguard and format start and end dates
  const formattedStartDate = startdate
    ? moment(startdate).format("MMMM Do, YYYY")
    : "Start date not available";
  const formattedEndDate = enddate
    ? moment(enddate).format("MMMM Do, YYYY")
    : "End date not available";

  return (
    <button
      onClick={handleButtonClick}
      className="w-72 sm:w-80 flex flex-col justify-start bg-white border overflow-hidden rounded-xl shadow-md hover:scale-105 transition duration-300"
    >
      <div className="w-full h-48 sm:h-52 bg-slate-400 rounded-t-xl">
        <div className="absolute w-32 p-1 bg-sky-400 rounded-tl-lg rounded-br-lg text-white">
          {level}
        </div>

        <img
          src={image}
          alt={title}
          className="w-full h-full bg-center object-cover overflow-hidden"
        />
      </div>
      <div className="w-full flex flex-col px-4 pb-4 gap-2 sm:gap-3 text-start rounded-b-xl flex-grow">
        <div>
          <h3 className="w-full text-title-l font-semibold font-raleway text-black line-clamp-1">
            {title}
          </h3>
          <p className="flex flex-row text-base font-light gap-1 text-gray-600 mt-1">
            <IoPeople /> {leader}
          </p>
        </div>
        <div className="flex flex-row items-start sm:items-center gap-2 sm:gap-6">
          <div className="flex flex-row items-center text-sm gap-1 text-gray-600">
            <RiMapPinTimeLine size={24} color="gray" />
            {formattedStartDate} - {formattedEndDate}
          </div>
        </div>
        
        <div className="mt-auto">
          <div className="flex flex-row gap-2 items-center text-sm text-cyan-400">
            <div className="w-fit rounded p-1 bg-gradient-to-r from-cyan-400 to-sky-400">
              <IoArrowForward size={16} color="white" />
            </div>
            Learn More
          </div>
        </div>
      </div>
    </button>
  );
}
