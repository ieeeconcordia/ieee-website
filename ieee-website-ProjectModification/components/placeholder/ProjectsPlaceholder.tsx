import React from "react";
import Link from "next/link";
import { BsDiscord } from "react-icons/bs";

interface ProjectsPlaceholderProps {
  title: string;
  message: string;
  link: string;
  linkText: string;
  linkIcon?: React.ReactNode;
  iconSize?: string;
}
const ProjectsPlaceholder: React.FC<ProjectsPlaceholderProps> = ({
  title,
  message,
  link,
  linkText,
  linkIcon,
  iconSize = 'text-xl',
}) => {
  return (
    <div className="w-fit flex flex-col text-center justify-center items-center shadow-md mt-4 p-4 bg-gray-200 border border-gray-200 rounded-lg">
      <div className="font-raleway text-display-s font-semibold">
        {title}
      </div>
      <div className="text-gray-700 text-title-m pb-4">
        {message}
      </div>
      <Link
        href={link}
        className="w-fit flex flex-row gap-2 justify-center items-center text-white bg-discord px-5 py-2 rounded-md shadow-md hover:shadow-lg"
      >
        {linkIcon && React.cloneElement(linkIcon as React.ReactElement, { className: iconSize })}
        {linkText}
      </Link>
    </div>
  );
};

export default ProjectsPlaceholder;

// export default function ProjectsPlaceHolder() {
//   return (
//     <div className="w-fit flex flex-col text-center justify-center items-center shadow-md mt-4 p-4 bg-gray-200 border border-gray-200 rounded-lg">
//       <div className="font-raleway text-display-s font-semibold ">
//         No projects shown?
//       </div>
//       <div className="text-gray-700 text-title-m pb-4">
//         Check in later or join our discord for updates!
//       </div>
//       <Link
//         href={"https://discord.gg/DECBMmcT3P"}
//         className="w-fit flex flex-row gap-2 justify-center items-center text-white bg-discord px-4 py-2 rounded-md shadow-md hover:shadow-lg"
//       >
//         <BsDiscord color="#ffffff" />
//         IEEE Concordia
//       </Link>
//     </div>
//   );
// }