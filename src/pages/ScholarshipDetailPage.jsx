import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import Footer from "../components/Footer";

const ScholarshipPage = () => {
  return (
    <div className="bg-gradient-to-r from-black to-gray-800 text-white">
      {/* Header Section */}
      <header className="py-3 shadow-lg bg-gradient-to-r from-black to-gray-700">
        <div className="container d-flex justify-content-between align-items-center">
          <p className="m-0">Online Education Courses - Millions of people learning!</p>
          <div className="d-flex gap-3">
            {["facebook-f", "twitter", "linkedin-in", "youtube"].map((icon) => (
              <a key={icon} href="#" className="text-white">
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Navbar */}
      <nav className="navbar navbar-expand-md bg-gradient-to-r from-black to-gray-800">
        <div className="container">
          <a href="/" className="navbar-brand text-white">LOGO</a>
          <button className="navbar-toggler bg-white" data-bs-toggle="collapse" data-bs-target="#navbarMenu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav mx-auto">
              {["Home", "Courses", "Events", "Blog", "Contact"].map((item) => (
                <li key={item} className="nav-item">
                  <a href={`/${item.toLowerCase()}`} className="nav-link text-white">{item}</a>
                </li>
              ))}
            </ul>
            <a href="/login" className="btn btn-outline-light">Login / Register</a>
          </div>
        </div>
      </nav>

      {/* Scholarship Details */}
      <section className="py-5 text-center bg-gradient-to-r from-black to-gray-900">
        <h2 className="animate__animated animate__fadeInUp">Distance Learning Scholarship</h2>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              {[{ title: "Application Info", button: "Sign up to view" }, { title: "Amount Awarded", value: "$30,000" }, { title: "Deadline", value: "July 31, 2024" }].map(({ title, value, button }) => (
                <div key={title} className="p-4 bg-gray-800 rounded animate__animated animate__fadeInLeft mb-3">
                  <h3>{title}</h3>
                  {button ? <a href="/login" className="btn btn-warning w-100">{button}</a> : <p className="fs-5">{value}</p>}
                </div>
              ))}
            </div>
            <div className="col-lg-8">
              {[{ title: "Additional Information", content: "Distance learning scholarships are available for students taking online classes." }, { title: "Deadline Info", content: "All applications must be submitted before the deadline. Late applications will not be considered." }].map(({ title, content }) => (
                <div key={title} className="p-4 bg-gray-900 rounded animate__animated animate__fadeInRight mb-3">
                  <h3>{title}</h3>
                  <p>{content}</p>
                </div>
              ))}
              <div className="text-center mt-4">
                <a href="/login" className="btn btn-primary btn-lg animate__animated animate__zoomIn">Sign up to view application info</a>
              </div>
              <div className="mt-4 p-3 bg-gray-800 text-center animate__animated animate__fadeInUp">
                <p>Save time! Fill out your Scholarship Match profile to get personalized scholarship results.</p>
                <a href="/login" className="btn btn-success">Get My Results</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ScholarshipPage;