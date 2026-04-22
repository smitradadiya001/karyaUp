import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ComingSoon() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const text = "COMING SOON";
  const characters = text.split("");

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[60vh] flex flex-col items-center justify-center bg-white overflow-hidden"
    >
      <div className="grid place-items-center w-full relative">
        <div className="flex content-center text-[clamp(2rem,14vw,10rem)] font-black uppercase tracking-tighter leading-[0.7] text-slate-900">
          {characters.map((char, i) => {
            // Calculate progress for each character with a slight stagger/offset
            // This creates the "wave" or "delayed" effect as seen in your snippet
            const start = i * 0.05;
            const end = 0.4 + i * 0.05;
            
            const y = useTransform(smoothProgress, [start, end], ["150%", "0%"]);
            const opacity = useTransform(smoothProgress, [start, end], [0, 1]);
            
            return (
              <div key={i} className="overflow-hidden py-4">
                <motion.span
                  style={{
                    y,
                    opacity,
                    display: "inline-block",
                    whiteSpace: char === " " ? "pre" : "normal",
                    willChange: "transform"
                  }}
                  className="char"
                >
                  {char}
                </motion.span>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Decorative subtitle */}
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-slate-400 text-sm font-medium tracking-[0.3em] uppercase"
      >
        Launching Spring 2026
      </motion.p>
    </section>
  );
}
