import { useState } from 'react';

export default function EventForm() {
  const [eventName, setEventName] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');
  const [fee, setFee] = useState('');
  const [eventType, setEventType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Handle form submission here
    // You can access the form values using the state variables
    const event = { eventName, date, location, time, fee, eventType };
    let res = await fetch("http://localhost:3000/api/events", {
    method: "POST",
    body: JSON.stringify({
      eventName: eventName,
      date: date,
      location: location,
      time: time,
      fee: fee,
      eventType: eventType
    }),
  });
  res = await res.json();
  console.log(res)
alert("Event created!");

    // Reset the form
    setEventName('');
    setDate('');
    setLocation('');
    setTime('');
    setFee('');
    setEventType('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="eventName">Event Name:</label>
        <input
          type="text"
          id="eventName"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="fee">Fee:</label>
        <input
          type="text"
          id="fee"
          value={fee}
          onChange={(e) => setFee(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="eventType">Event Type:</label>
        <select
          id="eventType"
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
        >
          <option value="">Select an event type</option>
          <option value="Conference">Tutorial</option>
          <option value="Workshop">Competition</option>
          <option value="Seminar">Social</option>
          {/* Add more event types as needed */}
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
