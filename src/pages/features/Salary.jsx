import React from "react";
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
} from "lucide-react";
import FeatureCTA from "../../components/FeatureCTA";
import featureSalary from "../../assets/salary.jpeg";

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
    title: "Margin is visible before payout",
    desc: "Bosses can compare billing and actual cost before payroll is finalized.",
  },
  {
    title: "Project-wise salary allocation",
    desc: "Each member's salary contribution is mapped against the project for true cost tracking.",
  },
  {
    title: "Faster decisions on low-profit work",
    desc: "Leadership can catch margin pressure early and adjust staffing or pricing in time.",
  },
];
export default function Salary() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <section className="relative overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 h-[560px] w-[560px] translate-x-1/4 -translate-y-1/3 rounded-full bg-purple-100/60 blur-[120px]" />
        <div className="absolute bottom-0 left-0 -z-10 h-[420px] w-[420px] -translate-x-1/4 translate-y-1/3 rounded-full bg-fuchsia-100/50 blur-[110px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-black uppercase tracking-widest"
              >
                Features <span className="opacity-60">/</span> Salary
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.06]"
              >
                Salary
                <span className="block mt-2">
                  that{" "}
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                    animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    removes ambiguity
                  </motion.span>
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                className="mt-6 space-y-4 max-w-2xl mx-auto lg:mx-0"
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

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
                className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3 max-w-md mx-auto lg:mx-0"
              >
                {salaryTags.map((tag) => (
                  <div
                    key={tag}
                    className="group flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-slate-50/50 border border-slate-200/60 shadow-sm hover:border-purple-200 hover:bg-purple-50/50 transition-all duration-300"
                  >
                    <div className="w-5 h-5 rounded-md bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Check className="w-3 h-3 text-[#7e22ce] stroke-[4]" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.12em] text-slate-600 truncate">
                      {tag}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
              className="relative lg:-mr-10"
            >
              <div className="absolute -inset-8 bg-gradient-to-tr from-[#7e22ce]/16 via-fuchsia-500/8 to-transparent blur-3xl opacity-55" />

              <div className="relative overflow-hidden border border-slate-200/80 rounded-3xl bg-white">
                <div className="border-b border-slate-100 bg-slate-50/80 px-6 py-4 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">
                      Payroll engine
                    </div>
                    <div className="mt-1 text-2xl font-black text-slate-900">
                      Salary run summary
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-purple-700">
                    <Landmark className="h-3.5 w-3.5" />
                    Auto processed
                  </div>
                </div>

                <div className="relative px-6 py-5 sm:px-7">
                  <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] items-start">
                    <div className="relative h-[240px] overflow-hidden rounded-[2rem] bg-[#c8e5e2] flex items-center justify-center">
                      <div className="absolute inset-x-4 top-5 h-[195px] rounded-[50%] bg-white" />
                      <motion.svg
                        viewBox="0 0 320 280"
                        className="absolute inset-0 h-full w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <defs>
                          <linearGradient id="salaryPhoneBody" x1="86" y1="94" x2="150" y2="212" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#4f5cff" />
                            <stop offset="1" stopColor="#2434c7" />
                          </linearGradient>
                          <linearGradient id="salaryPhoneScreen" x1="103" y1="108" x2="148" y2="186" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#ffffff" />
                            <stop offset="1" stopColor="#f6f8ff" />
                          </linearGradient>
                          <linearGradient id="salaryCard" x1="183" y1="56" x2="278" y2="116" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#4a58ff" />
                            <stop offset="1" stopColor="#3647ea" />
                          </linearGradient>
                        </defs>

                        <g opacity="0.9">
                          <circle cx="70" cy="94" r="3" fill="#4f7f48" />
                          <circle cx="82" cy="103" r="4" fill="none" stroke="#a7aab5" strokeWidth="1.2" />
                          <circle cx="55" cy="126" r="6" fill="none" stroke="#c3c6d1" strokeWidth="1.2" />
                          <circle cx="260" cy="170" r="4" fill="none" stroke="#b6bac7" strokeWidth="1.2" />
                          <circle cx="300" cy="174" r="2.5" fill="none" stroke="#b6bac7" strokeWidth="1.2" />
                          <circle cx="284" cy="188" r="5.5" fill="#4050ef" />
                        </g>

                        <motion.g
                          animate={{ y: [-3, 3, -3], rotate: [-1.5, 1.5, -1.5] }}
                          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
                          style={{ transformOrigin: "126px 173px" }}
                        >
                          <rect x="86" y="103" width="55" height="122" rx="9" transform="rotate(-12 86 103)" fill="url(#salaryPhoneBody)" />
                          <rect x="93" y="109" width="42" height="103" rx="6" transform="rotate(-12 93 109)" fill="url(#salaryPhoneScreen)" />
                          <rect x="106" y="110" width="13" height="4" rx="2" transform="rotate(-12 106 110)" fill="#4b57dd" opacity="0.9" />
                          <circle cx="116" cy="154" r="12.5" fill="#ffffff" stroke="#d7dcef" strokeWidth="1.4" />
                          <path d="M115.8 146.5V161.2M111.4 150.4C111.4 148.2 113.2 146.8 115.7 146.8C118.1 146.8 119.8 148.1 119.8 150M111.8 157.6C112.2 159.6 113.9 160.9 116.2 160.9C118.6 160.9 120.3 159.7 120.3 157.7C120.3 155.8 118.9 154.9 116.1 154.4C113.4 153.9 112 153.1 112 151.2" fill="none" stroke="#5a8745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M101 179L126 173" stroke="#d5d9e6" strokeWidth="1.2" strokeLinecap="round" />
                          <path d="M103 185L128 179" stroke="#d5d9e6" strokeWidth="1.2" strokeLinecap="round" />
                        </motion.g>

                        <motion.g
                          animate={{ y: [3, -3, 3], rotate: [1.5, -1.5, 1.5] }}
                          transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
                          style={{ transformOrigin: "228px 92px" }}
                        >
                          <rect x="182" y="51" width="105" height="64" rx="8" transform="rotate(24 182 51)" fill="url(#salaryCard)" />
                          <rect x="199" y="65" width="18" height="12" rx="2" transform="rotate(24 199 65)" fill="#222c8e" opacity="0.95" />
                          <path d="M209 94L221 99" stroke="#6774ff" strokeWidth="2" strokeLinecap="round" />
                          <path d="M206 100L225 108" stroke="#6774ff" strokeWidth="2" strokeLinecap="round" />
                          <circle cx="271" cy="100" r="7" fill="none" stroke="#6774ff" strokeWidth="1.2" />
                          <path d="M266 100A7 7 0 0 1 278 96" fill="none" stroke="#6774ff" strokeWidth="1.2" strokeLinecap="round" />
                          <path d="M286 72C288 71 290 72 291 74" fill="none" stroke="#aab3ff" strokeWidth="1.4" strokeLinecap="round" />
                          <path d="M284 69C287 67.5 291 68.2 293.5 71" fill="none" stroke="#aab3ff" strokeWidth="1.4" strokeLinecap="round" />
                        </motion.g>

                        {[
                          { cx: 122, cy: 86, r: 18, scale: 1, delay: 0 },
                          { cx: 208, cy: 144, r: 21, scale: 1.1, delay: 0.35 },
                          { cx: 168, cy: 214, r: 15, scale: 0.95, delay: 0.15 },
                        ].map((coin, index) => (
                          <motion.g
                            key={index}
                            animate={{ y: [-4, 4, -4], scale: [coin.scale, coin.scale + 0.04, coin.scale] }}
                            transition={{ duration: 3 + index * 0.45, repeat: Infinity, ease: "easeInOut", delay: coin.delay }}
                            style={{ transformOrigin: `${coin.cx}px ${coin.cy}px` }}
                          >
                            <circle cx={coin.cx} cy={coin.cy} r={coin.r} fill="#ffffff" stroke="#4f7f48" strokeWidth="4" />
                            <circle cx={coin.cx} cy={coin.cy} r={coin.r + 8} fill="none" stroke="#7ca46b" strokeWidth="6" opacity="0.18" />
                            <path
                              d={`M${coin.cx} ${coin.cy - 9}V${coin.cy + 9}M${coin.cx - 5} ${coin.cy - 4}C${coin.cx - 5} ${coin.cy - 7} ${coin.cx - 2} ${coin.cy - 8.5} ${coin.cx + 0.5} ${coin.cy - 8.5}C${coin.cx + 4} ${coin.cy - 8.5} ${coin.cx + 6.5} ${coin.cy - 6.7} ${coin.cx + 6.5} ${coin.cy - 3.8}C${coin.cx + 6.5} ${coin.cy - 1.1} ${coin.cx + 4.6} ${coin.cy} ${coin.cx + 0.4} ${coin.cy + 0.7}C${coin.cx - 4.2} ${coin.cy + 1.4} ${coin.cx - 6} ${coin.cy + 2.5} ${coin.cx - 6} ${coin.cy + 5.3}C${coin.cx - 6} ${coin.cy + 8.2} ${coin.cx - 3.1} ${coin.cy + 10} ${coin.cx + 0.5} ${coin.cy + 10}C${coin.cx + 4.1} ${coin.cy + 10} ${coin.cx + 6.5} ${coin.cy + 8.2} ${coin.cx + 6.5} ${coin.cy + 5.4}`}
                              fill="none"
                              stroke="#4f7f48"
                              strokeWidth="2.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </motion.g>
                        ))}

                        <motion.g
                          animate={{ x: [-2, 2, -2], y: [2, -2, 2] }}
                          transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <rect x="126" y="161" width="42" height="46" rx="10" fill="#ffffff" stroke="#4b57dd" strokeWidth="2.6" />
                          <path d="M139 166H153C156 166 158 168 158 171V188C158 191 156 193 153 193H139C136 193 134 191 134 188V171C134 168 136 166 139 166Z" fill="#4b57dd" opacity="0.08" />
                          <circle cx="147" cy="184" r="12" fill="#4b57dd" />
                          <path d="M147 177V191M142 181C142 178.6 144 177 146.8 177C149.7 177 151.7 178.6 151.7 180.9M142.4 187.1C142.9 189.7 145 191.1 147.8 191.1C150.7 191.1 152.7 189.6 152.7 187C152.7 184.6 151 183.6 147.7 183.1C144.3 182.5 142.6 181.4 142.6 179" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M168 173L176 179V197L168 204Z" fill="#4b57dd" />
                        </motion.g>

                        <motion.path
                          d="M179 183C188 176 199 175 209 179L225 191C229 194 232 197 235 201L261 227M177 184L191 199M191 199L178 208C176 210 173 210 171 208L155 192C152 189 147 188 144 190L132 196"
                          fill="none"
                          stroke="#8f93a3"
                          strokeWidth="1.35"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          animate={{ pathLength: [0.96, 1, 0.96] }}
                          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </motion.svg>

                      <div className="absolute bottom-4 rounded-2xl border border-purple-100 bg-purple-50 px-4 py-3 shadow-sm">
                        <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-purple-700">
                          <WalletCards className="h-3.5 w-3.5" />
                          Payslip ready
                        </div>
                        <div className="mt-1 text-sm font-black text-slate-900">April 2026 batch generated</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/70 p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">
                              Employee payroll
                            </div>
                            <div className="mt-1 text-xl font-black text-slate-900">
                              Priya Nair
                            </div>
                          </div>
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-100 text-[#7e22ce]">
                            <CircleDollarSign className="h-5 w-5" />
                          </div>
                        </div>

                        <div className="mt-4 space-y-2.5">
                          {payrollRows.map((row, index) => (
                            <motion.div
                              key={row.label}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.45, delay: 0.15 * index }}
                              className="flex items-center justify-between rounded-xl border border-white bg-white px-4 py-2.5"
                            >
                              <span className="text-sm font-bold text-slate-500">{row.label}</span>
                              <span className={`text-sm font-black ${row.tone}`}>{row.value}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-3">
                        <div className="rounded-2xl border border-purple-100 bg-purple-50 p-3.5">
                          <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-purple-700">
                            <ReceiptText className="h-3.5 w-3.5" />
                            Deductions
                          </div>
                          <div className="mt-2 text-sm font-black text-slate-900">
                            PF, tax, insurance all itemized automatically.
                          </div>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-white p-3.5">
                          <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-slate-500">
                            <FileText className="h-3.5 w-3.5 text-[#7e22ce]" />
                            History
                          </div>
                          <div className="mt-2 text-sm font-black text-slate-900">
                            Full salary records always available by month.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-emerald-700">
              <TrendingUp className="h-3.5 w-3.5" />
              Boss dashboard
            </div>
            <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.06]">
              A boss dashboard
              <span className="block">
                that{" "}
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  shows project profit
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
            className="mt-10 grid gap-6 xl:grid-cols-[0.9fr_1.25fr]"
          >
            <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 text-white shadow-[0_28px_70px_-40px_rgba(15,23,42,0.65)]">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-emerald-300">
                <TrendingUp className="h-3.5 w-3.5" />
                Leadership view
              </div>
              <h3 className="mt-5 text-3xl font-black tracking-tight">
                Understand which
                <span className="block text-purple-300">projects actually make money</span>
              </h3>
              <p className="mt-4 max-w-md text-sm font-medium leading-relaxed text-slate-300">
                Instead of checking salary and project costing in separate places, KaryaUp brings billing,
                real spend, and employee salary allocation into one decision-ready dashboard.
              </p>

              <div className="mt-8 grid gap-4">
                {profitInsights.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <div className="text-sm font-black text-white">{item.title}</div>
                    <div className="mt-2 text-sm leading-relaxed text-slate-300">{item.desc}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.6rem] border border-emerald-400/20 bg-emerald-500/10 p-5">
                <div className="text-[11px] font-black uppercase tracking-[0.18em] text-emerald-300">
                  Margin snapshot
                </div>
                <div className="mt-3 flex items-end gap-3">
                  <div className="text-4xl font-black text-white">17.7%</div>
                  <div className="pb-1 text-sm font-bold text-emerald-300">healthy profit margin</div>
                </div>
                <div className="mt-4 h-2 rounded-full bg-white/10">
                  <div className="h-2 w-[18%] rounded-full bg-gradient-to-r from-emerald-300 to-emerald-500" />
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_24px_70px_-42px_rgba(15,23,42,0.3)] sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-purple-700">
                    <BriefcaseBusiness className="h-3.5 w-3.5" />
                    Project profit control
                  </div>
                  <div className="mt-4 text-2xl font-black text-slate-900">Boss-only profit dashboard</div>
                  <p className="mt-2 max-w-2xl text-sm font-medium leading-relaxed text-slate-500">
                    Track billing, actual costs, and salary allocation for a single project without exposing
                    sensitive profitability data to the whole team.
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 self-start rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700 transition-colors hover:border-slate-300"
                >
                  <Download className="h-4 w-4" />
                  Export summary
                </button>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                {profitFilters.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                    <div className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">{item.label}</div>
                    <div className="mt-3 flex items-center justify-between text-sm font-black text-slate-800">
                      <span>{item.value}</span>
                      <ChevronDown className="h-4 w-4 text-slate-400" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="rounded-[1.6rem] border border-slate-200 bg-slate-50/60 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">
                        Cost distribution
                      </div>
                      <div className="mt-2 text-lg font-black text-slate-900">Where project money goes</div>
                    </div>
                    <div className="rounded-full bg-white px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-emerald-600">
                      live margin
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3">
                    {memberCostRows.map((row) => (
                      <div key={row.name} className="rounded-2xl border border-white bg-white p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-black text-slate-900">{row.name}</div>
                            <div className="mt-1 text-sm font-medium text-slate-500">{row.owner}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-black text-slate-900">{row.cost}</div>
                            <div className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                              {row.share} of project cost
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 h-2 rounded-full bg-slate-100">
                          <div
                            className={`h-2 rounded-full ${
                              row.name === "Design"
                                ? "w-[18%] bg-[#94a3b8]"
                                : row.name === "Frontend"
                                  ? "w-[24%] bg-[#8b5cf6]"
                                  : "w-[27%] bg-emerald-500"
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4">
                  {profitSummary.map((item) => (
                    <div key={item.label} className="rounded-[1.6rem] border border-slate-200 bg-white p-5">
                      <div className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">
                        {item.label}
                      </div>
                      <div className={`mt-3 text-[1.55rem] sm:text-[1.8rem] leading-none font-black tracking-tight text-slate-900 ${item.tone || ""}`}>
                        <NumberFlow
                          value={item.amount}
                          prefix="₹"
                          format={{
                            notation: "standard",
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-[1.6rem] border border-purple-100 bg-gradient-to-r from-purple-50 to-white p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-[11px] font-black uppercase tracking-[0.18em] text-purple-700">
                      Why this matters
                    </div>
                    <div className="mt-2 text-lg font-black text-slate-900">
                      Salary becomes a profitability signal, not just a payroll record
                    </div>
                    
                  </div>
                  
              
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FeatureCTA
        title={<>Salary that stays <br /> clear every month</>}
        description="Automate payroll and track profit without spreadsheet confusion."
        buttonText="Get started. It's FREE"
        image={featureSalary}
        imageAlt="KaryaUp salary dashboard"
        containerClassName="mt-24 mb-0"
        imageClassName="w-full max-w-[620px]"
        imageOuterClassName="relative w-[92%] lg:w-[82%] translate-x-0 lg:translate-x-2"
      />

    </div>
  );
}

