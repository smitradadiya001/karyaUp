import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Eye, Power, ShieldOff } from 'lucide-react';
import TiltedCard from './TiltedCard';

/* Low-poly wireframe padlock — highlighted visibility, triangulated facets */
const PolyLock = () => {
  const v = {
    sTopL: [82, 70], sTopR: [158, 70],
    sOutTopL: [70, 90], sOutTopR: [170, 90],
    sOutMidL: [70, 120], sOutMidR: [170, 120],
    sInTopL: [98, 92], sInTopR: [142, 92],
    sInMidL: [98, 122], sInMidR: [142, 122],
    bTL: [50, 130], bTR: [190, 130],
    bTopMid: [120, 138],
    bML: [40, 175], bMR: [200, 175],
    bMidL: [70, 175], bMidR: [170, 175],
    bCenter: [120, 195],
    bBL: [55, 245], bBR: [185, 245],
    bBotL: [85, 268], bBotR: [155, 268],
    bBotMid: [120, 275],
  };

  const line = (a, b, key, op = 0.95) => (
    <line key={key} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke="url(#lockStroke)" strokeOpacity={op} strokeWidth="2.5" />
  );
  const tri = (a, b, c, key, op = 0.3) => (
    <polygon key={key} points={`${a[0]},${a[1]} ${b[0]},${b[1]} ${c[0]},${c[1]}`} fill="url(#lockFill)" fillOpacity={op} stroke="url(#lockStroke)" strokeOpacity="0.85" strokeWidth="1.5" strokeLinejoin="round" />
  );

  return (
    <svg viewBox="0 0 240 300" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="lockStroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
        <radialGradient id="lockFill" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#a7f3d0" stopOpacity="0.1" />
        </radialGradient>
      </defs>

      {tri(v.sTopL, v.sOutTopL, v.sInTopL, "sa1")}
      {tri(v.sTopR, v.sOutTopR, v.sInTopR, "sa2")}
      {tri(v.sOutTopL, v.sOutMidL, v.sInTopL, "sa3")}
      {tri(v.sInTopL, v.sOutMidL, v.sInMidL, "sa4")}
      {tri(v.sOutTopR, v.sOutMidR, v.sInTopR, "sa5")}
      {tri(v.sInTopR, v.sOutMidR, v.sInMidR, "sa6")}
      {tri(v.sTopL, v.sTopR, v.sInTopL, "sa7", 0.15)}
      {tri(v.sTopR, v.sInTopR, v.sInTopL, "sa8", 0.15)}
      {tri(v.bTL, v.bTopMid, v.bTR, "bt1", 0.35)}
      {tri(v.bTL, v.sOutMidL, v.bTopMid, "bt2")}
      {tri(v.bTR, v.sOutMidR, v.bTopMid, "bt3")}
      {tri(v.sOutMidL, v.sInMidL, v.bTopMid, "bt4", 0.2)}
      {tri(v.sOutMidR, v.sInMidR, v.bTopMid, "bt5", 0.2)}
      {tri(v.sInMidL, v.sInMidR, v.bTopMid, "bt6", 0.1)}
      {tri(v.bTL, v.bML, v.bCenter, "bs1")}
      {tri(v.bTL, v.bCenter, v.bMidL, "bs2", 0.35)}
      {tri(v.bTL, v.bMidL, v.bTopMid, "bs3", 0.25)}
      {tri(v.bTopMid, v.bMidL, v.bCenter, "bs4", 0.2)}
      {tri(v.bTopMid, v.bCenter, v.bMidR, "bs5", 0.2)}
      {tri(v.bTR, v.bMR, v.bCenter, "bs6")}
      {tri(v.bTR, v.bCenter, v.bMidR, "bs7", 0.35)}
      {tri(v.bTR, v.bMidR, v.bTopMid, "bs8", 0.25)}
      {tri(v.bML, v.bBL, v.bCenter, "bb1")}
      {tri(v.bMR, v.bBR, v.bCenter, "bb2")}
      {tri(v.bBL, v.bBotL, v.bCenter, "bb3", 0.35)}
      {tri(v.bBR, v.bBotR, v.bCenter, "bb4", 0.35)}
      {tri(v.bBotL, v.bBotMid, v.bCenter, "bb5", 0.25)}
      {tri(v.bBotR, v.bBotMid, v.bCenter, "bb6", 0.25)}
      {tri(v.bBL, v.bBotL, v.bBotMid, "bb7", 0.15)}
      {tri(v.bBR, v.bBotR, v.bBotMid, "bb8", 0.15)}
      {line(v.sOutMidL, v.bTL, "ln1")}
      {line(v.sOutMidR, v.bTR, "ln2")}
      {line(v.bMidL, v.bMidR, "ln3", 0.6)}
      {line(v.bML, v.bMR, "ln4", 0.7)}
      {line(v.bBL, v.bBR, "ln5", 0.6)}
      {line(v.bTopMid, v.bCenter, "ln6", 0.55)}
      {line(v.bCenter, v.bBotMid, "ln7", 0.55)}

      <g>
        <circle cx="120" cy="190" r="10" fill="#ffffff" fillOpacity="1" />
        <circle cx="120" cy="190" r="10" fill="none" stroke="#059669" strokeWidth="2" />
        <path d="M115 198 L125 198 L128 222 L112 222 Z" fill="#ffffff" fillOpacity="1" />
        <path d="M115 198 L112 222 L128 222 L125 198" fill="none" stroke="#059669" strokeWidth="2" strokeLinejoin="round" />
      </g>
    </svg>
  );
};

