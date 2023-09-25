import React, { useEffect, useState } from "react";
import { connectToDatabase } from "@/lib/mongodb"; // Import the MongoDB connection function

export default function LabStatus() {
  const [latestData, setLatestData] = useState({});

  useEffect(() => {
    fetch("/api/fetchData")
      .then((response) => response.json())
      .then((data) => {
        setLatestData(data);
      });
  }, []);

  const labOpen = () => {
    <div className="w-full md:w-fit bg-yellow-400 md:rounded-b-xl text-center text-black font-raleway font-bold align-middle py-2 px-8 gap-0">
      Lab Status: Unavailable
    </div>;
  };

  const labClosed = () => {
    <div className="w-full md:w-fit bg-yellow-400 md:rounded-b-xl text-center text-black font-raleway font-bold align-middle py-2 px-8 gap-0">
      Lab Status: Unavailable
    </div>;
  };

  return (
    <div className="w-full md:w-fit bg-yellow-400 md:rounded-b-xl text-center text-black font-raleway font-bold align-middle py-2 px-8 gap-0">
      Lab Status: Unavailable
    </div>
  );
}
