import React from "react";
import RootLayout from "../layout";
import styles from "@/styles/markdown.module.css";
import Link from "next/link";

export default function IEEEXtreme() {
  return (
    <RootLayout>
      <div className="max-w-4xl md:max-w-full flex flex-col px-8 sm:px-20 xl:px-section mb-2">
        <h1 className="font-lora font-bold text-center text-headline-l text-secondary pb-4">
          IEEEXtreme
        </h1>
      </div>
      <div className={styles.markdown}>
        <img
          src="IEEEXtreme.webp"
          alt="IEEEXtreme Banner"
          className="w-full max-h-80 object-cover"
        />
        <div>
          <ul>
            <li>Date: Oct 28th, 2023</li>
            <li>Location: TBA</li>
            <li>Time: TBA</li>
          </ul>
          <h2 id="about-the-event">About The Event</h2>
          <p>
            IEEEXtreme is a global 24-hour marathon during which teams of three
            or four programmers are given a set of programming questions to
            solve. As soon as the countdown begins, team members will need to
            cooperate, strategize, and join their coding skills together to
            solve a set of challenging programming problems.
          </p>
          <h2 id="what-you-need">What You Need</h2>
          <p>
            All you need to do is to form a team of three to four. Have some
            doubts about your understanding of algorithms and coding skills?
            we’ve got you covered. We will be hosting some training sessions
            prior to the competition.
          </p>
          <h2 id="the-competition">The Competition</h2>
          <p>
            Using your computer science expertise, you will need to come up with
            fast solutions to each of the problems in a matter of hours. In
            order to win you need to solve as many problems as possible. During
            this race against time, you will have the unique opportunity to test
            your time management skills and discover your true potential while
            having fun and making memories.
          </p>
          <h2 id="why-should-i-attend">Why Should I Attend</h2>
          <p>
            IEEEXtreme will give you the perfect chance to compete on a global
            stage and dig deep into the coding universe. The winning team will
            have the golden opportunity to attend any IEEE conference of their
            choice, anywhere in the world, with the costs covered. It's a
            competition that invites you to make unforgettable memories, push
            your skills to the limits and gain profound experience. So, what are
            you waiting for? Go assemble your unbeatable teams and join us on
            this extraordinary journey!
          </p>
          <Link
            href={"https://ieeextreme.org/"}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold font-raleway py-2 px-4 rounded"
          >
            Learn More
          </Link>
        </div>
      </div>
    </RootLayout>
  );
}
