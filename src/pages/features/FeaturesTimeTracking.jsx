import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  Clock, MousePointerClick, BarChart3, Target, Archive, 
  Check, Sparkles, Timer, Activity, Zap, IndianRupee 
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import FeatureStack from "../../components/FeatureStack";
import FeatureCTA from "../../components/FeatureCTA";
import dashboardImg from "../../assets/dashboard2.webp";

const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(useTransform(rawY, [-1, 1], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(rawX, [-1, 1], [-10, 10]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
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
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={className}
    >
      <div style={{ transform: 'translateZ(20px)' }} className="h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
};

export default function FeaturesTimeTracking() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const timeFeatures = [
    {
      title: "Task Timers",
      desc: "Start and stop live timers on any task. Time is automatically linked to the project.",
      icon: Clock,
      color: "purple"
    },
    {
      title: "Manual Entry",
      desc: "Add time manually for meetings or work done offline by typing hours directly.",
      icon: MousePointerClick,
      color: "fuchsia"
    },
    {
      title: "Time Reports",
      desc: "Analyze time spent by person, team, or project in flexible report formats.",
      icon: BarChart3,
      color: "purple"
    },
    {
      title: "Billable Hours",
      desc: "Mark logged time as billable and use it to generate accurate client invoices.",
      icon: IndianRupee,
      color: "fuchsia"
    },
    {
      title: "Estimates vs Actuals",
      desc: "Compare planned duration against actual time to improve your team's accuracy.",
      icon: Target,
      color: "purple"
    },
    {
      title: "Export Timesheets",
      desc: "Download timesheets as CSV or PDF for payroll and client reporting.",
      icon: Archive,
      color: "fuchsia"
    }
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case 'purple': return 'bg-purple-100 text-[#7e22ce] group-hover:bg-[#7e22ce] group-hover:text-white shadow-purple-200/50';
      case 'fuchsia': return 'bg-fuchsia-100 text-fuchsia-600 group-hover:bg-fuchsia-500 group-hover:text-white shadow-fuchsia-200/50';
      default: return 'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white shadow-purple-200/50';
    }
  };

  return (
    <>
      <Helmet>
        <title>Time Tracking & Efficiency | Karyaup</title>
        <meta name="description" content="Log time directly in your tasks with Karyaup. Get powerful insights, track billable hours, and improve planning accuracy." />
        <meta name="keywords" content="time tracking software, billable hours, timesheets, productivity tracking, project time management, Karyaup" />
      </Helmet>

      <div className="min-h-screen bg-white pt-24 sm:pt-24 pb-12 sm:pb-16 lg:pb-20 text-slate-900">
        {/* Hero Section */}
        <section className="relative pt-4 sm:pt-6 lg:pt-4 pb-8 sm:pb-10 lg:pb-12 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-[120px] -z-10 animate-pulse" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1.2fr_1.8fr] gap-12 items-center">
              <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-black uppercase tracking-widest shadow-sm"
                >
                  TIME TRACKING — OPTIMIZE YOUR HOURS
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="mt-4 sm:mt-6 text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 leading-[1.05]"
                >
                  Every Second <br />
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                    animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    Accounted For
                  </motion.span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.2 }}
                  className="mt-6 space-y-4 w-full"
                >
                  {[
                    "Precision tracking directly inside your workflow",
                    "Automatic link to projects, tasks, and budgets",
                    "Know exactly where your team's time is going"
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-left">
                      <div className="mt-1 w-5 h-5 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#7e22ce] stroke-[4]" />
                      </div>
                      <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </motion.div>

                <FeatureStack items={[
                  { label: "Live Timers", icon: Timer },
                  { label: "Timesheets", icon: Archive },
                  { label: "Analytics", icon: Activity },
                  { label: "Automated", icon: Zap }
                ]} />
              </div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative overflow-hidden border border-slate-200/80 rounded-[2rem] shadow-2xl bg-white group">
                  <img
                    src={dashboardImg}
                    alt="Karyaup Time Tracking Interface"
                    className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="py-20 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 px-4">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold mb-4 uppercase tracking-widest"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Smart Controls
              </motion.div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-6 tracking-normal leading-[1.1]">
                Powerful Features For <br />
                <span className="text-[#7e22ce]">Modern Teams</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {timeFeatures.map((feature, i) => (
                <TiltCard key={i} className="bg-white border border-slate-200 hover:border-purple-300 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-purple-900/15 p-8 rounded-[2rem] h-full transition-all duration-300 group">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${getColorClasses(feature.color)}`}>
                    <feature.icon size={22} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3 leading-tight">{feature.title}</h3>
                  <p className="text-slate-600 text-base font-medium leading-relaxed">{feature.desc}</p>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        <FeatureCTA
          title={<>Time Tracked <br /> Is Money Earned</>}
          description="Know exactly where every hour goes. Mark billable time, export timesheets, and invoices with one click."
          image={dashboardImg}
          imageAlt="Karyaup Time Efficiency"
          containerClassName="mt-0"
        />
      </div>
    </>
  );
}
