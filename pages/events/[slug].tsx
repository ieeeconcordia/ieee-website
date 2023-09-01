import { getEventData, getEventSlugs } from "@/lib/events";
import RootLayout from "../layout";
import styles from "@/styles/markdown.module.css";
import Image from "next/image";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "@/lib/firebase";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Event() {
  const router = useRouter();
  const { _id } = router.query;

  const [eventData, setEventData] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const docRef = doc(firestore, "Event", `${_id}`);
      const docSnap = await getDoc(docRef);

      const eventData = docSnap.exists() ? docSnap.data() : {};
      console.log(eventData);

      setEventData(eventData);
    }

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once

  if (!eventData) {
    return <p>Loading...</p>;
  }

  console.log(eventData);
  return (
    <RootLayout>
      <div className="max-w-4xl md:max-w-full flex flex-col gap-2 px-8 sm:px-20 xl:px-section">
        <h1 className="font-lora font-bold text-center text-headline-l text-secondary pb-4">
          {eventData.title}
        </h1>
        <img
          src={eventData.image}
          alt=""
          className="w-full max-h-80 object-cover rounded-lg mb-2"
        />
      </div>
      <div
        className={styles.markdown}
        dangerouslySetInnerHTML={{ __html: eventData.eventHTML }}
      />
    </RootLayout>
  );
}

// export async function getServerSideProps(context: { query: any }) {
//   // Retrieve sensitive data from query parameters
//   const { _id } = context.query;

//   const docRef = doc(firestore, "Event", `${_id}`);
//   const docSnap = await getDoc(docRef);

//   const eventData = docSnap.exists() ? docSnap.data() : {};
//   console.log(eventData);

//   return {
//     props: {
//       event: eventData,
//     },
//   };
// }
