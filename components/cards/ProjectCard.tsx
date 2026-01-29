import { useRouter } from "next/router";
import React, { useState } from "react";
import { IoPeople } from "react-icons/io5";
import { RiMapPinTimeLine } from "react-icons/ri";

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
  const [imgError, setImgError] = useState(false);

  const handleButtonClick = () => {
    router.push({
      pathname: `/projects/${link}`,
      query: _id,
    });
  };

  return (
    <button
      onClick={handleButtonClick}
      className="w-full flex flex-col bg-white border border-[#B3DAE6] rounded-lg overflow-hidden hover:shadow-lg transition-shadow text-left"
    >
      <div className="relative w-full h-40 bg-gray-100">
        <div className="absolute top-2 left-2 px-2 py-1 text-xs font-semibold text-white bg-[#128DCD] rounded">
          {level}
        </div>
        {!imgError && image ? (
          <img
            src={image}
            alt={title}
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
        <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2">{title}</h3>
        <div className="text-sm text-gray-500 space-y-1">
          <div className="flex items-center gap-1">
            <IoPeople size={14} />
            <span>{leader}</span>
          </div>
          <div className="flex items-center gap-1">
            <RiMapPinTimeLine size={14} />
            <span>{startdate} - {enddate}</span>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-gray-100">
          <span className="text-sm font-medium text-[#128DCD]">Learn more →</span>
        </div>
      </div>
    </button>
  );
}
