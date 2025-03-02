import React from "react";
import { motion } from "framer-motion";

const eventsData = [
  {
    id: 1,
    img: "/image/event1.jpg",
    date: "16 June",
    title: "Check upcoming Events",
    desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure anything embarrassing hidden in the middle of text.",
  },
  {
    id: 2,
    img: "/image/event2.jpg",
    date: "18 June",
    title: "Adding a New Digital",
    desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure anything embarrassing hidden in the middle of text.",
  },
  {
    id: 3,
    img: "/image/event3.jpg",
    date: "18 June",
    title: "West Elm At Evantor",
    desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure anything embarrassing hidden in the middle of text.",
  },
  {
    id: 4,
    img: "/image/event4.jpg",
    date: "20 June",
    title: "Introduction of New Technology",
    desc: "Become a part of this event and get to know about what kind of technologies will take its place in the future.",
  },
  {
    id: 5,
    img: "/image/event5.jpg",
    date: "22 June",
    title: "Learning Future",
    desc: "Take part in this event and learn how to build a future from experts and what it takes to make a delightful future.",
  },
  {
    id: 6,
    img: "/image/event6.jpg",
    date: "26 June",
    title: "Technological Expo",
    desc: "Visit the grand place where you can see every product from different people and learn from them about it.",
  },
];

const Events = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-black text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {eventsData.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-gray-800 p-4 rounded-2xl shadow-lg hover:scale-105 transition-transform"
            >
              <div className="relative">
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute top-2 left-2 bg-black bg-opacity-50 px-3 py-1 rounded-lg text-sm">
                  {event.date}
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                <p className="text-gray-400">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

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

export default Events;