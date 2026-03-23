import React from "react";
import { motion } from "framer-motion";
import {
  Banknote,
  Check,
  CircleDollarSign,
  FileText,
  Landmark,
  ReceiptText,
  WalletCards,
} from "lucide-react";
import { FeatureCard, CTABanner } from "../../components/SubPageLayout";

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

                <div className="relative px-6 py-6 sm:px-7">
                  <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] items-start">
                    <div className="relative h-[280px] overflow-hidden rounded-[2rem] bg-[#c8e5e2] flex items-center justify-center">
                      <div className="absolute inset-x-4 top-6 h-[225px] rounded-[50%] bg-white" />
                      <motion.svg
                        viewBox="0 0 320 280"
                        className="absolute inset-0 h-full w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <defs>
                          <linearGradient id="handGrayTop" x1="60" y1="70" x2="170" y2="140" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#f4f4f5" />
                            <stop offset="1" stopColor="#8b8b93" />
                          </linearGradient>
                          <linearGradient id="handGrayBottom" x1="110" y1="190" x2="265" y2="238" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#ececef" />
                            <stop offset="1" stopColor="#94949c" />
                          </linearGradient>
                          <linearGradient id="coinGold" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0" stopColor="#f7d47a" />
                            <stop offset="0.5" stopColor="#bb8730" />
                            <stop offset="1" stopColor="#8d6220" />
                          </linearGradient>
                        </defs>

                        <motion.path
                          d="M34 116C62 88 88 82 116 82C148 82 170 92 196 110C184 116 173 121 158 129C146 135 134 142 122 152C105 145 86 136 66 130C54 126 45 122 34 116Z"
                          fill="url(#handGrayTop)"
                          animate={{ y: [-2, 2, -2], rotate: [-1, 1, -1] }}
                          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                          style={{ transformOrigin: "120px 120px" }}
                        />
                        <motion.path
                          d="M55 226C84 208 112 196 145 189C179 181 213 182 265 192C251 203 235 212 220 219C196 230 170 236 143 239C112 242 84 238 55 226Z"
                          fill="url(#handGrayBottom)"
                          animate={{ y: [2, -2, 2], rotate: [1, -1, 1] }}
                          transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
                          style={{ transformOrigin: "160px 210px" }}
                        />

                        <motion.g
                          animate={{ y: [-4, 4, -4] }}
                          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                        >
                          {[0, 1, 2, 3, 4].map((i) => (
                            <ellipse
                              key={i}
                              cx={157 + i * 2}
                              cy={145 - i * 3}
                              rx="15"
                              ry="6"
                              fill="url(#coinGold)"
                              stroke="#7a5316"
                              strokeWidth="1"
                            />
                          ))}
                        </motion.g>
                      </motion.svg>

                      <div className="absolute bottom-4 rounded-2xl border border-purple-100 bg-purple-50 px-4 py-3 shadow-sm">
                        <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-purple-700">
                          <WalletCards className="h-3.5 w-3.5" />
                          Payslip ready
                        </div>
                        <div className="mt-1 text-sm font-black text-slate-900">April 2026 batch generated</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/70 p-5">
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

                        <div className="mt-5 space-y-3">
                          {payrollRows.map((row, index) => (
                            <motion.div
                              key={row.label}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.45, delay: 0.15 * index }}
                              className="flex items-center justify-between rounded-xl border border-white bg-white px-4 py-3"
                            >
                              <span className="text-sm font-bold text-slate-500">{row.label}</span>
                              <span className={`text-sm font-black ${row.tone}`}>{row.value}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="rounded-2xl border border-purple-100 bg-purple-50 p-4">
                          <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-purple-700">
                            <ReceiptText className="h-3.5 w-3.5" />
                            Deductions
                          </div>
                          <div className="mt-2 text-sm font-black text-slate-900">
                            PF, tax, insurance all itemized automatically.
                          </div>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-white p-4">
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

    </div>
  );
}
