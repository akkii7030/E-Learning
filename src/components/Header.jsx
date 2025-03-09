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
      window.location.href = "/register";
    });
  };

  const handleNavigation = () => {
    setDropdownOpen(false);
    setMenuOpen(false);
  };

  return (
    <>
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-600 text-white shadow-lg fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <Link to="/" className="flex items-center">
            <img src="/image/logo.png" alt="Logo" className="h-10" />
          </Link>
          <button
            className="text-white text-2xl md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </button>
          <nav
            className={`absolute md:relative top-16 left-0 w-full bg-blue-800 md:bg-transparent md:top-0 md:flex md:items-center md:justify-between ${
              menuOpen ? "block" : "hidden"
            } md:block`}
          >
            <ul className="flex flex-col md:flex-row md:items-center text-center md:text-left text-sm w-full md:w-auto">
              <li><Link to="/" onClick={handleNavigation} className="block px-4 py-2 text-white hover:text-yellow-300 transition">Home</Link></li>
              <li className="relative group">
                <button className="block px-4 py-2 text-white hover:text-yellow-300 flex items-center" onClick={() => setDropdownOpen(!dropdownOpen)}>
                  Pages <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                </button>
                <ul className={`absolute left-0 mt-2 bg-white text-gray-900 rounded-lg shadow-lg w-44 transition-all ${dropdownOpen ? "block" : "hidden"}`}>
                  <li><Link to="/about" onClick={handleNavigation} className="block px-4 py-2 hover:bg-gray-200 rounded-t-lg">About</Link></li>
                  <li><Link to="/faq" onClick={handleNavigation} className="block px-4 py-2 hover:bg-gray-200">FAQ</Link></li>
                  <li><Link to="/support" onClick={handleNavigation} className="block px-4 py-2 hover:bg-gray-200">Support</Link></li>
                  <li><Link to="/scholarship" onClick={handleNavigation} className="block px-4 py-2 hover:bg-gray-200 rounded-b-lg">Scholarship</Link></li>
                </ul>
              </li>
              <li><Link to="/contact" onClick={handleNavigation} className="block px-4 py-2 text-white hover:text-yellow-300 transition">Contact</Link></li>
              <li><Link to="/blog" onClick={handleNavigation} className="block px-4 py-2 text-white hover:text-yellow-300 transition">Blog</Link></li>
              <li><Link to="/events" onClick={handleNavigation} className="block px-4 py-2 text-white hover:text-yellow-300 transition">Events</Link></li>
              <li><Link to="/teachers" onClick={handleNavigation} className="block px-4 py-2 text-white hover:text-yellow-300 transition">Teachers</Link></li>
              <li><Link to="/elearning" onClick={handleNavigation} className="block px-4 py-2 text-white hover:text-yellow-300 transition">Pricing</Link></li>
              <li className="mt-2 md:mt-0 md:ml-auto">
                <button onClick={handleLogout} className="block px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded transition">
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* Main content padding to avoid being hidden behind fixed header */}
      <main className="pt-20">
        {/* Your page content here */}
      </main>
    </>
  );
};

export default Header;
