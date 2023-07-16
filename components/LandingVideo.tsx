import React from "react";
import HomeTypingAnimation from "./animations/HomeTypingAnimation";

export default function LandingVideo() {
  return (
    <div className="min-h-screen bg-black">
      <div className="relative">
        <video
          className="w-full h-screen object-cover opacity-10"
          src="Highlight-Video.mp4"
          autoPlay
          muted
          loop
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-4xl md:text-6xl lg:text-7xl text-center text-gray-100 font-raleway font-bold">
          <HomeTypingAnimation />
        </div>
      </div>
    </div>
  );
}
