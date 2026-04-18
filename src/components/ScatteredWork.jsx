"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { CheckCircle2, AlertCircle, X, Check } from "lucide-react";
import IntegrationReveal from "./IntegrationReveal";

export default function ScatteredWork() {
  const [isHovered, setIsHovered] = useState(false);
  const darkCardRef = useRef(null);

  // Mouse tracking logic for snake trail cursor
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Chained springs for snake effect (matches WorkIntelligence)
  const trailConfig = [
    { stiffness: 250, damping: 25 },
    { stiffness: 200, damping: 22 },
    { stiffness: 150, damping: 18 },
    { stiffness: 100, damping: 15 },
    { stiffness: 80, damping: 12 },
  ];

  const s1x = useSpring(mouseX, trailConfig[0]);
  const s1y = useSpring(mouseY, trailConfig[0]);
  const s2x = useSpring(s1x, trailConfig[1]);
  const s2y = useSpring(s1y, trailConfig[1]);
  const s3x = useSpring(s2x, trailConfig[2]);
  const s3y = useSpring(s2y, trailConfig[2]);
  const s4x = useSpring(s3x, trailConfig[3]);
  const s4y = useSpring(s3y, trailConfig[3]);
  const s5x = useSpring(s4x, trailConfig[4]);
  const s5y = useSpring(s4y, trailConfig[4]);

  const velX = useVelocity(mouseX);
  const velY = useVelocity(mouseY);
  const velocity = useTransform([velX, velY], ([vx, vy]) =>
    Math.sqrt(vx * vx + vy * vy),
  );

  // Spring-smoothed opacity that reacts to movement
  const movementOpacity = useSpring(
    useTransform(velocity, [0, 50, 300], [0, 0, 1]),
    { stiffness: 60, damping: 20 },
  );

  const segments = [
    { x: s1x, y: s1y, size: 160, opacity: 0.8, blur: 18 },
    { x: s2x, y: s2y, size: 130, opacity: 0.7, blur: 22 },
    { x: s3x, y: s3y, size: 100, opacity: 0.6, blur: 28 },
    { x: s4x, y: s4y, size: 80, opacity: 0.5, blur: 34 },
    { x: s5x, y: s5y, size: 60, opacity: 0.35, blur: 40 },
  ];

  const handleMouseMove = (e) => {
    if (!darkCardRef.current) return;
    const rect = darkCardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section className="w-full !py-0 px-2 sm:px-6 bg-white relative font-sans">
      <div className="max-w-7xl mx-auto relative z-10 py-6 sm:py-10 lg:py-6">
        {/* Header Section — Back on White BG */}
        <div className="text-center pb-6 sm:pb-10 lg:pb-16 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block text-[10px] font-black uppercase tracking-[0.2em] text-[#7e22ce] bg-purple-50 px-4 py-1.5 rounded-full border border-purple-100 mb-4"
          >
            Efficiency Audit
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1.05]"
          >
            One System For
            <br className="hidden md:block" />{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-[#ec4899] to-[#7e22ce] bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Maximum Output.
            </motion.span>
          </motion.h2>
        </div>

        {/* Bottom Dark Card */}
        <motion.div
          ref={darkCardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className={`relative overflow-hidden rounded-[1.5rem] sm:rounded-[2.5rem] border border-purple-900/30 shadow-2xl shadow-purple-900/20 ${isHovered ? "cursor-none" : ""}`}
          style={{ background: "#020617" }}
        >
          {/* Snake Trail Effect */}
          {segments.map((seg, i) => (
            <motion.div
              key={i}
              className="absolute pointer-events-none z-[100] rounded-full mix-blend-screen"
              style={{
                width: seg.size,
                height: seg.size,
                left: seg.x,
                top: seg.y,
                x: "-50%",
                y: "-50%",
                opacity: useTransform([movementOpacity], ([v]) =>
                  isHovered ? (i === 0 ? seg.opacity : v * seg.opacity) : 0,
                ),
                scale: isHovered ? 1 : 0,
                background: `radial-gradient(circle, rgba(168, 85, 247, 0.9) 0%, rgba(168, 85, 247, 0) 70%)`,
                filter: `blur(${seg.blur}px)`,
              }}
            />
          ))}

          {/* Lead Cursor Glow */}
          <motion.div
            className="absolute w-80 h-80 pointer-events-none z-[90] rounded-full mix-blend-screen"
            style={{
              left: s1x,
              top: s1y,
              x: "-50%",
              y: "-50%",
              opacity: isHovered ? 0.45 : 0,
              scale: isHovered ? 1 : 0,
              background:
                "radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />

          {/* Ambient Glows */}
          <div className="pointer-events-none absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[80px] -z-0" />
          <div className="pointer-events-none absolute bottom-0 left-0 w-80 h-80 bg-fuchsia-600/10 rounded-full blur-[80px] -z-0" />

          {/* Dot grid overlay */}
          <div
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(139,92,246,0.10) 1px, transparent 1px)",
              backgroundSize: "12px 12px",
            }}
          />

          {/* Grid Container for Dynamic Reordering */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
            {/* 1. Problem heading (Top Left) */}
            <div className="order-1 lg:order-1 w-full px-6 pt-8 pb-6 sm:px-10 lg:px-12 lg:pt-10 lg:pb-8 lg:border-r border-purple-900/30 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
                  <AlertCircle size={18} />
                </div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-white/50">
                  The Problem
                </span>
              </div>
              <h3 className="text-2xl md:text-[2rem] lg:text-[2.25rem] font-black text-white tracking-normal leading-[1.05] mb-3">
                Work Across <br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{
                    backgroundPosition: ["0% center", "-200% center"],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                >
                  Too Many Tools.
                </motion.span>
              </h3>
              <p className="text-slate-400 font-medium text-sm sm:text-base leading-relaxed max-w-xl">
                The average team struggles with 8–12 tools daily.
              </p>
            </div>

            {/* 2. Negative Result (Mobile: 2nd, Desktop: bottom left) */}
            <div className="order-2 lg:order-4 w-full px-6 pt-6 pb-8 sm:px-10 lg:px-12 lg:pt-8 lg:pb-12 border-b lg:border-b-0 lg:border-r border-purple-900/30">
              <div className="group p-5 sm:p-6 rounded-2xl border border-red-500/20 bg-red-500/[0.03] flex flex-col justify-center transition-all duration-300 hover:border-red-500/40">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-red-400/80 mb-4 text-left">
                  Daily Friction
                </p>
                <ul className="space-y-3">
                  {[
                    "30% time lost in context switching",
                    "Fragmented data & missed deadlines",
                    "Zero visibility into real performance",
                  ].map((text, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm font-bold text-slate-300"
                    >
                      <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                        <X size={11} strokeWidth={3.5} />
                      </div>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3. IntegrationReveal (Mobile: 3rd, Desktop: Middle span) */}
            <div
              onMouseEnter={() => setIsHovered(false)}
              onMouseLeave={() => setIsHovered(true)}
              className="order-3 lg:order-3 lg:col-span-2 overflow-hidden"
            >
              <IntegrationReveal className="h-[260px] sm:h-[240px] lg:h-[280px] rounded-none !bg-transparent" />
            </div>

            {/* 4. Solution heading (Mobile: 4th, Desktop: Top Right) */}
            <div className="order-4 lg:order-2 w-full px-6 pt-8 pb-6 sm:px-10 lg:px-12 lg:pt-10 lg:pb-8 border-b lg:border-b-0 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
                  <CheckCircle2 size={18} />
                </div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-white/50">
                  The Solution
                </span>
              </div>
              <h3 className="text-2xl md:text-[2rem] lg:text-[2.25rem] font-black text-white tracking-normal leading-[1.05] mb-3">
                One Central Hub. <br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{
                    backgroundPosition: ["0% center", "-200% center"],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                >
                  Absolute Clarity.
                </motion.span>
              </h3>
              <p className="text-slate-400 font-medium text-sm sm:text-base leading-relaxed max-w-xl">
                KaryaUp turns your business into one unified engine.
              </p>
            </div>

            {/* 5. Positive Result (Mobile: 5th, Desktop: Bottom right) */}
            <div className="order-5 lg:order-5 w-full px-6 pt-6 pb-8 sm:px-10 lg:px-12 lg:pt-8 lg:pb-12">
              <div className="group p-5 sm:p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.03] flex flex-col justify-center transition-all duration-300 hover:border-emerald-500/40">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400/80 mb-4 text-left">
                  Instant Value
                </p>
                <ul className="space-y-3 text-left">
                  {[
                    "Save 30% time with automation",
                    "Unified data & guaranteed deadlines",
                    "Real-time visibility & reporting",
                  ].map((text, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm font-bold text-slate-300"
                    >
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 border border-emerald-500/20 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                        <Check size={11} strokeWidth={3.5} />
                      </div>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
