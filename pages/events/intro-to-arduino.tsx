import React from "react";
import RootLayout from "../layout";
import styles from "@/styles/markdown.module.css";
import Link from "next/link";

export default function IntroToArduino() {
  return (
    <RootLayout>
      <div className="max-w-4xl md:max-w-full flex flex-col px-8 sm:px-20 xl:px-section mb-2">
        <h1 className="font-lora font-bold text-center text-headline-l text-secondary pb-4">
          Intro to Arduino
        </h1>
      </div>
      <div className={styles.markdown}>
        <img
          src="Intro-to-Arduino.png"
          alt="Intro to Arduino Banner"
          className="w-full max-h-80 object-cover"
        />
        <div>
          <ul>
            <li>Date: Nov 9th, 2023</li>
            <li>Location: H-620</li>
            <li>Time: 16:00-21:00</li>
          </ul>
          <h2 id="about-the-event">About The Event</h2>
          <p>
            Unlock your programming potential with our Arduino Workshops! Join
            IEEE Concordia for 2 engaging introductory workshops where you'll
            learn Arduino fundamentals and gain hands-on experience. Explore the
            microcontroller's vast applications and immediately apply your
            knowledge with guidance from experienced tutors.
          </p>
          <h2>Why Should I Attend</h2>
          <p>
            Explore Arduino's broad applications in home automation, robotics,
            and IoT devices. Some examples of DIY projects are Automated Plant
            Watering System, Smart Thermostat, Line-Following Robot and there
            are way more!
          </p>
          <h2 id="what-you-need">What You Need</h2>
          <p>
            Just bring <b>your laptop with the required USB A Cable dongle</b>.
            Ensure you've installed Arduino software with Admin permissions.
            ⚡💡📊
          </p>
          <Link
            href={"https://www.arduino.cc/en/software"}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold font-raleway py-2 px-4 rounded"
          >
            Arduino IDE
          </Link>
        </div>
      </div>
    </RootLayout>
  );
}
