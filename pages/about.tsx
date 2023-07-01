import { Member } from "@/components/cards/Member";
import RootLayout from "./layout";
import { SponsorshipBtn } from "@/components/buttons/SponsorshipBtn";
import { SponsorshipSection } from "@/components/SponsorshipSection";
import { useEffect, useState } from "react";

export default function About() {
  const [execTeam, setExecTeam] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/execTeam");
      const data = await response.json();
      setExecTeam(data); // store the response from the API route
    };

    fetchData();
  }, []);

  return (
    <>
      <RootLayout>
        <div className="w-full bg-center bg-no-repeat bg-cover bg-execTeam ">
          <h4
            className="bg-black bg-opacity-75 text-center font-raleway font-bold text-5xl text-white py-16"
            style={{ zIndex: "1" }}
          >
            &ldquo;The people behind the work&ldquo;
          </h4>
        </div>
        <section className="flex flex-col items-center gap-16 pt-container pb-20">
          <div className="">
            <div className="relative">
              <div
                style={{ position: "relative", zIndex: 2 }}
                className="px-8 sm:px-20 xl:px-section pt-7"
              >
                <p className="font-raleway text-center font-title-gray text-title-m">
                  Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
              </div>
            </div>
          </div>
          {/* Exec Team */}
          <div className="container flex flex-col justify-center items-center gap-6">
            <h2 className="text-center font-raleway font-semibold text-headline-l text-secondary">
              Exec Team
            </h2>
            <div className="w-fit grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-6 sm:gap-10">
              {execTeam.map(
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
              )}
            </div>
          </div>

          {/* Lab Supervisors */}
          <div className="container flex flex-col justify-center items-center gap-6">
            <h2 className="text-center font-raleway font-semibold text-headline-l text-secondary">
              Lab Supervisors
            </h2>
            <div className="w-fit grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-6 sm:gap-10"></div>
            <SponsorshipBtn text={"Become a lab supervisor!"} />
          </div>
        </section>
        <SponsorshipSection />
      </RootLayout>
    </>
  );
}
