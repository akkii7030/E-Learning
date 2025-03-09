import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white">
      <section className="slider-area w-full px-6 md:px-10 py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* 🔹 Left Section - Text */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-left space-y-6"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Start Learning and <br /> <span className="text-blue-400">Embrace New Skills</span>
              </h1>
              <p className="text-lg text-gray-300">
                With the help of <span className="font-semibold text-blue-300">E-Learning</span>,
                create your own path and master new skills to shape your future.
              </p>
              <div>
                <Link
                  to="/course"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  View All Courses
                </Link>
              </div>
            </motion.div>

            {/* 🔹 Right Section - Image */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center"
            >
              <img
                src="/image/banner.png"
                alt="E-Learning Banner"
                className="rounded-xl shadow-lg w-full md:w-[90%] mx-auto hover:shadow-2xl transition-all"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
