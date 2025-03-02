import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Text */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-left"
          >
            <h2 className="text-3xl font-bold mb-4">Introduce Acadevo - We Build Everything</h2>
            <p className="text-lg mb-6">
              E-Learning.com has the ambition to enlighten those students who have come here in the pursuit of these courses like Programming, Developing, Designing, Business, and Technology.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
              <li className="flex items-center"><i className="far fa-dot-circle text-blue-400 mr-2"></i>Top-Quality Courses</li>
              <li className="flex items-center"><i className="far fa-dot-circle text-blue-400 mr-2"></i>Extreme Video Library</li>
              <li className="flex items-center"><i className="far fa-dot-circle text-blue-400 mr-2"></i>Surety of Career Growth</li>
              <li className="flex items-center"><i className="far fa-dot-circle text-blue-400 mr-2"></i>Access anytime and anywhere</li>
              <li className="flex items-center"><i className="far fa-dot-circle text-blue-400 mr-2"></i>A skilled team of teachers</li>
              <li className="flex items-center"><i className="far fa-dot-circle text-blue-400 mr-2"></i>Reliable cost for courses</li>
            </ul>
            <div className="flex items-center mt-6 p-4 bg-gray-700 rounded-lg shadow-md">
              <div className="text-blue-400 text-3xl mr-4"><i className="fas fa-graduation-cap"></i></div>
              <div>
                <h3 className="text-xl font-bold">25 Years Of</h3>
                <p className="text-gray-300">Education Experience</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex justify-center"
          >
            <img src="./image/about.png" alt="theme image" className="rounded-lg shadow-lg max-w-full h-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
