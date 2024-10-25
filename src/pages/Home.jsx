// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { ChevronDown, Check, Server, Globe, Paintbrush, Camera, Code, Share2, HeadphonesIcon } from 'lucide-react'

// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// const services = [
//   { icon: Server, name: 'Technical Support' },
//   { icon: Globe, name: 'Web Hosting' },
//   { icon: Paintbrush, name: 'Graphic Design' },
//   { icon: Camera, name: 'Photography' },
//   { icon: Code, name: 'Web Development' },
//   { icon: Share2, name: 'Social Media Management' },
// ]

// const plans = [
//   {
//     name: 'Starter',
//     price: 'R 99',
//     features: [
//       '3GB Storage (SSD)',
//       '1 website domain',
//       '10 Email accounts',
//       'Unlimited bandwidth',
//       'Free cPanel',
//       'Free SSL Certificate',
//       'Free Website Migration',
//     ],
//   },
//   {
//     name: 'Basic',
//     price: 'R 149',
//     features: [
//       '5GB Storage (SSD)',
//       '3 website domain',
//       '25 Email accounts',
//       'Unlimited bandwidth',
//       'Free cPanel',
//       'Free SSL Certificate',
//       'Free Website Migration',
//     ],
//   },
//   {
//     name: 'Pro',
//     price: 'R 190',
//     features: [
//       '10GB Storage (SSD)',
//       '5 website domain',
//       '100 Email accounts',
//       'Unlimited bandwidth',
//       'Free cPanel',
//       'Free SSL Certificate',
//       'Free Website Migration',
//     ],
//   },
// ]

// export default function Home() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
//       <header className="bg-white shadow-md">
//         <nav className="container mx-auto px-6 py-3">
//           <div className="flex justify-between items-center">
//             <div className="text-xl font-bold text-gray-800">Host-IT Services</div>
//             <div className="hidden md:flex space-x-4">
//               <a href="#home" className="text-gray-800 hover:text-blue-600">Home</a>
//               <a href="#services" className="text-gray-800 hover:text-blue-600">Services</a>
//               <a href="#plans" className="text-gray-800 hover:text-blue-600">Plans</a>
//               <a href="#about" className="text-gray-800 hover:text-blue-600">About</a>
//               <a href="#contact" className="text-gray-800 hover:text-blue-600">Contact</a>
//             </div>
//             <div className="md:hidden">
//               <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 hover:text-blue-600">
//                 <ChevronDown size={24} />
//               </button>
//             </div>
//           </div>
//           {isMenuOpen && (
//             <div className="mt-4 md:hidden">
//               <a href="#home" className="block py-2 text-gray-800 hover:text-blue-600">Home</a>
//               <a href="#services" className="block py-2 text-gray-800 hover:text-blue-600">Services</a>
//               <a href="#plans" className="block py-2 text-gray-800 hover:text-blue-600">Plans</a>
//               <a href="#about" className="block py-2 text-gray-800 hover:text-blue-600">About</a>
//               <a href="#contact" className="block py-2 text-gray-800 hover:text-blue-600">Contact</a>
//             </div>
//           )}
//         </nav>
//       </header>

//       <main>
//         <section id="home" className="py-20">
//           <div className="container mx-auto px-6">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-center"
//             >
//               <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Host IT Services</h1>
//               <p className="text-xl text-gray-600 mb-8">Bringing you a variety of tech services</p>
//               <Button size="lg">Contact us to get a quote</Button>
//             </motion.div>
//           </div>
//         </section>

