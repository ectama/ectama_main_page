import React, { useRef } from 'react';

// Card with a cursor-tracked radial glow that follows the mouse inside its bounds.
const SpotlightCard = ({ children, className = '', ...props }) => {
  const ref = useRef(null);

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--x', `${e.clientX - rect.left}px`);
    ref.current.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`relative overflow-hidden ${className}`}
      style={{
        '--x': '50%',
        '--y': '50%',
      }}
      {...props}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(500px circle at var(--x) var(--y), rgba(57,255,136,0.15), transparent 70%)',
        }}
      />
      {children}
    </div>
  );
};

export default SpotlightCard;
