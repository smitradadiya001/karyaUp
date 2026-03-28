import React from "react";
import { motion } from "framer-motion";
import { Play, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
//import HeroBg from "../assets/Hero_BG.png";


const Hero = () => {
  return (
    <section
      id="hero-section"
      className="relative overflow-hidden bg-white min-h-screen pt-24 pb-12 sm:pt-24 sm:pb-14 lg:pt-28 lg:pb-16 flex items-center justify-center"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/Hero_BG.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-105 object-cover blur-[6px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.2)_0%,rgba(15,23,42,0.12)_34%,rgba(15,23,42,0.22)_100%)]" />
      </div>

      {/* Hero Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="flex min-h-[calc(100vh-96px)] flex-col items-center justify-center text-center">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 40, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 100,
                delay: 0.1
              }}
              className="text-[2.9rem] sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[0.98] mb-5 drop-shadow-[0_10px_32px_rgba(15,23,42,0.34)]"
            >
              The platform to run your
              <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                entire company
              </motion.span>
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
              className="mx-auto max-w-2xl text-lg sm:text-xl font-bold text-white/90 mb-6"
            >
              KaryaUp replaces <span className="text-[#e9d5ff]">6+ tools</span> with one unified system.
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
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8 w-full"
            >
              <Link
                to="https://www.karyaup.com/auth"
                className="group relative z-10 flex h-[3.5em] w-full max-w-[14em] shrink-0 items-center justify-center overflow-hidden rounded-[30em] font-bold text-[15px] transition-all duration-300 active:scale-95"
                style={{
                  boxShadow: "0 18px 40px rgba(126, 34, 206, 0.22)"
                }}
              >
                <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#7e22ce] to-fuchsia-500" />
                <div className="absolute left-0 top-0 -z-10 h-full w-0 rounded-[30em] bg-white transition-all duration-500 ease-in-out group-hover:w-full group-active:w-full" />
                <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-slate-800 group-active:text-slate-800">
                  Start Free Workspace
                </span>
              </Link>

              {/* Video Button: Watch Video */}
              <button
                className="group flex items-center gap-4 text-white font-black text-base transition-colors hover:text-[#f5d0fe]"
              >
                <div className="w-12 h-12 rounded-full bg-white/14 shadow-lg shadow-slate-900/20 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-white text-white ml-0.5 group-hover:fill-[#f5d0fe] group-hover:text-[#f5d0fe] transition-colors" />
                </div>
                Watch Video
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col items-center gap-2.5 text-sm font-semibold text-white/80"
            >
              <div className="flex items-center gap-2 text-center">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 stroke-[2.5]" />
                <p>No credit card required </p>
              </div>
              <div className="flex items-center gap-2 text-center">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 stroke-[2.5]" />
                <p className="flex items-center">
                  Setup in minutes
                  <span className="ml-2 inline-flex items-center justify-center bg-white/10 border border-white/15 text-white px-2 py-0.5 text-xs rounded-md font-black italic backdrop-blur-sm">
                    &lt; 5 minutes
                  </span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
