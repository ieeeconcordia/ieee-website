import { useState } from "react";

export default function EventForm() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [eventType, setEventType] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [sponsors, setSponsors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const event = {
      name,
      date,
      location,
      time,
      description,
      image,
      price,
      eventType,
      organizer,
      sponsors,
    };

    let res = await fetch("/api/events", {
      method: "POST",
      body: JSON.stringify(event),
    });

    const data = await res.json();
    alert("Event created!");

    // Reset the form
    setName("");
    setDate("");
    setLocation("");
    setTime("");
    setDescription("");
    setImage("");
    setPrice("");
    setEventType("");
    setOrganizer("");
    setSponsors([]);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
      <div className="flex flex-col">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">
          Event Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="date" className="text-sm font-medium text-gray-700">
          Date:
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="location" className="text-sm font-medium text-gray-700">
          Location:
        </label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="time" className="text-sm font-medium text-gray-700">
          Time:
        </label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="description"
          className="text-sm font-medium text-gray-700"
        >
          Description:
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="image" className="text-sm font-medium text-gray-700">
          Image URL:
        </label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="price" className="text-sm font-medium text-gray-700">
          Price:
        </label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="eventType"
          className="text-sm font-medium text-gray-700"
        >
          Event Type:
        </label>
        <input
          type="text"
          id="eventType"
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="organizer"
          className="text-sm font-medium text-gray-700"
        >
          Organizer:
        </label>
        <input
          type="text"
          id="organizer"
          value={organizer}
          onChange={(e) => setOrganizer(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="sponsors" className="text-sm font-medium text-gray-700">
          Sponsors (comma-separated):
        </label>
        <textarea
          id="sponsors"
          value={sponsors.join(", ")}
          onChange={(e) =>
            setSponsors(e.target.value.split(",").map((s) => s.trim()))
          }
          className="border border-gray-300 rounded-md p-2"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
}
