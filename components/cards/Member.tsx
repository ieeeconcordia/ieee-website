import { link } from "fs";
import Link from "next/link";
import React from "react";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoMail,
  IoMailOutline,
} from "react-icons/io5";

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
  // Handles undefined values
  linkedIn = linkedIn == undefined ? "" : linkedIn;
  github = github == undefined ? "" : github;

  return (
    <div className="w-80 flex flex-col justify-start bg-white border rounded-xl mb-8 shadow-md">
      {/* Image */}
      <div className="h-56 bg-slate-400 rounded-t-lg">
        <img
          src={image ? image : "/avatar.webp"}
          alt="User PP"
          className="h-56 w-full object-cover rounded-t-lg"
        />
      </div>
    
      {/* Details */}
      <div className="w-full flex flex-col px-4 pb-4 gap-3 text-start rounded-b-xl">
        {/* Name & Tags */}
        <div>
          <h3 className="w-full text-title-l font-semibold font-raleway text-black leading-5">
            {name}
          </h3>
          <p className=" text-label-l font-light">

          {role} {['VP', 'Director'].includes(role[0]) ? ' of' : ''} {Array.isArray(teams) ? teams.join(', ') : teams} {program === "" ? " - B.Eng" : " - " + program}
          </p>
        </div>

        {/* Details */}
        <div className="flex flex-row gap-4 items-center">
          <Link href={"mailto:" + emailIEEE}>
            {" "}
            <IoMailOutline size={35} />
          </Link>

          {linkedIn == "" ? (
            <></>
          ) : (
            <Link href={linkedIn}>
              {" "}
              <IoLogoLinkedin size={28} />
            </Link>
          )}
          {github == "" ? (
            <></>
          ) : (
            <Link href={github}>
              {" "}
              <IoLogoGithub size={28} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
