import React from "react";
import { motion } from "framer-motion";

const EventSingle = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-black text-white py-12 px-6 mt-16">
      <div className="container mx-auto pt-16">
        <motion.div
          initial={{ opacity: 0, y: -50 }} // Changed y: 50 to y: -50 (Reversing animation)
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 p-6 rounded-2xl shadow-lg"
        >
          <div className="relative">
            <img
              src="/image/courses1.jpg"
              alt="Tech Expo for Digital Marketing"
              className="w-full h-80 object-cover rounded-lg"
            />
            <div className="absolute top-2 left-2 bg-black bg-opacity-50 px-3 py-1 rounded-lg text-sm">
              16 June
            </div>
          </div>
          <div className="mt-6">
            <h1 className="text-2xl font-bold mb-4">Tech Expo for Digital Marketing</h1>
            <p className="text-gray-400 mb-4">
              Digital; the substance creation and advanced arm of the main occasion arrangement, which provides a set-up of computerized advertising services.
            </p>
            <h2 className="text-xl font-semibold mb-2">New Digital Division</h2>
            <p className="text-gray-400 mb-4">
              Tech Expo Events is a world-leading enterprise technology conference and event series.
            </p>
          </div>
        </motion.div>

        <div className="flex justify-center mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gradient-to-r from-gray-700 to-gray-500 text-white py-2 px-6 rounded-lg shadow-md"
          >
            View More
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default EventSingle;
