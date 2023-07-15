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
      <div className="flex flex-col gap-16 text-start items-center py-10 pb-16 md:pb-14">
        {/* <div className="w-full flex flex-col gap-8">
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
      </div> */}

        {/* To be used */}

        {/* <div className="flex flex-col bg-sponsorship gap-16 text-start items-center  py-10 pb-16 md:pb-14">
      <div>
        <h2 className="font-lora font-bold text-headline-l text-center text-white pb-12 px-8 sm:px-20 xl:px-section">
          Sponsors
        </h2>
        <p className="font-raleway text-title-s md:text-lg text-white px-8 sm:px-20 xl:px-section">
          Our sponsors are vital to our success, and we are deeply grateful for
          their support. With their generosity, we can host a variety of events
          and projects and provide cutting-edge equipment for electrical and
          electronics endeavors. From technical expertise to essential products
          and funding,{" "}
          <b>our sponsors enable us to strive for technical excellence</b>.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-4 md:px-16 xl:px-32">
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

      <p className="font-raleway text-title-m md:text-lg text-white px-8 sm:px-20 xl:px-section">
        As a sponsor of Concordia IEEE, you{" "}
        <b>become an integral part of our association</b>, making a positive
        impact on tutorials, competitions, and the wider university community.
        Join us and help empower future engineers as they pursue excellence.
        Together, we can achieve remarkable growth and accomplish great things.
      </p>
      <SponsorshipBtn text={"Become a sponsor!"} />
      
    </div> */}

        <div>
          <h2 className="font-lora font-bold text-headline-l text-secondary text-center pb-12 px-8 sm:px-20 xl:px-section">
            Sponsors
          </h2>
          <p className="font-raleway text-center text-title-s md:text-lg px-8 sm:px-20 xl:px-section">
            From technical expertise to essential products and funding, our
            sponsors enable us to strive for technical excellence.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-4 md:px-16 xl:px-32">
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
    </RootLayout>
  );
}
