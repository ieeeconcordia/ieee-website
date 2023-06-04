import { Member } from "@/components/cards/Member";
import RootLayout from "./layout";
import { SponsorshipBtn } from "@/components/buttons/SponsorshipBtn";
import { SponsorshipSection } from "@/components/SponsorshipSection";

export default function about() {
  return (
    <>
      <RootLayout>
        <div className="w-full bg-center bg-no-repeat bg-cover bg-execTeam ">
          <h4
            className="bg-black bg-opacity-75 text-center font-raleway font-semibold text-headline-l text-white py-36"
            style={{ zIndex: "1" }}
          >
            &ldquo;The people behind the work&ldquo;
          </h4>
        </div>
        <section className="flex flex-col gap-16 pt-container">
          <div className="">
            <div className="relative">
              <div
                style={{ position: "relative", zIndex: 2 }}
                className="px-section pt-7"
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
          <div className="container flex flex-col justify-center gap-6 px-section">
            <h2 className="text-center font-raleway font-semibold text-headline-l text-secondary">
              Exec Team
            </h2>
            <div className="w-fit flex flex-row flex-wrap justify-center gap-x-16 gap-y-8">
              <Member />
              <Member />
              <Member />
              <Member />
              <Member />
            </div>
          </div>

          {/* Lab Supervisors */}
          <div className="container flex flex-col justify-center items-center gap-6 px-section">
            <h2 className="text-center font-raleway font-semibold text-headline-l text-secondary">
              Lab Supervisors
            </h2>
            <div className="flex flex-row flex-wrap justify-center gap-x-16 gap-y-8">
              <Member />
              <Member />
              <Member />
            </div>
            <SponsorshipBtn text={"Become a lab supervisor!"} />
          </div>

          <SponsorshipSection />
        </section>
      </RootLayout>
    </>
  );
}
