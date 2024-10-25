import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Mission =() => {
  // Use the inView hook to trigger animations when the section is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.2, // Trigger when 20% of the element is in view
  });

  return (
    <motion.section
      ref={ref}
      className="py-16 bg-gray-50"
      initial={{ opacity: 0, y: 50 }} // Initial state (hidden)
      animate={inView ? { opacity: 1, y: 0 } : {}} // Animate when in view
      transition={{ duration: 0.6, ease: 'easeOut' }} // Animation settings
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* Text Content with Animation */}
          <motion.div
            className="w-full lg:w-1/2 lg:pr-10 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-800">Our Mission</h2>
            <p className="text-base md:text-xl max-w-3xl mx-auto lg:mx-0 text-gray-600">
              Your Trusted IT Service Provider
            </p>
            <p className="mt-4 text-sm md:text-lg max-w-4xl mx-auto lg:mx-0 text-gray-700">
              At Host-IT Services, our mission is simple yet ambitious: to empower businesses with robust web hosting and IT solutions that propel their success in the digital world. We are committed to providing personalized services that exceed expectations and foster long-term partnerships with our clients.
            </p>
          </motion.div>

          {/* Image Section with Animation */}
          <motion.div
            className="w-full lg:w-1/2 mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
          >
            <img
              src="/public/cloud.webp"
              alt="Empowering businesses"
              className="mx-auto lg:mx-0 rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
