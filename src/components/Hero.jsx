import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const textArray = "Host IT Services".split("");

export const Hero = () => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (displayText.length < textArray.length) {
        setDisplayText((prev) => prev + textArray[displayText.length]);
      } else {
        clearInterval(typingEffect);
      }
    }, 200); // Adjust the typing speed here (milliseconds)

    return () => clearInterval(typingEffect);
  }, [displayText]);

  return (
    <section className="min-h-screen pt-20 pb-12 md:pt-32 md:pb-20 bg-gradient-to-r from-primary to-primary-dark text-black bg-[url('/technician.webp')] bg-cover bg-center flex items-center">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          className="text-30xl md:text-6xl font-bold mb-4 text-blue-800" // Added blue color
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {displayText} {/* Typing text here */}
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 text-blue-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Bringing you a variety of tech services
        </motion.p>
        <motion.a
          href="#contact"
          className="bg-blue-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition duration-300 inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact us to get a quote
        </motion.a>
      </div>
    </section>
  );
};
