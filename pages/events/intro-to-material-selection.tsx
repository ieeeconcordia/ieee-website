import React from "react";
import RootLayout from "../layout";
import styles from "@/styles/markdown.module.css";
import Link from "next/link";

export default function IntroToMaterialSelection() {
  return (
    <RootLayout>
      <div className="max-w-4xl md:max-w-full flex flex-col px-8 sm:px-20 xl:px-section mb-2">
        <h1 className="font-lora font-bold text-center text-headline-l text-secondary pb-4">
          Intro to Material Selection
        </h1>
      </div>
      <div className={styles.markdown}>
        <img
          src="/events/Intro-to-material-selection.webp"
          alt="Material Selection Banner"
          className="w-full max-h-80 object-cover"
        />
        <div>
          <ul>
            <li>Date: Nov 9th, 2023</li>
            <li>Location: H-529</li>
            <li>Time: 18:00-21:00</li>
          </ul>
          <h2 id="about-the-event">About The Event</h2>
          <p>
            Calling all future engineers, creative DIY enthusiasts, and
            passionate project builders seeking to expand their material
            knowledge beyond the ordinary! Join us for an insightful Workshop on
            choosing materials for your projects from a DIY perspective.
            Discover a world of material properties: strength, impact
            resistance, cost, and ease of manufacturing. <br />
            <br /> From injection molding to 3D printing, woods to metals, and
            glass to acrylic, explore the myriad tools and techniques available
            beyond the conventional. Engage directly with various materials,
            understanding their nuances and unlocking their potential
            applications in your projects.
          </p>
          <h2 id="what-you-need">Why should I attend</h2>
          <p>
            Students enrolled or about to enroll in 390 or 490, passionate
            project enthusiasts, machine builders, and individuals seeking to
            delve into alternative materials—this workshop is tailored to expand
            your material understanding and enhance your projects' potential.
            <br />
            <br />
            This workshop offers a unique opportunity to gain hands-on
            experience with diverse materials, enhancing your project building
            skills and knowledge. ⚡💡📊
          </p>
          <h2 id="what-you-need">What You Need</h2>
          <p>
            To make the most of this tutorial, all you need is your enthusiasm
            for electrical engineering and a readiness to learn. Seats are
            limited, so secure your spot by registering today. We look forward
            to seeing you there! ⚡💡📊
          </p>
          <Link
            href={
              "https://www.zeffy.com/en-CA/ticketing/c6097e62-eaac-48c1-bc37-01adac47abcb"
            }
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold font-raleway py-2 px-4 rounded"
          >
            Register Now!
          </Link>
        </div>
      </div>
    </RootLayout>
  );
}
