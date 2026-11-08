import React, { useRef } from 'react';
import { motion, useScroll, useVelocity, useMotionValue, useAnimationFrame } from 'framer-motion';
import Reveal from './Reveal';
import ScrambleText from './ScrambleText';

const technologies = [
  'React', 'Next.js', 'Node.js', 'Spring Boot',
  'PostgreSQL', 'Docker', 'AWS', 'OpenAI'
];

const TechStack = () => {
  const trackRef = useRef(null);
  const x = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);

  useAnimationFrame((_, delta) => {
    const dt = delta / 1000;
    const baseSpeed = 50; // px/sec, drifts left by default
    const scrollBoost = velocity.get() * 0.15; // scrolling down speeds it up, up reverses it
    let next = x.get() - (baseSpeed - scrollBoost) * dt;

    const trackWidth = trackRef.current ? trackRef.current.scrollWidth / 2 : 0;
    if (trackWidth > 0) {
      if (next <= -trackWidth) next += trackWidth;
      if (next > 0) next -= trackWidth;
    }
    x.set(next);
  });

  return (
    <section className="py-24 relative overflow-hidden border-y border-border bg-surface/40">
      <Reveal className="container mx-auto px-6 md:px-12 mb-12 text-center">
        <h2 className="text-xl font-medium text-secondary tracking-widest uppercase">
          <ScrambleText text="Powered By Modern Technology" />
        </h2>
      </Reveal>

      {/* Marquee driven by scroll velocity */}
      <div className="overflow-hidden opacity-60 hover:opacity-100 transition-opacity duration-500">
        <motion.div ref={trackRef} style={{ x }} className="flex whitespace-nowrap w-max gap-12 px-6">
          {[...technologies, ...technologies].map((tech, index) => (
            <span key={index} className="text-3xl md:text-5xl font-bold text-primary opacity-80 hover:opacity-100 hover:text-accent transition-all cursor-default">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
