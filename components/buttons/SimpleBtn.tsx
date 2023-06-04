import Link from "next/link";
import React from "react";

export const SimpleBtn = (props: any) => {
  return (
    <Link href={""}>
      <div className="w-fit px-4 py-2 bg-slate-800 hover:bg-slate-400 duration-200 text-white rounded-md">
        {props.text}
      </div>
    </Link>
  );
};
