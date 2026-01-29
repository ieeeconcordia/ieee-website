import Link from "next/link";
import React, { useState } from "react";
import { IoLogoGithub, IoLogoLinkedin, IoMailOutline } from "react-icons/io5";

type memberProps = {
  name: string;
  role: string;
  github: string;
  emailIEEE: string;
  linkedIn: string;
  program: string;
  image: string;
  teams: string;
};

export const Member = ({
  name,
  teams,
  role,
  github,
  emailIEEE,
  linkedIn,
  program,
  image,
}: memberProps) => {
  linkedIn = linkedIn == undefined ? "" : linkedIn;
  github = github == undefined ? "" : github;
  const [imgError, setImgError] = useState(false);

  return (
    <div className="w-72 flex flex-col bg-white border border-[#B3DAE6] rounded-lg overflow-hidden shadow-sm">
      <div className="h-52 bg-gray-100">
        <img
          src={imgError || !image ? "/avatar.webp" : image}
          alt={name}
          className="h-52 w-full object-cover"
          onError={() => setImgError(true)}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500 mb-3">
          {role} {["VP", "Director"].includes(role[0]) ? " of" : ""}{" "}
          {Array.isArray(teams) ? teams.join(", ") : teams}
          {program && ` - ${program}`}
        </p>
        <div className="flex gap-3">
          <Link
            href={`mailto:${emailIEEE}`}
            className="text-gray-600 hover:text-[#128DCD] transition-colors"
          >
            <IoMailOutline size={22} />
          </Link>
          {linkedIn && (
            <Link
              href={linkedIn}
              target="_blank"
              className="text-gray-600 hover:text-[#128DCD] transition-colors"
            >
              <IoLogoLinkedin size={22} />
            </Link>
          )}
          {github && (
            <Link
              href={github}
              target="_blank"
              className="text-gray-600 hover:text-[#128DCD] transition-colors"
            >
              <IoLogoGithub size={22} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
