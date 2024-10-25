import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isWhatsAppPrompt, setIsWhatsAppPrompt] = useState(false);

  const handleSendMessage = (msg) => {
    setChatHistory((prevHistory) => [...prevHistory, { sender: 'client', message: msg }]);
    handleClientResponse(msg);
  };

  const handleClientResponse = (msg) => {
    const lowerMsg = msg.toLowerCase();

    // Define some common services and responses
    const responses = {
      'technical support': 'We offer expert Technical Support for any IT-related issues. Do you need assistance with a specific problem?',
      'web hosting': 'We have fast and reliable Web Hosting packages designed for businesses of all sizes. Would you like to know more about our plans?',
      'graphic design': 'Our Graphic Design services are tailored to make your brand stand out. Are you interested in a logo, brochure, or something else?',
      'photography': 'We offer professional Photography services to capture your best moments. Do you have a specific project in mind?',
      'web development': 'Our Web Development team can build responsive and dynamic websites. Do you have a project you want to discuss?',
      'social media management': 'We can manage your Social Media profiles to boost your online presence. Would you like a consultation?',
      'web hosting plans': 'Our Web Hosting Plans are flexible and come with 24/7 support. Which plan are you interested in?'
    };

    // Check if the message matches any known services
    const matchedResponse = Object.keys(responses).find((service) =>
      lowerMsg.includes(service)
    );

    if (matchedResponse) {
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { sender: 'bot', message: responses[matchedResponse] }
      ]);
    } else {
      // If no matching service is found, prompt for WhatsApp
      setChatHistory((prevHistory) => [
        ...prevHistory,
        {
          sender: 'bot',
          message: "It seems like you have a unique request. Please send a detailed message to our WhatsApp for personalized assistance."
        }
      ]);
      setIsWhatsAppPrompt(true);
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/YOUR_WHATSAPP_NUMBER', '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      handleSendMessage(message);
      setMessage('');
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h2>
        <div className="max-w-md mx-auto">
          <p className="text-center mb-8">
            Step forward into a world of online excellence with Host-IT Services! Elevate your web presence today!
          </p>
          <motion.button
            onClick={() => setIsOpen(true)}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Chat
          </motion.button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 15 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">Chat with Us</h3>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-300">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="h-64 overflow-y-auto mb-4 p-4 bg-gray-700 rounded">
              {chatHistory.map((chat, index) => (
                <div key={index} className={`mb-2 ${chat.sender === 'client' ? 'text-right' : 'text-left'}`}>
                  <p className={`text-gray-300 ${chat.sender === 'client' ? 'bg-blue-600' : 'bg-gray-600'} p-2 rounded-lg inline-block`}>
                    {chat.message}
                  </p>
                </div>
              ))}
            </div>
            {isWhatsAppPrompt && (
              <motion.button
                onClick={handleWhatsAppClick}
                className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600 transition duration-300 w-full"
              >
                Send a detailed message to our WhatsApp
              </motion.button>
            )}
            <form onSubmit={handleSubmit} className="flex mt-4">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow px-4 py-2 border border-gray-600 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-200"
              />
              <motion.button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-r-full hover:bg-blue-700 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};
