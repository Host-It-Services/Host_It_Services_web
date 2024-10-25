import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the hamburger menu

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.header
    style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} // Transparent background
    className={`fixed top-0 left-0 right-0 z-50 text-white transition-shadow ${visible ? 'shadow-md' : ''}`}
    initial={{ y: -100 }}
    animate={{ y: visible ? 0 : -100 }}
    transition={{ duration: 0.3 }}
  >
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <a href="#" className="flex items-center" aria-label="Company Logo">
        <img 
          src="/logo5.png" 
          alt="Company Logo" 
          className="h-12 max-h-20 w-auto mr-2" // Adjusted height for a consistent navbar size
        />
      </a>
  
      {/* Hamburger icon for mobile view */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-white focus:outline-none"
        aria-label="Toggle Menu"
      >
        {/* Hamburger icon */}
        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
  
      {/* Mobile Navigation Menu */}
      <nav
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} // Transparent background
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden absolute inset-x-0 top-16 z-40 shadow-lg`}
      >
        <ul className="flex flex-col space-y-2 py-4">
          <li>
            <a href="#services" onClick={closeMenu} className="block text-white hover:text-primary px-4 py-2">
              Services
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu} className="block text-white hover:text-primary px-4 py-2">
              About
            </a>
          </li>
          <li>
            <a href="#plans" onClick={closeMenu} className="block text-white hover:text-primary px-4 py-2">
              Plans
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu} className="block text-white hover:text-primary px-4 py-2">
              Contact
            </a>
          </li>
        </ul>
      </nav>
  
      {/* Desktop Navigation Links */}
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
