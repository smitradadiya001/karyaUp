import React from 'react';
import { motion } from 'framer-motion';

const BorderBeam = ({ 
  size = 100, 
  duration = 4, 
  anchor = 90, 
  borderWidth = 3.5,
  colorFrom = "#7e22ce",
  colorTo = "#d946ef",
  delay = 0,
  borderRadius = 8,
  className = ""
}) => {
  return (
    <div className={`absolute pointer-events-none overflow-visible ${className || 'inset-0'}`}>
      <svg
        className="absolute inset-0 w-full h-full overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <rect
          x={borderWidth / 2}
          y={borderWidth / 2}
          width={`calc(100% - ${borderWidth}px)`}
          height={`calc(100% - ${borderWidth}px)`}
          rx={borderRadius}
          pathLength="1"
          stroke="url(#rainbow-beam)"
          strokeWidth={borderWidth}
          strokeDasharray="0.15 0.85"
          style={{
            strokeDashoffset: 0,
            animation: `border-beam ${duration}s linear infinite`,
            animationDelay: `${delay}s`,
          }}
        />
        <defs>
          <linearGradient id="rainbow-beam" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff0000" />
            <stop offset="17%" stopColor="#ff7f00" />
            <stop offset="33%" stopColor="#ffff00" />
            <stop offset="50%" stopColor="#00ff00" />
            <stop offset="67%" stopColor="#0000ff" />
            <stop offset="83%" stopColor="#4b0082" />
            <stop offset="100%" stopColor="#9400d3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default BorderBeam;
