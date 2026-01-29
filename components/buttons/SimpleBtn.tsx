import Link from "next/link";
import React from "react";

export const SimpleBtn = (props: any) => {
  return (
    <Link href={props.href}>
      <div className="w-fit px-6 py-3 bg-primary hover:opacity-90 duration-200 text-primary-foreground font-raleway font-semibold rounded-lg">
        {props.text}
      </div>
    </Link>
  );
};
