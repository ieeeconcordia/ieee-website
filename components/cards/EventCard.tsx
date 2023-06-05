import Link from "next/link";
import React from "react";
import {
  IoArrowForward,
  IoLocationSharp,
  IoTimeOutline,
} from "react-icons/io5";

type EventProps = {
  _id: string,
  eventName:string,
  date:string,
  location:string,
  time:string,
  fee:string,
  eventType:string
}
export default function EventCard({_id,eventName,date,location,time,fee,eventType} : EventProps) {
  return (
    <div className="w-80 flex flex-col justify-start bg-white border rounded-xl">
      <div className="h-56 bg-slate-400 rounded-t-xl">
        <div className="w-1/3 p-1 bg-sky-400 rounded-tl-lg text-white">
          {eventType}
        </div>
      </div>
      <div className="w-full flex flex-col p-4 gap-3 text-start rounded-b-xl">
        {/* Name & Tags */}
        <div>
          <h3 className="w-full text-title-l font-semibold font-raleway text-black">{eventName}</h3>
          <p className="italic text-sm font-light">Additional tags</p>
        </div>

        {/* Date & Location */}
        <div className="flex flex-row items-center gap-6">
          <div className="flex flex-row items-center text-sm gap-1 text-gray-600">
            <IoTimeOutline size={24} color="gray" /> {date}
          </div>
          <div className="flex flex-row items-center text-sm gap-1 text-gray-600">
            <IoLocationSharp size={24} color="gray" /> {location}
          </div>
        </div>

        {/* Details */}
        <p className="text-sm text-gray-600">
          Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus
        </p>

        {/* Learn more */}
        <Link href={`/events/${_id}`}>
          <div className="flex flex-row gap-2 items-center text-sm text-cyan-400">
            <div className="w-fit rounded p-1 bg-gradient-to-r from-cyan-400 to-sky-400">
              <IoArrowForward size={16} color="white"/>
            </div>
            Learn More
          </div>
        </Link>
        
      </div>
    </div>
  );
}
