import { motion } from 'framer-motion';

export const Footer = () => (
<footer className="bg-gray-800 text-gray-300 py-12">
  <div className="container mx-auto px-6">
    {/* Upper Section */}
    <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8 mb-8">
      {/* Branding & Description */}
      <div className="text-center md:text-left mb-6 md:mb-0">
        <h3 className="text-2xl font-bold text-white">Host IT Services</h3>
        <p className="text-gray-400 mt-2">
          Elevating your digital presence with reliable web solutions.
        </p>
      </div>
      
      {/* Follow Us Section */}
      <div className="text-center md:text-left">
        <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
        <div className="flex justify-center md:justify-start space-x-6">
          <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">
            {/* Facebook Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.06 3.747 9.245 8.575 9.876v-6.988H8.692v-2.888h1.883V9.692c0-1.865 1.08-2.894 2.732-2.894.794 0 1.623.14 1.623.14v1.791h-.916c-.904 0-1.186.566-1.186 1.146v1.373h2.248l-.359 2.888h-1.889v6.988C18.253 21.245 22 17.06 22 12z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-pink-500 transition duration-300">
            {/* Instagram Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM16 7a1 1 0 112 0 1 1 0 01-2 0zm-4 3.25a4.75 4.75 0 100 9.5 4.75 4.75 0 000-9.5zm0 1.5a3.25 3.25 0 110 6.5 3.25 3.25 0 010-6.5z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
            {/* Twitter Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.46 6c-.77.35-1.59.58-2.46.69a4.26 4.26 0 001.88-2.36 8.26 8.26 0 01-2.6.99 4.23 4.23 0 00-7.22 3.85 12 12 0 01-8.69-4.4 4.23 4.23 0 001.31 5.65 4.16 4.16 0 01-1.92-.53v.05a4.23 4.23 0 003.39 4.15 4.3 4.3 0 01-1.91.07 4.24 4.24 0 003.96 2.94A8.48 8.48 0 012 19.29a12 12 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.68l-.01-.53a8.31 8.31 0 002.04-2.11z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-700 transition duration-300">
            {/* LinkedIn Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6.94 3C5.78 3 5 3.8 5 5c0 1.2.77 2 1.92 2h.02C8.1 7 9 6.2 9 5c0-1.2-.87-2-2.06-2h-.02zm0 3.5c-.7 0-1.28-.56-1.28-1.25 0-.7.57-1.25 1.28-1.25.7 0 1.28.56 1.28 1.25 0 .7-.57 1.25-1.28 1.25zM4.7 20h4.48V9H4.7v11zM20 20h-4.48V14c0-1.6-.58-2.68-2.04-2.68-1.12 0-1.78.74-2.08 1.46-.1.24-.12.56-.12.88v6.34h-4.48V9h4.3v1.56h.04c.58-1 1.62-2.02 3.46-2.02 2.36 0 4.12 1.54 4.12 4.84V20z" />
            </svg>
          </a>
        </div>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
      <p className="text-gray-400">&copy; 2024 Host IT Services. All rights reserved.</p>
      <nav className="mt-4 md:mt-0">
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="hover:text-blue-500 transition duration-300">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 transition duration-300">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 transition duration-300">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</footer>


  )
  