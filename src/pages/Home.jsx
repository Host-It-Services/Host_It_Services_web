import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation to track route changes
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { Plans } from "../components/Plans";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Mission } from "../components/Mission";
import { Clients } from "../components/Clients"; // Import the Clients component

// Custom hook to track page views
const usePageViewTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-ELY8BG1HMJ', {
        page_path: location.pathname,
      });
    }
  }, [location]);
   // Fires on route change
};

export default function Home() {
  usePageViewTracking(); // Use the custom hook to track page views

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Plans />
        <About />
        <WhyChooseUs />
        <Mission />
        <Clients /> {/* Add the Clients section here */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
