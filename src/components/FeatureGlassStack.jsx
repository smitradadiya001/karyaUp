import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smile } from "lucide-react";

const FeatureGlassStack = ({ items = [] }) => {
  const [index, setIndex] = useState(0);

  // Default items if none provided
  const displayItems = items.length > 0 ? items : ["Streamline work", "Automate tasks", "Centralize data", "Scale ambition"];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % displayItems.length);
    }, 3000); // Slower interval for smoother switching
    return () => clearInterval(timer);
  }, [displayItems.length]);

  // Get the current order of items (top to bottom)
  const visibleItems = [];
  for (let i = 0; i < 4; i++) {
    const itemIndex = (index + i) % displayItems.length;
    visibleItems.push({
      id: itemIndex,
      text: displayItems[itemIndex],
      position: i, // 0 is top (active), 1-3 are behind
    });
  }

  return (
    <div className="relative h-[160px] w-full max-w-[340px] lg:mx-0 mx-auto flex flex-col items-center justify-start perspective-1000">
      <AnimatePresence mode="popLayout">
        {visibleItems.map((item, i) => (
          <motion.div
            key={item.text}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{
              opacity: 1 - item.position * 0.2, // Less aggressive opacity drop
              y: item.position * 14, // Slightly more vertical spread for clarity
              scale: 1 - item.position * 0.08, // More aggressive scaling for depth effect
              zIndex: 10 - item.position,
              filter: `blur(${item.position * 0.5}px)`, // Subtle blur for depth
            }}
            exit={{ 
              opacity: 0, 
              y: 0, 
              scale: 0.95, 
              filter: "blur(4px)",
              transition: { duration: 0.7, ease: "easeOut" }
            }}
            transition={{
              duration: 1.0,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute w-full px-5 py-3 rounded-full bg-[#1a1c1e]/80 backdrop-blur-xl border border-white/5 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4)] flex items-center gap-4 group transition-colors duration-500"
          >
            <div className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-sm shadow-purple-500/20">
              <Smile className="w-4 h-4 text-purple-400" />
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-semibold text-white tracking-tight leading-none whitespace-nowrap overflow-hidden text-ellipsis">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FeatureGlassStack;
