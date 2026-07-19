import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/events", label: "Events" },
    { to: "/team", label: "Team" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black bg-opacity-80 backdrop-blur-md border-b border-blue/30">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="text-blue">
              <div className="h-8 w-8">
                <Link to="/">
                  <img src="/logo.png" height="100%" width="100%" />
                </Link>
              </div>
            </div>
            <div>
              <h1 className="text-xl text-white font-bold">
                PICT <span className="text-blue">CSI</span>
              </h1>
              <p className="text-xs text-gray-400">Computer Society of India</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="nav-link  text-white hover:text-blue transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="nav-link text-white hover:text-blue transition-colors"
            >
              About
            </Link>
            <Link
              to="/events"
              className="nav-link text-white hover:text-blue transition-colors"
            >
              Events
            </Link>
            <Link
              to="/team"
              className="nav-link text-white hover:text-blue transition-colors"
            >
              Team
            </Link>
            <Link
              to="/gallery"
              className="nav-link text-white hover:text-blue transition-colors"
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="nav-link text-white hover:text-blue transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items space-x-4">
            <button
              onClick={() =>
                (window.location.href =
                  "https://docs.google.com/forms/d/e/1FAIpQLSc5KbMxaHwWGCXVp74sGfozKjjKtEZllDZcf2Jls036SLyNTg/closedform")
              }
              className="bg-blue  text-black font-medium px-5 py-2 rounded-full hover:bg-blueDark transition-all duration-300 transform hover:scale-95"
            >
              Join CSI
            </button>
            <button onClick={() => (window.location.href = "./profile.html")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                className="h-10 w-10 text-blue hover:text-black hover:bg-blue   rounded-full transition-all duration-300"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </button>
          </div>

          <div className="md:hidden">
            <button id="menu-toggle" className="text-white focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className="md:hidden hidden pt-4 pb-2 border-t border-gray-800 mt-3 transform transition-all duration-300 origin-top scale-95 opacity-0"
        >
          <div className="flex flex-col items-center space-y-3">
            <a
              href="#home"
              className="mobile-link text-white hover:text-blue transition-colors text-xl"
            >
              HOME
            </a>
            <a
              href="./profile.html"
              className="mobile-link text-white hover:text-blue transition-colors text-xl"
            >
              PROFILE
            </a>
            <a
              href="#about"
              className="mobile-link text-white hover:text-blue transition-colors text-xl"
            >
              ABOUT
            </a>
            <a
              href="#events"
              className="mobile-link text-white hover:text-blue transition-colors text-xl"
            >
              EVENTS
            </a>
            <a
              href="#team"
              className="mobile-link text-white hover:text-blue transition-colors text-xl"
            >
              TEAM
            </a>
            <a
              href="#gallery"
              className="mobile-link text-white hover:text-blue transition-colors text-xl"
            >
              GALLERY
            </a>
            <a
              href="#contact"
              className="mobile-link text-white hover:text-blue transition-colors text-xl"
            >
              CONTACT US
            </a>
            <button
              onClick={() =>
                (window.location.href =
                  "https://docs.google.com/forms/d/e/1FAIpQLSc5KbMxaHwWGCXVp74sGfozKjjKtEZllDZcf2Jls036SLyNTg/closedform")
              }
              className="bg-blue hover:bg-blueDark text-black font-medium px-5 py-2 rounded-full transition-all duration-300 w-full mobile-link"
            >
              Join CSI
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
