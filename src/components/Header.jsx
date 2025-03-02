import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to scroll to a section smoothly
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="bg-gradient-to-r from-black to-gray-800 text-white">

      {/* Middle Section */}
      <div className="py-3 px-4 flex justify-between items-center">
        <Link to="/">
          <img src="/image/logo.png" alt="Logo" className="h-10" />
        </Link>

        {/* Mobile Menu Toggle */}
        <button className="text-white text-2xl md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Navigation Bar */}
      <nav className={`${menuOpen ? "block" : "hidden"} md:block bg-gray-900 w-full`}>
        <ul className="flex flex-col md:flex-row md:items-center md:space-x-6 text-sm text-center md:text-left">
          <li>
            <Link to="/" className="block px-4 py-2 hover:text-gray-400">Home</Link>
          </li>

          {/* Pages Dropdown (Hover to Open) */}
          <li className="relative group">
            <button className="w-full text-left px-4 py-2 hover:text-gray-400">
              Pages
            </button>
            <ul className="hidden group-hover:flex flex-col absolute left-0 top-full bg-gray-800 rounded shadow-lg w-40 z-50 border border-gray-700">
              <li>
                <button onClick={() => scrollToSection("about")} className="block w-full px-4 py-2 hover:bg-gray-700">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("faq")} className="block w-full px-4 py-2 hover:bg-gray-700">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("support")} className="block w-full px-4 py-2 hover:bg-gray-700">
                  Support
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("scholarship")} className="block w-full px-4 py-2 hover:bg-gray-700">
                  Scholarship
                </button>
              </li>
            </ul>
          </li>

          <li><Link to="/contact" className="block px-4 py-2 hover:text-gray-400">Contact</Link></li>
          <li><Link to="/blog" className="block px-4 py-2 hover:text-gray-400">Blog</Link></li>
          <li><Link to="/events" className="block px-4 py-2 hover:text-gray-400">Events</Link></li>
          <li><Link to="/teachers" className="block px-4 py-2 hover:text-gray-400">Teachers</Link></li>
          <li><Link to="/elearning" className="block px-4 py-2 hover:text-gray-400">Price</Link></li>

          <li className="mt-2 md:mt-0 md:ml-auto">
            <Link to="/login" className="block px-4 py-2 hover:text-gray-400">Login/Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
