import React, { useState } from 'react';

let rippleId = 0;

// Wraps any clickable element to add a material-style click ripple.
const RippleButton = ({ as: Tag = 'button', className = '', children, ...props }) => {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const id = rippleId++;
    setRipples((r) => [...r, { id, x, y, size }]);
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 650);
    props.onClick?.(e);
  };

  return (
    <Tag
      {...props}
      onClick={handleClick}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute rounded-full bg-white/40 pointer-events-none animate-[ripple_0.65s_ease-out_forwards]"
          style={{ left: r.x, top: r.y, width: r.size, height: r.size }}
        />
      ))}
    </Tag>
  );
};

export default RippleButton;
