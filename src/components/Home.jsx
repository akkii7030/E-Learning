import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import About from './About';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-800 to-black text-white">
      <section className="slider-area w-full p-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="text-left"
            >
              <h1 className="text-4xl font-bold mb-4">Start Learning and Embrace New Skills For a Better Future</h1>
              <p className="text-lg mb-6">With the help of E-Learning, create your own path and drive on your skills on your own to achieve what you seek.</p>
              <div>
                <Link to="/course" className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg transition-all">View All Courses</Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="text-center"
            >
              <img src="/image/banner.png" alt="Slider Banner" className="rounded-lg shadow-lg" />
            
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;