import React from 'react';
import { motion } from 'framer-motion';

const SectionDivider = ({ flip = false }) => (
  <div className="relative h-24 md:h-32 overflow-hidden">
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0 bg-gradient-to-r from-accent-dark via-accent to-accent-light origin-left"
      style={{
        clipPath: flip
          ? 'polygon(0 100%, 100% 0, 100% 100%)'
          : 'polygon(0 0, 100% 100%, 0 100%)',
      }}
    />
  </div>
);

export default SectionDivider;
