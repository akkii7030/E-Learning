import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';


const ScholarshipDetailPage = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="header-main">
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="header-top-content">
                  <p>Online Education Courses Millions of people learning!</p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="header-top-menu">
                  <ul>
                    <li><a href=""><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href=""><i className="fab fa-twitter"></i></a></li>
                    <li><a href=""><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href=""><i className="fab fa-youtube"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5 col-12">
                <div className="header-logo">
                  <a href="home.html"><img src="logo.png" alt="Logo" /></a>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-8 col-sm-7 col-12">
                <div className="header-contact">
                  <div className="header-widget-main clearfix">
                    <div className="header-widget clearfix">
                      <div className="header-icon">
                        <i className="fa-solid fa-phone"></i>
                      </div>
                      <div className="header-content">
                        <h3>Call</h3>
                        <h5>+123 4567 8910</h5>
                      </div>
                    </div>
                    <div className="header-widget clearfix">
                      <div className="header-icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="header-content">
                        <h3>Email</h3>
                        <h5>info@example.com</h5>
                      </div>
                    </div>
                    <div className="header-widget clearfix">
                      <div className="header-icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="header-content">
                        <h3>Address</h3>
                        <h5>24 Fifth st, Los Angeles, USA</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-nav-area bg-body-tertiary clearfix">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 header-nav-menu-box">
                <nav className="navbar navbar-expand-md p-0">
                  <div className="header-responsive-menu">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                  </div>
                  <div className="collapse navbar-collapse header-nav-menu-area" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li><a href="index.html">Home</a></li>
                      <li>
                        <a>Pages <i className="fas fa-angle-down"></i></a>
                        <div className="theme-dropdown">
                          <ul className="kurba">
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="faq.html">FAQ's</a></li>
                            <li><a href="contact.html">Support</a></li>
                            <li><a href="scholarship.html">Scholarship</a></li>
                          </ul>
                        </div>
                      </li>
                      <li><a href="courses.html">Courses</a></li>
                      <li><a href="events.html">Events</a></li>
                      <li><a href="teachers.html">Teachers</a></li>
                      <li><a href="pricing.html">Pricing</a></li>
                      <li><a href="blog.html">Blog</a></li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                  </div>
                </nav>
                <div className="header-request">
                  <a href="login.html" className="theme-btn">Login / Register</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb Section */}
      <section className="breadcrumb-area">
        <div className="breadcrumb-shape">
          <img src="slider-bottom-pattern.png" alt="Shape" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="breadcrumb-box">
                <h2>SCHOLARSHIP</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Section */}
      <section className="scholarship-area page-paddings">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="scholarships-box wow animate__animated animate__fadeInUp center" data-wow-delay="0.1s">
                <h3 className="theme-title">E-Learning.com Fellowship</h3>
                <p className="theme-description">
                  Centred at offering an open door for each understudy to approach better learning encounters with making sure about a superior, additionally encouraging future. Understudies can understand and gain from an entire scope of math and science recordings across grades during their time long free access to the learning application.
                </p>
                <div className="scholarships-bottom">
                  <div className="scholarships-item">
                    <div className="scholarships-icon"><i className="fas fa-dollar-sign"></i></div>
                    <h3 className="theme-title">Total</h3>
                    <p className="theme-description">$30.00</p>
                  </div>
                  <div className="scholarships-item">
                    <div className="scholarships-icon"><i className="fas fa-award"></i></div>
                    <h3 className="theme-title">Awards</h3>
                    <p className="theme-description">80</p>
                  </div>
                  <div className="scholarships-item">
                    <div className="scholarships-icon"><i className="fas fa-calendar-week"></i></div>
                    <h3 className="theme-title">Approved</h3>
                    <p className="theme-description">July 02 2020</p>
                  </div>
                </div>
                <div className="scholarship-button">
                  <a href="scholarship-detail.html" className="theme-btn">View Scholarship</a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="scholarships-box wow animate__animated animate__fadeInUp center" data-wow-delay="0.2s">
                <h3 className="theme-title">Distance Learning Scholarship</h3>
                <p className="theme-description">
                  If you want to study anywhere or in your own country and at the same time want the benefit of international education, distance learning education is for you. It is cheaper than actually studying abroad because everything is done online. E-Learning.com made a list of online degree scholarships and free online courses to help you get an.
                </p>
                <div className="scholarships-bottom">
                  <div className="scholarships-item">
                    <div className="scholarships-icon"><i className="fas fa-dollar-sign"></i></div>
                    <h3 className="theme-title">Total</h3>
                    <p className="theme-description">$30.00</p>
                  </div>
                  <div className="scholarships-item">
                    <div className="scholarships-icon"><i className="fas fa-award"></i></div>
                    <h3 className="theme-title">Awards</h3>
                    <p className="theme-description">80</p>
                  </div>
                  <div className="scholarships-item">
                    <div className="scholarships-icon"><i className="fas fa-calendar-week"></i></div>
                    <h3 className="theme-title">Deadline</h3>
                    <p className="theme-description">July 05 2020</p>
                  </div>
                </div>
                <div className="scholarship-button">
                  <a href="scholarship-detail.html" className="theme-btn">View Scholarship</a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="scholarships-box wow animate__animated animate__fadeInUp center" data-wow-delay="0.3s">
                <h3 className="theme-title">United E-Learning fellowship</h3>
                <p className="theme-description">
                  A number of scholarships are available for students applying to the Online programme. If you're ready to get started with your distance learning, but need some help with funding, check out this selection of scholarships online. Claim your scholarship and learn the technology, data, and business.
                </p>
                <div className="scholarships-bottom">
                  <div className="scholarships-item">
                    <div className="scholarships-icon"><i className="fas fa-dollar-sign"></i></div>
                    <h3 className="theme-title">Total</h3>
                    <p className="theme-description">$30.00</p>
                  </div>
                  <div className="scholarships-item">
                    <div className="scholarships-icon"><i className="fas fa-award"></i></div>
                    <h3 className="theme-title">Awards</h3>
                    <p className="theme-description">80</p>
                  </div>
                  <div className="scholarships-item">
                    <div className="scholarships-icon"><i className="fas fa-calendar-week"></i></div>
                    <h3 className="theme-title">Deadline</h3>
                    <p className="theme-description">July 08 2020</p>
                  </div>
                </div>
                <div className="scholarship-button">
                  <a href="scholarship-detail.html" className="theme-btn">View Scholarship</a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="scholarships-box wow animate__animated animate__fadeInUp center" data-wow-delay="0.4s">
                <h3 className="theme-title">Youngblood scholarship</h3>
                <p className="theme-description">
                  If you think you can do more than you think to then go beyond and claim your scholarship and learn the technology, data, and business skills that can transform your career. Despite the scholarship myths you may have heard of, distance learning scholarships are available to students attending classes online.
                </p>
                <div className="scholarships-bottom">
                  <div className="scholarships-item">
                    <div className="scholarships-icon"><i className="fas fa-dollar-sign"></i></div>
                    <h3 className="theme-title">Total</h3>
                    <p className="theme-description">$30.00</p>
                  </div>
                  <div className="scholarships-item">
                    <div className="scholarships-icon"><i className="fas fa-award"></i></div>
                    <h3 className="theme-title">Awards</h3>
                    <p className="theme-description">80</p>
                  </div>
                  <div className="scholarships-item">
                    <div className="scholarships-icon"><i className="fas fa-calendar-week"></i></div>
                    <h3 className="theme-title">Deadline</h3>
                    <p className="theme-description">July 10 2020</p>
                  </div>
                </div>
                <div className="scholarship-button">
                  <a href="scholarship-detail.html" className="theme-btn">View Scholarship</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-main">
        <div className="footer-shape">
          <img src="footer-shape.png" alt="Shape" />
        </div>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 sk">
                <div className="footer-box contact-list">
                  <div className="footer-title">
                    <h3 className="theme-title">Contact Us</h3>
                  </div>
                  <div className="footer-content">
                    <ul className="kurba">
                      <li><span><i className="fas fa-map-marker-alt"></i> Spring Store London Oxford Street, 012 United Kingdom</span></li>
                      <li><span><i className="fas fa-phone-alt"></i> +00 1234 456789</span></li>
                      <li><span><i className="fas fa-envelope"></i> info@example.com</span></li>
                      <li><span><i className="fas fa-fax"></i> 000 123 2294 089</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="footer-box footer-feature">
                  <div className="footer-title">
                    <h3 className="theme-title">Feature Links</h3>
                  </div>
                  <div className="footer-content clearfix">
                    <ul className="kurba">
                      <li><a href="about.html"><i className="far fa-dot-circle"></i> About Us</a></li>
                      <li><a href="courses.html"><i className="far fa-dot-circle"></i> Courses</a></li>
                      <li><a href="scholarship.html"><i className="far fa-dot-circle"></i> Scholarship</a></li>
                      <li><a href="contact.html"><i className="far fa-dot-circle"></i> Contact</a></li>
                    </ul>
                    <ul>
                      <li><a href="teacher.html"><i className="far fa-dot-circle"></i> Teachers</a></li>
                      <li><a href="pricing.html"><i className="far fa-dot-circle"></i> Pricing</a></li>
                      <li><a href="blog.html"><i className="far fa-dot-circle"></i> Blog</a></li>
                      <li><a href="event.html"><i className="far fa-dot-circle"></i> Events</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="footer-box support-box">
                  <div className="footer-title">
                    <h3 className="theme-title">Support</h3>
                  </div>
                  <div className="footer-content">
                    <ul className="kurba">
                      <li><a href="faq.html"><i className="far fa-dot-circle"></i> FAQ's</a></li>
                      <li><a href="contact.html"><i className="far fa-dot-circle"></i> Support</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="footer-box download-app">
                  <div className="footer-title">
                    <h3 className="theme-title">Download Our App</h3>
                  </div>
                  <div className="footer-content">
                    <ul className="kurba">
                      <li><a href=""><img src="play-store.png" alt="Play Store" /></a></li>
                      <li><a href=""><img src="app-store.png" alt="App Store" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="footer-social">
                  <ul className="kurba">
                    <li className="wow animate__animated animate__fadeInUp center" data-wow-delay="0.1s">
                      <a className="facebook" href=""><i className="fab fa-facebook-f"></i> Facebook</a>
                    </li>
                    <li className="wow animate__animated animate__fadeInUp center" data-wow-delay="0.2s">
                      <a className="twitter" href=""><i className="fab fa-twitter"></i> Twitter</a>
                    </li>
                    <li className="wow animate__animated animate__fadeInUp center" data-wow-delay="0.3s">
                      <a className="linkedin" href=""><i className="fab fa-linkedin-in"></i> Linkedin</a>
                    </li>
                    <li className="wow animate__animated animate__fadeInUp center" data-wow-delay="0.4s">
                      <a className="youtube" href=""><i className="fab fa-youtube"></i> Youtube</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom Section */}
      <div className="footer-bottom text-center">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="footer-copyright">
                <p>Copyright © 2020 <a href="home.html">E-learning</a>. All right reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipDetailPage;