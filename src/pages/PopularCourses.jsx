import React from 'react';
import { motion } from 'framer-motion';

const PopularCourses = () => {
  const courses = [
    { title: "History of Philosophy", image: "/image/courses1.jpg", price: "Free" },
    { title: "Contemporary Art", image: "/image/courses2.jpg", price: "$25.00" },
    { title: "Geometry Course", image: "/image/courses3.jpg", price: "Free" },
    { title: "Informatic Course", image: "/image/courses4.jpg", price: "$15.00" },
    { title: "Elizabethan Theater", image: "/image/courses5.jpg", price: "$5.00" },
    { title: "Live Drawing", image: "/image/courses6.jpg", price: "$10.00" }
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="container mx-auto">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-4xl font-bold text-center mb-10"
        >
          Popular Courses
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div 
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 + index * 0.2, ease: 'easeOut' }}
              className="bg-gray-700 p-6 rounded-lg shadow-lg text-center"
            >
              <img src={course.image} alt={course.title} className="w-full rounded-lg mb-4" />
              <h2 className="text-2xl font-bold">{course.title}</h2>
              <p className="mt-2 text-gray-300">Explore this course and enhance your skills.</p>
              <span className="block mt-4 font-semibold text-green-400">{course.price}</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <motion.button 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600"
          >
            View More Courses
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
