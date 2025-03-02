import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const reasons = [
    { title: "Flexible Learning", description: "Learn at your own pace, anytime and anywhere.", icon: "fas fa-clock" },
    { title: "Expert Instructors", description: "Gain knowledge from industry-leading professionals.", icon: "fas fa-user-graduate" },
    { title: "Affordable Courses", description: "Access high-quality education without breaking the bank.", icon: "fas fa-dollar-sign" }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-700 text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Why Choose E-learning
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-4 max-w-2xl mx-auto text-gray-300 text-center"
        >
          Look into yourself, know you’re ambitious and keep moving forward until you get something in return as your achievement.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            >
              <i className={`${reason.icon} text-4xl text-blue-400 mb-4`}></i>
              <h3 className="text-xl font-bold">{reason.title}</h3>
              <p className="mt-2 text-gray-300">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
