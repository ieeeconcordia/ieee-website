import Link from "next/link";
import Image from "next/image";
import {
  IoLocationSharp,
  IoMailSharp,
  IoPhoneLandscape,
} from "react-icons/io5";

import { FaEnvelope, FaMapPin, FaPhone } from "react-icons/fa";
export default function Navbar() {
  return (
    <footer className="bg-footer-bg">
      <div className="container mx-auto py-6 px-section">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h3 className="text-lg text-gray-100 font-bold mb-4">IEEE LINKS</h3>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-100">
                  IEEE Global
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-gray-100">
                  IEEE students
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-gray-100">
                  IEEE Canada
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-gray-100">
                  IEEE Student Activities
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-gray-100">
                  IEEE Montreal
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-gray-100">
                  IEEE Canada Foundation
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-gray-100">
                  Find a student branch near you
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4 text-gray-100">
              Concordia Links
            </h3>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-gray-100">
                  Concordia University
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-gray-100">
                  ECA Concordia
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-gray-100">
                  CSU Concondia
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-gray-100">
                  Policies
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-gray-100">
                  Administration
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 px-4">
            <h3 className="text-lg font-bold mb-4 text-gray-100">Reach Us</h3>
            <ul className="list-none">
              <li className="mb-4">
                <p className="text-gray-400 flex items-center">
                <IoLocationSharp className="mr-2" size={30} />{" "}
                  B204 Bishop street Montreal, Quebec H3G 2EG
                </p>
              </li>
              <li className="mb-6 inline">
                <p className="text-gray-400 flex items-center">
                  <IoPhoneLandscape className="mr-2" /> +1(514)-848-2424
                </p>
              </li>
              <li className="mb-6 inline">
                <p className="text-gray-400 flex items-center">
                <IoMailSharp className="mr-2 text-white" />
                  info@ieeeconcordia.ca</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
