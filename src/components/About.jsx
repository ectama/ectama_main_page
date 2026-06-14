import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
          Technology Crafted <br />
          <span className="text-gradient">with Purpose</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-secondary leading-relaxed font-light">
          Ectama is a product-focused technology company creating modern software solutions, 
          AI experiences, web platforms, and scalable digital products for a global audience.
        </p>
      </div>
    </section>
  );
};

export default About;
