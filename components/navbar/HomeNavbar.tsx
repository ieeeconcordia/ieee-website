import { useState, useEffect } from "react";
import Link from "next/link";
import { SponsorshipBtnNav } from "../buttons/SponsorshipBtn";
import Example from "./Example";
import LabStatus from "./LabStatus";

export default function HomeNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Check the initial screen size

    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the event listener
    };
  }, []);

  return (
    <nav className="nav_container w-full flex flex-col items-center sm:gap-3 absolute top-0 z-10">
      {/* <div className="w-full md:w-fit bg-yellow-400 md:rounded-b-xl text-center text-black font-raleway font-bold align-middle py-2 px-8 gap-0">
        Lab Status: Unavailable
      </div> */}
      <LabStatus />
      <div className="flex flex-row items-center w-full justify-between px-4 md:px-12 py-2 md:py-2">
        <div className="flex items-center">
          <Link href={"/"}>
            <img
              src="logo-white.png"
              alt={"IEEE Concordia"}
              className="md:w-20 md:h-20 h-16 w-fit"
            />
          </Link>
        </div>
        <div>
          {isMobile ? (
            // Render the hamburger menu for small screens
            <Example />
          ) : (
            // Render the regular navbar for large screens
            <div className="flex flex-row items-center justify-between mt-4 md:mt-0 gap-6">
              <ul className="flex flex-row items-center text-nav-item-light font-raleway text-label-l font-bold gap-6">
                <li>
                  <Link href="/">Home</Link>
                </li>

                <li>
                  <Link href="/about">About Us</Link>
                </li>

                <li>
                  <Link href="/events">Events</Link>
                </li>

                <li>
                  <Link href="/projects">Projects</Link>
                </li>

                <li>
                  <Link href="contact">Contact us</Link>
                </li>
              </ul>
              <SponsorshipBtnNav />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
