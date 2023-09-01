import { useState } from "react";

export default function ProjectForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [startDate, setStartDate] = useState("");
  const [url, setUrl] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState([]);
  const [organizer, setOrganizer] = useState("");
  const [sponsors, setSponsors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const project = {
      name,
      description,
      image,
      startDate,
      url,
      price,
      tags,
      organizer,
      sponsors,
    };

    let res = await fetch("/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    });
    const data = await res.json();
    alert("Project created!");

    // Reset the form
    setName("");
    setDescription("");
    setImage("");
    setStartDate("");
    setUrl("");
    setPrice("");
    setTags([]);
    setOrganizer("");
    setSponsors([]);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
      <div className="flex flex-col">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">
          Project Name:
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
        <label
          htmlFor="startDate"
          className="text-sm font-medium text-gray-700"
        >
          Start Date:
        </label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="url" className="text-sm font-medium text-gray-700">
          URL:
        </label>
        <input
          type="text"
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
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
        <label htmlFor="tags" className="text-sm font-medium text-gray-700">
          Tags (comma-separated):
        </label>
        <textarea
          id="tags"
          value={tags.join(", ")}
          onChange={(e) =>
            setTags(e.target.value.split(",").map((t) => t.trim()))
          }
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
