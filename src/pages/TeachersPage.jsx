import React from "react";
import Footer from "../components/Footer";

const TeachersPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-800 text-white">
      {/* Breadcrumb Section */}
      <section className="py-8 text-center">
        <h2 className="text-3xl font-bold">OUR TEACHERS</h2>
      </section>

      {/* Teachers Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((teacher) => (
            <div key={teacher} className="bg-gray-900 p-4 rounded-lg text-center shadow-lg">
              <img
                src={`/image/teacher${teacher}.jpg`}
                alt={`Teacher ${teacher}`}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-xl font-bold mt-4">Teacher {teacher}</h3>
              <p className="text-gray-400">Subject Teacher</p>
              <div className="flex justify-center gap-3 mt-4">
                <a href="#" className="text-blue-400 hover:text-blue-300 text-lg">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-300 text-lg">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-300 text-lg">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-300 text-lg">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md">
            <i className="fa fa-refresh mr-2"></i> View More
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default TeachersPage;
