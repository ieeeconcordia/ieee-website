import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export default function ImageCarousel() {
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
    <Carousel
      autoPlay
      interval={5000}
      transitionTime={5000}
      infiniteLoop
      showArrows={false}
      showStatus={false}
      showIndicators={false}
    >
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
    </Carousel>
  );
}
