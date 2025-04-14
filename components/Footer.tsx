import Link from "next/link";
import Image from "next/image";
import {
  IoLocationSharp,
  IoMailSharp,
  IoCall,
} from "react-icons/io5";
import { SimpleBtn } from "./buttons/SimpleBtn";

export default function Footer() {
  return (
    <footer className="bg-footer-bg">
      <div className="container flex flex-col justify-center mx-auto pb-20 pt-10 lg:px-section">

        <div className="flex flex-wrap mx-4">

          {/* IEEE Links */}
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h3 className="text-lg text-gray-100 font-bold mb-4">IEEE LINKS</h3>
            <ul className="list-none flex flex-col gap-2">
              <li className="">
                <a href="https://www.ieee.org/" className="text-white hover:text-gray-100">
                  IEEE Global
                </a>
              </li>
              <li className="">
                <a href="https://students.ieee.org/student-members/" className="text-gray-300 hover:text-gray-100">
                  IEEE Students
                </a>
              </li>
              <li className="">
                <a href="https://www.ieee.ca/en/" className="text-gray-400 hover:text-gray-100">
                  IEEE Canada
                </a>
              </li>
              <li className="">
                <a href="https://site.ieee.org/r7-sac/" className="text-gray-400 hover:text-gray-100">
                  IEEE Student Activities
                </a>
              </li>
              <li className="">
                <a href="https://montreal.ieee.ca/en/home/" className="text-gray-400 hover:text-gray-100">
                  IEEE Montreal
                </a>
              </li>
              <li className="">
                <a href="https://ieeecanadianfoundation.org/" className="text-gray-400 hover:text-gray-100">
                  IEEE Canada Foundation
                </a>
              </li>
              <li className="">
                <a href="https://students.ieee.org/student-members/#studentbranches" className="text-gray-400 hover:text-gray-100">
                  Find a student branch near you
                </a>
              </li>
            </ul>
          </div>

          {/* Concordia Links */}
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4 text-gray-100">
              Concordia Links
            </h3>
            <ul className="list-none flex flex-col gap-2">
              <li className="">
                <a href="https://www.concordia.ca/" className="text-gray-400 hover:text-gray-100">
                  Concordia University
                </a>
              </li>
              <li className="">
                <a href="https://ecaconcordia.ca/" className="text-gray-400 hover:text-gray-100">
                  ECA Concordia
                </a>
              </li>
              <li className="">
                <a href="https://csu.qc.ca/" className="text-gray-400 hover:text-gray-100">
                  CSU Concondia
                </a>
              </li>
              <li className="">
                <a href="https://drive.google.com/file/d/1u_lXfp2X0j6Sz3W0pQbpdzgvA6uMft3z/view?usp=sharing" className="text-gray-400 hover:text-gray-100">
                  Constitution
                </a>
              </li>
            </ul>
          </div>

          {/* Reach Us */}
          <div className="w-full md:w-1/3 px-4">
            <h3 className="text-lg font-bold mb-4 text-gray-100">Reach Us</h3>
            <ul className="list-none flex flex-col gap-2">
              <li className="">
                <p className="text-gray-400 flex items-center max-w-sm">
                <IoLocationSharp className="mr-2" size={20} />
                  B204 Bishop street Montreal, Quebec H3G 2E9
                </p>
              </li>
              <li className="inline">
                <p className="text-gray-400 flex items-center">
                  <IoCall className="mr-2" size={20}/> +1(514)-848-2424
                </p>
              </li>
              <li className="inline">
                <p className="text-gray-400 flex items-center">
                <IoMailSharp className="mr-2" size={20}/>
                  info@ieeeconcordia.ca</p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
