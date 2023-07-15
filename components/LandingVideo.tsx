import React from "react";

export default function LandingVideo() {
  return (
    <div className="min-h-screen bg-black">
      <div className="relative">
        <video
          className="w-full h-screen object-cover opacity-20"
          src="Highlight-Video.mp4"
          autoPlay
          muted
          loop
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-center text-white font-bold px-3">
            Your Bold White Text
          </h1>
        </div>
      </div>
    </div>
  );
}
