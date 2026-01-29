import RootLayout from "./layout";
import Link from "next/link";
import { getLabSupervisorFormLink } from "@/lib/tina";
import { IoLocationSharp, IoTimeOutline } from "react-icons/io5";

export async function getStaticProps() {
  const lab_supervisors_form_link = await getLabSupervisorFormLink();
  return {
    props: { lab_supervisors_form_link },
  };
}

export default function Laboratory({ lab_supervisors_form_link }: any) {
  return (
    <RootLayout>
      {/* Hero Banner */}
      <div className="w-full bg-[#128DCD] text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold mb-4">The Lab</h1>
          <p className="text-lg text-white/90 max-w-3xl">
            Our lab is a space for IEEE members to work on projects, access
            equipment, and collaborate with fellow students.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Lab Info */}
            <div className="bg-white border border-[#B3DAE6] rounded-lg overflow-hidden">
              <div className="bg-gray-100 px-6 py-4 border-b border-[#B3DAE6]">
                <h2 className="text-xl font-bold text-gray-900">About Our Lab</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  The IEEE Concordia Lab is located on the Concordia University
                  campus and is equipped with various tools and equipment for
                  electronics projects, including soldering stations, oscilloscopes,
                  power supplies, and more.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <IoLocationSharp size={20} className="text-[#128DCD] mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Location</h3>
                      <p className="text-gray-600">
                        H-831, Hall Building<br />
                        Concordia University<br />
                        1455 De Maisonneuve Blvd. W.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <IoTimeOutline size={20} className="text-[#128DCD] mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Hours</h3>
                      <p className="text-gray-600">
                        Hours vary based on lab supervisor availability.<br />
                        Check our Discord for real-time lab status.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Equipment Checkout */}
            <div className="bg-white border border-[#B3DAE6] rounded-lg overflow-hidden">
              <div className="bg-gray-100 px-6 py-4 border-b border-[#B3DAE6]">
                <h2 className="text-xl font-bold text-gray-900">Equipment Checkout</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  IEEE members can borrow equipment from our lab for their projects.
                  We have a variety of tools and components available, including
                  Arduino boards, sensors, breadboards, and electronic components.
                </p>
                <p className="text-gray-600 mb-6">
                  To check out equipment, please visit the lab during open hours or
                  use our inventory system to see what's available.
                </p>
                <Link
                  href="https://inventory.ieeeconcordia.ca"
                  target="_blank"
                  className="inline-block px-6 py-3 bg-[#128DCD] text-white rounded-lg font-medium hover:bg-[#0e7ab8] transition-colors"
                >
                  View Inventory System
                </Link>
              </div>
            </div>
          </div>

          {/* Lab Supervisors Section */}
          <div className="mt-8 bg-white border border-[#B3DAE6] rounded-lg overflow-hidden">
            <div className="bg-[#128DCD] text-white px-6 py-4">
              <h2 className="text-xl font-bold">Become a Lab Supervisor</h2>
            </div>
            <div className="p-6 lg:flex lg:items-center lg:justify-between gap-8">
              <div className="lg:max-w-2xl mb-6 lg:mb-0">
                <p className="text-gray-600 mb-4">
                  Lab Supervisors play a vital role in keeping our lab open and
                  accessible to all members. As a Lab Supervisor, you'll have
                  the privilege of accessing the lab whenever you want and you get
                  to experiment in a fully equipped lab.
                </p>
                <p className="text-gray-600">
                  In exchange for this incredible opportunity, we simply ask for
                  your commitment to supervise the lab for just 2 hours a week.
                </p>
              </div>
              <Link
                href={lab_supervisors_form_link || "#"}
                className="inline-block px-8 py-4 bg-[#128DCD] text-white rounded-lg font-medium text-lg hover:bg-[#0e7ab8] transition-colors whitespace-nowrap"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
