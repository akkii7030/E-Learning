import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import Footer from "../components/Footer";

const ElearningPage = () => {
  return (
    <div className="bg-gradient-to-r from-black to-gray-800 text-white">
      {/* Breadcrumb Section */}
      <section className="breadcrumb-area relative py-16 text-center">
        <div className="absolute inset-0">
          <img
            src="/image/slider-bottom-pattern.png"
            alt="Shape"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold animate__animated animate__fadeInDown">
            OUR PRICING
          </h2>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="our-pricing-area py-12">
        <div className="container">
          <div className="row justify-center">
            {[
              {
                plan: "Basic",
                price: 99,
                color: "#4382ff",
                features: [
                  "Unlimited access to courses",
                  "Progress Report Available",
                  "High resolution videos",
                ],
              },
              {
                plan: "Standard",
                price: 120,
                color: "#554da7",
                features: [
                  "Unlimited access to courses",
                  "Progress Report Available",
                  "High resolution videos",
                  "Certificate after completion",
                ],
              },
              {
                plan: "Premium",
                price: 199,
                color: "#f94fa4",
                features: [
                  "Unlimited access to courses",
                  "Progress Report Available",
                  "High resolution videos",
                  "Certificate after completion",
                  "Private sessions",
                ],
              },
            ].map((item, index) => (
              <div
                className="col-lg-4 col-md-6 mb-6 animate__animated animate__fadeInUp"
                data-wow-delay={`${0.1 * (index + 1)}s`}
                key={index}
              >
                <div className="pricing-box text-center bg-gray-900 p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105">
                  <div
                    className="pricing-header py-4 rounded-t-xl"
                    style={{ backgroundColor: item.color }}
                  >
                    <h2 className="text-xl font-bold">{item.plan}</h2>
                  </div>
                  <div className="pricing-content py-6">
                    <h3
                      className="text-3xl font-bold mb-4"
                      style={{ color: item.color }}
                    >
                      ${item.price} <span className="text-lg">/ Month</span>
                    </h3>
                    <ul className="text-sm space-y-2 mb-6">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-center justify-center">
                          ✅ {feature}
                        </li>
                      ))}
                    </ul>
                    <button
                      className="px-6 py-2 rounded-lg font-semibold transition duration-300 transform hover:scale-105"
                      style={{ backgroundColor: item.color, color: "#fff" }}
                    >
                      Select Plan
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default ElearningPage;
