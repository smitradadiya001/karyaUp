import { motion } from "framer-motion";
import { MapPin, Lock, Zap, Target } from "lucide-react";
import worldMap from "../assets/world-map.webp";

export default function GeoFenceSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-2 sm:pt-4 lg:pt-6 pb-12 sm:pb-16 lg:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex-1 min-w-[300px] flex flex-col items-center lg:items-start lg:text-left"
          >
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#7e22ce] mb-6">
                <Target className="h-3.5 w-3.5" />
                Geo-Fencing Technology
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-[1.1] tracking-tight text-slate-900 mb-4">
                Punch In Only
                <br />
                <span className="bg-gradient-to-r from-[#7e22ce] via-fuchsia-400 to-[#7e22ce] bg-[length:200%_auto] bg-clip-text text-transparent">
                  Where It Matters.
                </span>
              </h2>
            </div>

        

            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  title: "Geo-Fenced Attendance",
                  desc: "Restrict punch-in access within a 100-meter radius of your office.",
                },
                {
                  icon: Lock,
                  title: "Prevents Fake Check-ins",
                  desc: "No more marking attendance from home or unauthorized locations.",
                },
                {
                  icon: Zap,
                  title: "Real-Time Location Validation",
                  desc: "Instantly verifies employee location during punch-in.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex gap-4 items-start"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-100 border border-purple-200 text-[#7e22ce] transition-all duration-300 group-hover:bg-[#7e22ce] group-hover:text-white group-hover:border-[#7e22ce] group-active:bg-[#7e22ce] group-active:text-white group-active:border-[#7e22ce]">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-900 transition-colors duration-300 group-hover:text-[#7e22ce]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-slate-400 leading-relaxed transition-colors duration-300 group-hover:text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Map Image & Pointer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 min-w-[300px] flex items-center justify-center relative"
          >
            <div className="relative w-full max-w-[500px]">
              {/* World Map Image - Sharp */}
              <img 
                src={worldMap} 
                alt="World Map" 
                className="w-full h-auto opacity-80"
              />

              {/* Glowing Pointer Overlay (Target: Gujarat, India) */}
              <div 
                className="absolute"
                style={{ top: "46.5%", left: "65.4%" }}
              >
                {/* Pulsing focal point rings - Smooth blink */}
                {[0, 0.8, 1.6].map((delay, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ scale: 0.1, opacity: 0 }}
                    animate={{ 
                      scale: [0.1, 2], 
                      opacity: [0, 0.45, 0] 
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeOut", 
                      delay 
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-fuchsia-400/50"
                  />
                ))}

                {/* 100m radius circle - Sharp & Subtle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-dashed border-purple-500/20 bg-purple-500/5" />

                {/* Smaller Perfect Marker / Pin from Lucide */}
                <motion.div
                  initial={{ y: -15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 120, damping: 12 }}
                  viewport={{ once: true }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full"
                >
                  <div className="relative flex flex-col items-center">
                    {/* Shadow dot - Tiny & Sharp */}
                    <div className="absolute -bottom-0.5 w-1.5 h-0.5 bg-black/10 rounded-full" />
                    
                    {/* Compact Lucide MapPin Icon */}
                    <div className="relative flex items-center justify-center">
                      <MapPin className="w-7 h-7 text-[#7e22ce] fill-white stroke-[2]" />
                    </div>

                    {/* Compact "100m" label */}
                    <motion.div
                      initial={{ opacity: 0, x: 8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="absolute left-full ml-3 top-0 bg-white border border-purple-100 rounded-md px-2 py-0.5 whitespace-nowrap"
                    >
                      <span className="text-[#7e22ce] text-[9px] font-black font-mono tracking-tighter uppercase">GEO-FENCE: 100m</span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
