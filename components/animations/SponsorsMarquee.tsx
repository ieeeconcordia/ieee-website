import Image from "next/image";
import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

export default function SponsorsMarquee() {
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
    <div className="">
      <Marquee>
        {images.map((image) => (
          <img
            className="mx-1 bg-white rounded-lg"
            width={150}
            height={100}
            alt={"alt"}
            src={`/sponsors/${image}`}
            key={image}
          />
        ))}
      </Marquee>
    </div>
  );
}
