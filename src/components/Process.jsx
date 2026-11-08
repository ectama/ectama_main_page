import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Reveal from './Reveal';
import UnderlineHeading from './UnderlineHeading';

const steps = [
  { num: '01', title: 'Discover', desc: 'We dig into your goals, users, and constraints before writing a line of code.' },
  { num: '02', title: 'Design', desc: 'Interfaces and architecture take shape, validated against real use cases.' },
  { num: '03', title: 'Build', desc: 'Iterative engineering with tight feedback loops and production-grade quality.' },
  { num: '04', title: 'Launch', desc: 'Ship, measure, and keep improving — your product never stands still.' },
];

const Process = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 60%'] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-primary">
            <UnderlineHeading>Our Process</UnderlineHeading>
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            A journey from idea to shipped product, one deliberate step at a time.
          </p>
        </Reveal>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line that fills as you scroll */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-[2px] bg-border">
            <motion.div style={{ scaleX: lineScale }} className="h-full w-full bg-gradient-to-r from-accent-dark via-accent to-accent-light origin-left glow" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col items-center text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, boxShadow: '0 0 40px -5px rgba(57,255,136,0.6)' }}
                  className="relative z-10 w-20 h-20 rounded-full glass-panel flex items-center justify-center mb-6 bg-background"
                >
                  <span className="text-2xl font-black text-gradient">{step.num}</span>
                </motion.div>
                <h3 className="text-lg font-bold mb-2 text-primary">{step.title}</h3>
                <p className="text-sm text-secondary leading-relaxed max-w-[220px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
