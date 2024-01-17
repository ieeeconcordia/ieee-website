import Link from "next/link";
import React from "react";
import RootLayout from "../layout";
import styles from "@/styles/markdown.module.css";

export default function ModelingAndDesign() {
  return (
    <RootLayout>
      <div className="max-w-4xl md:max-w-full flex flex-col px-8 sm:px-20 xl:px-section mb-2">
        <h1 className="font-lora font-bold text-center text-headline-l text-secondary pb-4">
          3D Modeling and Design P2
        </h1>
      </div>
      <div className={styles.markdown}>
        <img
          src="3D-Modeling-and-Design.webp"
          alt="3D Modeling and Design Banner"
          className="w-full max-h-80 object-cover"
        />
        <div>
          <ul>
            <li>Date: Oct 26th, 2023</li>
            <li>Location: MB - 3.255</li>
            <li>Time: 18:00-21:00</li>
          </ul>
          <h2 id="about-the-event">About The Event</h2>
          <p>
            Are you ready to bring your design ideas to life? Join us for an
            exciting workshop where you'll dive into the world of Fusion 360, a
            cutting-edge 3D CAD modeling software used by designers, engineers,
            and artists worldwide. This workshop is catered to students with no
            prior experience in 3D modeling nor 3D printing. It covers the
            fundamental functionalities of the software and design approaches
            when creating a 3D model. Students will be guided through the design
            of a common object and will be able to take it home at the end of
            the workshop!
          </p>
          <h2 id="what-you-need">What You Need</h2>
          <p>
            We will be using Fusion 360. To follow along with the presentation,
            you must have a computer with Fusion installed on it. There is a
            free educational license for students. Please come to the workshop
            with a working copy of the software. If you need help with the
            installation process, reach out in advance and we will be glad to
            help.
          </p>
          <span className="flex flex-col sm:flex-row gap-6">
            <Link
              href={
                "https://www.autodesk.ca/en/products/fusion-360/overview?term=1-YEAR&tab=subscription"
              }
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold font-raleway py-2 px-4 rounded"
            >
              Fusion 360
            </Link>
          </span>
        </div>
      </div>
    </RootLayout>
  );
}
