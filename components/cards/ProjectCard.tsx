import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { IoArrowForward, IoTimeOutline,IoPeople  } from "react-icons/io5";
import { RiMapPinTimeLine } from "react-icons/ri";



type ProjectProps = {
  _id: string;
  title: string;
  leader: string;
  startdate: string;
  enddate: string;
  level: string;
  body: string;
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
  body,
  image,
  link,
}: ProjectProps) {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push({
      pathname: `/projects/${link}`,
      query: _id,
    });
    console.log("l", _id)
  };

  // Function to check if the project is ongoing
  // const isProjectOngoing = (endDate: string) => {
  //   const today = new Date();
  //   const projectEndDate = new Date(endDate);

  //   // Compare the project end date with today's date
  //   return projectEndDate >= today;
  // };

  return (
    <button
     // onClick={handleButtonClick}
      className="w-72 sm:w-80 flex flex-col justify-start bg-white border overflow-hidden rounded-xl shadow-md hover:scale-105 transition duration-300"
    >
      <div className="w-full h-48 sm:h-52 bg-slate-400 rounded-t-xl">
        
          <div className="absolute w-32 p-1 bg-red-500 rounded-tl-lg rounded-br-lg text-white">
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
          <p className="flex flex-row text-base font-light gap-1 text-gray-600 mt-1"> <IoPeople />   {leader}</p>
        </div>
        <div className="flex flex-row items-start sm:items-center gap-2 sm:gap-6">
          <div className="flex flex-row items-center text-sm gap-1 text-gray-600">
            <RiMapPinTimeLine size={24} color="gray" /> {startdate} - {enddate}
          </div>
        </div>
        <p className="text-base text-gray-600 line-clamp-3">{body}</p>
        {/* Learn more */}
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
