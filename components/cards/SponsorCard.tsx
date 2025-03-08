
import Link from "next/link";
import { title } from "process";
import React from "react";

type sponsorProps = {
  image: string;
  link: string;
  title: string;
};

export const Sponsor = ({
  image,
  link,
  title,
}: sponsorProps) => {
  if (!image && !link && !title) {
    return null;
  }
  else if (!image && !link && title) {
    return(
      <div className="relative w-32 p-4 ">
      <a href={link} target="_blank">
        <img
          src='/avatar.webp'
          alt={title}
          className="w-full h-full object-cover rounded" // Add the rounded class here
        />
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-1 text-center rounded">
          {title}
        </div>
      </a>
    </div>
    );
  }
  else 
  return(
    <div className="w-48 p-4">
      <a href={link} target="_blank">
        <img
          src={image}
          alt={title}
          className="w-full h-full rounded"
        />
      </a>
      </div>
  );
};
