import React from 'react';
import { motion } from 'framer-motion';

const word = {
  hidden: { opacity: 0, y: 14, filter: 'blur(4px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

const SplitWords = ({ text, className = '', staggerDelay = 0.02 }) => (
  <motion.span
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.4 }}
    transition={{ staggerChildren: staggerDelay }}
  >
    {text.split(' ').map((w, i) => (
      <motion.span
        key={i}
        variants={word}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="inline-block mr-[0.3em]"
      >
        {w}
      </motion.span>
    ))}
  </motion.span>
);

export default SplitWords;