/* Full sphere of binary numbers */
const BinaryEarth = ({ size = 480 }) => {
  const cx = size / 2;
  const cy = size / 2;
  const R = size / 2 - 8;
  const N = 380;
  const points = useMemo(() => Array.from({ length: N }, (_, i) => {
    const y = 1 - (i / (N - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const theta = i * 2.39996323;
    const x = Math.cos(theta) * radius;
    const z = Math.sin(theta) * radius;
    return { x, y, z, d: (i * 13 + (i % 7)) % 2 };
  }), []);

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className="absolute h-full w-full animate-[spin_40s_linear_infinite]"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="earthGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#dcfce7" stopOpacity="0.55" />
          <stop offset="65%" stopColor="#bbf7d0" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx={cx} cy={cy} r={R} fill="url(#earthGlow)" />
      {points.map((p, i) => {
        const px = cx + p.x * R;
        const py = cy + p.y * R;
        const depth = (p.z + 1) / 2;
        const opacity = 0.15 + depth * 0.8;
        const fontSize = 7 + depth * 6;
        const edge = Math.sqrt(p.x * p.x + p.y * p.y);
        const edgeFade = 1 - Math.max(0, edge - 0.85) * 4;
        return (
          <text
            key={i}
            x={px}
            y={py}
            fill="#0f172a"
            opacity={opacity * Math.max(0.25, edgeFade) * 0.6}
            fontSize={fontSize}
            fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
            fontWeight={600}
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {p.d}
          </text>
        );
      })}
    </svg>
  );
};

const bottomPoints = [
  {
    icon: Eye,
    title: "Transparent Tracking",
    desc: "Full visibility for the team — no surprises, no silent observers.",
    points: ["Visible active timers", "Real-time sync indicator", "Notification on entry"],
    delay: 0.1,
  },
  {
    icon: Power,
    title: "Easy ON/OFF Toggle",
    desc: "Managers stay in control with a single click toggle.",
    points: ["Manual start/stop", "Custom focus sessions", "Automated lunch breaks"],
    delay: 0.25,
  },
  {
    icon: ShieldOff,
    title: "Zero Hidden Spying",
    desc: "Zero background spying. Everything we capture is shown openly.",
    points: ["Transparent log history", "No keylogging allowed", "User-end data review"],
    delay: 0.4,
  },
];

export default function SecurityLockSection() {
  return (
    <section className="pt-4 pb-12 sm:pt-8 sm:pb-20 bg-white relative overflow-hidden flex flex-col items-center justify-center text-center">

      {/* CENTREPIECE: responsive container */}
      <div className="relative mx-auto flex items-center justify-center w-[300px] h-[300px] sm:w-[480px] sm:h-[480px] lg:w-[560px] lg:h-[560px]">

        {/* BINARY EARTH — responsive sizing, black digits */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 h-[240px] w-[240px] sm:h-[380px] sm:w-[380px] lg:h-[480px] lg:w-[480px] opacity-80 pointer-events-none">
          <BinaryEarth size={480} />
        </div>

        {/* SOFT HALO */}
        <span
          className="absolute h-[180px] w-[180px] sm:h-[300px] sm:w-[300px] rounded-full bg-emerald-100/30 blur-2xl animate-pulse pointer-events-none"
          aria-hidden="true"
        />

        {/* LOCK — positioned inside the circle on all screens */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-10 sm:top-12 left-1/2 -translate-x-1/2 z-10 h-32 w-32 sm:h-52 sm:w-52 lg:h-64 lg:w-64 drop-shadow-[0_8px_24px_rgba(16,185,129,0.35)]"
        >
          <PolyLock />
        </motion.div>

        {/* HEADING — Built with (Inside circle) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="absolute bottom-28 sm:bottom-24 left-0 right-0 z-10 text-center px-6"
        >
          <span className="text-2xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight leading-tight">
            Built with
          </span>
        </motion.div>

      </div>

      {/* HEADING — Transparency & Privacy (Outside circle) */}
      <div className="relative z-20 w-full -mt-28 sm:-mt-28 mb-4 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-[90vw] mx-auto"
        >
          <motion.span
            className="inline-block bg-[length:200%_auto] bg-clip-text text-transparent bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce]"
            animate={{ backgroundPosition: ["0% center", "-200% center"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            Transparency &amp; Privacy
          </motion.span>
        </motion.h2>
      </div>

      {/* DESCRIPTION — outside and below the circle */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25 }}
        className="mt-2 text-slate-500 text-sm sm:text-base font-medium leading-relaxed max-w-2xl uppercase tracking-wider mx-auto px-4"
      >
        Your data stays secure. Third-party AI providers never store or learn from your information.
      </motion.p>

      {/* BOTTOM TILTED CARDS */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 mt-10 sm:mt-16">
        <div className="grid sm:grid-cols-3 gap-6">
          {bottomPoints.map(({ icon, title, desc, points, delay }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay, duration: 0.5 }}
            >
              <TiltedCard icon={icon} title={title} desc={desc} points={points} />
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
