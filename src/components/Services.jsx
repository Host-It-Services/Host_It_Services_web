import { motion } from 'framer-motion';
import { FaHeadset, FaServer, FaPaintBrush, FaCamera, FaCode, FaShareAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export const Services = () => {
  const { t } = useTranslation();

  const services = [
    { name: t('services.technicalSupport'), icon: <FaHeadset /> },
    { name: t('services.webHosting'), icon: <FaServer /> },
    { name: t('services.graphicDesign'), icon: <FaPaintBrush /> },
    { name: t('services.photography'), icon: <FaCamera /> },
    { name: t('services.webDevelopment'), icon: <FaCode /> },
    { name: t('services.socialMediaManagement'), icon: <FaShareAlt /> }
  ];

  return (
    <section id="services" className="py-12 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">{t('services.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center mb-2">
                <div className="text-3xl text-primary mr-3">{service.icon}</div>
                <h3 className="text-xl font-semibold">{service.name}</h3>
              </div>
              <p className="text-gray-600">
                {t('services.description', { service: service.name.toLowerCase() })}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

