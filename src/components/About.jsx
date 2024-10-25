import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useEffect } from 'react';

export const About = () => {
  // Control animations based on inView
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Only animate once when in view
    threshold: 0.2,    // Trigger when 20% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <section id="about" className="py-12 md:py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Us</h2>
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Animation */}
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
            }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/website-hosting.jpg"
              alt="About Host IT"
              className="rounded-lg shadow-md"
            />
          </motion.div>

          {/* Text Animation */}
          <motion.div
            className="md:w-1/2 md:pl-8"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 100 },
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg mb-4">
              Host-IT Services is more than just a web hosting and IT Services company, we are your dedicated partner in navigating the digital landscape. With a passion for innovation and commitment to excellence, we deliver tailored solutions that empower businesses to thrive online.
            </p>
            <p className="text-lg mb-4">
              Our experienced team brings expertise and personalized support to every project, ensuring seamless integration and optimal performance. Trust us to be your trusted ally in achieving your digital goals.
            </p>
            <p className="text-lg font-semibold">
              Welcome to Host-IT Services, where success meets innovation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
