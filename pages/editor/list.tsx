// import React, { useState, useEffect } from "react";
// import { DocumentData, collection, getDocs } from "firebase/firestore";
// import { firestore } from "@/lib/firebase";
// import EventCard from "@/components/cards/EventCard";

// export default function List() {
//   const [events, setEvents] = useState<{ id: string; data: DocumentData }[]>(
//     []
//   ); // State to store events data

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const eventsQuerySnapshot = await getDocs(
//           collection(firestore, "Event")
//         );
//         const eventsData: { id: string; data: DocumentData }[] = [];

//         eventsQuerySnapshot.forEach((doc) => {
//           eventsData.push({
//             id: doc.id,
//             data: doc.data(),
//           });
//           console.log(doc.data());
//         });

//         setEvents(eventsData); // Update the state with events data
//         console.log(eventsData);
//       } catch (error) {
//         console.error("Error fetching events:", error);
//       }
//     };

//     fetchEvents();
//   }, []);
//   return (
//     <div>
//       <h1>list</h1>
//       <div>
//         <h2>Events</h2>
//         {/* {events.map((event: any) => (
//           <EventCard
//             key={event.id}
//             _id={event.id}
//             name={event.data.title}
//             date={event.data.date}
//             location={event.data.location}
//             time={event.time}
//             price={event.price}
//             eventType={event.eventType}
//             description={event.description}
//             image={event.data.image}
//             organizer={""}
//             sponsors={""}
//           />
//         ))} */}
//       </div>
//     </div>
//   );
// }

// export async function getServerSideProps() {
//   const eventsQuerySnapshot = await getDocs(collection(firestore, "Event"));
//   const projectsQuerySnapshot = await getDocs(
//     collection(firestore, "projects")
//   );

//   const eventsData: { id: string; data: DocumentData }[] = [];
//   eventsQuerySnapshot.forEach((doc) => {
//     eventsData.push({
//       id: doc.id,
//       data: doc.data(),
//     });
//     console.log("Event: " + doc.data());
//   });

//   const projectsData: { id: string; data: DocumentData }[] = [];
//   projectsQuerySnapshot.forEach((doc) => {
//     projectsData.push({
//       id: doc.id,
//       data: doc.data(),
//     });
//   });

//   return {
//     props: {
//       events: eventsData, // Use the correct prop names here
//       projects: projectsData, // Use the correct prop names here
//     },
//   };
// }
