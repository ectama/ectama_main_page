import React from 'react';

const Vision = () => {
  return (
    <section id="vision" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 max-w-5xl text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight">
          Creating Products <br />
          <span className="text-gradient">That Matter</span>
        </h2>
        
        <p className="text-xl md:text-3xl text-secondary leading-relaxed font-light max-w-4xl mx-auto">
          Our mission is to build useful technology that improves everyday life through 
          intelligent software and exceptional user experiences.
        </p>
      </div>
    </section>
  );
};

export default Vision;
