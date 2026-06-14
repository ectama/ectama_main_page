import React from 'react';

const stats = [
  { value: 'Fast', label: 'Development Cycle' },
  { value: 'Scale', label: 'Robust Architecture' },
  { value: 'Secure', label: 'Enterprise Systems' },
  { value: 'Modern', label: 'Technology Stack' }
];

const Stats = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Why Choose Ectama</h2>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-8 glass-panel text-center">
              <span className="text-4xl md:text-5xl font-bold mb-2 text-gradient">{stat.value}</span>
              <span className="text-sm md:text-base font-medium text-secondary">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
