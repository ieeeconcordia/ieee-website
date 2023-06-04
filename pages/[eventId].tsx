// pages/[eventId].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

async function getEvent(id: any) {
    let res = await fetch(`/api/events?id=${id}`, {
      method: "GET",
    });
    let data = await res.json();
    console.log(data + "hi");
    return data.event;
}

const EventPage = () => {
    const router = useRouter();
    const { eventId } = router.query;
  
    const [event, setEvent] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        try {
          if (eventId) {
            console.log(eventId);
            const data = await getEvent(eventId);
            setEvent(data);
            console.log(data)
          }
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchData();
    }, [eventId]);
  return (
    <div>
      <h1>Event ID: {eventId}</h1>
      {/* Render the event details */}
      {/* ... */}
    </div>
  );
};

export default EventPage;
