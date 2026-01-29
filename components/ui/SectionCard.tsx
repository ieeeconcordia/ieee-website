import React, { ReactNode } from "react";

interface SectionCardProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const SectionCard = ({ children, className = "", id }: SectionCardProps) => {
  return (
    <div
      id={id}
      className={`bg-white rounded-lg border border-[#B3DAE6] p-6 md:p-8 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};
