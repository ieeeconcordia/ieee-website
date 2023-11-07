import Link from "next/link";
import React from "react";
import RootLayout from "../layout";
import styles from "@/styles/markdown.module.css";

export default function IEEEday() {
  return (
    <RootLayout>
      <div className="max-w-4xl md:max-w-full flex flex-col px-8 sm:px-20 xl:px-section mb-2">
        <h1 className="font-lora font-bold text-center text-headline-l text-secondary pb-4">
          IEEE Day
        </h1>
      </div>
      <div className={styles.markdown}>
        <img
          src="IEEE-Day.webp"
          alt="IEEE-Day Banner"
          className="w-full max-h-80 object-cover"
        />
        <div>
          <ul>
            <li>Date: Oct 3rd, 2023</li>
            <li>Location: TBA</li>
            <li>Time: TBA</li>
          </ul>
          <h2 id="about-the-event">About The Event</h2>
          <p>
            IEEE Day is an annual celebration of IEEE around the world that
            recognizes and acknowledges the dedication and vision of IEEE. This
            day marks the anniversary of the first time IEEE members gathered to
            share their technical ideas in 1884. Whether a member or not, you
            are invited to expand your knowledge and cherish with us the history
            and achievements of IEEE.
          </p>

          <h2 id="why-should-i-attend">Why Should I Attend</h2>
          <p>
            Various fun activities related to engineering will be held
            therefore, you'll have the perfect opportunity to have fun while
            networking and learning more about the field of technology.
            Furthermore, we promise you a delightful and entertaining event with
            food and drinks served so come celebrate with us!
          </p>
        </div>
      </div>
    </RootLayout>
  );
}
