import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const textArray = "Host IT Services".split("");

export const Hero = () => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const typingEffect = () => {
      if (displayText.length < textArray.length) {
        setDisplayText((prev) => prev + textArray[prev.length]);
      }
    };
    
    const typingInterval = setInterval(typingEffect, 200); // Adjust the typing speed here (milliseconds)

    return () => clearInterval(typingInterval);
  }, [displayText]);

  return (
    <section className="min-h-screen pt-20 pb-12 md:pt-32 md:pb-20 to-primary-dark text-black bg-[url('/global-com.webp')] bg-cover bg-center flex items-center">
      <div className="container ml-auto px-4 text-center">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {displayText} {/* Typing text here */}
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Bringing you a variety of tech services
        </motion.p>
        <motion.a
          href="#contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition duration-300 inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Contact us for a quote"
        >
          Contact us to get a quote
        </motion.a>
      </div>
    </section>
  );
};
