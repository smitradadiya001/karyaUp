import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Power, Camera, ShieldCheck, HardDrive, Settings } from "lucide-react";

const STEPS = [
  {
    id: "01",
    title: "Enable Capture",
    shortTitle: "ENABLE",
    desc: "Turn on activity capture for your team with a single toggle. Configure flexible rules for specific roles or projects, ensuring privacy where needed while maintaining full operational visibility.",
    icon: Power,
    // Dark glowing tech / abstract activation node
    bgImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "02",
    title: "Automatic Screenshots",
    shortTitle: "SNAPSHOTS",
    desc: "KaryaUp captures screen snapshots every 5 minutes during active work sessions. These snapshots are optimized for minimal storage impact while providing high-resolution proof of work and activity.",
    icon: Camera,
    // Dark, cinematic camera lens close-up
    bgImage: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "03",
    title: "Secure Dashboard",
    shortTitle: "DASHBOARD",
    desc: "Managers can view activity directly from the dashboard in an organized timeline. Filter by team member, date, or project to instantly identify bottlenecks and review daily productivity metrics.",
    icon: ShieldCheck,
    // Dark cybersecurity / matrix code
    bgImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "04",
    title: "Save to Drive",
    shortTitle: "EXPORT",
    desc: "Export and store all activity screenshots securely to your connected drive. Maintain automated, long-term compliance records without cluttering your local servers or paying for expensive cloud tiers.",
    icon: HardDrive,
    // Dark server racks / data center
    bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000",
  }
];

export default function ActivitySteps() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative pt-8 pb-16 sm:pt-12 sm:pb-24 bg-white overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-[10px] sm:text-xs font-bold mb-3 uppercase tracking-widest"
          >
            <Settings size={12} /> How It Works
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 leading-[1.05] tracking-normal mb-3"
          >
            Seamless Activity{' '}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Tracking.
            </motion.span>
          </motion.h2>
          <p className="text-slate-500 text-base sm:text-lg font-medium">
            Understand how our secure and non-intrusive capture process works.
          </p>
        </div>

        {/* Vertical Image Accordion */}
        <div className="flex flex-col gap-3 sm:gap-4 w-full mx-auto max-w-3xl">
          {STEPS.map((step, idx) => {
            const isActive = active === idx;
            const Icon = step.icon;

            return (
              <div 
                key={step.id}
                onMouseEnter={() => setActive(idx)}
                className={`relative w-full overflow-hidden cursor-pointer rounded-[2rem] sm:rounded-[3rem] transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] group ${
                  isActive ? "h-[280px] sm:h-[320px]" : "h-[70px] sm:h-[90px] hover:opacity-90"
                }`}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[2000ms] ease-out"
                  style={{ 
                    backgroundImage: `url('${step.bgImage}')`,
                    transform: isActive ? 'scale(1.05)' : 'scale(1)',
                  }}
                />
                
                {/* Gradient Overlays for Readability */}
                <div className={`absolute inset-0 bg-black transition-opacity duration-700 ${isActive ? 'opacity-50 sm:opacity-40' : 'opacity-60 group-hover:opacity-50'}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Content Container */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                  
                  {/* Collapsed State Content (Sliver Header) */}
                  <div className={`flex items-center justify-between transition-all duration-500 absolute left-6 sm:left-8 right-6 sm:right-8 top-1/2 -translate-y-1/2 ${isActive ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span className="text-white/60 font-black tracking-widest text-sm sm:text-base">
                        #{step.id}
                      </span>
                      <h3 className="text-white font-black tracking-widest text-sm sm:text-lg uppercase">
                        {step.shortTitle}
                      </h3>
                    </div>
                    <Icon className="w-5 h-5 text-white/50" />
                  </div>

                  {/* Expanded State Content */}
                  <div className={`flex flex-col gap-2 sm:gap-3 transition-all duration-700 delay-100 transform ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <span className="text-white/80 font-bold tracking-widest text-xs sm:text-sm uppercase">
                        Step {step.id}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight leading-none mt-1 sm:mt-2">
                      {step.title}
                    </h3>
                    
                    <p className="text-white/80 text-sm sm:text-base font-medium leading-relaxed max-w-2xl mt-1 drop-shadow-md line-clamp-2 sm:line-clamp-none">
                      {step.desc}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
