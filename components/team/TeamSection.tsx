import React, { useState } from "react";
import Link from "next/link";
import { IoLogoGithub, IoLogoLinkedin, IoMailOutline } from "react-icons/io5";

type MemberProps = {
  name: string;
  role: string[];
  teams: string[];
  image: string;
  email: string;
  linkedin?: string;
  github?: string;
  program?: string;
};

function MemberCard({ member }: { member: MemberProps }) {
  const [imgError, setImgError] = useState(false);

  const roleDisplay = member.role?.join(" ") || "";
  const teamsDisplay = Array.isArray(member.teams) ? member.teams.join(", ") : member.teams;

  return (
    <div className="bg-white border border-[#B3DAE6] rounded-xl p-6 hover:shadow-lg transition-shadow text-center">
      <div className="w-52 h-52 mx-auto mb-5">
        <img
          src={imgError || !member.image ? "/avatar.webp" : member.image}
          alt={member.name}
          className="w-full h-full object-cover object-center rounded-full border-4 border-[#128DCD]/20"
          onError={() => setImgError(true)}
        />
      </div>
      <h4 className="font-bold text-gray-900 text-xl mb-1">{member.name}</h4>
      <p className="text-base text-gray-500 mb-4">
        {roleDisplay} {teamsDisplay}
        {member.program && <span className="text-gray-400"> • {member.program}</span>}
      </p>
      <div className="flex justify-center gap-4">
        {member.email && (
          <Link
            href={`mailto:${member.email}`}
            className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#128DCD] hover:text-white transition-colors"
          >
            <IoMailOutline size={22} />
          </Link>
        )}
        {member.linkedin && (
          <Link
            href={member.linkedin}
            target="_blank"
            className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#128DCD] hover:text-white transition-colors"
          >
            <IoLogoLinkedin size={22} />
          </Link>
        )}
        {member.github && (
          <Link
            href={member.github}
            target="_blank"
            className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#128DCD] hover:text-white transition-colors"
          >
            <IoLogoGithub size={22} />
          </Link>
        )}
      </div>
    </div>
  );
}

export default function TeamSection({ members }: { members: MemberProps[] }) {
  if (!members) return null;

  // Organize members by role hierarchy
  const chairs = members.filter((m) =>
    m.teams?.some((t: string) => t.toLowerCase().includes("chair"))
  );

  const vps = members.filter((m) =>
    m.role?.some((r: string) => r.toLowerCase().includes("vp")) &&
    !m.teams?.some((t: string) => t.toLowerCase().includes("chair"))
  );

  const directors = members.filter((m) =>
    m.role?.some((r: string) => r.toLowerCase().includes("director"))
  );

  const others = members.filter((m) =>
    !chairs.includes(m) && !vps.includes(m) && !directors.includes(m)
  );

  return (
    <div className="space-y-12">
      {/* Executive Chair */}
      {chairs.length > 0 && (
        <div>
          <div className="bg-[#128DCD] text-white px-6 py-3 rounded-t-lg">
            <h3 className="text-lg font-semibold">Executive Chair</h3>
          </div>
          <div className="bg-white border border-t-0 border-[#B3DAE6] rounded-b-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {chairs.map((member, idx) => (
                <MemberCard key={idx} member={member} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Vice Presidents */}
      {vps.length > 0 && (
        <div>
          <div className="bg-[#128DCD] text-white px-6 py-3 rounded-t-lg">
            <h3 className="text-lg font-semibold">Vice Presidents</h3>
          </div>
          <div className="bg-white border border-t-0 border-[#B3DAE6] rounded-b-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vps.map((member, idx) => (
                <MemberCard key={idx} member={member} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Directors */}
      {directors.length > 0 && (
        <div>
          <div className="bg-[#128DCD] text-white px-6 py-3 rounded-t-lg">
            <h3 className="text-lg font-semibold">Directors</h3>
          </div>
          <div className="bg-white border border-t-0 border-[#B3DAE6] rounded-b-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {directors.map((member, idx) => (
                <MemberCard key={idx} member={member} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Other Team Members */}
      {others.length > 0 && (
        <div>
          <div className="bg-[#128DCD] text-white px-6 py-3 rounded-t-lg">
            <h3 className="text-lg font-semibold">Team Members</h3>
          </div>
          <div className="bg-white border border-t-0 border-[#B3DAE6] rounded-b-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {others.map((member, idx) => (
                <MemberCard key={idx} member={member} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
