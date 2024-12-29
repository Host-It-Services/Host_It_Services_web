import { motion } from 'framer-motion'; 
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

export const Mission = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.section
    ref={ref}
    className="py-16 bg-gray-50"
    initial={{ opacity: 0 }}
    animate={inView ? { opacity: 1 } : {}}
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <motion.div
          className="w-full lg:w-1/2 lg:pr-10 text-center lg:text-left"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            {t('mission.title')}
          </h2>
          <p className="text-lg sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto lg:mx-0 ">
            {t('mission.subtitle')}
          </p>
          <p className="mt-4 text-lg sm:text-lg md:text-base lg:text-lg max-w-4xl mx-auto lg:mx-0 ">
            {t('mission.description')}
          </p>
        </motion.div>
  
        <motion.div
          className="w-full lg:w-1/2 mt-8 lg:mt-0"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
        >
          <img
            src="/cloud.webp"
            alt={t('mission.imageAlt')}
            className="mx-auto lg:mx-0 rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  </motion.section>
  
  );
};

