import React, { useState, useEffect, useRef } from "react";
import { motion as Motion,
  useMotionValue,
  useSpring,
  useVelocity,
  useTransform,
} from "framer-motion";
import NumberFlow from "@number-flow/react";
import FeatureCTA from "../../components/FeatureCTA";
import FeatureStack from "../../components/FeatureStack";
import featureSalary from "../../assets/Salary.webp";
import { Helmet } from "react-helmet-async";
import {
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CircleDollarSign,
  Download,
  FileText,
  Landmark,
  ReceiptText,
  TrendingUp,
  WalletCards,
  Pencil,
  Trash2,
  Plus,
  Settings,
  Calculator,
  User,
  History,
  ShieldCheck,
  Zap,
} from "lucide-react";

/* 3D tilt card -light theme */
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
    <Motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      tabIndex={0}
      className={`${className} active:border-purple-300 active:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/30`}
    >
      <div
        style={{ transform: "translateZ(30px)" }}
        className="h-full flex flex-col"
      >
        {children}
      </div>
    </Motion.div>
  );
};
const profitInsights = [
  {
    title: "See margin before payout",
    desc: "Compare billing and real cost before payroll closes.",
  },
  {
    title: "Track salary by project",
    desc: "Map team cost directly to each project for cleaner decisions.",
  },
  {
    title: "Act before profit slips",
    desc: "Spot low-margin work early and adjust pricing or staffing faster.",
  },
];

const salaryFeatures = [
  {
    title: "Instant Payslips",
    desc: "Employees get notified and can download their payslips instantly from the app.",
    icon: FileText,
    color: "purple",
  },
  {
    title: "Global Compliance",
    desc: "Automatically handle professional tax, PF, and local deductions without manual math.",
    icon: ShieldCheck,
    color: "fuchsia",
  },
  {
    title: "One-Click Payouts",
    desc: "Review, approve, and execute payroll for the entire team in one smooth flow.",
    icon: Zap,
    color: "purple",
  },
  {
    title: "Audit History",
    desc: "Every salary adjustment and payment is logged and searchable for complete transparency.",
    icon: History,
    color: "fuchsia",
  },
];

