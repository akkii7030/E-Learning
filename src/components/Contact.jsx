import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
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
            Leave A Message
          </motion.h2>
          <motion.p 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="text-lg mb-6"
          >
            If you have any type of query regarding courses, our faculty, or our plans, leave us a message here. We will get in touch with you as soon as possible.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="bg-gray-700 p-6 rounded-lg shadow-lg"
          >
            <form method="POST" action="send-mail" id="send-mail">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" name="fname" placeholder="First Name" className="w-full p-2 rounded" />
                <input type="text" name="lname" placeholder="Last Name" className="w-full p-2 rounded" />
                <input type="email" name="email" placeholder="Email" className="w-full p-2 rounded" />
                <input type="text" name="mobile" placeholder="Phone" className="w-full p-2 rounded" />
              </div>
              <textarea rows="4" name="msg" placeholder="Your Message" className="w-full mt-4 p-2 rounded"></textarea>
              <button type="submit" className="mt-4 px-6 py-2 bg-blue-500 rounded text-white">Submit</button>
            </form>
          </motion.div>
          
          {/* Contact Details */}
          <motion.div 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.8, ease: 'easeOut' }}
            className="bg-gray-700 p-6 rounded-lg shadow-lg"
          >
            <p><i className="fas fa-map-marker-alt text-blue-400"></i> Spring Store London Oxford Street, 012 United Kingdom</p>
            <p><i className="fas fa-phone-alt text-blue-400"></i> +00 1234 456789</p>
            <p><i className="fas fa-envelope text-blue-400"></i> info@example.com</p>
            <p><i className="fas fa-fax text-blue-400"></i> 000 123 2294 089</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
