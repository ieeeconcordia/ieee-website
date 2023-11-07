import React from "react";
import RootLayout from "../layout";
import styles from "@/styles/markdown.module.css";

export default function Warhacks() {
  return (
    <RootLayout>
      <div className="max-w-4xl md:max-w-full flex flex-col px-8 sm:px-20 xl:px-section mb-2">
        <h1 className="font-lora font-bold text-center text-headline-l text-secondary pb-4">
          Warhacks
        </h1>
      </div>
      <div className={styles.markdown}>
        <img
          src="Warhacks.webp"
          alt="Warhacks Banner"
          className="w-full max-h-80 object-cover"
        />
        <div>
          <ul>
            <li>Date: Feb 18th, 2024</li>
            <li>Location: TBA</li>
            <li>Time: TBA</li>
          </ul>
          <h2 id="about-the-event">About The Event</h2>
          <p>
            Warhacks is a one-day event designed to introduce you to the world
            of hardware hackathon. Come spend the day with us, and you will get
            to build your robot from scratch.
          </p>
          <h2 id="what-you-need">What You Need</h2>
          <p>
            There is no previous knowledge needed, Warhacks offers different
            workshop tutorials that will teach you skills for robotics building.
            Things like programming, motor control, sensor reading, and much
            more will be covered during these tutorials.
          </p>
          <h2 id="the-competition">The Competition</h2>
          <p>
            Working in teams of three or four, you will put your creativity to
            work and build a robot that will accomplish some given challenges.
            These challenges will be unveiled at the beginning of the
            competition.
          </p>
          <h2 id="why-should-i-attend">Why Should I Attend</h2>
          <p>
            Choosing where to continue your education after graduating is tough.
            What should I study, what university/ college should I go to? It can
            be hard to work out what you should study and where. We do not have
            a solution for that, but we offer an opportunity to explore one of
            your interests.
          </p>
        </div>
      </div>
    </RootLayout>
  );
}
