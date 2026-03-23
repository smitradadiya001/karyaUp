import React from 'react';
import { motion } from 'framer-motion';
import { Check, Users, AlertCircle } from 'lucide-react';

const TeamCapacityPreview = () => {
  const members = [
    { name: "Priya Mehta", role: "Design Lead", tasks: 6, color: "bg-purple-500", delay: 0.5 },
    { name: "Arjun Shah", role: "Developer", tasks: 9, overloaded: true, color: "bg-blue-500", delay: 1.0 },
    { name: "Sara Nair", role: "QA Engineer", tasks: 4, color: "bg-emerald-500", delay: 1.5 },
  ];

  return (
    <div className="relative border border-white/10 rounded-[2.5rem] shadow-2xl bg-[#0f172a] overflow-hidden p-6 sm:p-8">
      {/* Dark purple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900/60 to-indigo-900/20 pointer-events-none" />
      
      {/* Decorative glow blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-600/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-600 shadow-lg shadow-purple-500/20 flex items-center justify-center text-white">
            <Users size={20} />
          </div>
          <div>
            <h4 className="font-black text-white leading-tight">Team capacity</h4>
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider italic">78% utilized</span>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Member List */}
      <div className="space-y-4 mb-8 relative z-10">
        {members.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: m.delay }}
            className="flex items-center justify-between p-4 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              <div className={`w-11 h-11 rounded-full ${m.color} flex items-center justify-center text-white text-sm font-black ring-2 ring-white/10 shadow-lg`}>
                {m.name.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-black text-white group-hover:text-purple-300 transition-colors uppercase tracking-tight">{m.name}</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest opacity-80">{m.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-xs font-black text-slate-300">{m.tasks} active tasks</div>
                {m.overloaded && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: m.delay + 0.3 }}
                    className="flex items-center gap-1 text-[9px] font-black text-rose-400 uppercase tracking-tighter"
                  >
                    <AlertCircle size={10} strokeWidth={3} /> Overloaded
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Capacity Progress Bar Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2 }}
        className="pt-6 border-t border-white/5 relative z-10"
      >
        <div className="flex justify-between items-end mb-3">
          <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest opacity-80">Overall Capacity</span>
          <span className="text-2xl font-black text-purple-400">78%</span>
        </div>
        <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden ring-1 ring-white/10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "78%" }}
            transition={{ duration: 1.5, delay: 2.5, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default function TeamHero() {
  const tagsList = ["Roles & permissions", "Workload visibility", "Department hierarchy", "Member profiles"];

  return (
    <section className="relative mb-12 lg:mb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-black uppercase tracking-[0.15em] mb-2"
            >
              Features <span className="opacity-60">/</span> Team
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
              className="mt-3 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-[#0f172a] tracking-tight leading-[1.02]"
            >
              Structure that{" "}
              <span className="block">
                scales with{" "}
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  ambition.
                </motion.span>
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
              className="mt-4 sm:mt-6 space-y-3"
            >
              {[
                "Define roles, distribute ownership, and get complete visibility into how your team's capacity is being used.",
                "Stay ahead of burnout and workload issues before they become a problem, not after."
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4 text-left">
                  <div className="mt-1.5 w-5 h-5 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-[#7e22ce] stroke-[4]" />
                  </div>
                  <p className="text-base sm:text-lg lg:text-xl text-slate-500 font-medium leading-[1.6]">
                    {text}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Tags Grid */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
              className="mt-6 grid grid-cols-2 gap-3 max-w-lg mx-auto lg:mx-0"
            >
              {tagsList.map((tag) => (
                <div key={tag} className="group flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-purple-200 transition-all duration-300">
                  <div className="w-5 h-5 rounded-md bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-[#7e22ce] stroke-[4]" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.1em] text-slate-900 truncate">{tag}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative"
          >
            <TeamCapacityPreview />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
