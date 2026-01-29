import RootLayout from "./layout";
import { useState, useEffect } from "react";
import { MdCheckCircleOutline } from "react-icons/md";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [request, setRequest] = useState("it");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [sponsorImages, setSponsorImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/images");
        const data = await response.json();
        setSponsorImages(data.images || []);
      } catch (e) {
        console.error("Failed to fetch sponsor images");
      }
    };
    fetchImages();
  }, []);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

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
      setEmail("");
      setSubject("");
      setRequest("IT");
      setMessage("");
    }
  };

  return (
    <RootLayout>
      {/* Hero Banner */}
      <div className="w-full bg-[#128DCD] text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-white/90 max-w-3xl">
            Any questions, inquiries, or feedback? We'd love to hear from you.
            Get in touch via the form below!
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white border border-[#B3DAE6] rounded-lg overflow-hidden">
              <div className="bg-gray-100 px-6 py-4 border-b border-[#B3DAE6]">
                <h2 className="text-xl font-bold text-gray-900">Send us a Message</h2>
              </div>
              <div className="p-6">
                {successMessage !== "" && (
                  <div className="bg-green-50 border border-green-200 rounded-lg text-green-800 px-4 py-3 mb-6 flex items-center gap-3">
                    <MdCheckCircleOutline size={24} />
                    <div>
                      <p className="font-medium">Email sent successfully!</p>
                      <p className="text-sm">The IEEE Concordia team will get back to you soon.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your email
                    </label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      type="email"
                      className="w-full px-4 py-3 border border-[#B3DAE6] rounded-lg focus:ring-2 focus:ring-[#128DCD] focus:border-transparent outline-none"
                      placeholder="name@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Type of Request
                    </label>
                    <select
                      className="w-full px-4 py-3 border border-[#B3DAE6] rounded-lg focus:ring-2 focus:ring-[#128DCD] focus:border-transparent outline-none"
                      onChange={(e) => setRequest(e.target.value)}
                      value={request}
                      required
                    >
                      <option value="IT">IT</option>
                      <option value="Lab related">Lab Related</option>
                      <option value="Academics">Events (Tutorials)</option>
                      <option value="Competitions">Events (Competitions)</option>
                      <option value="Projects">Projects</option>
                      <option value="Sponsorship">Sponsorship</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      onChange={(e) => setSubject(e.target.value)}
                      value={subject}
                      type="text"
                      className="w-full px-4 py-3 border border-[#B3DAE6] rounded-lg focus:ring-2 focus:ring-[#128DCD] focus:border-transparent outline-none"
                      placeholder="Let us know how we can help you"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your message
                    </label>
                    <textarea
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      rows={5}
                      className="w-full px-4 py-3 border border-[#B3DAE6] rounded-lg focus:ring-2 focus:ring-[#128DCD] focus:border-transparent outline-none resize-none"
                      placeholder="Leave a message..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-[#128DCD] text-white rounded-lg font-medium hover:bg-[#0e7ab8] transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Sponsorship Section */}
            <div
              id="sponsorship"
              className="bg-white border border-[#B3DAE6] rounded-lg overflow-hidden scroll-mt-24"
            >
              <div className="bg-[#128DCD] text-white px-6 py-4">
                <h2 className="text-xl font-bold">Sponsorship</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Our sponsors are vital to our success and we are deeply grateful
                  for their support. With their generosity we are able to embark on
                  a variety of endeavors, providing cutting-edge equipment for
                  technical projects and events. From expertise to essential
                  products and funding, our sponsors enable us to strive for
                  excellence.
                </p>

                {sponsorImages.length > 0 && (
                  <>
                    <h3 className="font-semibold text-gray-900 mb-4">Our Sponsors</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                      {sponsorImages.map((image) => (
                        <div
                          key={image}
                          className="flex items-center justify-center p-4 bg-gray-50 rounded-lg border border-[#B3DAE6] h-20"
                        >
                          <img
                            className="max-h-12 w-auto object-contain"
                            alt="Sponsor logo"
                            src={`/sponsors/${image}`}
                          />
                        </div>
                      ))}
                    </div>
                  </>
                )}

                <div className="bg-gray-50 rounded-lg p-6 border border-[#B3DAE6]">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Want to become a sponsor?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Contact our Vice-President of External Affairs to learn more
                    about sponsorship opportunities.
                  </p>
                  <a
                    href="mailto:external@ieeeconcordia.ca"
                    className="inline-block px-6 py-3 bg-[#128DCD] text-white rounded-lg font-medium hover:bg-[#0e7ab8] transition-colors"
                  >
                    Contact VP External
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
