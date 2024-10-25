import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi'; // Check icon for features

export const Plans = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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

    const whatsappMessage = `Hello, my name is ${formData.name} and I am interested in your services. My email is ${formData.email}. Message: ${formData.message}`;
    const whatsappUrl = `https://wa.me/+27781074343?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank');

    // Reset form and close modal
    setFormData({ name: '', email: '', message: '' });
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Hosting Plans Section */}
      <section id="plans" className="py-16 md:py-24 bg-gradient-to-r from-gray-100 via-white to-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-10 text-center text-gray-800">
            Web Hosting Plans
          </h2>
          <p className="text-center mb-12 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
            We provide fast web hosting packages designed for all sizes of businesses with 24/7 Support.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-700 mb-2">{plan.name}</h3>
                  <p className="text-3xl font-bold text-primary mb-1">
                    {plan.price} <span className="text-sm font-normal text-gray-500">/Month</span>
                  </p>
                  <p className="text-gray-500">{plan.description}</p>
                </div>

                {/* Features List */}
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <FiCheck className="w-5 h-5 text-green-500 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Call-to-Action Button - Get a Quote */}
                <motion.button
                  className="block text-center bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsModalOpen(true)} // Open the modal on click
                >
                  Get a Quote
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Contact Form */}
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
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Get a Quote</h3>
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
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  rows="4"
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-dark transition duration-300"
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
