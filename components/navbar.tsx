import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";
import { SponsorshipBtn } from "./buttons/SponsorshipBtn";

export default function Navbar() {
  return (
    <nav className="nav_container flex flex-col items-center px-16 pb-6 gap-3 ">
      <div className="min-w-40 bg-green-500 rounded-b-xl text-center text-black font-raleway font-bold align-middle py-2 px-8 gap-0">
        Lab Status: Open
      </div>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className="flex flex-row items-center w-full justify-between"
      >
        <div>
          <Link href={"/"}>
            <Image src={logo} alt={"IEEE Concordia"} className="w-20 h-20" />
          </Link>
        </div>

        <div className="flex flex-row gap-6">
          <ul className="flex flex-row items-center font-raleway text-label-l font-bold gap-6">
            <li style={{ display: "inline" }}>
              <Link href="/about">About Us</Link>
            </li>

            <li style={{ display: "inline" }}>
              <Link href="/events">Events</Link>
            </li>

            <li style={{ display: "inline" }}>
              <Link href="/projects">Projects</Link>
            </li>

            <li style={{ display: "inline" }}>
              <Link href="/laboratory">Lab</Link>
            </li>

            <li style={{ display: "inline" }}>
              <Link href="contact">Contact us</Link>
            </li>
          </ul>
          <SponsorshipBtn />
        </div>
      </div>
    </nav>
  );
}
