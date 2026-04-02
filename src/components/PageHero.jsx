import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import FeatureStack from "./FeatureStack";

export default function PageHero({
  pillText,
  titleBlack,
  titleGradient,
  descriptionList = [],
  tags = [],
  imageSrc,
  imageAlt,
  featureStackItems = [],
  sectionSpacing = "py-12 sm:py-16 lg:py-20",
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className={`relative pt-0 lg:pt-2 overflow-hidden`}>
      {/* Ambient Background Glows */}
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] translate-x-1/4 -translate-y-1/2 rounded-full bg-purple-100/60 blur-[120px]" />
      <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] -translate-x-1/4 translate-y-1/2 rounded-full bg-fuchsia-100/40 blur-[100px]" />

      <div className="mx-auto flex max-w-7xl items-center px-4 sm:px-6 lg:px-8 pt-4 pb-12 sm:pt-6 sm:pb-16 lg:pt-8 lg:pb-20">
        <div className="grid w-full items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14">

          {/* Left Content */}
          <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-100 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-purple-700 shadow-sm"
            >
              {pillText || "Solutions / Module"}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: isMobile ? 0 : 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
              className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.06]"
            >
              {titleBlack}
              <span className="mt-2 block">
                {" "}
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  {titleGradient}
                </motion.span>
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: isMobile ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
              className="mt-5 sm:mt-6 space-y-3 sm:space-y-4 max-w-lg w-full"
            >
              {descriptionList.map((text, i) => (
                <div key={i} className="flex items-start gap-3.5 text-left">
                  <div className="mt-1 w-5 h-5 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 text-[#7e22ce] stroke-[4]" />
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* FeatureStack (Carousel) or Tags (Fallback) */}
            {featureStackItems.length > 0 ? (
              <FeatureStack items={featureStackItems} />
            ) : (
              tags.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: isMobile ? 0 : 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
                  className="mt-6 sm:mt-8 grid grid-cols-2 gap-2 sm:gap-3 w-full max-w-xs sm:max-w-md"
                >
                  {tags.map((tag) => (
                    <div key={tag} className="group flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-slate-50/50 border border-slate-200/60 shadow-sm hover:border-emerald-200 hover:bg-emerald-50/50 transition-all duration-300">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-emerald-100 border border-emerald-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Check className="w-2.5 h-2.5 text-emerald-600 stroke-[4]" />
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.1em] text-slate-600 truncate">{tag}</span>
                    </div>
                  ))}
                </motion.div>
              )
            )}
          </div>

          {/* Right Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            className="relative w-full max-w-[480px] sm:max-w-[540px] mx-auto lg:max-w-none lg:mx-0 lg:-mr-12 xl:-mr-24 mt-10 lg:mt-0"
          >
            <div className="relative rounded-[2.5rem] border border-slate-200 bg-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.06)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-50/50 to-white/0 pointer-events-none" />
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-[280px] sm:h-[350px] md:h-[320px] lg:h-[420px] xl:h-[480px] object-cover object-left-top transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
