import React from "react";

const Support = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-800 text-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-4 text-gray-300">Support Page</h1>
      <p className="text-lg mb-6 text-center max-w-2xl text-gray-400">
        Need help? Our support team is here for you. Contact us for assistance.
      </p>

      <div className="bg-gray-900 shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-200">Contact Support</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-700 bg-gray-800 rounded-lg px-4 py-2 w-full text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-700 bg-gray-800 rounded-lg px-4 py-2 w-full text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="border border-gray-700 bg-gray-800 rounded-lg px-4 py-2 w-full text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-600"
          ></textarea>
          <button
            type="submit"
            className="bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Support;
