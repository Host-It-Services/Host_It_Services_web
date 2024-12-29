"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t, i18n } = useTranslation();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
    closeMenu();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMenu();
  };

  return (
    <motion.header
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      className={`fixed top-0 left-0 right-0 z-50 text-white transition-shadow ${
        visible ? "shadow-md" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center" aria-label={t("header.logoAlt")}>
          <img
            src="/logo5.png"
            alt={t("header.logoAlt")}
            className="h-12 max-h-20 w-auto mr-2"
          />
        </a>

        <div className="flex items-center">
          <nav
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex absolute md:relative top-full left-0 right-0 md:top-auto bg-black md:bg-transparent flex-col md:flex-row items-start md:items-center`}
          >
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 p-4 md:p-0">
              <li>
                <a
                  onClick={scrollToTop}
                  className="block cursor-pointer text-white hover:text-primary"
                >
                  {t("header.home") || "Home"}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={closeMenu}
                  className="block text-white hover:text-primary"
                >
                  {t("header.services")}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={closeMenu}
                  className="block text-white hover:text-primary"
                >
                  {t("header.about")}
                </a>
              </li>
              <li>
                <a
                  href="#plans"
                  onClick={closeMenu}
                  className="block text-white hover:text-primary"
                >
                  {t("header.plans")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="block text-white hover:text-primary"
                >
                  {t("header.contact")}
                </a>
              </li>
            </ul>
          </nav>

          <div className="relative ml-4 flex items-center">
            <button
              onClick={() => setIsLangMenuOpen((prev) => !prev)}
              className="text-white hover:text-primary focus:outline-none flex items-center justify-center w-8 h-8"
              aria-label={t("header.changeLanguage")}
            >
              {i18n.language === 'fr' ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6">
                  <path fill="#fff" d="M0 0h512v512H0z"/>
                  <path fill="#00267f" d="M0 0h170.7v512H0z"/>
                  <path fill="#f31830" d="M341.3 0H512v512H341.3z"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6">
                  <path fill="#012169" d="M0 0h512v512H0z"/>
                  <path fill="#FFF" d="M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z"/>
                  <path fill="#C8102E" d="M184 324l11 34L42 512H0v-3l184-185zm124-12l54 8 150 147v45L308 312zM512 0L320 196l-4-44L466 0h46zM0 1l193 189-59-8L0 49V1z"/>
                  <path fill="#FFF" d="M176 0v512h160V0H176zM0 176v160h512V176H0z"/>
                  <path fill="#C8102E" d="M0 208v96h512v-96H0zM208 0v512h96V0h-96z"/>
                </svg>
              )}
            </button>
            {isLangMenuOpen && (
              <div className="absolute right-0 top-full py-2 w-48 bg-white rounded-md shadow-xl z-20">
                <button
                  onClick={() => changeLanguage("en")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 mr-2">
                    <path fill="#012169" d="M0 0h512v512H0z"/>
                    <path fill="#FFF" d="M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z"/>
                    <path fill="#C8102E" d="M184 324l11 34L42 512H0v-3l184-185zm124-12l54 8 150 147v45L308 312zM512 0L320 196l-4-44L466 0h46zM0 1l193 189-59-8L0 49V1z"/>
                    <path fill="#FFF" d="M176 0v512h160V0H176zM0 176v160h512V176H0z"/>
                    <path fill="#C8102E" d="M0 208v96h512v-96H0zM208 0v512h96V0h-96z"/>
                  </svg>
                  English
                </button>
                <button
                  onClick={() => changeLanguage("fr")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 mr-2">
                    <path fill="#fff" d="M0 0h512v512H0z"/>
                    <path fill="#00267f" d="M0 0h170.7v512H0z"/>
                    <path fill="#f31830" d="M341.3 0H512v512H341.3z"/>
                  </svg>
                  Français
                </button>
              </div>
            )}
          </div>

          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none md:hidden ml-4"
            aria-label={t("header.toggleMenu")}
          >
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              role="img"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

