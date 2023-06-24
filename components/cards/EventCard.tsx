import Link from "next/link";
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
};

export default function EventCard({
  _id,
  name,
  date,
  location,
  time,
  description,
  image,
  price,
  organizer,
  eventType,
  sponsors,
}: EventProps) {
  return (
    <div className="w-80 flex flex-col justify-start bg-white border rounded-xl">
      <div className="w-full h-fit bg-slate-400 rounded-t-xl">
        <div className="absolute w-32 p-1 bg-sky-400 rounded-tl-lg rounded-br-lg text-white">
          {eventType}
        </div>
        <img
          src={image}
          alt={name}
          className="w-full object-cover rounded-t-xl"
        />
      </div>
      <div className="w-full flex flex-col px-4 gap-3 text-start rounded-b-xl">
        <div>
          <h3 className="w-full text-title-l font-semibold font-raleway text-black">
            {name}
          </h3>
          <h3 className="w-full text-title-l font-semibold font-raleway text-black">
            {name}
          </h3>
          <p className="italic text-sm font-light">Additional tags</p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
          <div className="flex flex-row items-center text-sm gap-1 text-gray-600">
            <IoTimeOutline size={24} color="gray" /> {date}
          </div>
          <div className="flex flex-row items-center text-sm gap-1 text-gray-600">
            <IoLocationSharp size={24} color="gray" /> {location}
          </div>
        </div>

        <p className="text-sm text-gray-600 line-clamp-3">
          Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus
        </p>

        {/* Learn more */}
        <Link href={`/events/${_id}`}>
          <div className="flex flex-row gap-2 items-center text-sm text-cyan-400">
            <div className="w-fit rounded p-1 bg-gradient-to-r from-cyan-400 to-sky-400">
              <IoArrowForward size={16} color="white" />
              <IoArrowForward size={16} color="white" />
            </div>
            Learn More
          </div>
        </Link>
      </div>
    </div>
  );
}
