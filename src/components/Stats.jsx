import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const stats = [
  { value: 'Fast', label: 'Development Cycle' },
  { value: 'Scale', label: 'Robust Architecture' },
  { value: 'Secure', label: 'Enterprise Systems' },
  { value: 'Modern', label: 'Technology Stack' }
];

const Stats = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-primary">Why Choose Ectama</h2>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8" style={{ perspective: 1000 }}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateY: -90, scale: 0.7 }}
              whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.05, boxShadow: '0 0 50px -5px rgba(21,128,61,0.45)' }}
              className="flex flex-col items-center justify-center p-8 glass-panel text-center cursor-default"
            >
              <motion.span
                animate={{ textShadow: ['0 0 0px rgba(21,128,61,0)', '0 0 24px rgba(21,128,61,0.5)', '0 0 0px rgba(21,128,61,0)'] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.3, ease: 'easeInOut' }}
                className="text-5xl md:text-6xl font-black mb-2 text-gradient"
              >
                {stat.value}
              </motion.span>
              <span className="text-sm md:text-base font-medium text-secondary uppercase tracking-wide">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
