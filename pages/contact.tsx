import { SponsorshipSection } from "@/components/SponsorshipSection";
import RootLayout from "./layout";
export default function contact() {
  return (
    <>
      <RootLayout>
        <div className="flex flex-col justify-center items-center text-center gap-7 p-container pb-16">
          <h2 className="text-display-m font-lora font-bold text-secondary">
            Contact Us
          </h2>
          <p className="text-title-m font-raleway text-title-gray">
            Forem ipsum dolora asdklasjdkasdj sit amet, consectetur adipiscing
            elit. Etiam eu turpis molestie, dictum est a
          </p>
          <form action="#" className="max-w-xl w-full space-y-8 text-start">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">
                Your email
              </label>
              <input
                type="email"
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
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">
                Your message
              </label>
              <textarea
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
