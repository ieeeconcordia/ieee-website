import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  IoArrowForward,
  IoLocationSharp,
  IoTimeOutline,
} from "react-icons/io5";

type EventProps = {
  _id: string;
  name: string;
  date: string;
  location: string;
  time: string;
  description: string;
  price: string;
  image: string;
  organizer: string;
  eventType: string;
  sponsors: string;
  tags: string;
  link: string;
};

export default function EventCard({
  _id,
  name,
  date,
  location,
  time,
  description,
  image,
  eventType,
  tags,
  link,
}: EventProps) {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push({
      pathname: `/events/${link}`,
      query: _id,
    });
  };
  return (
    <button
      onClick={handleButtonClick}
      className="w-72 sm:w-80 flex flex-col justify-start bg-white border overflow-hidden rounded-xl shadow-md hover:scale-105 transition duration-300"
    >
      <div className="w-full h-48 sm:h-52 bg-slate-400 rounded-t-xl">
        {eventType == "PASSED" ? (
          <div className="absolute w-32 p-1 bg-red-500 rounded-tl-lg rounded-br-lg text-white">
            {eventType}
          </div>
        ) : (
          <div className="absolute w-32 p-1 bg-sky-400 rounded-tl-lg rounded-br-lg text-white">
            {eventType}
          </div>
        )}
        <img
          src={"/events/" + image}
          alt={name}
          className="w-full h-full bg-center object-cover overflow-hidden "
        />
      </div>
      <div className="w-full flex flex-col px-4 pb-4 gap-2 sm-gap-3 text-start rounded-b-xl flex-grow">
        {" "}
        {/* Add 'flex-grow' class here */}
        <div>
          <h3 className="w-full text-title-l font-semibold font-raleway text-black line-clamp-1">
            {name}
          </h3>
          {tags ? <p className="italic text-base font-light">{tags}</p> : <></>}
        </div>
        <div className="flex flex-row items-start sm:items-center gap-2 sm:gap-6">
          <div className="flex flex-row items-center text-sm gap-1 text-gray-600">
            <IoTimeOutline size={24} color="gray" /> {date}
          </div>
          <div className="flex flex-row items-center text-sm gap-1 text-gray-600">
            <IoLocationSharp size={24} color="gray" /> {location}
          </div>
        </div>
        <p className="text-base text-gray-600 line-clamp-3">{description}</p>
        {/* Learn more */}
        <button onClick={handleButtonClick} className="mt-auto">
          {" "}
          {/* Add 'mt-auto' class here */}
          <div className="flex flex-row gap-2 items-center text-sm text-cyan-400">
            <div className="w-fit rounded p-1 bg-gradient-to-r from-cyan-400 to-sky-400">
              <IoArrowForward size={16} color="white" />
            </div>
            Learn More
          </div>
        </button>
      </div>
    </button>
  );
}
