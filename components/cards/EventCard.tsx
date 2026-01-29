import { useRouter } from "next/router";
import React, { useState } from "react";
import { IoLocationSharp, IoTimeOutline } from "react-icons/io5";

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
  link,
}: EventProps) {
  const router = useRouter();
  const [imgError, setImgError] = useState(false);

  const handleButtonClick = () => {
    router.push({
      pathname: `/events/${link}`,
      query: _id,
    });
  };

  const isEventPassed = (eventDate: string) => {
    const today = new Date();
    const eventDateObj = new Date(eventDate);
    today.setHours(0, 0, 0, 0);
    eventDateObj.setHours(eventDateObj.getHours() + 5);
    eventDateObj.setDate(eventDateObj.getDate() + 1);
    return eventDateObj <= today;
  };

  return (
    <button
      onClick={handleButtonClick}
      className="w-full flex flex-col bg-white border border-[#B3DAE6] rounded-lg overflow-hidden hover:shadow-lg transition-shadow text-left"
    >
      <div className="relative w-full h-40 bg-gray-100">
        <div
          className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold text-white rounded ${
            isEventPassed(date) ? "bg-gray-500" : "bg-[#128DCD]"
          }`}
        >
          {isEventPassed(date) ? "PASSED" : eventType}
        </div>
        {!imgError && image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#128DCD] to-[#0e7ab8]">
            <span className="text-white text-3xl font-bold opacity-40">IEEE</span>
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2">{name}</h3>
        <div className="text-sm text-gray-500 space-y-1 mb-3">
          <div className="flex items-center gap-1">
            <IoTimeOutline size={14} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <IoLocationSharp size={14} />
            <span className="line-clamp-1">{location}</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2 flex-grow">{description}</p>
        <div className="mt-3 pt-3 border-t border-gray-100">
          <span className="text-sm font-medium text-[#128DCD]">Learn more →</span>
        </div>
      </div>
    </button>
  );
}
