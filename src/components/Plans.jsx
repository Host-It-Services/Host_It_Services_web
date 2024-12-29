import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

export const Plans = () => {
  const { t } = useTranslation();

  const plans = [
    {
      name: t('plans.starter.name'),
      price: t('plans.starter.price'),
      features: t('plans.starter.features', { returnObjects: true }),
      link: 'https://www.hostitservices.com/billing/index.php?rp=/store/web-hosting/starter-web-hosting'
    },
    {
      name: t('plans.basic.name'),
      price: t('plans.basic.price'),
      features: t('plans.basic.features', { returnObjects: true }),
      link: 'https://www.hostitservices.com/billing/index.php?rp=/store/web-hosting/basic'
    },
    {
      name: t('plans.pro.name'),
      price: t('plans.pro.price'),
      features: t('plans.pro.features', { returnObjects: true }),
      link: 'https://www.hostitservices.com/billing/index.php?rp=/store/web-hosting/pro'
    }
  ];

  return (
    <section id="plans" className="py-16 md:py-24 bg-gradient-to-r from-blue-100 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center text-black">
          {t('plans.title')}
        </h2>
        <p className="text-center mb-12 max-w-3xl mx-auto text-lg md:text-xl text-gray-700">
          {t('plans.description')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition duration-300 bg-white border border-blue-100"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative p-8 z-10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                  <p className="text-3xl font-bold text-blue-600 mb-1">
                    {plan.price} <span className="text-sm font-normal text-gray-600">{t('plans.perMonth')}</span>
                  </p>
                </div>

                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <FiCheck className="w-5 h-5 text-blue-500 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('plans.getQuote')}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
