import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] opacity-50 pointer-events-none animate-float"></div>
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-5xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-white/10 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="flex h-2 w-2 rounded-full bg-accent glow"></span>
          <span className="text-sm font-medium text-secondary">Building Digital Products for the Future</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          We Build Digital <br className="hidden md:block" />
          <span className="text-gradient">Products That Scale</span>
        </h1>
        
        <p className="text-lg md:text-xl text-secondary max-w-3xl mx-auto mb-12 animate-slide-up leading-relaxed" style={{ animationDelay: '0.3s' }}>
          From AI-powered applications to enterprise-grade platforms, Ectama creates technology that helps people work smarter and grow faster.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <button className="group w-full sm:w-auto px-8 py-4 rounded-full bg-white text-background font-semibold text-lg transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
            Explore Products
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel text-white font-semibold text-lg transition-all hover:bg-white/10 flex items-center justify-center">
            Contact Us
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '1s' }}>
        <span className="text-xs text-secondary font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-secondary to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
