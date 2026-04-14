import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function KaryaUpSyncSlider({ slides = [], className = "" }) {
  const [active, setActive] = useState(0);
  const realLen = slides.length;

  // Refs to calculate exact height for vertical animation
  const cardRef = useRef(null);
  const [cardHeight, setCardHeight] = useState(200);

  // Update card height on mount and resize for pixel-perfect vertical sliding
  useEffect(() => {
    const updateHeight = () => {
      if (cardRef.current) {
        setCardHeight(cardRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [slides]);

  const goNext = useCallback(() => {
    setActive((prev) => (prev + 1) % realLen);
  }, [realLen]);

  useEffect(() => {
    if (!realLen) return;
    const interval = setInterval(goNext, 3000);
    return () => clearInterval(interval);
  }, [realLen, goNext]);

  if (!realLen) return null;

  return (
    <section className={`py-10 md:py-6 px-4 sm:px-6 bg-white overflow-hidden ${className}`}>
      <div className="max-w-[95rem] mx-auto">

        {/* --- HEADER --- */}
        <div className="max-w-4xl mx-auto mb-2 md:mb-6 text-center py-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-[3.25rem] font-black text-slate-900 tracking-tight leading-[1.3] mb-3"
          >
            Boost productivity with<br />
            <motion.span
              className="mb-3 inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-500 to-purple-700 bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              KaryaUp AI Workspace
            </motion.span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* LEFT SIDE: TEXT METRICS (Order 2 on mobile, 1 on desktop) */}
          <div className="order-2 lg:order-1 lg:col-span-4 flex flex-col justify-center">
            <h4 className="mb-6 text-xl md:text-2xl font-bold text-slate-900 leading-tight">
              Streamline your workflow from start to finish.
            </h4>

            {/* Dynamic Height Container */}
            <div
              className="relative overflow-hidden"
              style={{ height: `${cardHeight}px` }}
            >
              <motion.div
                className="flex flex-col"
                animate={{ y: `-${active * cardHeight}px` }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                {slides.map((slide, i) => (
                  <div
                    key={i}
                    ref={i === 0 ? cardRef : null}
                    className="w-full flex items-center shrink-0 py-2"
                  >
                    <div className="w-full p-6 md:p-8 border-l-4 border-purple-600 bg-purple-50/50 rounded-r-2xl md:rounded-r-3xl shadow-sm">
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                        {slide.metric}
                      </h3>
                      <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* RIGHT SIDE: IMAGE SLIDER (Order 1 on mobile) */}
          <div className="order-1 lg:order-2 lg:col-span-8">
            <div className="relative w-full rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-slate-50 aspect-[4/3] md:aspect-video lg:aspect-auto lg:h-[410px]">

              <motion.div
                className="flex h-full w-full"
                animate={{ x: `-${active * 100}%` }}
                transition={{ type: "spring", stiffness: 90, damping: 18 }}   
              >
                {slides.map((slide, i) => (
                  <div key={i} className="relative min-w-full h-full shrink-0 p-3 md:p-6">
                    <div className="relative w-full h-full bg-slate-50 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl">

                      {/* TEXT CONTENT OVERLAY */}
                      <div className="absolute top-8 left-8 z-20 pr-8">
                        <motion.h3
                          initial={{ opacity: 0, x: -20 }}
                          animate={active === i ? { opacity: 1, x: 0 } : {}}
                          className="mt-78 text-purple-900 text-xl md:text-3xl font-bold leading-tight max-w-md"
                        >
                          {slide.storyTitle || "Design, build, and ship in one AI runway"}
                        </motion.h3>
                      </div>

                      {/* FLOATING IMAGE (Responsive positioning) */}
                      <div className="absolute -right-4 -bottom-4 w-[110%] h-[120%] md:w-[110%] md:h-[110%] z-10">
                        <motion.div
                          initial={{ opacity: 0, y: 40 }}
                          animate={active === i ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 0.3 }}
                          className="w-full h-full bg-white rounded-tl-2xl shadow-[-20px_-20px_50px_rgba(0,0,0,0.3)] overflow-hidden"
                        >
                          <img
                            src={slide.image}
                            alt="Feature Preview"
                            className="w-full h-full object-cover object-top"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* DOT INDICATORS */}
              <div className="absolute bottom-8 right-8 md:right-12 z-30 flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-8 bg-white" : "w-2 bg-white/40"
                      }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}