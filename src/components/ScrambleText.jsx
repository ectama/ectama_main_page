import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const ScrambleText = ({ text, className = '', as: Tag = 'span', duration = 900 }) => {
  const [display, setDisplay] = useState(text);
  const ref = useRef(null);
  const played = useRef(false);

  const scramble = () => {
    if (played.current) return;
    played.current = true;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const revealCount = Math.floor(progress * text.length);
      let out = '';
      for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') { out += ' '; continue; }
        out += i < revealCount ? text[i] : CHARS[Math.floor(Math.random() * CHARS.length)];
      }
      setDisplay(out);
      if (progress < 1) requestAnimationFrame(tick);
      else setDisplay(text);
    };
    requestAnimationFrame(tick);
  };

  return (
    <motion.span
      ref={ref}
      className={className}
      onViewportEnter={scramble}
      viewport={{ once: true, amount: 0.6 }}
    >
      {display}
    </motion.span>
  );
};

export default ScrambleText;
