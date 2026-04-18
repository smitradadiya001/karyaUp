import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
  useScroll,
} from "framer-motion";
import {
  Network,
  LineChart,
  Zap,
  ArrowRight,
  Database,
  BrainCircuit,
  Rocket,
} from "lucide-react";

const Motion = motion;

/* 3D tilt card -corner under cursor dips IN */
const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(useTransform(rawY, [-1, 1], [12, -12]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(rawX, [-1, 1], [-12, 12]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1; // -1 … 1
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
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 800,
      }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={className}
    >
      {/* inner content lifted slightly toward viewer */}
      <div style={{ transform: "translateZ(20px)" }}>{children}</div>
    </motion.div>
  );
};

const cards = [
  {
    icon: <Network className="text-purple-400" size={26} />,
    title: "Track patterns",
    desc: "Across projects, teams, and timelines to find bottlenecks.",
  },
  {
    icon: <LineChart className="text-purple-400" size={26} />,
    title: "Identify delays",
    desc: "Before they happen with predictive analytics and insights.",
  },
  {
    icon: <Zap className="text-purple-400" size={26} />,
    title: "Understand performance",
    desc: "Without manual reports getting in the way of your work.",
  },
];

const WorkIntelligence = () => {
  const [isHovered, setIsHovered] = useState(false);
  const flowRef = useRef(null);

  // Mouse tracking logic for snake trail cursor
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: flowRef,
    offset: ["start end", "end start"],
  });
  const mobileSweepX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Chained springs for snake effect
  const trailConfig = [
    { stiffness: 250, damping: 25 },
    { stiffness: 200, damping: 22 },
    { stiffness: 150, damping: 18 },
    { stiffness: 100, damping: 15 },
    { stiffness: 80, damping: 12 },
  ];

  const s1x = useSpring(mouseX, trailConfig[0]);
  const s1y = useSpring(mouseY, trailConfig[0]);
  const s2x = useSpring(s1x, trailConfig[1]);
  const s2y = useSpring(s1y, trailConfig[1]);
  const s3x = useSpring(s2x, trailConfig[2]);
  const s3y = useSpring(s2y, trailConfig[2]);
  const s4x = useSpring(s3x, trailConfig[3]);
  const s4y = useSpring(s3y, trailConfig[3]);
  const s5x = useSpring(s4x, trailConfig[4]);
  const s5y = useSpring(s4y, trailConfig[4]);

  const velX = useVelocity(mouseX);
  const velY = useVelocity(mouseY);
  const velocity = useTransform([velX, velY], ([vx, vy]) =>
    Math.sqrt(vx * vx + vy * vy),
  );

  // Create a spring-smoothed opacity that reacts to movement
  const movementOpacity = useSpring(
    useTransform(velocity, [0, 50, 300], [0, 0, 1]),
    { stiffness: 60, damping: 20 },
  );

  const seg1Opacity = useTransform(movementOpacity, () =>
    isHovered ? 0.8 : 0,
  );
  const seg2Opacity = useTransform(movementOpacity, (v) =>
    isHovered ? v * 0.7 : 0,
  );
  const seg3Opacity = useTransform(movementOpacity, (v) =>
    isHovered ? v * 0.6 : 0,
  );
  const seg4Opacity = useTransform(movementOpacity, (v) =>
    isHovered ? v * 0.5 : 0,
  );
  const seg5Opacity = useTransform(movementOpacity, (v) =>
    isHovered ? v * 0.35 : 0,
  );

  const segments = [
    { x: s1x, y: s1y, size: 160, opacity: 0.8, blur: 18 },
    { x: s2x, y: s2y, size: 130, opacity: 0.7, blur: 22 },
    { x: s3x, y: s3y, size: 100, opacity: 0.6, blur: 28 },
    { x: s4x, y: s4y, size: 80, opacity: 0.5, blur: 34 },
    { x: s5x, y: s5y, size: 60, opacity: 0.35, blur: 40 },
  ];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    /* outer: full-width bg so the page doesn't break; inner: constrained card */
    <section className="py-1.5 sm:py-6 sm:pb-10 bg-white relative px-2 sm:px-0">
      <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
        {/* ── The constrained, rounded section ── */}
        <div
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`bg-slate-950 rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden border border-purple-900/30 relative px-3 sm:px-12 py-5 sm:py-14 ${isHovered ? "cursor-none" : ""}`}
        >
          {/* Snake Trail Effect */}
          {segments.map((seg, i) => (
            <motion.div
              key={i}
              className="absolute pointer-events-none z-[100] rounded-full mix-blend-screen"
              style={{
                width: seg.size,
                height: seg.size,
                left: seg.x,
                top: seg.y,
                x: "-50%",
                y: "-50%",
                opacity: [
                  seg1Opacity,
                  seg2Opacity,
                  seg3Opacity,
                  seg4Opacity,
                  seg5Opacity,
                ][i],
                scale: isHovered ? 1 : 0,
                background: `radial-gradient(circle, rgba(168, 85, 247, 0.9) 0%, rgba(168, 85, 247, 0) 70%)`,
                filter: `blur(${seg.blur}px)`,
              }}
            />
          ))}

          {/* Lead Cursor Glow */}
          <motion.div
            className="absolute w-80 h-80 pointer-events-none z-[90] rounded-full mix-blend-screen"
            style={{
              left: s1x,
              top: s1y,
              x: "-50%",
              y: "-50%",
              opacity: isHovered ? 0.45 : 0,
              scale: isHovered ? 1 : 0,
              background:
                "radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />

          {/* Glow blobs */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-600/15 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-fuchsia-600/15 rounded-full blur-[80px] pointer-events-none" />

          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-7 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[10px] sm:text-xs font-bold mb-3 uppercase tracking-widest"
            >
              <BrainCircuit size={12} />
              Work Intelligence
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-white leading-[1.12] mb-3 tracking-normal"
            >
              <span className="block text-white">Your Company's</span>
              <motion.span
                className="block pb-[0.08em] text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                Work Intelligence
              </motion.span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-base sm:text-lg text-slate-400 font-medium leading-relaxed"
            >
              Most tools store data.{" "}
              <span className="text-white font-bold">
                KaryaUp turns it into decisions.
              </span>
            </motion.p>
          </div>

          {/* 3 tilt cards */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 relative z-10"
            style={{ perspective: "1200px" }}
          >
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.1 }}
              >
                <TiltCard
                  className={`bg-slate-900 border border-slate-800 hover:border-purple-500 p-4 sm:p-7 rounded-2xl cursor-default h-full transition-colors duration-300 text-left w-full ${i === 1 ? "sm:min-h-0" : ""}`}
                >
                  <div className="flex flex-row sm:flex-col items-center sm:items-start justify-start gap-4 sm:gap-0 w-full text-left">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 mb-0 sm:mb-5 shrink-0">
                      {card.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-0 sm:mb-2 leading-tight text-left">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed mt-3 sm:mt-0 text-left w-full">
                    {card.desc}
                  </p>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          {/* Flow strip */}
          <Motion.div
            ref={flowRef}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-10 bg-purple-900/20 border border-purple-500/20 rounded-2xl sm:rounded-full p-2.5 sm:p-5 overflow-hidden w-full lg:w-auto"
          >
            {/* The flow path line */}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-0 text-[13px] sm:text-sm font-bold text-white relative z-10 max-w-5xl mx-auto px-1 sm:px-6">
              {/* Box 1: Raw Activity */}
              <motion.div
                animate={{
                  borderColor: [
                    "rgba(168,85,247,0.2)",
                    "rgba(255,255,255,1)",
                    "rgba(168,85,247,0.2)",
                  ],
                  backgroundColor: [
                    "rgba(88,28,135,0.2)",
                    "rgba(217,70,239,0.7)",
                    "rgba(88,28,135,0.2)",
                  ],
                  boxShadow: [
                    "0 0 0px rgba(168,85,247,0)",
                    "0 0 50px rgba(217,70,239,0.8)",
                    "0 0 0px rgba(168,85,247,0)",
                  ],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  times: [0, 0.1, 0.2],
                }}
                className="flex items-center justify-center gap-2 bg-purple-900/20 px-4 sm:px-8 py-2 sm:py-4 rounded-full border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 w-full sm:w-auto z-10"
              >
                <Database size={16} className="text-purple-400" />
                <span>Raw Activity</span>
              </motion.div>

              {/* Gap 1: Arrow 1 */}
              <div className="flex sm:hidden items-center justify-center h-6 relative w-full overflow-hidden">
                <motion.div
                  style={{ x: mobileSweepX }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
                >
                  <ArrowRight
                    size={16}
                    strokeWidth={3}
                    className="rotate-90 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                  />
                </motion.div>
              </div>
              <div className="hidden sm:flex flex-1 items-center justify-center h-10 relative overflow-visible">
                <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2 pointer-events-none z-0" />
                <motion.div
                  initial={{ left: "-12px", opacity: 0 }}
                  animate={{
                    left: ["0%", "100%"],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 2.5,
                  }}
                  className="absolute text-white"
                >
                  <ArrowRight
                    size={24}
                    strokeWidth={3}
                    className="drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                  />
                </motion.div>
              </div>

              {/* Box 2: Clear Insight */}
              <motion.div
                animate={{
                  borderColor: [
                    "rgba(168,85,247,0.4)",
                    "rgba(255,255,255,1)",
                    "rgba(168,85,247,0.4)",
                  ],
                  backgroundColor: [
                    "rgba(88,28,135,0.4)",
                    "rgba(217,70,239,0.7)",
                    "rgba(88,28,135,0.4)",
                  ],
                  boxShadow: [
                    "0 0 0px rgba(168,85,247,0)",
                    "0 0 60px rgba(217,70,239,0.9)",
                    "0 0 0px rgba(168,85,247,0)",
                  ],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  times: [0.4, 0.5, 0.6],
                }}
                className="flex items-center justify-center gap-2 bg-purple-900/40 px-4 sm:px-8 py-2 sm:py-4 rounded-full border border-purple-500/40 backdrop-blur-md hover:border-purple-500/60 transition-all duration-300 w-full sm:w-auto z-10"
              >
                <BrainCircuit size={16} className="text-purple-300" />
                <span>Clear Insight</span>
              </motion.div>

              {/* Gap 2: Arrow 2 */}
              <div className="flex sm:hidden items-center justify-center h-6 relative w-full overflow-hidden">
                <motion.div
                  style={{ x: mobileSweepX }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
                >
                  <ArrowRight
                    size={16}
                    strokeWidth={3}
                    className="rotate-90 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                  />
                </motion.div>
              </div>
              <div className="hidden sm:flex flex-1 items-center justify-center h-10 relative overflow-visible">
                <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2 pointer-events-none z-0" />
                <motion.div
                  initial={{ left: "-12px", opacity: 0 }}
                  animate={{
                    left: ["0%", "100%"],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    delay: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 2.5,
                  }}
                  className="absolute text-white"
                >
                  <ArrowRight
                    size={24}
                    strokeWidth={3}
                    className="drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                  />
                </motion.div>
              </div>

              {/* Box 3: Faster Decisions */}
              <motion.div
                animate={{
                  borderColor: [
                    "rgba(168,85,247,0.4)",
                    "rgba(255,255,255,1)",
                    "rgba(168,85,247,0.4)",
                  ],
                  backgroundColor: [
                    "rgba(88,28,135,0.4)",
                    "rgba(217,70,239,0.7)",
                    "rgba(88,28,135,0.4)",
                  ],
                  boxShadow: [
                    "0 0 0px rgba(168,85,247,0)",
                    "0 0 60px rgba(217,70,239,0.9)",
                    "0 0 0px rgba(168,85,247,0)",
                  ],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  times: [0.8, 0.9, 1],
                }}
                className="flex items-center justify-center gap-2 bg-purple-900/40 px-4 sm:px-8 py-2 sm:py-4 rounded-full border border-purple-500/40 backdrop-blur-md hover:border-purple-500/60 transition-all duration-300 w-full sm:w-auto z-10"
              >
                <Rocket size={16} className="text-white" />
                <span>Faster Decisions</span>
              </motion.div>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkIntelligence;
