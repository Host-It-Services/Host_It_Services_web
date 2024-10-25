import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER;

export const Plans = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      name: "Starter",
      price: "R 99",
      features: [
        "3GB Storage (SSD)",
        "1 website domain",
        "10 Email accounts",
        "Unlimited bandwidth",
        "Free cPanel",
        "Free SSL Certificate",
        "Free Website Migration"
      ]
    },
    {
      name: "Basic",
      price: "R 149",
      features: [
        "5GB Storage (SSD)",
        "3 website domain",
        "25 Email accounts",
        "Unlimited bandwidth",
        "Free cPanel",
        "Free SSL Certificate",
        "Free Website Migration"
      ]
    },
    {
      name: "Pro",
      price: "R 190",
      features: [
        "10GB Storage (SSD)",
        "5 website domain",
        "100 Email accounts",
        "Unlimited bandwidth",
        "Free cPanel",
        "Free SSL Certificate",
        "Free Website Migration"
      ]
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `Hello, my name is ${formData.name} and I am interested in the ${selectedPlan.name} plan. My email is ${formData.email}. Message: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank');

    setFormData({ name: '', email: '', message: '' });
    setSelectedPlan(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <section id="plans" className="py-16 md:py-24 bg-gradient-to-r from-blue-100 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-10 text-center text-black">
            Web Hosting Plans
          </h2>
          <p className="text-center mb-12 max-w-3xl mx-auto text-lg md:text-xl text-gray-700">
            We provide fast web hosting packages designed for all sizes of businesses with 24/7 Support.
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
                      {plan.price} <span className="text-sm font-normal text-gray-600">/Month</span>
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

                  <motion.button
                    className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSelectedPlan(plan);
                      setIsModalOpen(true);
                    }}
                  >
                    Get a Quote
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 15 }}
          >
            <div className="flex justify-between items-center m-auto mb-4">
              <h3 className="text-xl font-bold text-black">Get a Quote for {selectedPlan.name}</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                X
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  rows="4"
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};