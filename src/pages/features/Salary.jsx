import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NumberFlow from "@number-flow/react";
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
} from "lucide-react";
import FeatureCTA from "../../components/FeatureCTA";
import FeatureStack from "../../components/FeatureStack";
import featureSalary from "../../assets/salary.webp";
import { Helmet } from "react-helmet-async";

const salaryTags = [
  "Auto calculations",
  "Deduction breakdowns",
  "Payslip generation",
  "Full salary history",
];

const payrollRows = [
  { label: "Base salary", value: "₹58,000", tone: "text-slate-900" },
  { label: "Allowances", value: "+ ₹7,500", tone: "text-emerald-600" },
  { label: "Deductions", value: "- ₹4,860", tone: "text-rose-600" },
  { label: "Net payout", value: "₹60,640", tone: "text-[#7e22ce]" },
];

const profitFilters = [
  { label: "Project", value: "KaryaUp" },
  { label: "Time range", value: "Last month" },
  { label: "Filter by member", value: "All members" },
];

const profitSummary = [
  { label: "Total salary cost", amount: 142000 },
  { label: "Other actual cost", amount: 220000 },
  { label: "Total cost", amount: 362000 },
  { label: "Profit", amount: 78000, tone: "text-emerald-600" },
];

const memberCostRows = [
  { name: "Design", owner: "Aarav", cost: "₹42,000", share: "18%" },
  { name: "Frontend", owner: "Priya", cost: "₹58,000", share: "24%" },
  { name: "Backend", owner: "Rohan", cost: "₹64,000", share: "27%" },
];

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

