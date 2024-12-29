
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

  return (
    <div className="w-48 p-4">
      <a href={link} target="_blank">
        <img
          src={image}
          alt={title}
        />
      </a>
      </div>
  );
};
