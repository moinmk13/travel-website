"use client";

// Navbar component
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { logo } from "@/app/assets/icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" border-gray-200 w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" passHref>
          <div className="relative text-white text-md  font-14 group">
            <div className="h-10 w-[16rem] cursor-pointer  lg:h-[57px] lg:w-[343px]  sm:w-80 sm:h-auto">
              <Image src={logo} onClick={toggleMenu} alt="logo" />
            </div>
          </div>
        </Link>
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden hover:bg-[#49AF50] text-white focus:outline-none bg-[#49AF50] focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="font-medium relative z-10 flex flex-col cursor-pointer p-4 md:p-0 mt-4 md:flex-row gap-3 md:space-x-8 md:mt-0 md:border-0">
            <li>
              <Link href={"/"}>
                <div
                  className="relative text-[#000000] hover:text-[#181E4B] text-md top-2 font-14 group sm:gap-4 active:text-[#181E4B]"
                  onClick={toggleMenu}
                >
                  Desitnations
                  <span className="absolute top-6 inset-x-0 bottom-0 h-1 bg-[#181E4B] rounded-lg transform scale-x-0 transition duration-300 group-hover:scale-x-100"></span>
                </div>
              </Link>
            </li>
            <li>
              <Link href={"/mission"}>
                <div
                  className="relative text-[#000000] hover:text-[#181E4B] text-md top-2 font-14 group sm:gap-4 active:text-[#181E4B]"
                  onClick={toggleMenu}
                >
                  Hotels
                  <span className="absolute top-6 inset-x-0 bottom-0 h-1 bg-[#181E4B] rounded-lg transform scale-x-0 transition duration-300 group-hover:scale-x-100"></span>
                </div>
              </Link>
            </li>
            <li>
              <Link href={"/awards"}>
                <div
                  className="relative text-[#000000] hover:text-[#181E4B] text-md top-2 font-14 group sm:gap-4 active:text-[#181E4B]"
                  onClick={toggleMenu}
                >
                  Flights
                  <span className="absolute top-6 inset-x-0 bottom-0 h-1 bg-[#181E4B] rounded-lg transform scale-x-0 transition duration-300 group-hover:scale-x-100"></span>
                </div>
              </Link>
            </li>
            <li>
              <Link href={"/contact"}>
                <div
                  className="relative text-[#000000] hover:text-[#181E4B] text-md top-2 font-14 group sm:gap-4 active:text-[#181E4B]"
                  onClick={toggleMenu}
                >
                  Bookings
                  <span className="absolute top-6 inset-x-0 bottom-0 h-1 bg-[#181E4B] rounded-lg transform scale-x-0 transition duration-300 group-hover:scale-x-100"></span>
                </div>
              </Link>
            </li>
            <li>
              <Link href={"https://admin.quiznation.in/login"} target="_blank">
                <div
                  className="relative text-[#000000] hover:text-[#181E4B] text-md top-2 font-14 group sm:gap-4 active:text-[#181E4B]"
                  onClick={toggleMenu}
                >
                  Login
                  <span className="absolute top-6 inset-x-0 bottom-0 h-1 bg-[#181E4B] rounded-lg transform scale-x-0 transition duration-300 group-hover:scale-x-100"></span>
                </div>
              </Link>
            </li>
            <li className="">
              <Link href={"https://admin.quiznation.in/login"} target="_blank">
                <div
                  className="relative text-[#000000] -top-1 px-7 border-2 border-black p-2 rounded-lg hover:bg-gray-100  hover:text-[#181E4B] text-md top-2 font-14 group sm:gap-4 active:text-[#181E4B]"
                  onClick={toggleMenu}
                >
                  Sign up
                  {/* <span className="absolute top-6 inset-x-0 bottom-0 h-1 bg-[#181E4B] rounded-lg transform scale-x-0 transition duration-300 group-hover:scale-x-100"></span> */}
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
