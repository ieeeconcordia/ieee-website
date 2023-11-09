import React from "react";
import RootLayout from "../layout";
import styles from "@/styles/markdown.module.css";
import Link from "next/link";

export default function RobowarsInfoSession() {
  return (
    <RootLayout>
      <div className="max-w-4xl md:max-w-full flex flex-col px-8 sm:px-20 xl:px-section mb-2">
        <h1 className="font-lora font-bold text-center text-headline-l text-secondary pb-4">
          Robowars Info Session
        </h1>
      </div>
      <div className={styles.markdown}>
        <img
          src="robowars-info-session.webp"
          alt="Robowars Info Session Banner"
          className="w-full max-h-80 object-cover"
        />
        <div>
          <ul>
            <li>Date: Nov 15th, 2023</li>
            <li>Location: H-655.02</li>
            <li>Time: 12:00-13:00</li>
          </ul>
          <h2 id="about-the-event">About The Event</h2>
          <p>
            Are you ready to unleash your inner engineer and compete in a
            thrilling sumo robot challenge? Do you want to test your skills in
            an internationally-recognized robot competition? Come join us for a
            thrilling competition and show the world what you can do! Learn all
            about it during our information session, where you will learn
            exactly what Robowars is, how to participate, what you need to build
            your bot & more!
          </p>
          <h2>Why Should I Attend</h2>
          <p>
            In this beginner-friendly session, you'll learn how to: <br />
            <br />
            -Get all the information, rules and tips you need to join the
            robowars, a sumo robot competition happening in March 2024.
            <br />- Meet other like-minded students and make a team.
            <br />- Learn what is expected in your robot.
            <br />- Watch Previous year competition's footage to get a better
            understanding.
          </p>
          <h2 id="what-you-need">What You Need</h2>
          <p>
            All you need is the will to learn and build the ultimate robot.
            Don't miss this opportunity to learn, create, and compete in
            Robowars. Start your sumo robot adventure! 🤖🥊
          </p>
        </div>
      </div>
    </RootLayout>
  );
}
