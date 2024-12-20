import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#3646F5] text-white pt-10">
      <div className="container mx-auto flex flex-col items-center md:items-start md:grid md:grid-cols-5 gap-8 px-4">
        {/* Logo and Description */}
        <div className="col-span-1 text-center md:text-left">
          <h1 className="text-lg font-bold mb-2">DevMatch</h1>
          <p className="text-sm">
          A platform for developers to find projects, hackathons, and partners.
          </p>
        </div>

        {/* Page Links */}
        <div className="text-center md:text-left">
          <h2 className="text-md font-semibold mb-2">Hackathon</h2>
          <ul className="text-sm space-y-1">
            <li>
              <a href="/">Post Hackathon</a>
            </li>
            <li>
              <a href="/">Apply Hackathon</a>
            </li>
            <li>
              <a href="/">Search Hackathon</a>
            </li>
            <li>
              <a href="/">View My Hackathon</a>
            </li>
          </ul>
        </div>

        {/* Links */}
        <div className="text-center md:text-left">
          <h2 className="text-md font-semibold mb-2">Projects</h2>
          <ul className="text-sm space-y-1">
            <li>
              <a href="/">Post Project</a>
            </li>
            <li>
              <a href="/">Apply Project</a>
            </li>
            <li>
              <a href="/">Search Project</a>
            </li>
            <li>
              <a href="/">View My Project</a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="text-center md:text-left">
          <h2 className="text-md font-semibold mb-2">Find Partner</h2>
          <ul className="text-sm space-y-1">
            <li>
              <a href="/">Post Partner</a>
            </li>
            <li>
              <a href="/">Apply Partner</a>
            </li>
            <li>
              <a href="/">Search Partner</a>
            </li>
            <li>
              <a href="/">View My Partner</a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="text-center md:text-left">
          <h2 className="text-md font-semibold mb-2">Contact Us</h2>
          <ul className="text-sm space-y-1">
            <li>
              <a href="/">
                <span role="img" aria-label="phone">☎️</span>  9962500722
              </a>
            </li>
            <li>
              <a href="/">
                <span role="img" aria-label="email">📧</span> vv9728@srmist.edu.in
              </a>
            </li>
            <li>
              <a href="/">
                <span role="img" aria-label="location">🏢</span> Chennai, India
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-8 text-center">
        <div className="flex justify-center space-x-4">
          <a href="/" className="text-white text-xl">
            <i className="fab fa-pinterest"></i>
          </a>
          <a href="/" className="text-white text-xl">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="/" className="text-white text-xl">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="/" className="text-white text-xl">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      <div className="p-5 text-center bg-black">
        Designed And Developed by Vidushi Vani and Team 💗
      </div>
    </footer>
  );
};

export default Footer;
