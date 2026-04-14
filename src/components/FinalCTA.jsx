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
    "Reduced tool usage by 70% -everything is now in one place.",
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
    <section className="py-1.5 sm:py-0 bg-white relative overflow-hidden font-sans">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* The Centric Hub (Glass Card) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 sm:mt-10 lg:mt-12 bg-[linear-gradient(180deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.65)_100%)] backdrop-blur-3xl border border-slate-200/60 rounded-[2rem] sm:rounded-[3rem] px-3.5 py-4.5 sm:px-9 sm:py-8 shadow-[0_32px_120px_-20px_rgba(30,41,59,0.08)] relative overflow-hidden"
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


            {/* Testimonial Marquee (Infinite Scroll) - Seamless Loop */}
            <div className="mb-2 sm:mb-3 overflow-hidden relative w-full h-8 sm:h-12 flex items-center">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="flex items-center gap-8 sm:gap-20 whitespace-nowrap"
              >
                {[...testimonials, ...testimonials].map((t, i) => (
                  <div key={i} className="flex items-center gap-3 sm:gap-4">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={8} className="text-amber-400 sm:w-[10px] sm:h-[10px]" fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-slate-400 font-bold text-xs sm:text-sm tracking-normal italic">"{t}"</span>
                  </div>
                ))}
              </motion.div>
              {/* Fade overlays */}
              <div className="absolute inset-y-0 left-0 w-8 sm:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-8 sm:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
            </div>

            {/* Main Value Prop */}
            <h2 className="text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1.05] mb-2 sm:mb-3">
              Run Your Entire <br className="hidden md:block" />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:400%_auto]"
                animate={{ backgroundPosition: ["0% center", "-400% center"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                Workspace
              </motion.span>
            </h2>

            <p className="text-base sm:text-xl text-slate-500 font-medium max-w-xl mx-auto mb-4 sm:mb-5 leading-relaxed">
              Stop switching tools. Start moving move. <br className="hidden md:block" />
              <span className="text-slate-900 font-black">
                Execution speed <span className="text-[#7e22ce] sm:inline">{speed.toFixed(1)}x faster</span>.
              </span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
              <Link
                to="https://app.karyaup.com/auth"
                onMouseEnter={() => setIsHoveringCTA(true)}
                onMouseLeave={() => setIsHoveringCTA(false)}
                className="group relative z-10 flex h-[3.5em] w-[16.5em] shrink-0 items-center justify-center overflow-hidden rounded-[30em] font-bold text-[15px] transition-all duration-300"
                style={{
                  boxShadow: "6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff"
                }}
              >
                <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#7e22ce] to-fuchsia-500" />
                <div className="absolute -inset-[3px] -z-10 origin-left scale-x-0 rounded-[30em] bg-white transition-transform duration-500 ease-in-out group-hover:scale-x-100" />
                <span className="relative z-10 flex items-center justify-center gap-2.5 text-white transition-colors duration-300 group-hover:text-slate-800">
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
                  className="inline-flex w-[12em] sm:w-auto items-center justify-center px-10 py-3 rounded-full border-2 border-slate-200 text-slate-900 font-black text-lg transition-all hover:bg-slate-100"
                >
                  Book a Demo
                </Link>
              </motion.div>
            </div>

            {/* Bottom Proof - Enhanced Visibility */}
            <div className="mt-6 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-x-10 gap-y-3 opacity-90">
              <div className="flex items-center gap-2 text-[13px] sm:text-sm font-bold text-slate-700">
                <Globe size={16} className="text-purple-600" /> 10,000+ Global Teams
              </div>
              <div className="flex items-center gap-2 text-[13px] sm:text-sm font-bold text-slate-700">
                <ShieldCheck size={16} className="text-emerald-500" /> Enterprise Security
              </div>
              <div className="flex items-center gap-2 text-[13px] sm:text-sm font-bold text-slate-700">
                <Heart size={16} className="text-rose-500" /> Trusted by 500k+
              </div>
            </div>

          </div>

          {/* Shimmer Overlay on card */}
          <div className="absolute inset-0 border-[3px] border-white/40 rounded-[4rem] pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
