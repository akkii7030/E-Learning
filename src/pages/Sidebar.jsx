import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="header-nav-area bg-body-tertiary clearfix">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 header-nav-menu-box">
            <nav className="navbar navbar-expand-md p-0">
              <div className="header-responsive-menu">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
              <div className="collapse navbar-collapse header-nav-menu-area" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/courses">Courses</Link>
                  </li>
                  <li>
                    <Link to="/events">Events</Link>
                  </li>
                  <li>
                    <Link to="/teachers">Teachers</Link>
                  </li>
                  <li>
                    <Link to="/pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="header-request">
              <Link to="/login" className="theme-btn">Login / Register</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;