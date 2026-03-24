import React from "react";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  CalendarDays,
  CalendarRange,
  Check,
  ChevronDown,
  ClipboardCheck,
  FileText,
  Layers3,
  Plane,
  ShieldAlert,
  Send,
  Sparkles,
  TriangleAlert,
  UserCheck,
} from "lucide-react";
import FeatureCTA from "../../components/FeatureCTA";
import leaveImg from "../../assets/Leave.png";

const leaveTags = [
  "Custom leave types",
  "Smart approval flows",
  "Live balance tracker",
  "Team overlap alerts",
];

const leaveRequests = [
  {
    name: "Aisha Kapoor",
    team: "Design",
    type: "Casual Leave",
    days: "2 days",
    dates: "Apr 12 - Apr 13",
    status: "Pending review",
  },
  {
    name: "Rahul Mehta",
    team: "Engineering",
    type: "Sick Leave",
    days: "1 day",
    dates: "Apr 15",
    status: "Pending review",
  },
  {
    name: "Priya Nair",
    team: "Marketing",
    type: "Paid Leave",
    days: "3 days",
    dates: "Apr 18 - Apr 20",
    status: "Coverage warning",
  },
];

export default function Leave() {
  return (
    <div className="min-h-screen bg-white pb-20">
      <section className="relative overflow-hidden min-h-screen pt-28">
        <div className="absolute top-0 right-0 -z-10 h-[580px] w-[580px] translate-x-1/4 -translate-y-1/3 rounded-full bg-purple-100/60 blur-[120px]" />
        <div className="absolute bottom-0 left-0 -z-10 h-[420px] w-[420px] -translate-x-1/4 translate-y-1/3 rounded-full bg-fuchsia-100/50 blur-[110px]" />

        <div className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="grid w-full items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-100 px-3.5 py-1.5 text-xs font-black uppercase tracking-widest text-purple-700"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Features <span className="opacity-60">/</span> Leave
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                className="mt-5 text-4xl font-black tracking-tight leading-[1.06] text-slate-900 sm:text-5xl lg:text-6xl"
              >
                Leave
                <span className="mt-2 block">
                  that{" "}
                  <motion.span
                    className="bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto] bg-clip-text text-transparent"
                    animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    runs itself
                  </motion.span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                className="mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-slate-600 sm:text-lg lg:mx-0"
              >
                A leave policy that actually runs itself. From application to
                approval to calendar update, every step is automated, every
                balance is accurate, and no manager is left chasing paperwork on
                a Monday morning.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
                className="mx-auto mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2 lg:mx-0"
              >
                {leaveTags.map((tag) => (
                  <div
                    key={tag}
                    className="group flex items-center gap-3 rounded-xl border border-slate-200/70 bg-white/90 px-3.5 py-2.5 shadow-sm transition-all duration-300 hover:border-purple-200 hover:bg-purple-50/60"
                  >
                    <div className="flex h-5 w-5 items-center justify-center rounded-md border border-purple-200 bg-purple-100">
                      <Check className="h-3 w-3 stroke-[4] text-[#7e22ce]" />
                    </div>
                    <span className="truncate text-[10px] font-black uppercase tracking-[0.12em] text-slate-600">
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
              className="relative lg:-mr-12 lg:-mt-2"
            >
              <div className="absolute -inset-8 bg-gradient-to-tr from-[#7e22ce]/16 via-fuchsia-500/10 to-transparent blur-3xl opacity-60" />

              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
                <div className="relative border-b border-slate-100 bg-slate-50/80 px-6 py-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="flex items-center gap-2 text-3xl font-black tracking-tight text-slate-900">
                        <Plane className="h-7 w-7 text-[#7e22ce]" />
                        Request Leave
                      </h3>
                      <p className="mt-2 max-w-xl text-sm font-medium leading-relaxed text-slate-500">
                        Use same date for single day, or From-To for a range.
                        Only 1 paid leave per month is allowed. Sundays are
                        weekly off.
                      </p>
                    </div>
                    <div className="rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-purple-700">
                      Policy active
                    </div>
                  </div>
                </div>

                <div className="relative px-6 py-4 sm:px-7 sm:py-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-black text-slate-900">
                        From Date *
                      </label>
                      <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-500">
                        <span className="font-medium">dd-mm-yyyy</span>
                        <CalendarDays className="h-4 w-4" />
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-black text-slate-900">
                        To Date *
                      </label>
                      <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-500">
                        <span className="font-medium">dd-mm-yyyy</span>
                        <CalendarRange className="h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="mb-2 block text-sm font-black text-slate-900">
                      Leave Type
                    </label>
                    <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700">
                      <span className="font-medium">Unpaid Leave</span>
                      <ChevronDown className="h-4 w-4 text-slate-400" />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="mb-2 block text-sm font-black text-slate-900">
                      Reason (optional)
                    </label>
                    <div className="min-h-[72px] rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-400">
                      Reason for leave
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <motion.button
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center gap-3 self-start rounded-2xl bg-gradient-to-r from-[#7e22ce] to-fuchsia-600 px-6 py-4 text-base font-black text-white shadow-lg shadow-purple-200/70"
                    >
                      <Send className="h-4 w-4" />
                      Submit Request
                    </motion.button>

                    <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-purple-700">
                      <ClipboardCheck className="h-3.5 w-3.5" />
                      Auto routes to approver
                    </div>
                  </div>

                   
                      
                   
                       
                     
                 
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[420px] w-[980px] -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-100/80 via-fuchsia-100/60 to-transparent blur-[130px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: 36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
                <div className="border-b border-slate-200 bg-slate-50/80 px-6 py-4">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">
                        Leave inbox
                      </div>
                      <div className="mt-1 text-2xl font-black text-slate-900">
                        Boss dashboard approvals
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-purple-700">
                      <UserCheck className="h-3.5 w-3.5" />
                      18 pending
                    </div>
                  </div>
                </div>

                <div className="space-y-4 p-5 sm:p-6">
                  {leaveRequests.map((request, index) => {
                    const warning = request.status === "Coverage warning";

                    return (
                      <motion.div
                        key={request.name}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 0.45, delay: index * 0.08 }}
                        className={`rounded-[1.5rem] border p-5 transition-transform duration-300 hover:-translate-y-1 ${
                          warning
                            ? "border-fuchsia-200 bg-gradient-to-br from-fuchsia-50 to-white"
                            : "border-slate-200 bg-white"
                        }`}
                      >
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <div className="text-lg font-black text-slate-900">{request.name}</div>
                              <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">
                                {request.team}
                              </span>
                            </div>
                            <div className="mt-3 grid gap-3 text-sm font-medium text-slate-600 sm:grid-cols-3">
                              <div>
                                <div className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
                                  Leave type
                                </div>
                                <div className="mt-1 font-bold text-slate-800">{request.type}</div>
                              </div>
                              <div>
                                <div className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
                                  Duration
                                </div>
                                <div className="mt-1 font-bold text-slate-800">{request.days}</div>
                              </div>
                              <div>
                                <div className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
                                  Dates
                                </div>
                                <div className="mt-1 font-bold text-slate-800">{request.dates}</div>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col gap-3 lg:min-w-[220px]">
                            <div
                              className={`inline-flex items-center gap-2 self-start rounded-full border px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] ${
                                warning
                                  ? "border-fuchsia-200 bg-fuchsia-50 text-fuchsia-700"
                                  : "border-amber-200 bg-amber-50 text-amber-700"
                              }`}
                            >
                              {warning ? <ShieldAlert className="h-3.5 w-3.5" /> : <BadgeCheck className="h-3.5 w-3.5" />}
                              {request.status}
                            </div>
                            <div className="flex gap-2">
                              <button className="inline-flex flex-1 items-center justify-center rounded-xl bg-gradient-to-r from-[#7e22ce] to-fuchsia-600 px-4 py-3 text-sm font-black text-white shadow-lg shadow-purple-200/60">
                                Approve
                              </button>
                              <button className="inline-flex flex-1 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-black text-slate-700">
                                Reject
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-purple-700">
                <Layers3 className="h-3.5 w-3.5" />
                Boss Dashboard
              </div>

              <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Review every leave request
                <motion.span
                  className="mt-2 block bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto] bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  from one decision panel
                </motion.span>
              </h2>

              <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
                Leaders can see all employee leave requests, spot team conflicts,
                and approve or reject requests without switching between chats,
                spreadsheets, and calendars.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Every employee request arrives in one prioritized queue",
                  "Managers can approve or reject instantly with full context",
                  "Overlap alerts flag coverage risk before decisions are made",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-[#7e22ce]">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FeatureCTA
        title={
          <>
            Leave that stays
            <br />
            simple for everyone
          </>
        }
        description="Handle requests, approvals, and balances without extra follow-up."
        image={leaveImg}
        imageAlt="KaryaUp leave management dashboard"
        containerClassName="mt-8 mb-8"
        paddingClassName="p-3 lg:p-4 lg:py-6"
        imageClassName="w-full max-w-[640px]"
        imageOuterClassName="relative w-[92%] lg:w-[82%] translate-x-0 lg:translate-x-2"
      />
    </div>
  );
}
