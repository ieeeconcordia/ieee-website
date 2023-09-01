import React from "react";
import RootLayout from "../layout";
import styles from "@/styles/markdown.module.css";
import Link from "next/link";

export default function Robowars() {
  return (
    <RootLayout>
      <div className="max-w-4xl md:max-w-full flex flex-col px-8 sm:px-20 xl:px-section mb-2">
        <h1 className="font-lora font-bold text-center text-headline-l text-secondary pb-4">
          Robowars
        </h1>
      </div>
      <div className={styles.markdown}>
        <img
          src="Robowars.png"
          alt="Robowars Banner"
          className="w-full max-h-80 object-cover"
        />
        <div>
          <ul>
            <li>Date: Mar 14th, 2024</li>
            <li>Location: TBA</li>
            <li>Time: 9:00-17:00</li>
          </ul>
          <h2 id="about-the-event">About The Event</h2>
          <p>
            Robowars is a competitive robotic event that invites passionate and
            enthusiastic participants from all over Montreal and beyond to
            showcase their engineering skills. The goal is simple yet
            challenging: Build an autonomous robot that can outsmart rival
            robots by pushing them out of the arena while staying within the
            designated area. Prior to the competition day, you will have to
            design and program a sumo robot so that it can operate without any
            external governance during battles; This robot will have to compete
            with other robots within a limited area. In order to win, your robot
            should kick out its opponents while staying in the arena.
          </p>
          <h2 id="why-should-i-attend">Why Should I Attend</h2>
          <p>
            This competition will allow you to demonstrate your engineering
            expertise and connect with fellow robotic enthusiasts while enjoying
            an amazing competitive ambiance. Furthermore, many cash prizes are
            waiting for you, so don't miss this opportunity, and may the best
            robot win!
          </p>
          <h2 id="announcements">Announcements</h2>
          <p>
            We will also be hosting some training sessions prior to the
            competition so don't miss them.
          </p>
        </div>
      </div>
    </RootLayout>
  );
}