export default function Salary() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
     <Helmet>
      {/* Primary Meta */}
      <title>Salary Management Software | Payroll & Employee Salary – KaryaUp</title>
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
      <meta property="og:title" content="Salary Management Software – KaryaUp" />
      <meta
        property="og:description"
        content="Simplify payroll and salary management with KaryaUp. Track, manage, and organize employee salaries efficiently."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.karyaup.com/salary" />
      <meta property="og:image" content="https://www.karyaup.com/og-salary.png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Salary Management Software – KaryaUp" />
      <meta
        name="twitter:description"
        content="Track employee salaries and manage payroll with ease using KaryaUp."
      />
      <meta name="twitter:image" content="https://www.karyaup.com/og-salary.png" />

      {/* Canonical */}
      <link rel="canonical" href="https://www.karyaup.com/salary" />

      {/* Favicon (optional) */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
    <div className="min-h-screen bg-white pt-14 sm:pt-16 pb-12 sm:pb-16 lg:pb-20 text-slate-900">
      <section className="relative overflow-hidden pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-10 lg:pb-12">
        <div className="absolute top-0 right-0 -z-10 h-[560px] w-[560px] translate-x-1/4 -translate-y-1/3 rounded-full bg-purple-100/60 blur-[120px]" />
        <div className="absolute bottom-0 left-0 -z-10 h-[420px] w-[420px] -translate-x-1/4 translate-y-1/3 rounded-full bg-fuchsia-100/50 blur-[110px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <motion.div
                initial={{ opacity: 0, y: isMobile ? 0 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-black uppercase tracking-widest shadow-sm"
              >
                PAYROLL — AUTOMATE YOUR SALARY
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: isMobile ? 0 : 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.06]"
              >
                Salary That
                <span className="block mt-2">
                  Removes <br/> {" "}
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                    animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    Ambiguity
                  </motion.span>
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: isMobile ? 0 : 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                className="mt-5 sm:mt-6 space-y-4 max-w-2xl w-full mx-auto lg:mx-0"
              >
                <div className="flex items-start gap-3.5 text-left">
                  <div className="mt-1 w-5 h-5 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 text-[#7e22ce] stroke-[4]" />
                  </div>
                  <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                    Payroll with zero ambiguity. Every calculation is automatic,
                    every deduction is traceable, and every payslip is generated
                    on time so payday stays a moment of trust, not a source of friction.
                  </p>
                </div>
              </motion.div>

              <FeatureStack items={["Auto calculations", "Deduction breakdowns", "Payslip generation", "Full salary history"]} />
            </div>

            <motion.div
              initial={{ opacity: 0, x: isMobile ? 0 : 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
              className="relative w-full max-w-[580px] mx-auto lg:max-w-none lg:mx-0 lg:-mr-8 xl:-mr-16 pointer-events-none select-none"
            >
              <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.06)] overflow-hidden">
                
                {/* ── Integrated Header ── */}
                <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/40 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                      <Settings className="w-4 h-4 text-purple-600" />
                    </div>
                    <h3 className="text-base font-black text-slate-900 tracking-tight">Salary Management</h3>
                  </div>
                  <div className="rounded-full bg-emerald-50 border border-emerald-100 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-emerald-600">
                    System Active
                  </div>
                </div>

                <div className="p-5 sm:p-6 space-y-6">
                  {/* ── Mini Policy Config ── */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                      <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 block mb-1.5">Paid Leave</label>
                      <div className="text-sm font-black text-slate-800">0 Days / Month</div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                      <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 block mb-1.5">Weekly Off</label>
                      <div className="flex gap-1.5">
                        <span className="text-[10px] font-bold bg-purple-600 text-white px-2 py-0.5 rounded-md">Sun</span>
                        <span className="text-[10px] font-bold bg-white text-slate-400 border border-slate-200 px-2 py-0.5 rounded-md">Sat</span>
                      </div>
                    </div>
                  </div>

                  {/* ── Compact Salary Setup Table ── */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400">Recent Assignments</h4>
                      <div className="h-0.5 flex-1 mx-3 bg-slate-100 rounded-full" />
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                        <div className="w-2 h-2 rounded-full bg-slate-200" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      {[
                        { name: "testabc", salary: "₹ 25,000", badge: "Primary" },
                        { name: "Siddharth", salary: "₹ 45,000", badge: "Senior" }
                      ].map((row, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500">
                              <User className="w-4 h-4" />
                            </div>
                            <div className="flex flex-col leading-tight">
                              <span className="font-black text-slate-900 text-xs">{row.name}</span>
                              <span className="text-[10px] font-medium text-slate-400">{row.badge} Role</span>
                            </div>
                          </div>
                          <div className="text-right leading-tight">
                            <div className="text-xs font-black text-slate-900">{row.salary}</div>
                            <div className="text-[9px] font-bold text-emerald-600">Verified</div>
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
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pt-4 lg:pt-8 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
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
            <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.06]">
             Boss Dashboard
              <span className="block">
                For {" "}
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
             Project Profit
                </motion.span>
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg font-medium leading-relaxed text-slate-600">
              Give leaders a project-level view of billing, actual cost, and team salary impact so they can
              track margins before payroll closes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="mt-8 grid gap-4 sm:gap-5 xl:grid-cols-[0.84fr_1.16fr]"
          >
            <div className="rounded-[1.75rem] sm:rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 sm:p-6 text-white shadow-[0_28px_70px_-40px_rgba(15,23,42,0.65)]">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.16em] sm:tracking-[0.18em] text-emerald-300">
                <TrendingUp className="h-3.5 w-3.5" />
                Leadership view
              </div>
              <h3 className="mt-4 text-[1.75rem] sm:text-3xl font-black tracking-tight leading-[1.08]">
                Understand Which
                <span className="block text-purple-300">Projects Actually Make Money</span>
              </h3>
              <p className="mt-3 max-w-md text-sm font-medium leading-relaxed text-slate-300">
                Bring billing, real spend, and salary allocation into one dashboard.
              </p>

              <div className="mt-5 grid gap-3">
                {profitInsights.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-sm">
                    <div className="text-sm font-black text-white">{item.title}</div>
                    <div className="mt-1.5 text-sm leading-relaxed text-slate-300">{item.desc}</div>
                  </div>
                ))}
              </div>

            
            </div>

            <div className="rounded-[1.75rem] sm:rounded-[2rem] border border-slate-200 bg-white p-4 sm:p-6 shadow-[0_22px_60px_-15px_rgba(0,0,0,0.06)] relative overflow-hidden pointer-events-none select-none">
              
              {/* ── Integrated Header ── */}
              <div className="mb-5 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">Profit measure (Boss only)</h3>
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
                  { label: "Filter by member", value: "All members" }
                ].map((item) => (
                  <div key={item.label} className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">{item.label}</label>
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
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Project billing amount</label>
                  <div className="h-12 rounded-xl border-2 border-[#7e22ce] bg-white flex items-center justify-between px-4 text-sm font-black text-slate-900 shadow-lg shadow-purple-600/5">
                    0
                    <div className="flex flex-col -space-y-1 ml-2">
                      <ChevronDown className="w-3 h-3 rotate-180 text-slate-400" />
                      <ChevronDown className="w-3 h-3 text-slate-400" />
                    </div>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Other actual cost</label>
                  <div className="h-12 rounded-xl border border-slate-200 bg-slate-50 flex items-center px-4 text-sm font-black text-slate-900">
                    0
                  </div>
                </div>
              </div>

              {/* ── Rates Section ── */}
              <div className="mb-5 sm:mb-6">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2.5">Member salaries</label>
                <div className="p-4 rounded-[1.25rem] sm:rounded-[1.5rem] border border-dashed border-slate-200 bg-slate-50/30 text-[11px] font-medium text-slate-400 leading-relaxed text-center">
                  No member rates configured yet. Add rates from the Team tab.
                </div>
              </div>

              {/* ── Profitability Summary ── */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-5 sm:pt-6 border-t border-slate-100">
                {[
                  { label: "Total salary cost", val: "0.00" },
                  { label: "Other actual cost", val: "0.00" },
                  { label: "Total cost", val: "0.00" },
                  { label: "Profit", val: "—", primary: true }
                ].map((item) => (
                  <div key={item.label} className="space-y-1.5">
                    <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 leading-none">{item.label}</div>
                    <div className={`text-[1.1rem] font-black ${item.primary ? 'text-slate-400 tracking-tighter' : 'text-slate-900'}`}>{item.val}</div>
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
          </motion.div>
        </div>
      </section>

      <FeatureCTA
        title={<>Salary That Stays <br /> Clear Every Month</>}
        description="Automate payroll and track profit without spreadsheet confusion."
        buttonText="Get started. It's FREE"
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
