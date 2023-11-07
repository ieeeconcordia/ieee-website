import React from "react";
import RootLayout from "../layout";
import styles from "@/styles/markdown.module.css";
import Link from "next/link";

export default function IntroToLabEquipement() {
  return (
    <RootLayout>
      <div className="max-w-4xl md:max-w-full flex flex-col px-8 sm:px-20 xl:px-section mb-2">
        <h1 className="font-lora font-bold text-center text-headline-l text-secondary pb-4">
          Intro to Lab Equipements
        </h1>
      </div>
      <div className={styles.markdown}>
        <img
          src="Intro-to-lab-equipement.webp"
          alt="IEEEXtreme Banner"
          className="w-full max-h-80 object-cover"
        />
        <div>
          <ul>
            <li>Date: Sep 14th, 2023</li>
            <li>Location: B-Annex 204</li>
            <li>Time: 16:00-21:00</li>
          </ul>
          <h2 id="about-the-event">About The Event</h2>
          <p>
            Join IEEE Concordia for an informative tutorial tailored to ELEC 273
            and ELEC 311 students. Discover essential lab equipment skills,
            including breadboard usage, power supplies, multimeters, and
            function generators. These skills are vital for your coursework and
            future as an electrical engineer. Don't miss out - register now and
            kickstart your journey to mastering electrical engineering!
          </p>
          <h2 id="what-you-need">What You Need</h2>
          <p>
            To make the most of this tutorial, all you need is your enthusiasm
            for electrical engineering and a readiness to learn. Seats are
            limited, so secure your spot by registering today. We look forward
            to seeing you there! ⚡💡📊
          </p>
          <Link
            href={"https://events.vtools.ieee.org/m/372975"}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold font-raleway py-2 px-4 rounded"
          >
            Register Now!
          </Link>
        </div>
      </div>
    </RootLayout>
  );
}
