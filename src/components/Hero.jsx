import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-60 animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-accent-pink/5 rounded-full blur-3xl opacity-60 animate-pulse-slow" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.05] tracking-tight"
            >
              <span className="block">Every app. Every team.</span>
              <span className="block">Unlimited AI agents.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 max-w-lg text-base sm:text-lg text-slate-600 leading-relaxed"
            >
              Replace your tools with one platform that’s built for teams and
              powered by AI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <Link
                to="/start"
                className="group relative rounded-full bg-white p-[2px] shadow-2xl transition hover:bg-gradient-to-r hover:from-primary hover:via-accent-pink hover:to-primary/70"
              >
                <span className="relative flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-bold text-slate-900 transition group-hover:text-slate-900">
                  Get started. It’s FREE!
                </span>
              </Link>
              <div className="text-sm text-slate-500">
                Free forever.
                <br />
                No credit card.
              </div>
            </motion.div>
          </div>

          <div className="flex justify-end">
            <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-2xl backdrop-blur">
              <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                <span className="text-xs font-bold text-indigo-600">New!</span>
                <span className="relative group">
                  <span className="relative z-10">
                    AI Company Intelligence™
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-emerald-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </span>
                <span className="text-slate-400">→</span>
              </div>

              <div className="mt-6 space-y-4">
                {[
                  "Replace all your software",
                  "Centralize all your context",
                  "Maximize productivity with AI",
                ].map((text) => (
                  <div key={text} className="flex items-start gap-3">
                    <div className="mt-1 flex h-3 w-3 items-center justify-center rounded-full bg-indigo-600 text-white">
                      <Check size={12} />
                    </div>
                    <div className="text-sm font-semibold text-slate-700">
                      {text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
