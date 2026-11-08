import React, { useEffect, useRef } from 'react';

// Smoothly morphing mesh-gradient blobs, hand-rolled on canvas (no deps).
const BLOBS = [
  { cx: 0.2, cy: 0.25, r: 0.48, color: '57,255,136', speed: 1.1, phase: 0 },
  { cx: 0.8, cy: 0.2, r: 0.4, color: '186,255,209', speed: 1.4, phase: 2 },
  { cx: 0.5, cy: 0.75, r: 0.52, color: '21,128,61', speed: 0.9, phase: 4 },
  { cx: 0.85, cy: 0.8, r: 0.36, color: '57,255,136', speed: 1.6, phase: 1 },
  { cx: 0.1, cy: 0.8, r: 0.38, color: '186,255,209', speed: 1.2, phase: 3 },
  { cx: 0.5, cy: 0.45, r: 0.3, color: '34,255,150', speed: 1.8, phase: 5 },
];

const LiquidBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width, height, raf;
    const start = performance.now();

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const draw = (now) => {
      const t = (now - start) / 1000;
      ctx.clearRect(0, 0, width, height);

      for (const b of BLOBS) {
        const dx = Math.sin(t * b.speed * 0.35 + b.phase) * 0.16;
        const dy = Math.cos(t * b.speed * 0.3 + b.phase) * 0.16;
        const x = (b.cx + dx) * width;
        const y = (b.cy + dy) * height;
        const r = b.r * Math.max(width, height) * (1 + Math.sin(t * b.speed * 0.45 + b.phase) * 0.14);

        const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
        grad.addColorStop(0, `rgba(${b.color}, 0.22)`);
        grad.addColorStop(1, `rgba(${b.color}, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    raf = requestAnimationFrame(draw);
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-80"
      style={{ filter: 'blur(50px)' }}
      aria-hidden="true"
    />
  );
};

export default LiquidBackground;