//         <section id="services" className="py-20 bg-white">
//           <div className="container mx-auto px-6">
//             <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {services.map((service, index) => (
//                 <motion.div
//                   key={service.name}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   <Card>
//                     <CardHeader>
//                       <CardTitle className="flex items-center">
//                         <service.icon className="mr-2" size={24} />
//                         {service.name}
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <p className="text-gray-600">Professional {service.name.toLowerCase()} services tailored to your needs.</p>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <section id="why-choose-us" className="py-20 bg-gray-100">
//           <div className="container mx-auto px-6">
//             <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Choose Us?</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {['Quality service', 'Affordable Prices', 'Customer Satisfaction', '24/7 Customer support'].map((reason, index) => (
//                 <motion.div
//                   key={reason}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
//                 >
//                   <Check className="text-green-500 mb-4" size={32} />
//                   <h3 className="text-xl font-semibold text-gray-800 mb-2">{reason}</h3>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <section id="about" className="py-20 bg-white">
//           <div className="container mx-auto px-6">
//             <div className="flex flex-col md:flex-row items-center">
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="md:w-1/2 mb-8 md:mb-0"
//               >
//                 <img src="/placeholder.svg?height=400&width=600" alt="About Us" className="rounded-lg shadow-md" />
//               </motion.div>
//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="md:w-1/2 md:pl-8"
//               >
//                 <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Trusted IT Service Provider</h2>
//                 <p className="text-gray-600 mb-4">
//                   At Host-IT Services, our mission is simple yet ambitious: to empower businesses with robust web hosting and IT solutions that propel their success in the digital world. We are committed to providing personalized services that exceed expectations and foster long-term partnerships with our clients.
//                 </p>
//                 <p className="text-gray-600">
//                   Host-IT Services is more than just a web hosting and IT Services company, we are your dedicated partner in navigating the digital landscape. With a passion for innovation and commitment to excellence, we deliver tailored solutions that empower businesses to thrive online.
//                 </p>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         <section id="plans" className="py-20 bg-gray-100">
//           <div className="container mx-auto px-6">
//             <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Web Hosting Plans</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {plans.map((plan, index) => (
//                 <motion.div
//                   key={plan.name}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   <Card className="bg-white rounded-lg shadow-md">
//                     <CardHeader>
//                       <CardTitle className="text-center text-xl font-bold">{plan.name}</CardTitle>
//                       <CardDescription className="text-center text-lg font-semibold text-gray-800 mb-2">{plan.price}</CardDescription>
//                     </CardHeader>
//                     <CardContent>
//                       <ul className="list-disc pl-5 space-y-1">
//                         {plan.features.map(feature => (
//                           <li key={feature} className="text-gray-600">{feature}</li>
//                         ))}
//                       </ul>
//                     </CardContent>
//                     <CardFooter>
//                       <Button className="w-full">Get Started</Button>
//                     </CardFooter>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <section id="contact" className="py-20 bg-white">
//           <div className="container mx-auto px-6">
//             <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Get In Touch</h2>
//             <p className="text-center text-gray-600 mb-8">Contact us for any inquiries or to get a quote for your project.</p>
//             <form className="max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
//               <div className="mb-4">
//                 <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
//                 <input type="text" id="name" className="w-full border border-gray-300 p-2 rounded" placeholder="Your Name" />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
//                 <input type="email" id="email" className="w-full border border-gray-300 p-2 rounded" placeholder="Your Email" />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
//                 <textarea id="message" className="w-full border border-gray-300 p-2 rounded" rows="4" placeholder="Your Message"></textarea>
//               </div>
//               <Button type="submit" className="w-full">Send Message</Button>
//             </form>
//           </div>
//         </section>
//       </main>

//       <footer className="bg-gray-800 text-white py-4">
//         <div className="container mx-auto text-center">
//           <p>&copy; {new Date().getFullYear()} Host IT Services. All rights reserved.</p>
//           <div className="flex justify-center space-x-4 mt-2">
//             <a href="#" className="text-white hover:text-blue-400">Privacy Policy</a>
//             <a href="#" className="text-white hover:text-blue-400">Terms of Service</a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }


import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { ArrowRight, Check, MessageCircle, X } from 'lucide-react'

import {Header} from "../components/Header"
import {Hero} from "../components/Hero"
import {Services} from "../components/Services"
import {About} from "../components/About"
import {Plans} from "../components/Plans"
import {WhyChooseUs} from "../components/WhyChooseUs"
import {Contact} from "../components/Contact"
import {Footer} from "../components/Footer"
import {Mission} from "../components/Mission"





export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <Mission /> {/* Add Mission Section here */}
        <WhyChooseUs />
        <Plans />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}