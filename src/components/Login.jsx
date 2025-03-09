import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { motion } from "framer-motion";
import { FaGoogle, FaMoon, FaSun } from "react-icons/fa";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  // 🔹 Handle Email/Password Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard"); // Redirect on successful login
    } catch (err) {
      setError(err.message);
    }
  };

  // 🔹 Handle Google Login
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className={`flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* 🔹 Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-5 right-5 text-2xl p-2 rounded-full bg-opacity-70 backdrop-blur-md shadow-md"
      >
        {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
      </button>

      {/* 🔹 Login Card */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-sm sm:max-w-md lg:max-w-lg bg-opacity-90 backdrop-blur-md shadow-lg rounded-3xl p-6 sm:p-8"
        style={{
          background: darkMode
            ? "linear-gradient(135deg, rgba(25, 25, 25, 0.8), rgba(40, 40, 40, 0.8))"
            : "linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(240, 240, 240, 0.8))",
          boxShadow: darkMode
            ? "10px 10px 20px rgba(0, 0, 0, 0.3), -10px -10px 20px rgba(255, 255, 255, 0.05)"
            : "10px 10px 20px rgba(200, 200, 200, 0.3), -10px -10px 20px rgba(255, 255, 255, 0.8)",
        }}
      >
        {/* 🔹 Header */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Welcome Back</h2>

        {/* 🔹 Error Message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* 🔹 Input Fields */}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-opacity-70 backdrop-blur-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-opacity-70 backdrop-blur-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full mt-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition transform hover:scale-105">
            Log In
          </button>
        </form>

        {/* 🔹 OR Divider */}
        <div className="flex items-center justify-center my-4">
          <hr className="w-1/4 border-gray-400" />
          <span className="mx-2 text-gray-600 dark:text-gray-400">OR</span>
          <hr className="w-1/4 border-gray-400" />
        </div>

        {/* 🔹 Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md transition transform hover:scale-105"
        >
          <FaGoogle className="mr-2" /> Continue with Google
        </button>

        {/* 🔹 Footer */}
        <p className="text-center mt-6 text-gray-600 dark:text-gray-400">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
