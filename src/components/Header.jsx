import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 bg-transparent transition-shadow`}
      initial={{ y: -100 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white">Host IT</a>
        <nav className="hidden md:flex space-x-4">
          <a href="#services" className="text-white hover:text-primary">Services</a>
          <a href="#about" className="text-white hover:text-primary">About</a>
          <a href="#plans" className="text-white hover:text-primary">Plans</a>
          <a href="#contact" className="text-white hover:text-primary">Contact</a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
