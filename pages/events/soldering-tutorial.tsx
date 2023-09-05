import React from "react";
import RootLayout from "../layout";
import styles from "@/styles/markdown.module.css";
import Link from "next/link";

export default function SolderingTutorial() {
  return (
    <RootLayout>
      <div className="max-w-4xl md:max-w-full flex flex-col px-8 sm:px-20 xl:px-section mb-2">
        <h1 className="font-lora font-bold text-center text-headline-l text-secondary pb-4">
          Soldering Tutorial
        </h1>
      </div>
      <div className={styles.markdown}>
        <img
          src="Soldering-Tutorial.png"
          alt="ISoldering Tutuorial Banner"
          className="w-full max-h-80 object-cover"
        />
        <div>
          <ul>
            <li>Date: Mar 18th, 2024</li>
            <li>Location: TBA</li>
            <li>Time: 14:00-16:00</li>
          </ul>
          <h2 id="about-the-event">About The Event</h2>
          <p>
            <b>Want to learn the art of soldering?</b> If YES, then this
            workshop is for you! Learning how to solder is an essential skill
            while working with electronic components, especially PCBs. Attending
            the tutorial gives you the unique opportunity to learn how to solder
            a PCB without damaging its components. By enhancing your soldering
            skills, you'll be pushing your innovation boundaries and you'll be
            able to invent new gadgets and repair damaged ones.
          </p>
          <h2 id="what-you-need">What You Need</h2>
          <p>
            This tutorial is designed for beginners; therefore, no previous
            knowledge is required. All fundamental soldering tools and materials
            will be provided.
          </p>
        </div>
      </div>
    </RootLayout>
  );
}
