"use client";

import React, { useEffect, useState, useMemo } from "react";
import { cn } from "../../lib/utils";
import "./PerspectiveGrid.css";

export function PerspectiveGrid({
  className,
  gridSize = 40,
  showOverlay = true,
  fadeRadius = 80,
}) {
  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Memoize tiles array to prevent unnecessary re-renders
  const tiles = useMemo(() => Array.from({ length: gridSize * gridSize }), [gridSize]);

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={cn(
        "relative w-full h-full overflow-hidden transition-colors duration-1000",
        isHovering ? "bg-purple-950/90" : "bg-white",
        "[--fade-stop:#ffffff]",
        className
      )}
      style={{
        perspective: "2000px",
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className="absolute w-[150vw] aspect-square grid origin-center"
        style={{
          left: "50%",
          top: "50%",
          transform:
            "translate(-50%, -50%) rotateX(30deg) rotateY(-5deg) rotateZ(20deg) scale(2)",
          transformStyle: "preserve-3d",
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize}, 1fr)`,
        }}
      >
        {/* Tiles */}
        {tiles.map((_, i) => {
          const x = i % gridSize;
          const y = Math.floor(i / gridSize);
          return (
            <div
              key={i}
              className="tile relative z-20 cursor-pointer overflow-hidden border-white/10"
            >
              <div 
                className={cn(
                  "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                  isHovering ? "opacity-100" : "opacity-0 delay-1000"
                )}
                style={{
                  backgroundImage: `url('/src/assets/Logo(2).png')`,
                  backgroundSize: `${gridSize * 100}% ${gridSize * 100}%`,
                  backgroundPosition: `${(x / (gridSize - 1)) * 100}% ${(y / (gridSize - 1)) * 100}%`,
                  backgroundRepeat: 'no-repeat',
                  filter: isHovering ? 'brightness(1.5) contrast(1.2) drop-shadow(0 0 10px rgba(168,85,247,0.5))' : 'none'
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Radial Gradient Mask (Overlay) */}
      {showOverlay && (
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: `radial-gradient(circle, transparent 25%, var(--fade-stop) ${fadeRadius}%)`,
          }}
        />
      )}
    </div>
  );
}

export default PerspectiveGrid;
