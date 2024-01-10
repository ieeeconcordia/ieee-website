"use clinet";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  IoArrowForward,
  IoLocationSharp,
  IoTimeOutline,
} from "react-icons/io5";

export type EventProps = {
  _id: string;
  title: string;
  date: string;
  location: string;
  time?: string;
  description: string;
  price: number;
  image: string;
  organizer?: string;
  eventType: string;
  sponsors?: string;
  tags?: string;
  link: string;
};

export default function EventCard({ event }: { event: EventProps }) {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push({
      pathname: `/events/${event.link}`,
      query: event._id,
    });
  };
  return (
    <button
      onClick={handleButtonClick}
      className="w-72 sm:w-80 flex flex-col justify-start bg-white border overflow-hidden rounded-xl shadow-md hover:scale-105 transition duration-300"
    >
      <div className="w-full h-48 sm:h-52 bg-slate-400 rounded-t-xl">
        {event.eventType == "PASSED" ? (
          <div className="absolute w-32 p-1 bg-red-500 rounded-tl-lg rounded-br-lg text-white">
            {event.eventType}
          </div>
        ) : (
          <div className="absolute w-32 p-1 bg-sky-400 rounded-tl-lg rounded-br-lg text-white">
            {event.eventType}
          </div>
        )}
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full bg-center object-cover overflow-hidden "
        />
      </div>
      <div className="w-full flex flex-col px-4 pb-4 gap-2 sm-gap-3 text-start rounded-b-xl flex-grow">
        {" "}
        {/* Add 'flex-grow' class here */}
        <div>
          <h3 className="w-full text-title-l font-semibold font-raleway text-black line-clamp-1">
            {event.title}
          </h3>
          {event.tags ? (
            <p className="italic text-base font-light">{event.tags}</p>
          ) : (
            <></>
          )}
        </div>
        <div className="flex flex-row items-start sm:items-center gap-2 sm:gap-6">
          <div className="flex flex-row items-center text-sm gap-1 text-gray-600">
            <IoTimeOutline size={24} color="gray" /> {event.date}
          </div>
          <div className="flex flex-row items-center text-sm gap-1 text-gray-600">
            <IoLocationSharp size={24} color="gray" /> {event.location}
          </div>
        </div>
        <p className="text-base text-gray-600 line-clamp-3">
          {event.description}
        </p>
        {/* Learn more */} {/* Add 'mt-auto' class here */}
        <div className="flex flex-row gap-2 items-center text-sm text-cyan-400">
          <div className="w-fit rounded p-1 bg-gradient-to-r from-cyan-400 to-sky-400">
            <IoArrowForward size={16} color="white" />
          </div>
          Learn More
        </div>
      </div>
    </button>
  );
}
