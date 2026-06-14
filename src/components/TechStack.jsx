import React from 'react';

const technologies = [
  'React', 'Next.js', 'Node.js', 'Spring Boot',
  'PostgreSQL', 'Docker', 'AWS', 'OpenAI'
];

const TechStack = () => {
  return (
    <section className="py-24 relative overflow-hidden border-y border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-6 md:px-12 mb-12 text-center">
        <h2 className="text-xl font-medium text-secondary tracking-widest uppercase">Powered By Modern Technology</h2>
      </div>
      
      {/* Marquee effect wrapper */}
      <div className="flex whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity duration-500">
        <div className="flex animate-marquee shrink-0 min-w-full justify-around items-center gap-12 px-6">
          {technologies.map((tech, index) => (
            <span key={index} className="text-3xl md:text-5xl font-bold text-white opacity-80 hover:opacity-100 transition-opacity cursor-default">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex animate-marquee shrink-0 min-w-full justify-around items-center gap-12 px-6" aria-hidden="true">
          {technologies.map((tech, index) => (
            <span key={`dup-${index}`} className="text-3xl md:text-5xl font-bold text-white opacity-80 hover:opacity-100 transition-opacity cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
