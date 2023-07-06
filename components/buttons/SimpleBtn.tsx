import Link from "next/link";
import React from "react";

export const SimpleBtn = (props: any) => {
  return (
    <Link href={props.href}>
      <div className="w-fit px-6 py-4 bg-yellow-400 hover:bg-yellow-500 duration-200 text-black font-raleway font-bold rounded-full shadow-md">
        {props.text}
      </div>
    </Link>
  );
};
