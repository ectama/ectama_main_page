import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import logo from '../assets/logo.png';
import Magnetic from './Magnetic';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer group">
          <img src={logo} alt="Ectama logo" className="w-8 h-8 object-contain transition-transform duration-300 group-hover:rotate-6" />
          <span className="text-xl font-bold tracking-tight text-primary">Ectama</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" data-cursor="button" className="relative text-sm font-medium text-secondary hover:text-accent transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">About</a>
          <a href="#products" data-cursor="button" className="relative text-sm font-medium text-secondary hover:text-accent transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">Products</a>
          <a href="#services" data-cursor="button" className="relative text-sm font-medium text-secondary hover:text-accent transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">Services</a>
          <a href="#vision" data-cursor="button" className="relative text-sm font-medium text-secondary hover:text-accent transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">Vision</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="#contact" data-cursor="button" className="text-sm font-medium text-secondary hover:text-accent transition-colors">Contact Us</a>
          <Magnetic strength={0.35}>
            <button className="group relative px-5 py-2.5 rounded-full bg-accent text-black font-semibold text-sm transition-colors hover:bg-accent-dark hover:text-white active:scale-95 flex items-center gap-2 shadow-sm">
              Explore Products
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Magnetic>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-nav border-t border-border flex flex-col p-6 gap-4 animate-fade-in">
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-secondary hover:text-accent transition-colors py-2 border-b border-border/50">About</a>
          <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-secondary hover:text-accent transition-colors py-2 border-b border-border/50">Products</a>
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-secondary hover:text-accent transition-colors py-2 border-b border-border/50">Services</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-secondary hover:text-accent transition-colors py-2 mb-4">Contact Us</a>
          <button onClick={() => setIsMobileMenuOpen(false)} className="w-full py-3 rounded-xl bg-accent text-black font-semibold text-sm flex items-center justify-center gap-2 hover:bg-accent-dark hover:text-white transition-colors">
            Explore Products
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
