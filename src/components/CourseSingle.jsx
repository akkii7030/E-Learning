import React from 'react';
import { motion } from 'framer-motion';

const CourseSingle = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="container mx-auto max-w-4xl">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-4xl font-bold text-center mb-6"
        >
          Data Product Manager
        </motion.h1>
        <motion.img 
          src="/image/courses1.jpg" 
          alt="Data Product Manager"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="w-full rounded-lg shadow-lg mb-6"
        />
        <motion.p 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-lg leading-relaxed"
        >
          Product Management is growing in demand as companies recognize its critical role in business success. This course will guide you through essential skills needed to become a Product Manager.
        </motion.p>
        <div className="mt-8 space-y-6">
          {[ 
            { title: "Course Description", text: "Learn the fundamentals of Product Management, including the product life cycle and market strategies." },
            { title: "What You’ll Learn", text: "Understand customer pain points, competitor analysis, and effective product development." },
            { title: "Requirements", text: "No prior experience needed, but basic business knowledge is beneficial." },
            { title: "Trainer", text: "George Mathews" },
            { title: "Course Fee", text: "Free" },
            { title: "Available Seats", text: "15" },
            { title: "Schedule", text: "2.00 pm to 4.00 pm" },
            { title: "Difficulty Level", text: "Intermediate" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 + index * 0.2, ease: 'easeOut' }}
              className="bg-gray-700 p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="mt-2 text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <motion.button 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600"
          >
            Enroll in Course
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default CourseSingle;
