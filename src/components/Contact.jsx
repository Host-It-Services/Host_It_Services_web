import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    try {
      // Send the email using EmailJS
      await emailjs.send(
        'service_s5hjhly',   // Your service ID
        'template_7i0eie2',  // Your template ID
        templateParams,
        'MnpFwv3383HOfxbdT'       // Your user ID (API key)
      );
      alert('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div id="contact" className="bg-gradient-to-br from-blue-100 to-white py-10">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-auto">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold text-blue-600 mb-1"> {t('contact.title')}</h1>
          <p className="text-gray-600 text-sm"> {t('contact.subtitle')}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> {t('contact.name')}</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> {t('contact.email')}</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.message')} </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              required
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSending}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 transition duration-150 ease-in-out transform hover:scale-105"
          >
            {isSending ? t('contact.sending') : t('contact.sendMessage')}
          </button>


        </form>
        <div className="mt-4 text-center text-xs text-gray-500">
          <p>{t('contact.footer')} </p>
        </div>
      </div>
    </div>
  );
};
