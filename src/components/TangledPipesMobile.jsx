import React, { useId } from "react";

const VIEW_W = 400;
const VIEW_H = 1200;

const PIPE_OUTLINE = 32;
const PIPE_BODY = 26;
const PIPE_HIGHLIGHT = 5;
const RED_CORE = 12;

// Ultra-messy tangle that sweeps the full 0-400 width on the top half,
// then converges cleanly to a centered straight line from y=616 downward.
const PIPE_D =
  "M 200,10 " +
  "C  20,60   380,120  200,180 " +
  "S  10, 50  350,220 " +
  "S  30,320   80,270 " +
  "S 390,200  320,350 " +
  "S  20,380   60,320 " +
  "S 380,280  330,420 " +
  "S  10,460   80,390 " +
  "S 380,350  350,460 " +
  "S  30,550  200,500 " +
  "S 360,570  200,600 " +  // converge to center
  "L 200,616 " +            // hard edge — red ends, green begins
  "L 200,896";              // stop at logo

const PATH_LEN = 3500;
const PULSE_LEN = 140;

export default function TangledPipesMobile({ className, speed = 10 }) {
  const uid = useId().replace(/:/g, "");
  const clipId = `clip-v-${uid}`;
  const redBlurId = `redblur-v-${uid}`;
  const trailBlurId = `trail-v-${uid}`;
  const TRANSITION = "51.3%"; // 616/1200 ≈ 51.3%

  return (
    <svg
      className={className}
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Chaos to success pipe flow"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* Static pipe body gradient */}
        <linearGradient id={`metal-${uid}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#ffffff" />
          <stop offset="45%"  stopColor="#e6e8ec" />
          <stop offset="55%"  stopColor="#cfd2d8" />
          <stop offset="100%" stopColor="#a8acb3" />
        </linearGradient>

        {/* Hard red→green cut at 41% */}
        <linearGradient id={`pulse-core-${uid}`} x1="0" y1="0" x2="0" y2={VIEW_H} gradientUnits="userSpaceOnUse">
          <stop offset="0%"         stopColor="#ef4444" />
          <stop offset={TRANSITION} stopColor="#ef4444" />
          <stop offset={TRANSITION} stopColor="#10b981" />
          <stop offset="100%"       stopColor="#10b981" />
        </linearGradient>

        <linearGradient id={`pulse-halo-${uid}`} x1="0" y1="0" x2="0" y2={VIEW_H} gradientUnits="userSpaceOnUse">
          <stop offset="0%"         stopColor="#f87171" />
          <stop offset={TRANSITION} stopColor="#f87171" />
          <stop offset={TRANSITION} stopColor="#34d399" />
          <stop offset="100%"       stopColor="#34d399" />
        </linearGradient>

        <linearGradient id={`pulse-trail-${uid}`} x1="0" y1="0" x2="0" y2={VIEW_H} gradientUnits="userSpaceOnUse">
          <stop offset="0%"         stopColor="#fca5a5" stopOpacity="0.5" />
          <stop offset={TRANSITION} stopColor="#fca5a5" stopOpacity="0.5" />
          <stop offset={TRANSITION} stopColor="#6ee7b7" stopOpacity="0.5" />
          <stop offset="100%"       stopColor="#6ee7b7" stopOpacity="0.5" />
        </linearGradient>

        <filter id={redBlurId}   x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="7" /></filter>
        <filter id={trailBlurId} x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="3" /></filter>

        <clipPath id={clipId}>
          <path d={PIPE_D} fill="none" stroke="#000" strokeWidth={PIPE_BODY + 4} strokeLinecap="round" strokeLinejoin="round" />
        </clipPath>
      </defs>

      {/* Static metallic pipe */}
      <g opacity="0.6">
        <path d={PIPE_D} fill="none" stroke="#9aa0a8"              strokeWidth={PIPE_OUTLINE}   strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
        <path d={PIPE_D} fill="none" stroke={`url(#metal-${uid})`} strokeWidth={PIPE_BODY}      strokeLinecap="round" strokeLinejoin="round" />
        <path d={PIPE_D} fill="none" stroke="white"                strokeWidth={PIPE_HIGHLIGHT} strokeLinecap="round" strokeLinejoin="round" opacity="0.45" />
      </g>

      {/* Animated energy pulse */}
      <g clipPath={`url(#${clipId})`}>
        {/* Wide glowing trail */}
        <path d={PIPE_D} fill="none"
          stroke={`url(#pulse-trail-${uid})`}
          strokeWidth={RED_CORE + 10} strokeLinecap="round"
          pathLength="100"
          strokeDasharray="15 105"
          opacity={0.3} filter={`url(#${trailBlurId})`}
        >
          <animate attributeName="stroke-dashoffset" from="120" to="0" dur={`${speed}s`} repeatCount="indefinite" />
        </path>

        {/* Outer glow halo */}
        <path d={PIPE_D} fill="none"
          stroke={`url(#pulse-halo-${uid})`}
          strokeWidth={RED_CORE + 7} strokeLinecap="round"
          pathLength="100"
          strokeDasharray="6 114"
          filter={`url(#${redBlurId})`} opacity={0.65}
        >
          <animate attributeName="stroke-dashoffset" from="120" to="0" dur={`${speed}s`} repeatCount="indefinite" />
        </path>

        {/* Bright core */}
        <path d={PIPE_D} fill="none"
          stroke={`url(#pulse-core-${uid})`}
          strokeWidth={RED_CORE} strokeLinecap="round"
          pathLength="100"
          strokeDasharray="4 116"
          opacity={0.9}
        >
          <animate attributeName="stroke-dashoffset" from="120" to="0" dur={`${speed}s`} repeatCount="indefinite" />
        </path>
      </g>
    </svg>
  );
}
