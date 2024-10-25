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

export default function App() {
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
