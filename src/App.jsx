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

function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-accent/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Services />
        <Stats />
        <TechStack />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
