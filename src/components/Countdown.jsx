import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NumberFlow from "@number-flow/react";

const TARGET = new Date("2026-05-13T00:00:00").getTime();

function getTimeLeft() {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CircularUnit({ value, label, max, dotCount = 60, size = 110 }) {
  const cx = size / 2;
  const cy = size / 2;
  const radius = size / 2 - 8;
  const dotRadius = 2;
  const activeDots = Math.round((value / max) * dotCount);

  const dots = Array.from({ length: dotCount }, (_, i) => {
    const angle = (i / dotCount) * 2 * Math.PI - Math.PI / 2;
    const x = cx + radius * Math.cos(angle);
    const y = cy + radius * Math.sin(angle);
    const isActive = i < activeDots;
    return { x, y, isActive };
  });

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        {/* Background circle */}
        <svg
          width={size}
          height={size}
          className="absolute inset-0"
          style={{ overflow: "visible" }}
        >
          {/* Inner circle background */}
          <circle
            cx={cx}
            cy={cy}
            r={radius - dotRadius - 6}
            fill="white"
            stroke="#e2e8f0"
            strokeWidth="1"
          />
          {/* Dots ring */}
          {dots.map((dot, i) => (
            <circle
              key={i}
              cx={dot.x}
              cy={dot.y}
              r={dotRadius}
              fill={dot.isActive ? "#7e22ce" : "#e2e8f0"}
              style={{ transition: "fill 0.3s ease" }}
            />
          ))}
        </svg>

        {/* Number in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <NumberFlow
            value={value}
            format={{ minimumIntegerDigits: 2 }}
            className={`${size < 100 ? 'text-xl' : 'text-2xl'} font-black tabular-nums text-slate-800 leading-none`}
          />
        </div>
      </div>

      {/* Label */}
      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
        {label}
      </span>
    </div>
  );
}

export function Countdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  useEffect(() => {
    setMounted(true);
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    
    return () => {
      clearInterval(id);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const items = [
    { label: "Days",    value: time.days,    max: 30, dotCount: 60 }, // Max 30 for visual fullness
    { label: "Hours",   value: time.hours,   max: 24, dotCount: 60 },
    { label: "Minutes", value: time.minutes, max: 60, dotCount: 60 },
    { label: "Seconds", value: time.seconds, max: 60, dotCount: 60 },
  ];

  const circleSize = windowWidth < 640 ? 68 : 85;

  return (
    <div className="flex flex-row flex-nowrap items-center justify-center gap-2 sm:gap-4">
      {items.map((it, i) => (
        <motion.div
          key={it.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 * i, duration: 0.5 }}
          className="flex-shrink-0"
        >
          <CircularUnit
            value={mounted ? it.value : 0}
            label={it.label}
            max={it.max}
            dotCount={it.dotCount}
            size={circleSize}
          />
        </motion.div>
      ))}
    </div>
  );
}
