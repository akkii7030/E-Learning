import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="container mx-auto">
        <div className="text-center">
          <motion.h2 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-3xl font-bold mb-4"
          >
            Our Blog
          </motion.h2>
          <motion.p 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="text-lg mb-6"
          >
            Stay updated with the latest news, insights, and updates from our blog.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5 + index * 0.2, ease: 'easeOut' }}
              className="bg-gray-700 p-6 rounded-lg shadow-lg"
            >
              <img src={`/image/blog${item}.jpg`} alt={`Blog Post ${item}`} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-bold">Blog Post {item}</h3>
              <p className="text-gray-300 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 rounded text-white">Read More</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
