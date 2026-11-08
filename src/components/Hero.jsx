import React, { useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Magnetic from './Magnetic';
import RippleButton from './RippleButton';

const line1 = ['We', 'Build', 'Digital'];
const line2 = ['Products', 'That', 'Scale'];

const word = {
  hidden: { opacity: 0, y: 60, rotateX: 50 },
  show: { opacity: 1, y: 0, rotateX: 0 },
};

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const blobY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 1.35]);
  const contentBlur = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const contentFilter = useTransform(contentBlur, (b) => `blur(${b}px)`);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradients */}
      <motion.div style={{ y: blobY }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/15 rounded-full blur-[120px] opacity-60 pointer-events-none"></motion.div>
      <motion.div style={{ y: blobY }} className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-accent-light/20 rounded-full blur-[100px] opacity-50 pointer-events-none"></motion.div>

      <motion.div style={{ y: contentY, opacity: contentOpacity, scale: contentScale, filter: contentFilter }} className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-accent glow"></span>
          <span className="text-sm font-medium text-secondary">Building Digital Products for the Future</span>
        </motion.div>

        <h1 className="relative text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-primary" style={{ perspective: 600 }}>
          <motion.span
            className="block"
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.08, delayChildren: 0.15 }}
          >
            {line1.map((w, i) => (
              <motion.span
                key={i}
                variants={word}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="inline-block mr-4"
                style={{ transformOrigin: '50% 100%' }}
              >
                {w}
              </motion.span>
            ))}
          </motion.span>
          <motion.span
            className="block text-gradient"
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.08, delayChildren: 0.55 }}
          >
            {line2.map((w, i) => (
              <motion.span
                key={i}
                variants={word}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="inline-block mr-4"
                style={{ transformOrigin: '50% 100%' }}
              >
                {w}
              </motion.span>
            ))}
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="text-lg md:text-xl text-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          From AI-powered applications to enterprise-grade platforms, Ectama creates technology that helps people work smarter and grow faster.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Magnetic>
            <RippleButton data-cursor="button" className="shine-sweep group w-full sm:w-auto px-8 py-4 rounded-full bg-accent text-black font-semibold text-lg transition-colors hover:bg-accent-dark hover:text-white active:scale-95 flex items-center justify-center gap-2 shadow-sm">
              Explore Products
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </RippleButton>
          </Magnetic>
          <Magnetic strength={0.3}>
            <a href="#contact" data-cursor="button" className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel text-primary font-semibold text-lg transition-all hover:bg-accent/10 flex items-center justify-center">
              Contact Us
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-secondary font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
