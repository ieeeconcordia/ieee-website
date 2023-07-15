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
        <h2 className="font-lora font-bold text-headline-l text-center text-white pb-12 px-8 sm:px-20 xl:px-section">
          Sponsors
        </h2>
        <p className="font-raleway text-center text-title-s md:text-lg text-white px-8 sm:px-20 xl:px-section">
          From technical expertise to essential products and funding, our
          sponsors enable us to strive for technical excellence.
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
      <SponsorshipBtn text={"Become a sponsor!"} />
    </div>
  );
};
