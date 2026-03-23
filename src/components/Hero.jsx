import React from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import DashboardImg from "../assets/dashboard2.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-8 sm:pt-24 sm:pb-12 lg:pt-28 lg:pb-16 min-h-[calc(100vh-80px)] flex items-start justify-center">

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text Content */}
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 40, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 100,
                delay: 0.1
              }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4 drop-shadow-sm"
            >
              The platform to<br /> run your <br />
              <span className="glass-text-gradient-shimmer bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-600 bg-[length:200%_auto] inline-block">
                entire company
              </span>
            </motion.h1>


            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 100,
                delay: 0.5
              }}
              className="text-lg sm:text-xl font-bold text-slate-800/90 mb-5"
            >
              KaryaUp replaces <span className="text-[#7e22ce]">6+ tools</span> with one unified system.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 100,
                delay: 0.7
              }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 sm:gap-8 mb-8"
            >
              {/* Primary Button: Start Free Workspace (Reverted) */}
              <Link
                to="/start"
                className="btn-primary w-full sm:w-auto px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-[#7e22ce]/30 hover:shadow-xl hover:shadow-[#7e22ce]/40 transition-all hover:-translate-y-1 text-center"
              >
                Start Free Workspace
              </Link>

              {/* Video Button: Watch Video */}
              <button
                className="group flex items-center gap-4 text-slate-700 font-black text-base transition-colors hover:text-[#7e22ce]"
              >
                <div className="w-12 h-12 rounded-full bg-white shadow-lg shadow-slate-200/50 flex items-center justify-center border border-slate-100 group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-slate-800 text-slate-800 ml-0.5 group-hover:fill-[#7e22ce] group-hover:text-[#7e22ce] transition-colors" />
                </div>
                Watch Video
              </button>
            </motion.div>

            {/* Trust Markers: Vertical Stack (Top and Bottom) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col items-center lg:items-start gap-2.5 text-sm font-semibold text-slate-500/90"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 stroke-[2.5]" />
                <p>No credit card required </p>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 stroke-[2.5]" />
                <p className="flex items-center">
                  • Setup in minutes
                  <span className="ml-2 inline-flex items-center justify-center bg-purple-50 border border-purple-100 text-[#7e22ce] px-2 py-0.5 text-xs rounded-md font-black italic">
                    &lt; 5 minutes
                  </span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: High-Fidelity App Card (Tasks Style) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            className="relative lg:-mr-24 xl:-mr-40"
          >
            <div className="relative overflow-hidden border border-slate-200/80 rounded-3xl bg-white shadow-2xl">
              <img
                src={DashboardImg}
                alt="KaryaUp Dashboard Overview"
                className="w-full h-[280px] sm:h-[340px] lg:h-[380px] object-cover object-left"
              />
              {/* Ultra-smooth, wide right-side fade (Vanishing look) */}
              <div className="pointer-events-none absolute inset-y-0 right-0 w-[35%] lg:w-[45%] bg-gradient-to-r from-transparent via-white/50 to-white" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
