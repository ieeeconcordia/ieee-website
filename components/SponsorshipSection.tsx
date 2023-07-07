import React, { useState, useEffect } from "react";
import sponsors from "../public/sponsors/DummySponsor.png";
import Image from "next/image";
import { SponsorshipBtn } from "./buttons/SponsorshipBtn";

export const SponsorshipSection = () => {
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
    <div className="flex flex-col bg-sponsorship gap-16 text-start items-center  py-10 pb-16 md:pb-14">
      <div>
        <h2 className="font-lora font-bold text-headline-l sm:text-display-m text-center text-white pb-12 px-8 sm:px-20 xl:px-section">
          Sponsors
        </h2>
        <p className="font-raleway text-title-m sm:text-title-l text-white px-8 sm:px-20 xl:px-section">
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

      <p className="font-raleway text-title-m sm:text-title-l text-white px-8 sm:px-20 xl:px-section">
        As a sponsor of Concordia IEEE, you{" "}
        <b>become an integral part of our association</b>, making a positive
        impact on tutorials, competitions, and the wider university community.
        Join us and help empower future engineers as they pursue excellence.
        Together, we can achieve remarkable growth and accomplish great things.
      </p>
      <SponsorshipBtn text={"Become a sponsor!"} />
    </div>
  );
};
