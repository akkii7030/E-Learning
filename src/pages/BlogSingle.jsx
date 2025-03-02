import React from 'react';
import { motion } from 'framer-motion';

const BlogSingle = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="container mx-auto max-w-4xl">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-4xl font-bold text-center mb-6"
        >
          What are the upcoming Technologies?
        </motion.h1>
        <motion.img 
          src="/image/blog1.jpg" 
          alt="Blog Post"
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
          Technology is advancing at a rapid pace. Innovations such as Hyperloop, Virtual Reality, and Space Travel are on the horizon, promising to revolutionize the way we live and work. In this blog, we’ll explore these exciting upcoming technologies.
        </motion.p>
        <div className="mt-8 space-y-6">
          {[
            { title: "Hyperloop", text: "A high-speed transport system that could connect cities in record time." },
            { title: "Virtual Reality", text: "Transforming education and entertainment with immersive experiences." },
            { title: "Space Travelling", text: "Plans to send humans to Mars could become a reality within the next decade." },
            { title: "Smart Clothing", text: "Wearable technology that enhances human capabilities." }
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
      </div>
    </section>
  );
};

export default BlogSingle;
