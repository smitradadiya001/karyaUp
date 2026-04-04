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
import attendanceImg from "../../assets/Attendance.webp";
import { Helmet } from "react-helmet-async";

const scanSteps = [
  "Face scan verifies identity before every punch",
  "One tap to punch in and punch out from any device",
  "Verified entries sync instantly to the dashboard",
];

const attendanceRows = [
  { name: "Arjun Jetti", team: "Design", punchIn: "09:02 AM", status: "On Time" },
  { name: "Sara Khan", team: "QA", punchIn: "--", status: "Late" },
];

export default function Attendance() {
  return (
    <>
      <Helmet>
  <title>Employee Attendance Tracking | Karyaup</title>

  <meta
    name="description"
    content="Track employee attendance in real-time with Karyaup. Monitor working hours, check-ins, and productivity with a smart attendance management system."
  />

  <meta
    name="keywords"
    content="attendance management system, employee tracking, work hours tracking, attendance software, Karyaup"
  />

  <meta name="author" content="Karyaup" />

  <meta
    property="og:title"
    content="Employee Attendance Tracking | Karyaup"
  />
  <meta
    property="og:description"
    content="Monitor attendance, work hours, and employee activity in one place."
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content="https://karyaup.com/features/attendance"
  />
  <meta property="og:site_name" content="Karyaup" />

  <link
    rel="canonical"
    href="https://karyaup.com/features/attendance"
  />
</Helmet>
    <div className="min-h-screen bg-white pt-14 sm:pt-16 pb-12 sm:pb-16 lg:pb-20 text-slate-900">
      <AttendanceHero />

      <section className="relative overflow-hidden pt-4 lg:pt-8 pb-12 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-black shadow-[0_30px_90px_-45px_rgba(15,23,42,0.45)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(168,85,247,0.38),transparent_48%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(236,72,153,0.12),transparent_40%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(126,34,206,0.14),transparent_35%)] pointer-events-none" />
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative border-b border-white/10 bg-transparent px-6 py-6 sm:px-8 sm:py-8 lg:border-b-0 lg:border-r lg:border-white/10">
                <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-purple-600/20 blur-[70px]" />
                <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-fuchsia-600/20 blur-[70px]" />

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left"
                >
                  <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-purple-200">
                    <ScanFace className="h-3.5 w-3.5" />
                    Face Attendance
                  </div>

                  <h2 className="mt-4 text-3xl font-black leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
                    Scan. Verify.
                    <span className="mt-1 sm:mt-2 block bg-gradient-to-r from-[#7e22ce] via-fuchsia-400 to-[#7e22ce] bg-[length:200%_auto] bg-clip-text text-transparent">
                      Punch In Instantly.
                    </span>
                  </h2>

                  <p className="mt-3 max-w-md text-sm font-medium leading-relaxed text-slate-400">
                    Fast attendance capture with verified identity and cleaner records for payroll.
                  </p>

                  <div className="mt-5 space-y-2.5 w-full max-w-xl mx-auto">
                    {scanSteps.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -18 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 0.45, delay: index * 0.08 }}
                        className="flex items-start justify-center gap-3 text-left lg:justify-start"
                      >
                        <div className="mt-[3px] flex h-5 w-5 items-center justify-center rounded-full bg-purple-500/15 text-purple-300">
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="text-sm font-medium text-slate-400">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 flex max-w-md flex-col items-center gap-4 rounded-[1.5rem] border border-purple-900/40 bg-slate-900/70 p-4 text-center shadow-lg shadow-purple-950/20 mx-auto sm:flex-row sm:text-left lg:mx-0">
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
                      <div className="flex items-center justify-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-emerald-400 sm:justify-start">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        Identity Verified
                      </div>
                      <div className="mt-3 text-xl font-black text-white">
                        Punch In Recorded
                      </div>
                      <div className="mt-1 text-sm font-medium text-slate-400">
                        Front camera match passed. Timestamp synced to attendance.
                      </div>
                      <div className="mt-4 flex items-center justify-center gap-2 sm:justify-start">
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

              <div className="relative bg-transparent px-6 py-6 sm:px-8 sm:py-8">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center text-center lg:items-start lg:text-left"
                >
                  <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-purple-200">
                    <Users className="h-3.5 w-3.5" />
                    Boss Dashboard
                  </div>

                  <div className="mt-5 flex flex-col gap-3 items-center text-center sm:flex-row sm:items-end sm:justify-between sm:text-left w-full">
                    <div>
                      <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
                        All Employee Attendance In One Export-Ready View.
                      </h3>
                      <p className="mt-2 max-w-md text-sm font-medium leading-relaxed text-slate-400">
                        View daily attendance, filter who is on time or absent, and download the full CSV.
                      </p>
                    </div>

                    <motion.div
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 self-start rounded-2xl border border-white/10 bg-white px-4 py-3 text-sm font-black text-black shadow-lg shadow-white/10"
                    >
                      <FileSpreadsheet className="h-4 w-4" />
                      Download CSV
                    </motion.div>
                  </div>

                  <div className="mt-6 overflow-hidden rounded-[1.25rem] border border-white/10 bg-slate-950/65 shadow-inner">
                    <div className="flex items-center justify-between border-b border-white/10 bg-slate-900/80 px-5 py-4">
                      <div>
                        <div className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                          Today&apos;s attendance
                        </div>
                        <div className="mt-1 text-lg font-black text-white">
                          84 employees synced
                        </div>
                      </div>
                      <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-emerald-700">
                        <Eye className="h-3.5 w-3.5" />
                        Live
                      </div>
                    </div>

                    <div className="divide-y divide-white/10">
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
                            className="grid items-center gap-4 bg-slate-950/50 px-5 py-4 sm:grid-cols-[1.25fr_0.9fr_0.8fr_auto]"
                          >
                            <div>
                              <div className="font-black text-white">{row.name}</div>
                              <div className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                                {row.team}
                              </div>
                            </div>
                            <div>
                              <div className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-500">
                                Punch In
                              </div>
                              <div className="mt-1 text-sm font-bold text-slate-300">{row.punchIn}</div>
                            </div>
                            <div className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-500">
                              Face Verified
                              <div className="mt-1 text-sm font-bold text-slate-300">
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

                    <div className="flex flex-col gap-3 border-t border-white/10 bg-slate-900/75 px-5 py-4 text-sm font-medium text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                      <span>Download filtered employee attendance lists in CSV for payroll and audits.</span>
                      <div className="inline-flex items-center gap-2 font-black uppercase tracking-[0.18em] text-purple-200">
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
            Attendance That Keeps Every
            <br />
            Scan, Punch, And Report In Sync
          </>
        }
        description="Register faces once, let employees punch in and punch out faster, and give managers one attendance screen for filters, logs, notifications, and CSV exports."
        image={attendanceImg}
        imageAlt="KaryaUp attendance dashboard"
        containerClassName="mt-0"
        paddingClassName="p-3 lg:p-4 lg:py-6"
        imageClassName="w-full max-w-[940px]"
        imageOuterClassName="relative w-[92%] lg:w-full mx-auto lg:mx-0 translate-x-0 lg:translate-x-8"
      />
      </div>
      </>
  );
}
