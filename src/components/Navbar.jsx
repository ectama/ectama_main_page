import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

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
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">E</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Ectama</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-secondary hover:text-white transition-colors">About</a>
          <a href="#products" className="text-sm font-medium text-secondary hover:text-white transition-colors">Products</a>
          <a href="#services" className="text-sm font-medium text-secondary hover:text-white transition-colors">Services</a>
          <a href="#vision" className="text-sm font-medium text-secondary hover:text-white transition-colors">Vision</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="#contact" className="text-sm font-medium text-secondary hover:text-white transition-colors">Contact Us</a>
          <button className="group relative px-5 py-2.5 rounded-full bg-white text-background font-semibold text-sm transition-transform hover:scale-105 active:scale-95 flex items-center gap-2">
            Explore Products
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-nav border-t border-border flex flex-col p-6 gap-4 animate-fade-in">
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-secondary hover:text-white transition-colors py-2 border-b border-border/50">About</a>
          <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-secondary hover:text-white transition-colors py-2 border-b border-border/50">Products</a>
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-secondary hover:text-white transition-colors py-2 border-b border-border/50">Services</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-secondary hover:text-white transition-colors py-2 mb-4">Contact Us</a>
          <button onClick={() => setIsMobileMenuOpen(false)} className="w-full py-3 rounded-xl bg-white text-background font-semibold text-sm flex items-center justify-center gap-2">
            Explore Products
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
