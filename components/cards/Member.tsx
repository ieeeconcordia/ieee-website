import Link from "next/link";
import React from "react";
import { IoLogoLinkedin, IoMail, IoMailOutline } from "react-icons/io5";

type memberProps = {
  firstName: string;
  lastName: string;
  position: string;
  discord: string;
  emailIEEE: string;
  linkedIn: string;
  program: string;
  image: string;
};

export const Member = ({
  firstName,
  lastName,
  position,
  discord,
  emailIEEE,
  linkedIn,
  program,
  image,
}: memberProps) => {
  const imagePath = "/execs/" + image;

  return (
    <div className="w-80 flex flex-col justify-start bg-white border rounded-xl mb-8 shadow-md">
      {/* Image */}
      <div className="h-56 bg-slate-400 rounded-t-lg">
        <img
          src={image ? imagePath : "/avatar.webp"}
          alt="User PP"
          className="h-56 w-full object-cover rounded-t-lg"
        />
      </div>

      {/* Details */}
      <div className="w-full flex flex-col px-4 pb-4 gap-3 text-start rounded-b-xl">
        {/* Name & Tags */}
        <div>
          <h3 className="w-full text-title-l font-semibold font-raleway text-black leading-5">
            {firstName + " " + lastName}
          </h3>
          <p className=" text-label-l font-light">
            {position} - {program == "" ? "B.Eng" : program}
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
        </div>
      </div>
    </div>
  );
};
