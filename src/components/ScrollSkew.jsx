import React from 'react';
import { motion, useScroll, useVelocity, useTransform, useSpring } from 'framer-motion';

// Subtle Awwwards-style skew-on-scroll-velocity, applied to the whole page content.
const ScrollSkew = ({ children }) => {
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(velocity, { stiffness: 400, damping: 90 });
  const skewY = useTransform(smoothVelocity, [-2000, 0, 2000], [-2.5, 0, 2.5], { clamp: true });

  return (
    <motion.div style={{ skewY }}>
      {children}
    </motion.div>
  );
};

export default ScrollSkew;
