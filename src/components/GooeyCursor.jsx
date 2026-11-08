import React, { useEffect, useRef, useState } from 'react';

const BLOB_COUNT = 6;

// A liquid "metaball" cursor: N circles blurred + contrast-sharpened via an
// SVG goo filter so nearby blobs visually fuse into one organic shape.
const GooeyCursor = () => {
  const blobRefs = useRef([]);
  const coreRef = useRef(null);
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const positions = Array.from({ length: BLOB_COUNT }, () => ({ x: window.innerWidth / 2, y: window.innerHeight / 2 }));
    let target = { x: positions[0].x, y: positions[0].y };

    const move = (e) => {
      target = { x: e.clientX, y: e.clientY };
      setVisible(true);
      setActive(!!e.target.closest('[data-cursor]'));
    };
    window.addEventListener('mousemove', move);

    let raf;
    const animate = () => {
      positions[0].x += (target.x - positions[0].x) * 0.35;
      positions[0].y += (target.y - positions[0].y) * 0.35;
      for (let i = 1; i < positions.length; i++) {
        positions[i].x += (positions[i - 1].x - positions[i].x) * 0.3;
        positions[i].y += (positions[i - 1].y - positions[i].y) * 0.3;
      }
      blobRefs.current.forEach((el, i) => {
        if (!el) return;
        const scale = 1 - i / (BLOB_COUNT * 1.4);
        el.style.transform = `translate3d(${positions[i].x}px, ${positions[i].y}px, 0) translate(-50%, -50%) scale(${scale})`;
      });
      if (coreRef.current) {
        coreRef.current.style.transform = `translate3d(${positions[0].x}px, ${positions[0].y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <svg className="fixed w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="goo-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="9" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -10" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div
        className={`fixed inset-0 z-[92] pointer-events-none hidden md:block transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
        style={{ filter: 'url(#goo-filter)' }}
      >
        {Array.from({ length: BLOB_COUNT }).map((_, i) => (
          <div
            key={i}
            ref={(el) => (blobRefs.current[i] = el)}
            className="fixed top-0 left-0 rounded-full bg-accent"
            style={{ width: active ? 30 : 18, height: active ? 30 : 18, transition: 'width 0.3s, height 0.3s' }}
          />
        ))}
      </div>

      {/* crisp core dot, rendered above the blur for a sharp focal point */}
      <div
        ref={coreRef}
        className={`fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-white z-[93] pointer-events-none hidden md:block mix-blend-difference transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
      />
    </>
  );
};

export default GooeyCursor;
