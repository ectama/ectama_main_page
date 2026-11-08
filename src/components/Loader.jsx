import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Loader = () => {
  const [stage, setStage] = useState('logo'); // 'logo' | 'split' | 'done'

  useEffect(() => {
    const t1 = setTimeout(() => setStage('split'), 900);
    const t2 = setTimeout(() => setStage('done'), 1650);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <AnimatePresence>
      {stage !== 'done' && (
        <div className="fixed inset-0 z-[100] pointer-events-none">
          {/* Two panels that split apart, Monument-style curtain reveal */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: stage === 'split' ? '-100%' : 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 left-0 w-1/2 h-full bg-background border-r border-border"
          />
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: stage === 'split' ? '100%' : 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 right-0 w-1/2 h-full bg-background border-l border-border"
          />

          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: stage === 'split' ? 0 : 1 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <motion.img
              src={logo}
              alt="Ectama logo"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="w-16 h-16 object-contain mb-6"
            />
            <div className="w-48 h-[3px] rounded-full bg-border overflow-hidden">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="h-full w-full bg-accent origin-left glow"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
