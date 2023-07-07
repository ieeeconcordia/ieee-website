import React, { useState, useEffect } from "react";
import RootLayout from "./layout";
import sponsors from "@/public/sponsors/DummySponsor.png";
import Image from "next/image";
import Link from "next/link";

export default function Sponsorship() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/images");
      const data = await response.json();
      setImages(data.images); // store the response from the API route
    };

    fetchData();
  }, []);

  return (
    <RootLayout>
      <div className="flex flex-col items-center justify-items-center px-8 pb-16 sm:px-20 xl:px-section md:pb-14 ">
        <div className="w-full flex flex-col gap-8">
          <h2 className="font-lora font-bold text-center text-headline-m sm:text-headline-l text-secondary pb-3">
            Sponsorship
          </h2>
          <p className="font-raleway text-start text-title-gray text-title-l font-bold sm:text-headline-m pb-4">
            Want to become a sponsor?
          </p>
        </div>

        <div className="font-raleway text-black text-title-m sm:text-title-l">
          Contact our{" "}
          <a href="mailto:sponsor@ieeeconcordia.ca" className="underline">
            Vice-President of External Affairs
          </a>{" "}
          to learn more about how you can be a part of our vision for a more
          enriching experience as a student at the Gina Cody School of
          Engineering and Computer Science.
          <br />
          <br />
          Access the 2022-2023 sponsorship package by{" "}
          <Link
            href="../SponsorshipPackage.pdf"
            rel="noopener noreferrer"
            className="underline"
          >
            clicking here
          </Link>
          .
          <br />
          <br />
          <br />
        </div>
        <div className="px-4 flex flex-wrap items-start md:justify-center gap-4 md:gap-6 py-8 bg-slate-300 rounded-lg">
          {images.map((image) => (
            <Image
              className="w-40 rounded-lg shadow-lg"
              width={150}
              height={100}
              alt={"alt"}
              src={`/sponsors/${image}`}
              key={image}
            />
          ))}
        </div>
      </div>
    </RootLayout>
  );
}
