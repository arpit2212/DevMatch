import React, { useState } from "react";
import logo from "../assets/images/Header/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);  // Track which dropdown is active

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index); // Toggle active dropdown
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full  z-50">

        
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo} 
            alt="HackVerse Logo"
            className="h-8 w-auto"
          />
          <span className="ml-2 font-extrabold text-2xl">DevMatch</span>
        </div>

        {/* Desktop and Tablet Navigation */}
        <nav className="hidden lg:flex space-x-6">
          <a
            href="#home"
            className="text-gray-600 hover:text-[#3646F5]"
          >
            Home
          </a>
          
          {/* Hackathon Dropdown */}
          <div className="relative">
            <a
              href="#hackathon"
              className="text-gray-600 hover:text-[#3646F5] flex items-center"
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown(0);
              }}
            >
              Hackathon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`ml-2 w-4 h-4 transition-transform ${activeDropdown === 0 ? "transform rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
            {activeDropdown === 0 && (
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-md">
                <a
                  href="#create-hackathon"
                  className="block px-4 py-2 text-gray-600 border-gray-300 hover:bg-gray-100 text-center"
                >
                  Create Hackathon
                </a>
                <a
                  href="#apply-hackathon"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 text-center"
                >
                  Apply Hackathon
                </a>
              </div>
            )}
          </div>

          {/* Projects Dropdown */}
          <div className="relative">
            <a
              href="#projects"
              className="text-gray-600 hover:text-[#3646F5] flex items-center"
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown(1);
              }}
            >
              Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`ml-2 w-4 h-4 transition-transform ${activeDropdown === 1 ? "transform rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
            {activeDropdown === 1 && (
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-md">
                <a
                  href="#create-project"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 border-b border-gray-300 text-center"
                >
                  Create Project
                </a>
                <a
                  href="#apply-project"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 text-center"
                >
                  Apply Project
                </a>
              </div>
            )}
          </div>

          {/* Find Partner Dropdown */}
          <div className="relative">
            <a
              href="#find-partner"
              className="text-gray-600 hover:text-[#3646F5] flex items-center"
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown(2);
              }}
            >
              Find Partner
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`ml-2 w-4 h-4 transition-transform ${activeDropdown === 2 ? "transform rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
            {activeDropdown === 2 && (
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-md">
                <a
                  href="#post-requirement"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100 border-b border-gray-300 text-center"
                >
                  Post Requirement
                </a>
                <a
                  href="#apply-requirement"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100  text-center "
                >
                  Apply for Requirement
                </a>
              </div>
            )}
          </div>

          <a
            href="#community"
            className="text-gray-600 hover:text-[#3646F5]"
          >
            Community
          </a>
          <a
            href="#contact-us"
            className="text-gray-600 hover:text-[#3646F5]"
          >
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
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } bg-white lg:hidden absolute top-0 left-0 w-full z-10 shadow-lg flex-col items-center`}
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

        <div className="flex flex-col space-y-4 p-4 w-full text-center ">
          <a
            href="#home"
            className="text-gray-600 hover:text-[#3646F5] border border-black px-4 py-2"
          >
            Home
          </a>

          <div className="relative border border-black px-4 py-2 ">
            <a
              href="#hackathon"
              className="text-gray-600 hover:text-[#3646F5] flex items-center justify-center "
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown(0);
              }}
            >
              Hackathon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`ml-2 w-4 h-4 transition-transform ${activeDropdown === 0 ? "transform rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
            {activeDropdown === 0 && (
              <div className="mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-md">
                <a
                  href="#create-hackathon"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                >
                  Create Hackathon
                </a>
                <a
                  href="#apply-hackathon"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                >
                  Apply Hackathon
                </a>
              </div>
            )}
          </div>

          <div className="relative border border-black px-4 py-2">
            <a
              href="#projects"
              className="text-gray-600 hover:text-[#3646F5] flex items-center justify-center"
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown(1);
              }}
            >
              Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`ml-2 w-4 h-4 transition-transform ${activeDropdown === 1 ? "transform rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
            {activeDropdown === 1 && (
              <div className="mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-md">
                <a
                  href="#create-project"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                >
                  Create Project
                </a>
                <a
                  href="#apply-project"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                >
                  Apply Project
                </a>
              </div>
            )}
          </div>

          <div className="relative ">
            <a
              href="#find-partner"
              className="text-gray-600 hover:text-[#3646F5] flex items-center justify-center border border-black px-4 py-2"
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown(2);
              }}
            >
              Find Partner
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`ml-2 w-4 h-4 transition-transform ${activeDropdown === 2 ? "transform rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
            {activeDropdown === 2 && (
              <div className="mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-md">
                <a
                  href="#post-requirement"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                >
                  Post Requirement
                </a>
                <a
                  href="#apply-requirement"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                >
                  Apply for Requirement
                </a>
              </div>
            )}
          </div>

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
