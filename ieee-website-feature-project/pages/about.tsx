import { Member } from "@/components/cards/Member";
import RootLayout from "./layout";
import { SponsorshipBtn } from "@/components/buttons/SponsorshipBtn";
import { SponsorshipSection } from "@/components/SponsorshipSection";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import TypingAnimation from "@/components/animations/TypingAnimation";
import { getMembers } from "@/lib/tina";

export async function getStaticProps({ params }: any) {
  const members = await getMembers();
  return {
    props: {
      members,
    },
  };
}

export default function About({ members }: any) {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <RootLayout>
        <div className="w-full bg-center bg-no-repeat bg-cover bg-execTeam ">
          <div
            className="bg-black bg-opacity-75 text-center font-raleway font-bold text-4xl md:text-5xl text-white py-16"
            style={{ zIndex: "1" }}
          >
            {windowWidth < 540 ? (
              "The students behind the work!"
            ) : (
              <TypingAnimation />
            )}
          </div>
        </div>
        <section className="flex flex-col items-center gap-10 pt-container pb-20">
          <div className="">
            <div className="relative">
              <div
                style={{ position: "relative", zIndex: 2 }}
                className="px-8 sm:px-20 xl:px-section"
              >
                <p className="font-raleway text-start text-gray-700 text-title-s md:text-lg pt-8">
                  We are a dynamic team of enthusiastic students, united by our
                  shared love for learning, growth, and community. Together, we
                  organize engaging events, promote academic and skill
                  development, and create an inclusive environment where every
                  student can thrive. Join us as we embark on this exciting
                  journey, connecting students, fostering friendships, and
                  making unforgettable memories along the way.
                </p>
              </div>
            </div>
          </div>
          {/* Exec Team */}
          <div className="container flex flex-col justify-center items-center gap-6">
            <h2 className="text-center font-raleway font-semibold text-headline-l text-secondary">
              Meet our team
            </h2>
            <div className="w-fit grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-4 sm:gap-10">
              {members.map((member: any, index: any) => (
                <Member
                  key={index}
                  name={member.name}
                  role={member.role}
                  program={member.program}
                  github={member.github}
                  emailIEEE={member.emailIEEE}
                  linkedIn={member.linkedin}
                  image={member.image}
                />
              ))}
            </div>
          </div>

          {/* Lab Supervisors */}
          <div className="flex flex-col justify-center items-center gap-6 px-8 sm:px-20 xl:px-section">
            <h2 className="text-center font-raleway font-semibold text-headline-l text-secondary">
              Lab Supervisors
            </h2>
            <p className="font-raleway text-gray-700 text-title-s md:text-lg text-center">
              Lab Supervisors play a vital role in keeping our lab open and
              accessible to all members. As a Lab Supervisor, you&apos;ll have
              the privilege of accessing the lab whenever you want and you get
              to experiment in a fully equipped lab.
              <br />
              <br />
              In exchange for this incredible opportunity, we simply ask for
              your commitment to supervise the lab for just 2 hours a week. By
              dedicating this small amount of time, you help us ensure that all
              students members or not can have the chance to use the lab.
            </p>
            <SponsorshipBtn
              text="Become a lab supervisor!"
              link="https://docs.google.com/forms/d/e/1FAIpQLSfdBIGKD9NaIhjVVMSaKSyN22pzhVWBu3tJYn8OV8LVVigwQQ/viewform"
            />
          </div>
        </section>
        <SponsorshipSection />
      </RootLayout>
    </>
  );
}
