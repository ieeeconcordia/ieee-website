import React from "react";
import RootLayout from "../layout";
import styles from "@/styles/markdown.module.css";
import Link from "next/link";

export default function IntroToMatlab() {
  return (
    <RootLayout>
      <div className="max-w-4xl md:max-w-full flex flex-col px-8 sm:px-20 xl:px-section mb-2">
        <h1 className="font-lora font-bold text-center text-headline-l text-secondary pb-4">
          Intro to Matlab
        </h1>
      </div>
      <div className={styles.markdown}>
        <img
          src="Intro-to-Matlab.png"
          alt="Intro to Matlab Banner"
          className="w-full max-h-80 object-cover"
        />
        <div>
          <ul>
            <li>Date: Oct 5th, 2023</li>
            <li>Location: MB Building - S1.435</li>
            <li>Time: 18:00-20:00</li>
          </ul>
          <h2 id="about-the-event">About The Event</h2>
          <p>
            Are you ready to unlock the potential of MATLAB? Join us for an
            interactive workshop designed to introduce you to the fundamentals
            of this powerful programming language and software environment.
            MATLAB is widely used in academia and industry for a variety of
            applications, including data analysis, simulation, and scientific
            computing.
          </p>
          <h2 id="why-should-i-attend">Workshop Highlights</h2>
          <p>
            In this beginner-friendly session, you'll learn how to: <br />
            <br />- Navigate the MATLAB interface with confidence.
            <br />- Write and execute basic MATLAB commands and scripts.
            <br />- Perform essential mathematical and data manipulation
            operations.
            <br />- Visualize data and create stunning plots and charts.
            <br />- Gain a foundational understanding of programming concepts in
            MATLAB.
          </p>
          <h2 id="why-should-i-attend">Exciting Extras</h2>
          <p>
            In addition to the workshop, we have some exciting extras lined up
            for you, including giveaways of MATLAB-related goodies and
            complimentary snacks and refreshments to keep you energized and
            refreshed throughout the event.
          </p>
          <h2 id="why-should-i-attend">Why Should I Attend</h2>
          <p>
            Whether you're a science, engineering, or mathematics student
            looking to enhance your computational skills or simply curious about
            the world of MATLAB, this workshop is the perfect starting point. No
            prior experience is required, so come ready to explore and
            experiment!
            <br />
            <br />
            <b>Please RSVP to reserve your spot, as space is limited.</b>
          </p>
          <Link
            href={"https://events.vtools.ieee.org/m/373371"}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold font-raleway py-2 px-4 rounded"
          >
            Register Now!
          </Link>
        </div>
      </div>
    </RootLayout>
  );
}
