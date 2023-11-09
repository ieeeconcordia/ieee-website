import React from "react";
import RootLayout from "../layout";
import styles from "@/styles/markdown.module.css";
import Link from "next/link";

export default function IntroToMicrocontrollers() {
  return (
    <RootLayout>
      <div className="max-w-4xl md:max-w-full flex flex-col px-8 sm:px-20 xl:px-section mb-2">
        <h1 className="font-lora font-bold text-center text-headline-l text-secondary pb-4">
          Intro to Microcontrollers
        </h1>
      </div>
      <div className={styles.markdown}>
        <img
          src="Intro-to-Microcontrollers.webp"
          alt="Intro to Microcontrollers Banner"
          className="w-full max-h-80 object-cover"
        />
        <div>
          <ul>
            <li>Date: Nov 23rd, 2023</li>
            <li>Location: H-537</li>
            <li>Time: 18:00-21:00</li>
          </ul>
          <h2 id="about-the-event">About The Event</h2>
          <p>
            Welcome to the "Intro to Microcontrollers" workshop ⚒🤖, where
            you'll embark on an exciting journey into the world of
            microcontrollers! This event is specially designed for students like
            you who are curious about these tiny but powerful devices and want
            to understand how they work and what you can do with them.
          </p>
          <h2>Why Should I Attend</h2>
          <p>
            In this beginner-friendly session, you'll learn how to: <br />
            <br />- Take away your own ESP32 kit with lots of components like
            ESP32, breadboad, motor controller, and many sensors like IR,
            Temperature and Humidity, PRI sensors.
            <br />- Understanding of basic functionality of the ESP32
            microcontroller
            <br />- Code using arduino IDE to program the microcontroller
            <br />- Control lights with your phone
            <br />- Use motion control with the help of a infrared sensor
          </p>
          <h2 id="what-you-need">What You Need</h2>
          <p>
            A laptop (Windows, macOS, or Linux) to write and upload code to
            microcontrollers, curiosity, and an open mind ready to explore the
            world of microcontrollers. No prior experience is necessary; this
            workshop is designed for beginners. ⚡💡📊
          </p>
          <Link
            href={
              "https://www.zeffy.com/en-CA/ticketing/0099459e-7500-43ec-aac4-bec7a40480b6"
            }
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold font-raleway py-2 px-4 rounded"
          >
            Arduino IDE
          </Link>
        </div>
      </div>
    </RootLayout>
  );
}
