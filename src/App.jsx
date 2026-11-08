import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Stats from './components/Stats';
import TechStack from './components/TechStack';
import Vision from './components/Vision';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import LiquidBackground from './components/LiquidBackground';
import GrainOverlay from './components/GrainOverlay';
import ScrollProgress from './components/ScrollProgress';
import SectionDivider from './components/SectionDivider';
import ScrollSkew from './components/ScrollSkew';
import GooeyCursor from './components/GooeyCursor';
import Process from './components/Process';

function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-accent/30 selection:text-white relative md:cursor-none">
      <Loader />
      <ScrollProgress />
      <LiquidBackground />
      <GrainOverlay />
      <GooeyCursor />
      <div className="relative z-10">
        <Navbar />
        <ScrollSkew>
          <main>
            <Hero />
            <About />
            <Process />
            <Products />
            <SectionDivider />
            <Services />
            <Stats />
            <TechStack />
            <SectionDivider flip />
            <Vision />
            <Contact />
          </main>
        </ScrollSkew>
        <Footer />
      </div>
    </div>
  );
}

export default App;
