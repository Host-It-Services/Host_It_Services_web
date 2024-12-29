"use client";

import { useTranslation } from "react-i18next";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Clients = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const clientLogos = [
    { src: "/client1.jpg", alt: "Client 1 Logo", link: "https://tswanaradiology.com/" },
    { src: "/client2.jpg", alt: "Client 2 Logo", link: "https://tumbamuntutrading.co.za/" },
    { src: "/client3.jpg", alt: "Client 3 Logo", link: "https://virtualedgecreatives.com/" },
    { src: "/client4.jpg", alt: "Client 4 Logo", link: "https://ohoneyyfood.com/" },
    { src: "/client5.jpg", alt: "Client 5 Logo", link: "https://chemprojects.co.za" },
    { src: "/Mwimpe-beauty-logo.png", alt: "Client 5 Logo", link: "https://chemprojects.co.za" },
    { src: "/Gold-cloud-logo.png", alt: "Client 5 Logo", link: "https://chemprojects.co.za" },
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clientLogos.length);
  }, [clientLogos.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + clientLogos.length) % clientLogos.length);
  }, [clientLogos.length]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section id="clients" className="py-12 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">{t("clients.title")}</h2>
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex justify-center items-center h-40">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute"
              >
                <a href={clientLogos[currentIndex].link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={clientLogos[currentIndex].src}
                    alt={clientLogos[currentIndex].alt}
                    className="h-full max-h-32 w-auto object-contain shadow-lg rounded-lg"
                  />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow-md hover:bg-opacity-75 transition-all duration-300"
            aria-label="Previous client"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow-md hover:bg-opacity-75 transition-all duration-300"
            aria-label="Next client"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 space-x-2 mt-4">
            {clientLogos.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-primary" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
