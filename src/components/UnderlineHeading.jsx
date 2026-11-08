import React from 'react';
import { motion } from 'framer-motion';

const UnderlineHeading = ({ children, className = '' }) => (
  <span className={`relative inline-block ${className}`}>
    {children}
    <motion.span
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="absolute left-0 -bottom-2 h-[4px] w-full bg-gradient-to-r from-accent-dark via-accent to-accent-light origin-left rounded-full"
    />
  </span>
);

export default UnderlineHeading;
