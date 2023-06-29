import { SponsorshipSection } from "@/components/SponsorshipSection";
import RootLayout from "./layout";
import { useState } from "react";
("use client");

export default function contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [request, setRequest] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Email: ", email);
    console.log("Subject: ", subject);
    console.log("Request: ", request);
    console.log("Message: ", message);

    const res = await fetch("api/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        subject,
        request,
        message,
      }),
    });

    const { msg } = await res.json();
    setError(msg);
    console.log(error);
  };

  return (
    <>
      <RootLayout>
        <div className="flex flex-col text-center items-center justify-items-center gap-6 px-8 pb-16 sm:px-20 xl:px-section md:pb-14">
          <h2 className="font-lora font-bold text-headline-m sm:text-headline-l text-secondary pb-3">
            Contact Us
          </h2>
          <p className="text-title-m font-raleway text-title-gray">
            Forem ipsum dolora asdklasjdkasdj sit amet, consectetur adipiscing
            elit. Etiam eu turpis molestie, dictum est a
          </p>
          <form
            onSubmit={handleSubmit}
            action="#"
            className="max-w-xl w-full space-y-8 text-start"
          >
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">
                Your email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">
                Subject
              </label>
              <input
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">
                Type of Request
              </label>
              <select
                onChange={(e) => setRequest(e.target.value)}
                value={request}
                name="TypeofReq"
                id="request"
                placeholder=""
                required
              >
                <option value="it">IT</option>
                <option value="lab">Lab Related</option>
                <option value="events">Events</option>
                <option value="projects">Projects</option>
                <option value="Academics">Academics</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">
                Your message
              </label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-700 sm:w-fit hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-primary-300"
              >
                Send message
              </button>
            </div>
          </form>
          <div className="bg-slate-100 flex flex-col">
            <div className="text-red-600 px-5 py-2">Error Message</div>
          </div>
        </div>

        <SponsorshipSection />
      </RootLayout>
    </>
  );
}
