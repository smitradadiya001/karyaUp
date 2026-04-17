import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";

export default function KaryaUpSyncSlider({ slides = [], className = "" }) {
  const [active, setActive] = useState(0);
  const realLen = slides.length;
  
  // Ref for height calculation of the vertical text
  const cardRef = useRef(null);
  const [cardHeight, setCardHeight] = useState(0);

  // Use a ResizeObserver for stable height tracking
  useEffect(() => {
    const updateHeight = () => {
      if (cardRef.current) setCardHeight(cardRef.current.offsetHeight);
    };
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [slides]);

  // Handle the index loop
  const goNext = useCallback(() => {
    setActive((prev) => (prev + 1) % realLen);
  }, [realLen]);

  useEffect(() => {
    if (!realLen) return;
    const interval = setInterval(goNext, 4000);
    return () => clearInterval(interval);
  }, [realLen, goNext]);

  if (!realLen) return null;

  return (
    <section className={`py-8 md:py-10 px-4 sm:px-6 bg-white overflow-hidden ${className}`}>
      <div className="max-w-[95rem] mx-auto">
        
        {/* --- BRANDED HEADER --- */}
        <div className="max-w-4xl mx-auto mb-10 text-center px-2">
          <h2 className="mt-1 pb-2 text-3xl sm:text-5xl md:text-[3.25rem] font-black text-slate-900 tracking-tight leading-[1.18]">
            Boost productivity with<br />
            <motion.span
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-500 to-purple-700 bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              KARYAUP AI Workspace
            </motion.span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* LEFT SIDE: TEXT METRICS (Vertical Loop) */}
          <div className="order-2 lg:order-1 lg:col-span-4 flex flex-col justify-center">
            <div 
              className="relative overflow-hidden"
              style={{ height: cardHeight > 0 ? `${cardHeight}px` : "auto" }}
            >
              <motion.div
                animate={{ y: `-${active * cardHeight}px` }}
                transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                className="flex flex-col"
              >
                {slides.map((slide, i) => (
                  <div
                    key={i}
                    ref={i === 0 ? cardRef : null}
                    className="w-full shrink-0 py-2"
                  >
                    <div className="p-6 md:p-8 border-l-4 border-purple-600 bg-purple-50/40 rounded-r-2xl">
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                        {slide.metric}
                      </h3>
                      <p className="text-sm md:text-base text-slate-600 font-medium">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* RIGHT SIDE: IMAGE SLIDER (Horizontal Loop) */}
          <div className="order-1 lg:order-2 lg:col-span-8">
            <div className="relative w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-slate-50 aspect-[4/3] md:aspect-video shadow-2xl border border-slate-100">
              <motion.div
                animate={{ x: `-${active * 100}%` }}
                transition={{ duration: 0.75, ease: [0.22, 0.61, 0.36, 1] }}
                className="flex h-full w-full"
              >
                {slides.map((slide, i) => (
                  <div key={i} className="relative w-full h-full p-4 md:p-8 shrink-0">
                    <div className="relative w-full h-full bg-white rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-inner">
                      <img
                        src={slide.image}
                        alt={slide.storyTitle || "KaryaUp AI Workspace"}
                        className="w-full h-full object-cover object-top"
                      />

                      {/* Bottom overlay subtitle */}
                      <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 md:p-6">
                        <h3 className="text-white text-lg md:text-2xl font-bold max-w-2xl leading-snug drop-shadow-sm">
                          {slide.storyTitle}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Navigation Indicators */}
              <div className="absolute bottom-6 right-8 z-30 flex gap-2">
                {slides.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === active ? "w-8 bg-purple-600" : "w-2 bg-purple-200"
                    }`}
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