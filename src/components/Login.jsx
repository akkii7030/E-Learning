import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

const LoginPage = () => {
  return (
    <section className="login-page-main bg-gradient-to-r from-gray-900 to-gray-700 text-white py-16 animate__animated animate__fadeIn">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-lg animate__animated animate__zoomIn">
            {/* Header */}
            <div className="text-center mb-6 animate__animated animate__bounceInDown">
              <Link to="/" className="block mb-4">
                <img src="/image/logo.png" alt="Logo" className="mx-auto h-12 animate__animated animate__pulse animate__infinite" />
              </Link>
              <p className="text-gray-300">Login into your pages account</p>
            </div>

            {/* Login Form */}
            <form method="POST" className="animate__animated animate__fadeInUp animate__delay-1s">
              <div className="mb-4 animate__animated animate__fadeInLeft animate__delay-1s">
                <input type="email" id="email" className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 text-white" name="email" placeholder="Email" required />
              </div>
              <div className="mb-4 relative animate__animated animate__fadeInRight animate__delay-2s">
                <input id="password" type="password" className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 text-white" name="password" placeholder="********" required />
              </div>
              <div className="flex items-center mb-4 animate__animated animate__fadeInLeft animate__delay-3s">
                <input id="checkbox1" type="checkbox" className="mr-2" />
                <label htmlFor="checkbox1" className="text-gray-300">Keep me logged in</label>
              </div>
              <button type="submit" className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded transition duration-300 animate__animated animate__heartBeat animate__delay-4s">Log in</button>
            </form>

            {/* Social Login Section */}
            <div className="text-center mt-6 animate__animated animate__fadeInUp animate__delay-5s">
              <h3 className="text-gray-300">Or Login With</h3>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition animate__animated animate__bounce animate__delay-6s">Google</a>
                <a href="#" className="text-white bg-blue-400 px-4 py-2 rounded hover:bg-blue-500 transition animate__animated animate__bounce animate__delay-7s">Twitter</a>
                <a href="#" className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition animate__animated animate__bounce animate__delay-8s">Facebook</a>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center mt-6 animate__animated animate__fadeInUp animate__delay-9s">
              <p className="text-gray-300">Don't have an account? <Link to="/register" className="text-blue-400 hover:text-blue-500">Register</Link></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
