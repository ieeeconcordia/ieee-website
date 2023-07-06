import { SponsorshipSection } from "@/components/SponsorshipSection";
import RootLayout from "./layout";
import { useState } from "react";
import { MdCheckCircleOutline } from "react-icons/md";
("use client");

export default function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [request, setRequest] = useState("it");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);

  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    console.log("Email: ", email);
    console.log("Subject: ", subject);
    console.log("Request: ", request);
    console.log("Message: ", message);

    const res = await fetch("api/contact", {
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

    if (msg) {
      setSuccessMessage(msg);

      // Reset the input fields on successful email sending
      setEmail("");
      setSubject("");
      setRequest("IT");
      setMessage("");
    }

    console.log(error);
  };

  return (
    <>
      <RootLayout>
        <div className="flex flex-col text-center items-center justify-items-center gap-6 px-8 pb-16 sm:px-20 xl:px-section md:pb-14">
          <h2 className="font-lora font-bold text-headline-l sm:text-display-m text-secondary pb-6">
            Contact Us
          </h2>
          <p className="font-raleway text-center text-gray-700 text-title-m sm:text-title-l">
            Any questions, inquiries, and feedback, feel free to get in touch
            via email or through the form below!
          </p>
          {successMessage != "" && (
            <div
              className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
              role="alert"
            >
              <div className="flex flex-row gap-4">
                <div className="m-auto">
                  <MdCheckCircleOutline size={25} />
                </div>
                <div className="flex flex-col justify-start items-start">
                  <p className="font-bold">Email sent successfully!</p>
                  <p className="text-sm">
                    The IEEE Concordia team will get back to you asap. Thank
                    you!
                  </p>
                </div>
              </div>
            </div>
          )}
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
                className="p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                onChange={(e) => setRequest(e.target.value)}
                value={request}
                name="TypeofReq"
                id="request"
                placeholder="Option"
                required
              >
                <option value="IT">IT</option>
                <option value="Lab related">Lab Related</option>
                <option value="Academics">Events (Tutorials)</option>
                <option value="Competitions">Events (Competitions)</option>
                <option value="Projects">Projects</option>
                <option value="Other">Other</option>
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
        </div>

        <SponsorshipSection />
      </RootLayout>
    </>
  );
}