export default function Salary() {
  const [isMobile, setIsMobile] = useState(false);
  const [isHoveredSection, setIsHoveredSection] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mouse tracking logic for custom cursor
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

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

  const segments = [
    { x: s1x, y: s1y, size: 160, opacity: 0.8, blur: 18 },
    { x: s2x, y: s2y, size: 130, opacity: 0.7, blur: 22 },
    { x: s3x, y: s3y, size: 100, opacity: 0.6, blur: 28 },
    { x: s4x, y: s4y, size: 80, opacity: 0.5, blur: 34 },
    { x: s5x, y: s5y, size: 60, opacity: 0.35, blur: 40 },
  ];

  const handleMouseMove = (e) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const getColorClasses = (color) => {
    switch (color) {
      case "purple":
        return "bg-purple-100 text-[#7e22ce] group-hover:bg-[#7e22ce] group-hover:text-white group-active:bg-[#7e22ce] group-active:text-white shadow-purple-200/50";
      case "fuchsia":
        return "bg-fuchsia-100 text-fuchsia-600 group-hover:bg-fuchsia-500 group-hover:text-white group-active:bg-fuchsia-500 group-active:text-white shadow-fuchsia-200/50";
      default:
        return "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white group-active:bg-purple-600 group-active:text-white shadow-purple-200/50";
    }
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta */}
        <title>
          Salary Management Software | Payroll & Employee Salary – KaryaUp
        </title>
        <meta
          name="description"
          content="Manage employee salaries, payroll, and payments easily with KaryaUp. Track salary details, automate calculations, and stay organized."
        />
        <meta
          name="keywords"
          content="salary management software, payroll system, employee salary tracking, payroll software India, KaryaUp salary"
        />

        {/* Author */}
        <meta name="author" content="Karyaup" />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph (Facebook / LinkedIn) */}
        <meta
          property="og:title"
          content="Salary Management Software – KaryaUp"
        />
        <meta
          property="og:description"
          content="Simplify payroll and salary management with KaryaUp. Track, manage, and organize employee salaries efficiently."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.karyaup.com/salary" />
        <meta
          property="og:image"
          content="https://www.karyaup.com/og-salary.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Salary Management Software – KaryaUp"
        />
        <meta
          name="twitter:description"
          content="Track employee salaries and manage payroll with ease using KaryaUp."
        />
        <meta
          name="twitter:image"
          content="https://www.karyaup.com/og-salary.png"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://www.karyaup.com/salary" />

        {/* Favicon (optional) */}
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <div className="min-h-screen bg-white pt-24 sm:pt-24 pb-12 sm:pb-16 lg:pb-20 text-slate-900">
        <section className="relative pt-4 sm:pt-6 lg:pt-4 pb-0 sm:pb-4 lg:pb-24">
          {/* Background Blobs Container - isolates overflow clipping from actual content */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            <div className="absolute top-0 right-0 h-[560px] w-[560px] translate-x-1/4 -translate-y-1/3 rounded-full bg-purple-100/60 blur-[120px]" />
            <div className="absolute bottom-0 left-0 h-[420px] w-[420px] -translate-x-1/4 translate-y-1/3 rounded-full bg-fuchsia-100/50 blur-[110px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div className="text-center lg:text-left flex flex-col items-center lg:items-start lg:self-start lg:pt-2">
                <Motion.div
                  initial={{ opacity: 0, y: isMobile ? 0 : 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-black uppercase tracking-widest shadow-sm"
                >
                  PAYROLL -AUTOMATE YOUR SALARY
                </Motion.div>
                <Motion.h1
                  initial={{ opacity: 0, y: isMobile ? 0 : 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.08,
                  }}
                  className="mt-5 text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1.05]"
                >
                  Salary That Removes
                  <span className="block">
                    {" "}
                    <Motion.span
                      className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                      animate={{
                        backgroundPosition: ["0% center", "-200% center"],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      Ambiguity
                    </Motion.span>
                  </span>
                </Motion.h1>

                <Motion.div
                  initial={{ opacity: 0, y: isMobile ? 0 : 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.18,
                  }}
                  className="mt-4 sm:mt-6 w-full max-w-[28rem] mx-auto lg:max-w-none lg:mx-0 flex flex-col items-center lg:items-start"
                >
                  <div className="space-y-3 w-fit">
                    {[
                      "Automatic calculations & traceable deductions",
                      "Instant payslips & full history tracking",
                    ].map((text, i) => (
                      <div key={i} className="flex items-start gap-4 text-left">
                        <div className="mt-0.5 sm:mt-1.5 w-5 h-5 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                          <Check
                            size={10}
                            className="text-[#7e22ce] stroke-[4]"
                          />
                        </div>
                        <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium leading-relaxed">
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>
                </Motion.div>

                <FeatureStack
                  items={[
                    "Auto calculations",
                    "Deduction breakdowns",
                    "Payslip generation",
                    "Full salary history",
                  ]}
                />
              </div>

              <Motion.div
                initial={{ opacity: 0, x: isMobile ? 0 : 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.18,
                }}
                className="relative w-full max-w-[480px] sm:max-w-[520px] mx-auto lg:max-w-none lg:mx-0 lg:-mr-4 pointer-events-none select-none"
              >
                <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.06)] overflow-hidden">
                  {/* ── Integrated Header ── */}
                  <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/40 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                        <Settings className="w-4 h-4 text-purple-600" />
                      </div>
                      <h3 className="text-base font-black text-slate-900 tracking-tight">
                        Salary Management
                      </h3>
                    </div>
                    <div className="rounded-full bg-emerald-50 border border-emerald-100 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-emerald-600">
                      System Active
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 space-y-6">
                    {/* ── Mini Policy Config ── */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                        <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 block mb-1.5">
                          Paid Leave
                        </label>
                        <div className="text-sm font-black text-slate-800">
                          0 Days / Month
                        </div>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                        <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 block mb-1.5">
                          Weekly Off
                        </label>
                        <div className="flex gap-1.5">
                          <span className="text-[10px] font-bold bg-purple-600 text-white px-2 py-0.5 rounded-md">
                            Sun
                          </span>
                          <span className="text-[10px] font-bold bg-white text-slate-400 border border-slate-200 px-2 py-0.5 rounded-md">
                            Sat
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* ── Compact Salary Setup Table ── */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400">
                          Recent Assignments
                        </h4>
                        <div className="h-0.5 flex-1 mx-3 bg-slate-100 rounded-full" />
                        <div className="flex gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-purple-400" />
                          <div className="w-2 h-2 rounded-full bg-slate-200" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        {[
                          {
                            name: "testabc",
                            salary: "₹ 25,000",
                            badge: "Primary",
                          },
                          {
                            name: "Siddharth",
                            salary: "₹ 45,000",
                            badge: "Senior",
                          },
                        ].map((row, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-3 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500">
                                <User className="w-4 h-4" />
                              </div>
                              <div className="flex flex-col leading-tight">
                                <span className="font-black text-slate-900 text-xs">
                                  {row.name}
                                </span>
                                <span className="text-[10px] font-medium text-slate-400">
                                  {row.badge} Role
                                </span>
                              </div>
                            </div>
                            <div className="text-right leading-tight">
                              <div className="text-xs font-black text-slate-900">
                                {row.salary}
                              </div>
                              <div className="text-[9px] font-bold text-emerald-600">
                                Verified
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* ── Action Buttons (Compressed) ── */}
                    <div className="flex items-center gap-3 pt-1">
                      <div className="h-10 px-5 rounded-xl bg-purple-600 text-white font-black text-[11px] flex items-center justify-center gap-2 shadow-lg shadow-purple-600/10">
                        <Plus className="w-3.5 h-3.5" />
                        Add Policy
                      </div>
                      <div className="h-10 px-4 rounded-xl border border-slate-200 text-slate-500 font-bold text-[11px] flex items-center justify-center gap-2">
                        <Calculator className="w-3.5 h-3.5" />
                        Settings
                      </div>
                    </div>
                  </div>

                  {/* Glassy Overlay for "Unclickable" feel visually */}
                  <div className="absolute inset-0 bg-white/5 pointer-events-none" />
                </div>
              </Motion.div>
            </div>
          </div>
        </section>

        <section className="pt-4 lg:pt-8 pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl mx-auto flex flex-col items-center text-center"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-emerald-700">
                <TrendingUp className="h-3.5 w-3.5" />
                Boss Dashboard
              </div>
              <h2 className="mt-5 text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1.05]">
                Boss Dashboard
                <span className="block">
                  {" "}
                  <Motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                    animate={{
                      backgroundPosition: ["0% center", "-200% center"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    For Project Profit
                  </Motion.span>
                </span>
              </h2>
              <p className="mt-4 text-base sm:text-lg font-medium leading-relaxed text-slate-600">
                Give leaders a project-level view of billing, actual cost, and
                team salary impact so they can track margins before payroll
                closes.
              </p>
            </Motion.div>

            <div
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHoveredSection(true)}
              onMouseLeave={() => setIsHoveredSection(false)}
              className={`relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-black shadow-[0_30px_90px_-45px_rgba(15,23,42,0.45)] mt-8 p-4 sm:p-6 lg:p-8 ${isHoveredSection ? "md:cursor-none" : ""}`}
            >
              {/* Snake Trail Effect */}
              {!isMobile &&
                segments.map((seg, i) => (
                  <Motion.div
                    key={i}
                    className="absolute pointer-events-none z-[100] rounded-full mix-blend-screen"
                    style={{
                      width: seg.size,
                      height: seg.size,
                      left: seg.x,
                      top: seg.y,
                      x: "-50%",
                      y: "-50%",
                      opacity: isHoveredSection
                        ? i === 0
                          ? seg.opacity
                          : movementOpacity
                        : 0,
                      scale: isHoveredSection ? 1 : 0,
                      background: `radial-gradient(circle, rgba(192, 38, 211, 0.9) 0%, rgba(168, 85, 247, 0) 70%)`,
                      filter: `blur(${seg.blur}px)`,
                    }}
                  />
                ))}

              {/* Lead Cursor Glow */}
              {!isMobile && (
                <Motion.div
                  className="absolute w-80 h-80 pointer-events-none z-[90] rounded-full mix-blend-screen"
                  style={{
                    left: s1x,
                    top: s1y,
                    x: "-50%",
                    y: "-50%",
                    opacity: isHoveredSection ? 0.45 : 0,
                    scale: isHoveredSection ? 1 : 0,
                    background:
                      "radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, transparent 70%)",
                    filter: "blur(50px)",
                  }}
                />
              )}

              {/* Attendance-style background radial glows */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(168,85,247,0.38),transparent_48%)] pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(236,72,153,0.12),transparent_40%)] pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(126,34,206,0.14),transparent_35%)] pointer-events-none" />

              <Motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.72,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.08,
                }}
                className="grid gap-6 sm:gap-8 xl:grid-cols-[0.84fr_1.16fr] relative z-10"
              >
                <div className="relative flex flex-col items-center text-center justify-center lg:items-start lg:text-left">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.16em] sm:tracking-[0.18em] text-emerald-300 w-fit mx-auto lg:mx-0">
                    <TrendingUp className="h-3.5 w-3.5" />
                    Leadership view
                  </div>
                  <h3 className="mt-4 text-[1.75rem] sm:text-3xl font-black tracking-tight leading-[1.12] sm:leading-[1.08] text-white">
                    Understand Which Projects
                    <span className="mt-1 sm:mt-2 block pb-1 bg-gradient-to-r from-[#7e22ce] via-fuchsia-400 to-[#7e22ce] bg-[length:200%_auto] bg-clip-text text-transparent">
                      Actually Make Money
                    </span>
                  </h3>
                  <p className="mt-3 max-w-md text-sm font-medium leading-relaxed text-slate-400 mx-auto lg:mx-0">
                    Bring billing, real spend, and salary allocation into one
                    dashboard.
                  </p>

                  <div className="mt-5 grid gap-3 w-full max-w-md mx-auto lg:mx-0">
                    {profitInsights.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-emerald-400 stroke-[3]" />
                          </div>
                          <div className="text-sm font-black text-white leading-tight">
                            {item.title}
                          </div>
                        </div>
                        <div className="mt-2 text-sm leading-relaxed text-slate-400 pl-8">
                          {item.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.75rem] sm:rounded-[2rem] border border-slate-200 bg-white p-4 sm:p-6 shadow-[0_22px_60px_-15px_rgba(0,0,0,0.06)] relative overflow-hidden pointer-events-none select-none">
                  {/* ── Integrated Header ── */}
                  <div className="mb-5 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                      Profit measure (Boss only)
                    </h3>
                    <div className="h-9 w-full sm:w-auto px-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center text-[11px] font-black text-slate-600 gap-2">
                      <Download className="w-3.5 h-3.5" />
                      Download CSV
                    </div>
                  </div>

                  {/* ── Filters Grid ── */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-5 sm:mb-6">
                    {[
                      { label: "Project", value: "KaryaUp" },
                      { label: "Time range", value: "This month" },
                      { label: "Filter by member", value: "All members" },
                    ].map((item) => (
                      <div key={item.label} className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                          {item.label}
                        </label>
                        <div className="h-10 rounded-xl border border-slate-200 bg-slate-50/80 flex items-center justify-between px-3 text-xs font-bold text-slate-800">
                          {item.value}
                          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* ── Financial Inputs ── */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-5 sm:mb-6">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                        Project billing amount
                      </label>
                      <div className="h-12 rounded-xl border-2 border-[#7e22ce] bg-white flex items-center justify-between px-4 text-sm font-black text-slate-900 shadow-lg shadow-purple-600/5">
                        0
                        <div className="flex flex-col -space-y-1 ml-2">
                          <ChevronDown className="w-3 h-3 rotate-180 text-slate-400" />
                          <ChevronDown className="w-3 h-3 text-slate-400" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                        Other actual cost
                      </label>
                      <div className="h-12 rounded-xl border border-slate-200 bg-slate-50 flex items-center px-4 text-sm font-black text-slate-900">
                        0
                      </div>
                    </div>
                  </div>

                  {/* ── Rates Section ── */}
                  <div className="mb-5 sm:mb-6">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2.5">
                      Member salaries
                    </label>
                    <div className="p-4 rounded-[1.25rem] sm:rounded-[1.5rem] border border-dashed border-slate-200 bg-slate-50/30 text-[11px] font-medium text-slate-400 leading-relaxed text-center">
                      No member rates configured yet. Add rates from the Team
                      tab.
                    </div>
                  </div>

                  {/* ── Profitability Summary ── */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-5 sm:pt-6 border-t border-slate-100">
                    {[
                      { label: "Total salary cost", val: "0.00" },
                      { label: "Other actual cost", val: "0.00" },
                      { label: "Total cost", val: "0.00" },
                      { label: "Profit", val: "—", primary: true },
                    ].map((item) => (
                      <div key={item.label} className="space-y-1.5">
                        <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 leading-none">
                          {item.label}
                        </div>
                        <div
                          className={`text-[1.1rem] font-black ${item.primary ? "text-slate-400 tracking-tighter" : "text-slate-900"}`}
                        >
                          {item.val}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* ── Dashboard Action ── */}
                  <div className="mt-5 sm:mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="h-11 w-full sm:w-auto px-8 rounded-2xl bg-purple-600 text-white font-black text-xs flex items-center justify-center shadow-xl shadow-purple-600/20">
                      Save configuration
                    </div>
                    <div className="text-[10px] font-bold text-slate-400 flex items-center justify-center sm:justify-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                      Live Preview
                    </div>
                  </div>

                  {/* Polish Overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
                </div>
              </Motion.div>
            </div>
          </div>
        </section>

        {/* Features Bento Section */}
        <section className="pt-2 lg:pt-4 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto overflow-hidden">
          {/* Section Tag */}
          <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#f3e8ff] text-[#9333ea] text-[11px] font-black uppercase tracking-[0.15em] mb-4">
              What you can do
            </span>
            <h2 className="text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-[#0f172a] tracking-normal leading-[1.2]">
              Complete Payroll Fully
              <br />
              <span className="text-gradient pb-1 tracking-wide">
                Automated
              </span>
            </h2>
          </div>

          {/* 4-Box TiltCard Layout */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto"
            style={{ perspective: "1200px" }}
          >
            {salaryFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <Motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1 }}
                  className="h-full"
                >
                  <TiltCard className="bg-white border border-slate-200 hover:border-purple-300 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-purple-900/15 p-7 sm:p-8 rounded-[2rem] cursor-default h-full transition-colors transition-shadow duration-300 group">
                    <div className="flex items-center gap-4 mb-5 sm:mb-6">
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:shadow-md group-hover:scale-110 group-active:shadow-md group-active:scale-110 shrink-0 ${getColorClasses(feature.color)}`}
                      >
                        <Icon size={20} strokeWidth={2.5} />
                      </div>
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 text-sm font-medium leading-relaxed">
                      {feature.desc}
                    </p>
                  </TiltCard>
                </Motion.div>
              );
            })}
          </div>
        </section>

        <FeatureCTA
          title={
            <>
              Salary That Stays <br /> Clear Every Month
            </>
          }
          description="Automate payroll and track profit without spreadsheet confusion."
          highlights={[
            "Automated payroll generation in one click",
            "Visual profit analysis per project",
          ]}
          buttonText="Get Started It's Free"
          image={featureSalary}
          imageAlt="KaryaUp salary dashboard"
          containerClassName="mt-0"
          imageClassName="w-full max-w-[620px]"
          imageOuterClassName="relative w-[92%] lg:w-[82%] translate-x-0 lg:translate-x-2"
        />
      </div>
    </>
  );
}

