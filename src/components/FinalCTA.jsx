"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, ArrowRight, Quote, Sparkles, Star, Globe, ShieldCheck, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import BorderBeam from "./BorderBeam";

const FinalCTA = () => {
  const [isHoveringCTA, setIsHoveringCTA] = useState(false);
  const [speed, setSpeed] = useState(1);
  const testimonials = [
    "Reduced tool usage by 70% — everything is now in one place.",
    "We improved execution speed within the first week.",
    "For the first time, we can actually see everything happening.",
    "The clarity this platform provides is a complete game changer.",
    "Our team communication has never been more aligned.",
  ];

  // Speed counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setSpeed(prev => (prev < 2 ? prev + 0.01 : 2));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-0 pb-0 sm:pt-0 sm:pb-0 bg-white relative overflow-hidden font-sans">

      {/* Background Mesh Gradient (Clarity Engine) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            scale: isHoveringCTA ? 1.2 : 1,
            opacity: isHoveringCTA ? 0.4 : 0.2
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-[radial-gradient(circle,rgba(126,34,206,0.15)_0%,transparent_70%)] rounded-full blur-[120px]"
        />


        {/* Moving Mesh blobs */}
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-fuchsia-100/30 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-100/30 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* The Centric Hub (Glass Card) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-[linear-gradient(180deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.65)_100%)] backdrop-blur-3xl border border-slate-200/60 rounded-[3rem] px-6 py-7 sm:px-10 sm:py-9 shadow-[0_32px_120px_-20px_rgba(30,41,59,0.08)] relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none opacity-30">
            <svg className="h-full w-full" viewBox="0 0 1200 700" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M-60 180C160 120 280 90 470 180C690 285 860 360 1260 240"
                stroke="rgba(216,180,254,0.9)"
                strokeWidth="3"
                strokeDasharray="18 16"
                animate={{ strokeDashoffset: [-120, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <motion.path
                d="M-40 540C220 450 360 410 600 520C810 610 980 600 1240 500"
                stroke="rgba(244,114,182,0.65)"
                strokeWidth="2.5"
                strokeDasharray="14 14"
                animate={{ strokeDashoffset: [120, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
            </svg>
          </div>

          <div className="relative z-10 text-center">

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-500 text-[11px] font-black uppercase tracking-[0.2em] mb-8 shadow-sm"
            >
              <ShieldCheck size={14} className="text-[#7e22ce]" />
              The execution standard for elite teams
            </motion.div>

            {/* Testimonial Marquee (Infinite Scroll) - Seamless Loop */}
            <div className="mb-8 overflow-hidden relative w-full h-12 flex items-center">
              <motion.div
                animate={{ x: ["-50%", "0%"] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="flex items-center gap-20 whitespace-nowrap"
              >
                {[...testimonials, ...testimonials].map((t, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={10} className="text-amber-400" fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-slate-400 font-bold text-sm tracking-tight italic">"{t}"</span>
                  </div>
                ))}
              </motion.div>
              {/* Fade overlays */}
              <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
            </div>

            {/* Main Value Prop */}
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-6">
              Run your entire <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:400%_auto]"
                animate={{ backgroundPosition: ["0% center", "-400% center"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                workspace
              </motion.span>
            </h2>

            <p className="text-lg sm:text-2xl text-slate-500 font-medium max-w-2xl mx-auto mb-8 leading-relaxed">
              Stop switching tools. Start moving work forward. <br />
              <span className="text-slate-900 font-black">
                Execution speed increased by up to <span className="text-[#7e22ce]">{speed.toFixed(1)}x</span>.
              </span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="https://www.karyaup.com/auth"
                onMouseEnter={() => setIsHoveringCTA(true)}
                onMouseLeave={() => setIsHoveringCTA(false)}
                className="group relative z-10 flex h-[3.5em] w-[14em] shrink-0 items-center justify-center overflow-hidden rounded-[30em] font-bold text-[15px] transition-all duration-300"
                style={{
                  boxShadow: "6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff"
                }}
              >
                <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#7e22ce] to-fuchsia-500" />
                <div className="absolute left-0 top-0 -z-10 h-full w-0 rounded-[30em] bg-white transition-all duration-500 ease-in-out group-hover:w-full" />
                <span className="relative z-10 flex items-center justify-center gap-4 text-white transition-colors duration-300 group-hover:text-slate-800">
                  Start Free Workspace
                  <ArrowRight size={22} className="group-hover:translate-x-1.5 transition-transform" />
                </span>
              </Link>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/book-demo"
                  className="inline-flex w-full sm:w-auto items-center justify-center px-10 py-3 rounded-full border-2 border-slate-200 text-slate-900 font-black text-lg transition-all hover:bg-slate-100"
                >
                  Book a Demo
                </Link>
              </motion.div>
            </div>

            {/* Bottom Proof - Enhanced Visibility */}
            <div className="mt-8 flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-80">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
                <Globe size={18} className="text-purple-600" /> 10,000+ Global Teams
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
                <ShieldCheck size={18} className="text-emerald-500" /> Enterprise-ready Security
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
                <Heart size={18} className="text-rose-500" /> Trusted by 500k+ users
              </div>
            </div>

          </div>

          {/* Shimmer Overlay on card */}
          <div className="absolute inset-0 border-[3px] border-white/40 rounded-[4rem] pointer-events-none" />
        </motion.div>

      </div>

      {/* Extreme Floating Particles (Clarity Sparks) */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-300 rounded-full pointer-events-none z-0"
          animate={{
            y: [-1200, -100],
            x: [Math.random() * 200 - 100, Math.random() * 200 - 100],
            opacity: [0, 0.3, 0],
            scale: [0, 1.2, 0]
          }}
          transition={{
            duration: 8 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 10
          }}
          style={{
            left: `${Math.random() * 100}%`,
            bottom: "-20px"
          }}
        />
      ))}
    </section>
  );
};

export default FinalCTA;
