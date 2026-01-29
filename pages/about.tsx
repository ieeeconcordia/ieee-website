import RootLayout from "./layout";
import { getMembers } from "@/lib/tina";
import TeamSection from "@/components/team/TeamSection";
import TypingAnimation from "@/components/animations/TypingAnimation";

export async function getStaticProps({ params }: any) {
  const members = await getMembers();
  return {
    props: {
      members,
    },
  };
}

export default function About({ members }: any) {
  return (
    <RootLayout>
      {/* Hero Banner */}
      <div className="w-full bg-[#128DCD] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-2xl text-white font-medium">
            <TypingAnimation />
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <TeamSection members={members} />
        </div>
      </div>
    </RootLayout>
  );
}
