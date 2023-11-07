import React from "react";
import RootLayout from "../layout";
import styles from "@/styles/markdown.module.css";
import Link from "next/link";

export default function IntroToTransistors() {
  return (
    <RootLayout>
      <div className="max-w-4xl md:max-w-full flex flex-col px-8 sm:px-20 xl:px-section mb-2">
        <h1 className="font-lora font-bold text-center text-headline-l text-secondary pb-4">
          Intro to Transistors
        </h1>
      </div>
      <div className={styles.markdown}>
        <img
          src="Intro-to-transistors.webp"
          alt="Intro to Transistors Banner"
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
            🔌🔬 Join us for an insightful workshop on the essential components
            of modern technology - transistors. We will delve into the
            fundamentals of various transistor types, exploring their distinct
            behaviors across different operating modes.
          </p>
          <h2>Why Should I Attend</h2>
          <p>
            🧠💡 This workshop offers a unique opportunity to solidify your
            theoretical understanding of transistors. Through hands-on
            experience, you'll build and experiment with real electric circuits,
            bridging the gap between theory and practice. Don't miss out on this
            invaluable learning experience; register now!
          </p>
          <h2 id="what-you-need">What You Need</h2>
          <p>
            👩‍🔧🧰 To fully participate, bring your enthusiasm for electronics and
            a readiness to learn. We'll provide all the necessary materials and
            guidance to ensure you gain practical knowledge about transistors.
          </p>
          {/* <Link
            href={"https://www.arduino.cc/en/software"}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold font-raleway py-2 px-4 rounded"
          >
            Arduino IDE
          </Link> */}
        </div>
      </div>
    </RootLayout>
  );
}
