import Link from "next/link";
import { getEvent, getEvents } from "@/lib/mongo/events";
import RootLayout from "@/pages/layout";
import { SponsorshipSection } from "@/components/SponsorshipSection";
import { useRouter } from "next/router";
import { MdArrowBack } from "react-icons/md"
import { IoArrowForward, IoLocationSharp, IoTimeOutline } from "react-icons/io5";
import test from "@/public/IEEE-Xtreme 2022.png"
import Image from "next/image";

// Generate static paths for all events
export async function getStaticPaths() {
  const { events } = await getEvents();

  // Map events to an array of paths with their respective IDs
  const paths = events.map((event: any) => ({
    params: { id: event._id },
  }));

  return { paths, fallback: false };
}

// Fetch the event data and pass it as a prop to the EventDetail component
export async function getStaticProps({ params: { id } }: any) {
  const event = await getEvent(id);
  return {
    props: { event },
  };
}

export default function EventDetail({
  event: { eventName, date, location, fee, time, eventType },
}: any) {
  // To return the user to the previous page they were on
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <RootLayout>
      <div className="flex flex-col gap-6 px-8 pb-16 sm:px-16 lg:px-section xl:px-56 md:pb-14">
        <div className="flex flex-row justify-between justify-items-center font-lora font-bold text-headline-s sm:text-headline-m text-secondary pb-3">
          <button onClick={handleGoBack} className="">
            <MdArrowBack size={30} color="#093774"/>
          </button>
          Event Details
          <MdArrowBack size={30} color="#FFFFFF"/>
        </div>
        <div className="">
          <Image src={test} alt="test" className="max-h-84" style={{objectFit: "cover"}}/>
        </div>
        <div>
          <h3 className="w-full text-title-l font-semibold font-raleway text-black">{eventName}</h3>
          <p className="italic text-sm font-light">Additional tags</p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
          <div className="flex flex-row items-center text-sm sm:text-base gap-1 text-gray-600">
            <IoTimeOutline size={24} color="gray" /> {date}
          </div>
          <div className="flex flex-row items-center text-sm sm:text-base gap-1 text-gray-600">
            <IoLocationSharp size={24} color="gray" /> {location}
          </div>
        </div>


        <p className="text-sm sm:text-lg text-gray-600">
          Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus
        </p>

      
      </div>
      <SponsorshipSection />
    </RootLayout>
  );
}
