import React, { useRef } from "react";
import { Users, ShieldCheck, UserPlus, Search } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/* 3D tilt card -light theme */
const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(useTransform(rawY, [-1, 1], [12, -12]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(rawX, [-1, 1], [-12, 12]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;   // -1 … 1
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    rawX.set(x);
    rawY.set(y);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', transformPerspective: 1000 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      tabIndex={0}
      className={`${className} active:border-purple-300 active:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/30`}
    >
      <div style={{ transform: 'translateZ(30px)' }} className="h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
};

export default function TeamInfoSection() {
  const features = [
    {
      title: "Centralized Team",
      desc: "Keep all members organized in one place with complete visibility.",
      icon: Users,
      color: "purple"
    },
    {
      title: "Role-Based Access",
      desc: "Assign Admin, Manager, or Member roles with full control.",
      icon: ShieldCheck,
      color: "fuchsia"
    },
    {
      title: "Add Members ",
      desc: "Invite and onboard members in seconds without friction.",
      icon: UserPlus,
      color: "purple"
    },
    {
      title: "Quick Search ",
      desc: "Find any team member instantly with smart filtering.",
      icon: Search,
      color: "fuchsia"
    }
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case 'purple': return 'bg-purple-100 text-[#7e22ce] group-hover:bg-[#7e22ce] group-hover:text-white group-active:bg-[#7e22ce] group-active:text-white shadow-purple-200/50';
      case 'emerald': return 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white group-active:bg-emerald-500 group-active:text-white shadow-emerald-200/50';
      case 'blue': return 'bg-blue-100 text-blue-600 group-hover:bg-blue-500 group-hover:text-white group-active:bg-blue-500 group-active:text-white shadow-blue-200/50';
      case 'fuchsia': return 'bg-fuchsia-100 text-fuchsia-600 group-hover:bg-fuchsia-500 group-hover:text-white group-active:bg-fuchsia-500 group-active:text-white shadow-fuchsia-200/50';
      default: return 'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white group-active:bg-purple-600 group-active:text-white shadow-purple-200/50';
    }
  };

  return (
    <section className="pt-4 lg:pt-8 pb-12 sm:pb-16 lg:pb-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold mb-4 uppercase tracking-widest"
          >
            <Users size={13} />
            Team Management
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 leading-[1.2] mb-6 tracking-normal"
          >
            Your Team.{" "}Organized.<br className="hidden sm:block" />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto] pb-1"
              animate={{ backgroundPosition: ["0% center", "-200% center"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              {" "}Scalable.
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-base sm:text-lg lg:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Manage roles, control access, and keep everyone aligned -all from one
            unified workspace designed for growing teams.
          </motion.p>
        </div>

        {/* 4 tilt cards - Light Theme */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto"
          style={{ perspective: '1200px' }}
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.1 }}
                className="h-full"
              >
                <TiltCard className="bg-white/50 backdrop-blur-xl border border-slate-200/60 hover:border-[#7e22ce] hover:bg-white/70 shadow-[0_18px_50px_rgba(15,23,42,0.06)] hover:shadow-[0_24px_70px_rgba(126,34,206,0.12)] p-7 sm:p-8 rounded-[2rem] cursor-default h-full transition-colors transition-shadow duration-300 group">
                  <div className="flex items-center gap-4 mb-5 sm:mb-6">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:shadow-md group-hover:scale-110 ${getColorClasses(feature.color)}`}>
                      <Icon size={20} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">{feature.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">{feature.desc}</p>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  );
}
