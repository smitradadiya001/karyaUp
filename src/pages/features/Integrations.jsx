import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import logo from "../../assets/logo.png";
import microsoftTeamsLogo from "../../assets/MicrosoftTeam.png";
import FeatureCTA from "../../components/FeatureCTA";
import dashboardImage from "../../assets/dashboard.jpeg";

const integrations = [
  {
    name: "Google Calendar",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg",
    short: "Calendar sync",
    position: "left-5 top-7 lg:left-7 lg:top-8",
  },
  {
    name: "Google Drive",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg",
    short: "Drive files",
    position: "right-5 top-7 lg:right-7 lg:top-8",
  },
  {
    name: "Gmail",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg",
    short: "Email inside KaryaUp",
    position: "left-3 top-[42%] lg:left-4 lg:top-[41%]",
  },
  {
    name: "Google Meet",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Google_Meet_icon_%282020%29.svg",
    short: "Meet links",
    position: "right-3 top-[42%] lg:right-4 lg:top-[41%]",
  },
  {
    name: "Slack",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
    short: "Slack updates",
    position: "left-8 bottom-8 lg:left-10 lg:bottom-10",
  },
  {
    name: "Microsoft Teams",
    logo: microsoftTeamsLogo,
    short: "Teams notifications",
    position: "right-8 bottom-8 lg:right-10 lg:bottom-10",
  },
];

const integrationDetails = [
  {
    name: "Google Calendar",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg",
    desc: "Connect your calendar to sync meetings, deadlines, and create Google Meet links directly from KaryaUp.",
  },
  {
    name: "Google Drive",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg",
    desc: "Access files, attach documents, and keep project resources linked without opening another workspace.",
  },
  {
    name: "Gmail",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg",
    desc: "Read and send emails inside KaryaUp so client communication stays connected to project execution.",
  },
  {
    name: "Google Meet",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Google_Meet_icon_%282020%29.svg",
    desc: "Schedule meetings with a Meet link and manage upcoming calls from the same connected workflow.",
  },
  {
    name: "Slack",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
    desc: "Receive task, project, and meeting notifications in Slack so updates reach the team instantly.",
  },
  {
    name: "Microsoft Teams",
    logo: microsoftTeamsLogo,
    desc: "Send KaryaUp notifications into Teams channels and keep collaboration updates visible where teams talk.",
  },
];

