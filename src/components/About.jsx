import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import SplitWords from './SplitWords';

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Morphing blob */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-30"
        animate={{
          borderRadius: [
            '42% 58% 65% 35% / 45% 45% 55% 55%',
            '60% 40% 30% 70% / 55% 60% 40% 45%',
            '42% 58% 65% 35% / 45% 45% 55% 55%',
          ],
          rotate: [0, 20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{ background: 'linear-gradient(135deg, rgba(21,128,61,0.35), rgba(134,239,172,0.25))', filter: 'blur(40px)' }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 1.12, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="container mx-auto px-6 md:px-12 max-w-4xl text-center relative z-10"
      >
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight text-primary">
            Technology Crafted <br />
            <span className="text-gradient">with Purpose</span>
          </h2>
        </Reveal>

        <p className="text-xl md:text-2xl text-secondary leading-relaxed font-light">
          <SplitWords text="Ectama is a product-focused technology company creating modern software solutions, AI experiences, web platforms, and scalable digital products for a global audience." />
        </p>
      </motion.div>
    </section>
  );
};

export default About;
