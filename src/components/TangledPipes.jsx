import React, { useId } from "react";

const VIEW_W = 1600;
const VIEW_H = 500;

// Scaled down stroke thickness to fit 1600x500 viewBox
const PIPE_OUTLINE = 36;
const PIPE_BODY = 30;
const PIPE_HIGHLIGHT = 6;
const RED_CORE = 14;

// Shifted back to 0 offset so the tangle stops right at the middle line. Straight pipe ends exactly at 1080 (behind the logo).
const PIPE_D =
  "M 20,260 " +
  "C 120,260 140,140 240,160 " +
  "S 360,360 300,300 " +
  "S 180,200 280,180 " +
  "S 460,120 420,240 " +
  "S 240,360 360,340 " +
  "S 540,260 500,180 " +
  "S 360,100 460,140 " +
  "S 620,260 540,300 " +
  "S 380,360 480,360 " +
  "S 660,300 620,220 " +
  "S 500,140 600,180 " +
  // Additional massive tangles to cover the entire left side:
  "S 600,450 400,400 " +
  "S 100,450 150,250 " +
  "S 100,50 300,100 " +
  "S 400,50 500,200 " +
  "S 200,450 350,350 " +
  "S 600,50 650,250 " +
  "S 760,260 780,260 " +
  "C 850,260 900,250 1080,250";

// Approximate path length for this massive tangled path
const PATH_LEN = 8500;
const PULSE_LEN = 150;

export default function TangledPipes({
  className,
  speed = 10,
}) {
  const uid = useId().replace(/:/g, "");
  const metalGrad = `metal-${uid}`;
  const highlightGrad = `hl-${uid}`;
  const redBlur = `redblur-${uid}`;
  const clipId = `clip-${uid}`;

  return (
    <svg
      className={className}
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="A single tangled metal pipe with an energy pulse traveling inside"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={metalGrad} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#e6e8ec" />
          <stop offset="55%" stopColor="#cfd2d8" />
          <stop offset="100%" stopColor="#a8acb3" />
        </linearGradient>

        <linearGradient id={highlightGrad} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        {/* Pulse Gradients (Red to Green transition) */}
        <linearGradient id={`pulse-core-${uid}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ff3a3a">
            <animate attributeName="stop-color" values="#ff3a3a;#ffbaba;#ff3a3a" dur="2s" repeatCount="indefinite" />
          </stop>
          <stop offset="65%" stopColor="#ff3a3a">
            <animate attributeName="stop-color" values="#ff3a3a;#ffbaba;#ff3a3a" dur="2s" repeatCount="indefinite" />
          </stop>
          <stop offset="67%" stopColor="#059669" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>

        <linearGradient id={`pulse-halo-${uid}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ff1818">
            <animate attributeName="stop-color" values="#ff1818;#ff9999;#ff1818" dur="2s" repeatCount="indefinite" />
          </stop>
          <stop offset="65%" stopColor="#ff1818">
            <animate attributeName="stop-color" values="#ff1818;#ff9999;#ff1818" dur="2s" repeatCount="indefinite" />
          </stop>
          <stop offset="67%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>

        <linearGradient id={`pulse-trail-${uid}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ff2424" />
          <stop offset="65%" stopColor="#ff2424" />
          <stop offset="67%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>

        <filter id={redBlur} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
        <filter id={`trail-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" />
        </filter>

        <clipPath id={clipId}>
          <path
            d={PIPE_D}
            fill="none"
            stroke="#000"
            strokeWidth={PIPE_BODY}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </clipPath>
      </defs>

      {/* Static Pipe Body - Made faint so it doesn't overpower the icons */}
      <g opacity="0.3">
        {/* 1. Dark outline */}
        <path
          d={PIPE_D}
          fill="none"
          stroke="#9aa0a8"
          strokeWidth={PIPE_OUTLINE}
          strokeLinecap="butt"
          strokeLinejoin="round"
          opacity="0.45"
        />
        {/* 2. Metallic body */}
        <path
          d={PIPE_D}
          fill="none"
          stroke={`url(#${metalGrad})`}
          strokeWidth={PIPE_BODY}
          strokeLinecap="butt"
          strokeLinejoin="round"
        />
        {/* 3. Top highlight */}
        <path
          d={PIPE_D}
          fill="none"
          stroke={`url(#${highlightGrad})`}
          strokeWidth={PIPE_HIGHLIGHT}
          strokeLinecap="butt"
          strokeLinejoin="round"
          opacity="0.7"
        />
      </g>

      {/* Pulsing Energy Lines - Kept fully vibrant (no opacity reduction) */}
      <g clipPath={`url(#${clipId})`} filter={`url(#trail-${uid})`}>
        {/* Long fading trail */}
        <path
          d={PIPE_D}
          fill="none"
          stroke={`url(#pulse-trail-${uid})`}
          strokeWidth={RED_CORE - 4}
          strokeLinecap="round"
          strokeDasharray={`${PULSE_LEN * 3} ${PATH_LEN}`}
          opacity={0.35}
        >
          <animate
            attributeName="stroke-dashoffset"
            from={PATH_LEN}
            to={-PULSE_LEN * 3}
            dur={`${speed}s`}
            repeatCount="indefinite"
          />
        </path>

        {/* Soft glowing halo */}
        <path
          d={PIPE_D}
          fill="none"
          stroke={`url(#pulse-halo-${uid})`}
          strokeWidth={RED_CORE + 10}
          strokeLinecap="round"
          strokeDasharray={`${PULSE_LEN} ${PATH_LEN}`}
          filter={`url(#${redBlur})`}
          opacity={0.7}
        >
          <animate
            attributeName="stroke-dashoffset"
            from={PATH_LEN}
            to={-PULSE_LEN}
            dur={`${speed}s`}
            repeatCount="indefinite"
          />
        </path>

        {/* Soft core */}
        <path
          d={PIPE_D}
          fill="none"
          stroke={`url(#pulse-core-${uid})`}
          strokeWidth={RED_CORE}
          strokeLinecap="round"
          strokeDasharray={`${PULSE_LEN - 30} ${PATH_LEN}`}
          opacity={0.85}
        >
          <animate
            attributeName="stroke-dashoffset"
            from={PATH_LEN}
            to={-PULSE_LEN}
            dur={`${speed}s`}
            repeatCount="indefinite"
          />
        </path>
      </g>
    </svg>
  );
}
