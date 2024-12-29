import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section id="about" className="py-8 md:py-16" ref={ref}>
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">{t('about.title')}</h2>
      <div
        className="flex flex-col md:flex-row items-center"
        style={{ gap: '50px' }} // Force smaller gap between image and text
      >
        <motion.div
          className="md:w-1/2"
          style={{ marginBottom: '0', marginRight: '0' }} // Remove unnecessary space
          initial={null}
          animate={controls}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -20 },
          }}
          transition={{ duration: 0.5 }}
        >
          <LazyLoadImage
            src="/website-hosting.webp"
            alt={t('about.imageAlt')}
            className="rounded-lg shadow-md"
            loading="lazy"
            style={{ width: '100%', height: 'auto', display: 'block' }} // Explicit size
          />
        </motion.div>
        <motion.div
          className="md:w-1/2"
          style={{ marginBottom: '0', marginLeft: '0' }} // Remove unnecessary space
          initial={null}
          animate={controls}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 20 },
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg mx-auto md:text-left text-center" style={{ marginBottom: '8px' }}>{t('about.paragraph1')}</p>
          <p className="text-lg mx-auto md:text-left text-center" style={{ marginBottom: '8px' }}>{t('about.paragraph2')}</p>
          <p className="text-lg font-semibold mx-auto md:text-left text-center" style={{ marginBottom: '0' }}>{t('about.paragraph3')}</p>
        </motion.div>
      </div>
    </div>
  </section>
  
  
  
  
  
  
  
  
  );
};