export default function Integrations() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-purple-100/70 blur-[130px]" />
        <div className="absolute right-0 top-20 -z-10 h-[300px] w-[300px] rounded-full bg-cyan-100/70 blur-[120px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-6">
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-100 px-3.5 py-1.5 text-xs font-black uppercase tracking-widest text-purple-700"
              >
                Features <span className="opacity-60">/</span> Integrations
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                className="mt-5 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.04]"
              >
                Integrations that work inside
                <span className="block">
               {" "}
                  <motion.span
                    className="bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto] bg-clip-text text-transparent"
                    animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    where your team already works
                  </motion.span>
                </span>
              </motion.h1>

              

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
                className="mt-6 space-y-3 max-w-[28rem] mx-auto lg:mx-0"
              >
                {[
                  "Files, meetings, and updates stay connected",
                  "Your stack stays the same while work stays centralized",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3.5 text-left">
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full border border-purple-200 bg-purple-100">
                      <Check className="h-2.5 w-2.5 stroke-[4] text-[#7e22ce]" />
                    </div>
                    <p className="font-medium leading-relaxed text-slate-600">{item}</p>
                  </div>
                ))}
              </motion.div>

            
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
              className="relative w-full max-w-[660px] mx-auto lg:mx-0 lg:justify-self-end"
            >
              <div className="relative min-h-[500px] w-full overflow-hidden rounded-[2.35rem] border border-slate-900/80 bg-[#0b0b16] p-4 shadow-[0_40px_100px_-40px_rgba(15,23,42,0.8)]">
                <motion.div
                  animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
                  transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(168,85,247,0.22),transparent_24%),radial-gradient(circle_at_84%_18%,rgba(59,130,246,0.18),transparent_22%),radial-gradient(circle_at_15%_84%,rgba(236,72,153,0.16),transparent_22%),linear-gradient(135deg,rgba(168,85,247,0.08),rgba(59,130,246,0.05),rgba(236,72,153,0.06))] bg-[length:100%_100%,100%_100%,100%_100%,220%_220%]"
                />
                <div className="absolute inset-0 opacity-[0.12] mix-blend-screen">
                  <svg className="h-full w-full">
                    <filter id="integrationNoise">
                      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#integrationNoise)" />
                  </svg>
                </div>

                <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 640 560" fill="none">
                  <defs>
                    <linearGradient id="integrationLineA" x1="78" y1="90" x2="562" y2="470" gradientUnits="userSpaceOnUse">
                      <stop stopColor="rgba(216,180,254,0.95)" />
                      <stop offset="1" stopColor="rgba(96,165,250,0.95)" />
                    </linearGradient>
                    <filter id="integrationGlow">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  <g filter="url(#integrationGlow)" opacity="0.95">
                    <path d="M150 106V165H240V220" stroke="url(#integrationLineA)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M490 106V165H400V220" stroke="url(#integrationLineA)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M120 258H150V280H240" stroke="url(#integrationLineA)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M520 258H490V280H400" stroke="url(#integrationLineA)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M170 454V420H264V340" stroke="url(#integrationLineA)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M470 454V420H376V340" stroke="url(#integrationLineA)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </g>

                  {[
                    [240, 165],
                    [400, 165],
                    [150, 280],
                    [490, 280],
                    [264, 420],
                    [376, 420],
                  ].map(([cx, cy], index) => (
                    <g key={index}>
                      <circle cx={cx} cy={cy} r="8" fill="rgba(168,85,247,0.08)" />
                      <motion.circle
                        cx={cx}
                        cy={cy}
                        r="3.2"
                        fill={index % 2 === 0 ? "rgba(216,180,254,0.98)" : "rgba(96,165,250,0.98)"}
                        animate={{ opacity: [0.55, 1, 0.55], scale: [1, 1.35, 1] }}
                        transition={{ duration: 2.4 + (index % 3) * 0.4, repeat: Infinity, ease: "easeInOut" }}
                        style={{ transformOrigin: `${cx}px ${cy}px` }}
                      />
                    </g>
                  ))}
                </svg>

                <div className="absolute left-1/2 top-1/2 z-20 w-[196px] -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    className="rounded-[1.8rem] bg-gradient-to-r from-[#8b5cf6] via-[#ec4899] to-[#60a5fa] bg-[length:220%_220%] p-[1.5px] shadow-[0_0_85px_rgba(168,85,247,0.5)]"
                  >
                    <div className="rounded-[calc(1.8rem-1.5px)] border border-white/10 bg-[#171428]/95 px-5 py-6 text-center">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_0_35px_rgba(168,85,247,0.25)]">
                        <img src={logo} alt="KaryaUp" className="h-10 w-10 object-contain" />
                      </div>
                      <div className="mt-4 text-[10px] font-black uppercase tracking-[0.22em] text-purple-300">
                        Integration hub
                      </div>
                      <div className="mt-2 text-[1.45rem] font-black leading-none tracking-tight text-white">KaryaUp</div>
                      <p className="mt-2 text-[11px] font-medium leading-relaxed text-slate-300">One connected workspace</p>
                    </div>
                  </motion.div>
                </div>

                {integrations.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.92, y: 18 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.12 * index, ease: [0.22, 1, 0.36, 1] }}
                    className={`absolute z-10 w-[170px] sm:w-[190px] rounded-[1.45rem] border border-white/10 bg-white/5 p-[1.5px] backdrop-blur-xl shadow-[0_0_32px_rgba(76,29,149,0.16)] ${item.position}`}
                  >
                    <motion.div
                      animate={{ boxShadow: ["0 0 0 rgba(0,0,0,0)", "0 0 22px rgba(168,85,247,0.14)", "0 0 0 rgba(0,0,0,0)"] }}
                      transition={{ duration: 3.2 + index * 0.2, repeat: Infinity, ease: "easeInOut" }}
                      className="rounded-[calc(1.45rem-1.5px)] border border-white/8 bg-[#131526]/95 px-4 py-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-[0_10px_20px_-14px_rgba(255,255,255,0.4)]">
                          <img src={item.logo} alt={item.name} className="h-7 w-7 object-contain" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-black text-white">{item.name}</div>
                          <div className="mt-1 text-xs font-medium leading-relaxed text-slate-400">
                            {item.short}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-xs font-bold mb-6 uppercase tracking-widest"
            >
              Connected apps
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6 tracking-tight"
            >
              Works with your <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-600 bg-[length:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                existing tools
              </motion.span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-500 font-medium"
            >
              No need to rebuild your workflow. Connect instantly:
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {integrationDetails.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="flex items-start gap-6 group cursor-default"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                  <motion.img
                    src={item.logo}
                    alt={item.name}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-full h-full object-contain transition-all duration-300 drop-shadow-sm group-hover:drop-shadow-md"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 mb-2 transition-colors duration-300 group-hover:text-purple-600">
                    {item.name}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FeatureCTA
        title={<>Integrations that keep <br /> your stack connected</>}
        description="Bring your tools into one workflow and let KaryaUp keep meetings, files, email, and notifications in sync."
        buttonText="Explore integrations"
        image={dashboardImage}
        imageAlt="KaryaUp integrations dashboard"
        containerClassName="mt-24 mb-0"
        imageClassName="w-full max-w-[700px]"
        imageOuterClassName="relative w-[98%] lg:w-[88%] translate-x-0 lg:translate-x-3"
      />
    </div>
  );
}
