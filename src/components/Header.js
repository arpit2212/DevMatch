import React, { useState } from "react";
import logo from "../assets/images/Header/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            onClick={() => (window.location.href = "/")}
            src={logo}
            alt="HackVerse Logo"
            className="h-8 w-auto"
          />
          <span onClick={() => (window.location.href = "/")} className="ml-2 font-extrabold text-2xl">DevMatch</span>
        </div>

        {/* Desktop and Tablet Navigation */}
        <nav className="hidden lg:flex space-x-6">
          <a href="/" className="text-gray-600 hover:text-[#3646F5]">
            Home
          </a>
          <a href="/Hackathon" className="text-gray-600 hover:text-[#3646F5]">
            Hackathon
          </a>
          <a href="#projects" className="text-gray-600 hover:text-[#3646F5]">
            Projects
          </a>
          <a href="#find-partner" className="text-gray-600 hover:text-[#3646F5]">
            Find Partner
          </a>
          <a href="#community" className="text-gray-600 hover:text-[#3646F5]">
            Community
          </a>
          <a href="#contact-us" className="text-gray-600 hover:text-[#3646F5]">
            Contact Us
          </a>
        </nav>

        {/* Login Button */}
        <div className="hidden lg:block">
          <button className="border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 6h18M3 12h18m-9 6h9"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`${isMenuOpen ? "flex" : "hidden"} bg-white lg:hidden absolute top-0 left-0 w-full z-10 shadow-lg flex-col items-center`}
      >
        {/* Close Button */}
        <div className="w-full flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-red-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col space-y-4 p-4 w-full text-center">
          <a
            href="#home"
            className="text-gray-600 hover:text-[#3646F5] border border-black px-4 py-2"
          >
            Home
          </a>
          <a
            href="Hackathon"
            className="text-gray-600 hover:text-[#3646F5] border border-black px-4 py-2"
          >
            Hackathon
          </a>
          <a
            href="#projects"
            className="text-gray-600 hover:text-[#3646F5] border border-black px-4 py-2"
          >
            Projects
          </a>
          <a
            href="#find-partner"
            className="text-gray-600 hover:text-[#3646F5] border border-black px-4 py-2"
          >
            Find Partner
          </a>
          <a
            href="#community"
            className="text-gray-600 hover:text-[#3646F5] border border-black px-4 py-2"
          >
            Community
          </a>
          <a
            href="#contact-us"
            className="text-gray-600 hover:text-[#3646F5] border border-black px-4 py-2"
          >
            Contact Us
          </a>
          <button className="border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
