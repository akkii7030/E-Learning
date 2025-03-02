import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20  relative overflow-hidden">
      {/* Background Shape */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <img src="/image/footer-shape.png" alt="Shape" className="w-full h-full object-cover" />
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange-400">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt mr-2 text-orange-400"></i>
                <span>Spring Store, Oxford Street, London, UK</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-2 text-orange-400"></i>
                <span>+00 1234 456789</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2 text-orange-400"></i>
                <span>info@example.com</span>
              </li>
            </ul>
          </div>

          {/* Feature Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange-400">Feature Links</h3>
            <ul className="space-y-2 text-sm">
              {["About Us", "Courses", "Scholarship", "Contact"].map((item, index) => (
                <li key={index}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "")}`}
                    className="hover:text-orange-400 transition duration-300 flex items-center"
                  >
                    <i className="far fa-dot-circle mr-2 text-orange-400"></i> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange-400">Support</h3>
            <ul className="space-y-2 text-sm">
              {["FAQ's", "Support"].map((item, index) => (
                <li key={index}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "")}`}
                    className="hover:text-orange-400 transition duration-300 flex items-center"
                  >
                    <i className="far fa-dot-circle mr-2 text-orange-400"></i> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange-400">Download Our App</h3>
            <div className="flex space-x-3">
              {["play-store", "app-store"].map((store, index) => (
                <a key={index} href="#" className="transform hover:scale-105 transition duration-300">
                  <img
                    src={`/image/${store}.png`}
                    alt={store}
                    className="w-28 bg-white/20 rounded-lg p-2 shadow-md backdrop-blur-md"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 flex justify-center space-x-5">
          {["facebook-f", "twitter", "linkedin-in", "youtube"].map((platform, index) => (
            <a
              key={index}
              href="#"
              className="text-white hover:text-orange-400 transition duration-300 text-xl"
            >
              <i className={`fab fa-${platform}`}></i>
            </a>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4 text-sm">
          <p>
            © {new Date().getFullYear()}{" "}
            <Link to="/" className="text-orange-400 hover:underline">
              E-learning
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
