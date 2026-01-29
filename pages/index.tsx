import { Suspense } from "react";
import React from "react";
import EventCard from "@/components/cards/EventCard";
import ProjectCard from "@/components/cards/ProjectCard";
import Loading from "@/components/animations/Loading";
import EventsPlaceHolder from "@/components/placeholder/EventsPlaceholder";
import ProjectsPlaceHolder from "@/components/placeholder/ProjectsPlaceholder";
import LandingVideo from "@/components/LandingVideo";
import Navbar from "@/components/navbar/HomeNavbar";
import Footer from "@/components/Footer";
import SponsorsMarquee from "@/components/animations/SponsorsMarquee";
import Link from "next/link";
import { BsDiscord, BsInstagram } from "react-icons/bs";

import { splitAndSortEvents } from "@/content/eventslist";
import { getEvents, getProjects } from "@/lib/tina";

export async function getStaticProps() {
  const events = await getEvents();
  const projects = await getProjects();
  return {
    props: {
      projects,
      events,
    },
  };
}

export function formatDate(dateTime: string | number | Date) {
  const date = new Date(dateTime);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Home({ events, projects }: any) {
  const {
    sortedUpcomingEvents: upcomingEvents,
    sortedPassedEvents: passedEvents,
  } = splitAndSortEvents(events);
  events = upcomingEvents.concat(passedEvents);

  return (
    <div className="min-h-screen bg-[#E0F2F7]">
      <Navbar />
      <LandingVideo />

      {/* About Section */}
      <section className="w-full bg-[#128DCD] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <p className="text-xl md:text-2xl leading-relaxed mb-6 max-w-4xl">
            IEEE Concordia Student Branch is a student chapter of IEEE, the world's largest technical professional organization. Through workshops, networking events, competitions, and our lab, we foster a supportive community where you can discover your passion and grow professionally.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://discord.gg/DECBMmcT3P"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#128DCD] rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              <BsDiscord size={22} />
              Join our Discord
            </Link>
            <Link
              href="https://instagram.com/ieee_concordia"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#128DCD] rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              <BsInstagram size={22} />
              Follow on Instagram
            </Link>
            <Link
              href="/contact#sponsorship"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#128DCD] rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Become a Sponsor
            </Link>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="bg-[#128DCD] text-white px-8 py-4 rounded-t-xl">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Events</h2>
                <p className="text-white/80">Workshops, networking, and competitions to level up your skills</p>
              </div>
              {events.length > 0 && (
                <Link href="/events" className="text-white font-medium hover:underline text-lg">
                  View all events →
                </Link>
              )}
            </div>
          </div>
          <div className="bg-white border border-t-0 border-[#B3DAE6] rounded-b-xl p-8">
            {events.length === 0 ? (
              <EventsPlaceHolder />
            ) : (
              <Suspense fallback={<Loading />}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {events.slice(0, 3).map((event: any) => (
                    <EventCard
                      key={event.id}
                      _id={event.id}
                      name={event.title}
                      date={event.date}
                      location={event.location}
                      time={event.time}
                      price={event.price}
                      eventType={event.eventType}
                      description={event.description}
                      image={event.image}
                      organizer=""
                      sponsors=""
                      link={event.link}
                      tags=""
                    />
                  ))}
                </div>
              </Suspense>
            )}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6 pb-16">
          <div className="bg-[#128DCD] text-white px-8 py-4 rounded-t-xl">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Projects</h2>
                <p className="text-white/80">Join guided group projects and build something amazing</p>
              </div>
              {projects.length > 0 && (
                <Link href="/projects" className="text-white font-medium hover:underline text-lg">
                  View all projects →
                </Link>
              )}
            </div>
          </div>
          <div className="bg-white border border-t-0 border-[#B3DAE6] rounded-b-xl p-8">
            {projects.length === 0 ? (
              <ProjectsPlaceHolder />
            ) : (
              <Suspense fallback={<Loading />}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.slice(0, 3).map((project: any) => (
                    <ProjectCard
                      key={project.slug}
                      _id={project.slug}
                      title={project.title}
                      startdate={formatDate(project.startdate)}
                      enddate={formatDate(project.enddate)}
                      level={project.level}
                      leader={project.leader}
                      image={project.image}
                      link={project.link}
                    />
                  ))}
                </div>
              </Suspense>
            )}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6 pb-16">
          <div className="bg-[#128DCD] text-white px-8 py-4 rounded-t-xl">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Our Sponsors</h2>
                <p className="text-white/80">The companies that make our mission possible</p>
              </div>
              <Link href="/contact#sponsorship" className="text-white font-medium hover:underline text-lg">
                Become a sponsor →
              </Link>
            </div>
          </div>
          <div className="bg-white border border-t-0 border-[#B3DAE6] rounded-b-xl p-8">
            <SponsorsMarquee />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
