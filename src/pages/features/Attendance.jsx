import React from "react";
import { motion } from "framer-motion";
import {
  Camera,
  Check,
  Download,
  Eye,
  FileSpreadsheet,
  ScanFace,
  ShieldCheck,
  Users,
} from "lucide-react";
import AttendanceHero from "../../components/AttendanceHero";
import FeatureCTA from "../../components/FeatureCTA";
import attendanceImg from "../../assets/Attendance.png";

const scanSteps = [
  "Face scan verifies identity before every punch",
  "One tap to punch in and punch out from any device",
  "Verified entries sync instantly to the dashboard",
];

const attendanceRows = [
  { name: "Arjun Jetti", team: "Design", punchIn: "09:02 AM", status: "On Time" },
  { name: "Sara Khan", team: "QA", punchIn: "09:11 AM", status: "Late" },
  { name: "Rahul Mehta", team: "Engineering", punchIn: "08:56 AM", status: "On Time" },
  { name: "Priya Nair", team: "Marketing", punchIn: "--", status: "Absent" },
];

export default function Attendance() {
  return (
    <div className="min-h-screen bg-white">
      <AttendanceHero />

      <section className="relative overflow-hidden pb-8">
        <div className="pointer-events-none absolute top-16 left-1/2 -z-10 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-100/70 via-fuchsia-100/60 to-transparent blur-[120px]" />

        <div className="mx-auto max-w-7xl px-6 md:px-16">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_30px_90px_-45px_rgba(15,23,42,0.28)]">
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative border-b border-slate-200/80 bg-slate-950 px-7 py-8 sm:px-10 lg:border-b-0 lg:border-r lg:border-slate-800">
                <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-purple-600/20 blur-[70px]" />
                <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-fuchsia-600/20 blur-[70px]" />

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-10"
                >
                  <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-purple-200">
                    <ScanFace className="h-3.5 w-3.5" />
                    Face Attendance
                  </div>

                  <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
                    Scan. Verify.
                    <span className="mt-2 block bg-gradient-to-r from-purple-300 via-fuchsia-300 to-purple-300 bg-[length:200%_auto] bg-clip-text text-transparent">
                      Punch in instantly.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-xl text-base font-medium leading-relaxed text-slate-300 sm:text-lg">
                    Team members can scan their face before punch in or punch out,
                    giving you faster attendance capture with verified identity and
                    cleaner records for payroll.
                  </p>

                  <div className="mt-8 space-y-3.5">
                    {scanSteps.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -18 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 0.45, delay: index * 0.08 }}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/15 text-purple-300">
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        <span className="font-medium text-slate-300">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-10 flex max-w-md items-center gap-4 rounded-[2rem] border border-purple-900/40 bg-slate-900/70 p-5 shadow-lg shadow-purple-950/20">
                    <div className="relative flex h-28 w-24 shrink-0 items-center justify-center rounded-[1.5rem] border border-purple-500/25 bg-black/50">
                      <motion.div
                        animate={{ scale: [0.96, 1.04, 0.96], opacity: [0.35, 0.75, 0.35] }}
                        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-3 rounded-[1rem] border border-fuchsia-400/40"
                      />
                      <motion.div
                        animate={{ y: [-26, 26, -26] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute left-2 right-2 h-8 rounded-full bg-gradient-to-r from-transparent via-fuchsia-400/45 to-transparent blur-md"
                      />
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-200">
                        <Camera className="h-7 w-7" />
                      </div>
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-emerald-400">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        Identity Verified
                      </div>
                      <div className="mt-3 text-xl font-black text-white">
                        Punch In Recorded
                      </div>
                      <div className="mt-1 text-sm font-medium text-slate-400">
                        Front camera match passed. Timestamp synced to attendance.
                      </div>
                      <div className="mt-4 flex items-center gap-2">
                        <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-purple-200">
                          09:02 AM
                        </span>
                        <span className="rounded-full border border-slate-700 bg-slate-800 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-slate-300">
                          Main Office
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="relative bg-white px-7 py-8 sm:px-10">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-purple-700">
                    <Users className="h-3.5 w-3.5" />
                    Boss Dashboard
                  </div>

                  <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <h3 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                        All employee attendance in one export-ready view.
                      </h3>
                      <p className="mt-3 max-w-2xl text-base font-medium leading-relaxed text-slate-600">
                        Managers can view daily attendance across the whole team,
                        filter who is on time, late, or absent, and download the
                        full list as CSV whenever they need it.
                      </p>
                    </div>

                    <motion.div
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 self-start rounded-2xl border border-purple-200 bg-purple-600 px-4 py-3 text-sm font-black text-white shadow-lg shadow-purple-200/60"
                    >
                      <FileSpreadsheet className="h-4 w-4" />
                      Download CSV
                    </motion.div>
                  </div>

                  <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 shadow-inner">
                    <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4">
                      <div>
                        <div className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                          Today&apos;s attendance
                        </div>
                        <div className="mt-1 text-lg font-black text-slate-900">
                          84 employees synced
                        </div>
                      </div>
                      <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-emerald-700">
                        <Eye className="h-3.5 w-3.5" />
                        Live
                      </div>
                    </div>

                    <div className="divide-y divide-slate-200">
                      {attendanceRows.map((row, index) => {
                        const statusStyles =
                          row.status === "On Time"
                            ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                            : row.status === "Late"
                              ? "border-amber-200 bg-amber-50 text-amber-700"
                              : "border-rose-200 bg-rose-50 text-rose-700";

                        return (
                          <motion.div
                            key={row.name}
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.45, delay: index * 0.08 }}
                            className="grid items-center gap-4 bg-white px-5 py-4 sm:grid-cols-[1.25fr_0.9fr_0.8fr_auto]"
                          >
                            <div>
                              <div className="font-black text-slate-900">{row.name}</div>
                              <div className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                                {row.team}
                              </div>
                            </div>
                            <div>
                              <div className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">
                                Punch In
                              </div>
                              <div className="mt-1 text-sm font-bold text-slate-700">{row.punchIn}</div>
                            </div>
                            <div className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-400">
                              Face Verified
                              <div className="mt-1 text-sm font-bold text-slate-700">
                                {row.status === "Absent" ? "No Scan" : "Matched"}
                              </div>
                            </div>
                            <div className={`inline-flex items-center justify-center rounded-full border px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] ${statusStyles}`}>
                              {row.status}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>

                    <div className="flex flex-col gap-3 border-t border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                      <span>Download filtered employee attendance lists in CSV for payroll and audits.</span>
                      <div className="inline-flex items-center gap-2 font-black uppercase tracking-[0.18em] text-purple-700">
                        <Download className="h-4 w-4" />
                        CSV Export Ready
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureCTA
        title={
          <>
            Attendance that keeps every
            <br />
            scan, punch, and report in sync
          </>
        }
        description="Register faces once, let employees punch in and punch out faster, and give managers one attendance screen for filters, logs, notifications, and CSV exports."
        image={attendanceImg}
        imageAlt="KaryaUp attendance dashboard"
        containerClassName="mt-10 mb-8"
        paddingClassName="p-3 lg:p-4 lg:py-6"
        imageClassName="w-full max-w-[940px]"
        imageOuterClassName="relative w-[108%] lg:w-full translate-x-2 lg:translate-x-8"
      />
    </div>
  );
}
