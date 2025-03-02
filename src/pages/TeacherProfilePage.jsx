import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

// import Footer from './components/Footer';

const TeacherProfilePage = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-800 text-white min-h-screen">
      {/* Navigation Bar Component */}
      

      {/* Teacher Profile Section */}
      <section className="container py-5 animate__animated animate__fadeIn">
        <div className="row">
          <div className="col-md-4 text-center">
            <img src="/image/teacher1.jpg" alt="Teacher" className="img-fluid rounded-circle mb-3 shadow-lg" />
            <h3 className="text-xl font-bold">Aden Smith</h3>
            <p className="text-gray-300">Product Manager | Technology Specialties</p>
            <p><i className="fas fa-envelope text-yellow-400"></i> adensmith@gmail.com</p>
            <p><i className="fas fa-phone text-green-400"></i> +8801712570051</p>
          </div>
          <div className="col-md-8">
            <h3 className="text-2xl font-semibold border-b-2 border-gray-500 pb-2">Biography</h3>
            <p className="mt-3 text-gray-300">
              I'm a General Assembly Product Management educator where I taught in-person courses. 
              I have worked with various tech companies and served as a Product Manager at Bonobos.
            </p>
            <h3 className="text-2xl font-semibold border-b-2 border-gray-500 pb-2 mt-4">Expertise</h3>
            <ul className="list-disc list-inside text-gray-300 mt-3">
              <li className="hover:text-yellow-400 transition duration-300">Product Analysis</li>
              <li className="hover:text-yellow-400 transition duration-300">Customer Relations</li>
              <li className="hover:text-yellow-400 transition duration-300">Growth Strategy</li>
              <li className="hover:text-yellow-400 transition duration-300">Entrepreneurship Management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default TeacherProfilePage;