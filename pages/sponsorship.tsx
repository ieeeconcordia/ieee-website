import React, { useState, useEffect } from "react";
import RootLayout from "./layout";
import sponsors from "@/public/sponsors/DummySponsor.png";
import Image from "next/image";
import Link from "next/link";
import SponsorsMarquee from "@/components/animations/SponsorsMarquee";
import { getSponsors } from "@/lib/tina";
import { Sponsor } from "@/components/cards/SponsorCard";


export async function getStaticProps({ params }: any) {
  const sponsorss = await getSponsors();
  return {
    props: {
      sponsorss
    },
  };
}

export default function Sponsorship({ sponsorss }: any) {
  const [images, setImages] = useState([]);
  console.log(sponsorss);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("/api/images");
  //     const data = await response.json();
  //     setImages(data.images); // store the response from the API route
  //   };

  //   fetchData();
  // }, []);

  return (
    <RootLayout>
      
      <div className="flex flex-col items-center justify-items-center px-8 pb-16 sm:px-20 xl:px-section md:pb-14 gap-8">
        <div className="">
          <h2 className="font-lora font-bold text-center text-headline-l text-secondary pb-6">
            Sponsorship
          </h2>
          <h2 className="font-raleway text-start font-bold pb-4">
            Thanks to our sponsors,
          </h2>
          <p className="font-raleway text-start text-gray-700 text-title-s md:text-lg">
            Our sponsors are vital to our success, and we are deeply grateful
            for their support. With their generosity, we can host a variety of
            events and projects and provide cutting-edge equipment for
            electrical and electronics endeavors. From technical expertise to
            essential products and funding,{" "}
            <b>our sponsors enable us to strive for technical excellence</b>.
          </p>
        </div>

        <div className="my-8 w-full self-center px-4 lg:mx-auto lg:max-w-screen-lg">
                  {/* this gold sponsor is a placeholder */}
          {sponsorss[0].gold && (   
          <div className="my-4 mr-4 flex flex-wrap gap-4 bg-[#E4C742] glass relative rounded-md bg-opacity-30 p-8 w-full">
            <div className="absolute left-0 top-0 p-2 uppercase text-white bg-[#E4C742] glass rounded-md font-bold tracking-widest">gold</div>
            {sponsorss[0].gold.map((s: any, index: any) => (
              <Sponsor
                key={index}
                title={s.title}
                image={s.image}
                link={s.link}
              />
            ))}
          </div>
        )}          
        {/* this silver sponsor is a placeholder */}
        {sponsorss[0].silver && (   
          <div className="my-4 mr-4 flex flex-wrap gap-4 bg-gray-400 glass relative rounded-md bg-opacity-30 p-8 w-full">
            <div className="absolute left-0 top-0 p-2 uppercase text-white bg-gray-400 glass rounded-md font-bold tracking-widest">Bronze</div>
            {sponsorss[0].silver.map((s: any, index: any) => (
              <Sponsor
                key={index}
                title={s.title}
                image={s.image}
                link={s.link}
              />
            ))}
          </div>
        )}
        {/* this bronze sponsor is a placeholder */}
        {sponsorss[0].bronze && (
          <div className="my-4 mr-4 flex flex-wrap gap-4 bg-[#CD7F32] glass relative rounded-md bg-opacity-30 p-8 w-full">
            <div className="absolute left-0 top-0 p-2 uppercase text-white bg-[#CD7F32] glass rounded-md font-bold tracking-widest">Bronze</div>
            {sponsorss[0].bronze.map((s: any, index: any) => (
              <Sponsor
                key={index}
                title={s.title}
                image={s.image}
                link={s.link}
              />
            ))}
          </div>
        )}
        <SponsorsMarquee />
        </div>
      

        <div>
          <h2 className="font-raleway text-star  font-bold pb-4">
            Want to become a sponsor?
          </h2>

          <div className="font-raleway text-start text-gray-700 text-title-s md:text-lg">
            Contact our{" "}
            <a href="mailto:sponsor@ieeeconcordia.ca" className="underline">
              Vice-President of External Affairs
            </a>{" "}
            to learn more about how you can be a part of our vision for a more
            enriching experience as a student at the Gina Cody School of
            Engineering and Computer Science.
            <br />
            <br />
            Access the 2022-2023 sponsorship package by{" "}
            <Link
              href="../SponsorshipPackage.pdf"
              rel="noopener noreferrer"
              className="underline"
            >
              clicking here
            </Link>
            .
          </div>
        </div>
      </div>

      {/* To be used */}

      {/* <div className="flex flex-col bg-sponsorship gap-16 text-start items-center  py-10 pb-16 md:pb-14">
      <div>
        <h2 className="font-lora font-bold text-headline-l text-center text-white pb-12 px-8 sm:px-20 xl:px-section">
          Sponsors
        </h2>
        <p className="font-raleway text-title-s md:text-lg text-white px-8 sm:px-20 xl:px-section">
          Our sponsors are vital to our success, and we are deeply grateful for
          their support. With their generosity, we can host a variety of events
          and projects and provide cutting-edge equipment for electrical and
          electronics endeavors. From technical expertise to essential products
          and funding,{" "}
          <b>our sponsors enable us to strive for technical excellence</b>.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-4 md:px-16 xl:px-32">
        {images.map((image) => (
          <Image
            className="w-40 rounded-lg shadow-lg"
            width={150}
            height={100}
            alt={"alt"}
            src={`/sponsors/${image}`}
            key={image}
          />
        ))}
      </div>

      <p className="font-raleway text-title-m md:text-lg text-white px-8 sm:px-20 xl:px-section">
        As a sponsor of Concordia IEEE, you{" "}
        <b>become an integral part of our association</b>, making a positive
        impact on tutorials, competitions, and the wider university community.
        Join us and help empower future engineers as they pursue excellence.
        Together, we can achieve remarkable growth and accomplish great things.
      </p>
      <SponsorshipBtn text={"Become a sponsor!"} />
    </div> */}
    </RootLayout>
  );
}
