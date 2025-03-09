import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faBars, faTimes, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAuth, signOut } from "firebase/auth";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth).then(() => {
      window.location.href = "/register"; // Redirect to register page after logout
    });
  };

  // Function to scroll to a section smoothly
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false); // Close menu on mobile
    }
  };

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-600 text-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="py-3 px-4 flex justify-between items-center">
        {/* 🔹 Logo */}
        <Link to="/" className="flex items-center">
          <img src="/image/logo.png" alt="Logo" className="h-10" />
        </Link>

        {/* 🔹 Mobile Menu Button */}
        <button className="text-white text-2xl md:hidden focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* 🔹 Navigation Bar */}
      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex md:items-center md:justify-center md:space-x-6 bg-blue-800 md:bg-transparent transition-all duration-300`}
      >
        <ul className="flex flex-col md:flex-row md:items-center text-center md:text-left text-sm w-full md:w-auto">
          <li>
            <Link to="/" className="block px-4 py-2 text-white hover:text-blue-300 transition">
              Home
            </Link>
          </li>

          {/* 🔹 Mega Dropdown - Pages */}
          <li className="relative group">
            <button
              className="w-full text-left px-4 py-2 text-white hover:text-blue-300 flex items-center justify-center md:justify-start"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Pages <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
            </button>
            <ul
              className={`${
                dropdownOpen ? "block" : "hidden"
              } md:hidden bg-blue-700 text-white rounded shadow-lg w-full md:w-40 transition-all`}
            >
              <li>
                <button onClick={() => scrollToSection("about")} className="block w-full px-4 py-2 hover:bg-blue-600">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("faq")} className="block w-full px-4 py-2 hover:bg-blue-600">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("support")} className="block w-full px-4 py-2 hover:bg-blue-600">
                  Support
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("scholarship")}
                  className="block w-full px-4 py-2 hover:bg-blue-600"
                >
                  Scholarship
                </button>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/contact" className="block px-4 py-2 text-white hover:text-blue-300 transition">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/blog" className="block px-4 py-2 text-white hover:text-blue-300 transition">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/events" className="block px-4 py-2 text-white hover:text-blue-300 transition">
              Events
            </Link>
          </li>
          <li>
            <Link to="/teachers" className="block px-4 py-2 text-white hover:text-blue-300 transition">
              Teachers
            </Link>
          </li>
          <li>
            <Link to="/elearning" className="block px-4 py-2 text-white hover:text-blue-300 transition">
              Pricing
            </Link>
          </li>

          {/* 🔹 Logout Button */}
          <li className="mt-2 md:mt-0 md:ml-auto">
            <button
              onClick={handleLogout}
              className="block px-4 py-2 text-white hover:text-red-400 transition"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
