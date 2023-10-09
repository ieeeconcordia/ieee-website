import { Member } from "@/components/cards/Member";
import RootLayout from "./layout";
import { SponsorshipBtn } from "@/components/buttons/SponsorshipBtn";
import { SponsorshipSection } from "@/components/SponsorshipSection";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import TypingAnimation from "@/components/animations/TypingAnimation";

export default function About() {
  const [execTeam, setExecTeam] = useState([]);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/execTeam");
      const data = await response.json();
      setExecTeam(data); // store the response from the API route
    };

    fetchData();

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
              {/* {execTeam.map(
                (member: any, index: any) =>
                  member["Status"] == "Active" && (
                    <Member
                      key={member["id"]}
                      firstName={member["First Name"]}
                      lastName={member["Last Name"]}
                      position={member["Position"]}
                      program={member["Program"]}
                      discord={member["Discord"]}
                      emailIEEE={member["Email (IEEE)"]}
                      linkedIn={member["LinkedIn"]}
                      image={member["Image"]}
                    />
                  )
              )} */}

              <Member
                firstName={"Shami Ivan"}
                lastName={"Senga"}
                position={"Branch Chair"}
                program={"B.Eng. Coen."}
                discord={"cmumind#8981"}
                emailIEEE={"chair@ieeeconcordia.ca"}
                linkedIn={""}
                image={"Ivan.JPG"}
              />
              <Member
                firstName={"Yara"}
                lastName={"Stouhi"}
                position={"Branch Treasurer"}
                program={"B.Eng. Coen."}
                discord={"yara#4460"}
                emailIEEE={"treasurer@ieeeconcordia.ca"}
                linkedIn={""}
                image={"Yara.JPG"}
              />
              <Member
                firstName={"Kartik"}
                lastName={"Teotia"}
                position={"Branch Vice-Chair"}
                program={"B.Eng. Elec."}
                discord={"Kartik T#7583"}
                emailIEEE={"vicechair@ieeeconcordia.ca"}
                linkedIn={""}
                image={"Kartik.JPG"}
              />
              <Member
                firstName={"Sabine"}
                lastName={"Hleiss"}
                position={"Branch Secretary"}
                program={""}
                discord={"sabine#6480"}
                emailIEEE={"secretary@ieeeconcordia.ca"}
                linkedIn={""}
                image={"Sabine.JPG"}
              />
              <Member
                firstName={"Achal"}
                lastName={"Patel"}
                position={"Branch Marketing"}
                program={"B.Eng. Coen."}
                discord={"zwaky#7372"}
                emailIEEE={"academics@ieeeconcordia.ca"}
                linkedIn={""}
                image={"Achal.jpg"}
              />
              <Member
                firstName={"Alexandre"}
                lastName={"Fontaine"}
                position={"Branch Academics"}
                program={"B.Eng. Elec."}
                discord={"zwaky#7372"}
                emailIEEE={"academics@ieeeconcordia.ca"}
                linkedIn={""}
                image={"Alex.jpg"}
              />
              <Member
                firstName={"Rayan"}
                lastName={"Alkayal"}
                position={"Director of IT"}
                program={""}
                discord={"itsrhino_"}
                emailIEEE={"itdirector@ieeeconcordia.ca"}
                linkedIn={""}
                image={"Rayan.JPG"}
              />
              <Member
                firstName={"Juan"}
                lastName={"Vergas"}
                position={"Director of IT"}
                program={""}
                discord={"sum_re1"}
                emailIEEE={"itdirector@ieeeconcordia.ca"}
                linkedIn={""}
                image={"Juan.JPG"}
              />
              <Member
                firstName={"Houssam Eddine"}
                lastName={"Righi"}
                position={"Branch Webmaster"}
                program={"B.Eng. Soen."}
                discord={"hoorii"}
                emailIEEE={"webmaster@ieeeconcordia.ca"}
                linkedIn={""}
                image={"Houssam.JPG"}
              />
              <Member
                firstName={"Ardalan"}
                lastName={"Jamshidi"}
                position={"Director of Competitions"}
                program={"B.Eng. Coen."}
                discord={"ardianapolis#7436"}
                emailIEEE={"competitions@ieeeconcordia.ca"}
                linkedIn={""}
                image={"Ardalan.JPG"}
              />
              <Member
                firstName={"Mathias"}
                lastName={"Desrochers"}
                position={"Director of Lab Services"}
                program={"B.Eng. Elec."}
                discord={"M3thRocks#6275"}
                emailIEEE={"services@ieeeconcordia.ca"}
                linkedIn={""}
                image={"Mathias.JPG"}
              />
              <Member
                firstName={"Kaden Perelmiter"}
                lastName={""}
                position={"Director of Lab Services"}
                program={"B.Eng. Elec."}
                discord={"M3thRocks#6275"}
                emailIEEE={"services@ieeeconcordia.ca"}
                linkedIn={""}
                image={"Kaden.JPG"}
              />
              <Member
                firstName={"Minh"}
                lastName={"Huynh"}
                position={"Director of Warhacks"}
                program={""}
                discord={"saucy0662"}
                emailIEEE={"warhacks@ieeeconcordia.ca"}
                linkedIn={""}
                image={"Minh.jpg"}
              />
              <Member
                firstName={"Mazen"}
                lastName={"Mohamed"}
                position={"Director of Projects"}
                program={""}
                discord={"_.mazen._"}
                emailIEEE={"projects@ieeeconcordia.ca"}
                linkedIn={""}
                image={"Mazen.JPG"}
              />
              <Member
                firstName={"Rahil"}
                lastName={"Kaddad"}
                position={"Director of External"}
                program={"B.Eng Elec"}
                discord={"rahilkakkad"}
                emailIEEE={"external@ieeeconcordia.ca"}
                linkedIn={""}
                image={""}
              />
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
