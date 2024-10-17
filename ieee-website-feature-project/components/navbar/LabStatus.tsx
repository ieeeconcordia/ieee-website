import React, { useEffect, useState } from "react";
import { connectToDatabase } from "@/lib/mongodb"; // Import the MongoDB connection function

export default function LabStatus() {
  const [latestData, setLatestData] = useState(false);
  const [request, setRequest] = useState(false);

  useEffect(() => {
    fetch("/api/labstatus")
      .then((response) => response.json())
      .then((data) => {
        setLatestData(data.status == "open");
        setRequest(true);
      });
  }, []);

  const labLoading = (
    <div className="w-full md:w-fit bg-gray-400 md:rounded-b-xl text-center text-black font-raleway font-bold align-middle py-2 px-8 gap-0">
      Lab Status: Loading
    </div>
  );

  const labOpen = (
    <div className="w-full md:w-fit bg-green-400 md:rounded-b-xl text-center text-black font-raleway font-bold align-middle py-2 px-8 gap-0">
      Lab Status: Open 🎉
    </div>
  );

  const labClosed = (
    <div className="w-full md:w-fit bg-red-400 md:rounded-b-xl text-center text-black font-raleway font-bold align-middle py-2 px-8 gap-0">
      Lab Status: Closed ⛔
    </div>
  );

  return request ? (latestData ? labOpen : labClosed) : labLoading;
}
