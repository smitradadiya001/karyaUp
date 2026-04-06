import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import logo from "../../assets/logo.png";
import microsoftTeamsLogo from "../../assets/MicrosoftTeam.png";
import googleCalendarLogo from "../../assets/google-calendar.svg";
import googleDriveLogo from "../../assets/google-drive.svg";
import gmailLogo from "../../assets/gmail.svg";
import googleMeetLogo from "../../assets/google-meet.svg";
import slackLogo from "../../assets/slack.svg";
import FeatureCTA from "../../components/FeatureCTA";
import FeatureStack from "../../components/FeatureStack";
import app from "../../assets/apps.webp";
import { Helmet } from "react-helmet-async";

const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(useTransform(rawY, [-1, 1], [12, -12]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(rawX, [-1, 1], [-12, 12]), { stiffness: 300, damping: 30 });

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
      <div style={{ transform: 'translateZ(30px)' }} className="h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
};

const getColorClasses = (color) => {
  switch (color) {
    case 'purple': return 'bg-purple-100 text-[#7e22ce] shadow-purple-200/50';
    case 'emerald': return 'bg-emerald-100 text-emerald-600 shadow-emerald-200/50';
    case 'blue': return 'bg-blue-100 text-blue-600 shadow-blue-200/50';
    case 'fuchsia': return 'bg-fuchsia-100 text-fuchsia-600 shadow-fuchsia-200/50';
    case 'amber': return 'bg-amber-100 text-amber-600 shadow-amber-200/50';
    default: return 'bg-purple-100 text-purple-600 shadow-purple-200/50';
  }
};

const integrations = [
  {
    name: "Calendar",
    logo: googleCalendarLogo,
    short: "Sync meetings & deadlines",
    position: "top-[12%] left-[8%] sm:top-[12%] sm:left-[3%] lg:top-[14%] lg:left-[5%]",
  },
  {
    name: "Google Drive",
    logo: googleDriveLogo,
    short: "Access & attach files",
    position: "top-[12%] right-[8%] sm:top-[12%] sm:right-[3%] lg:top-[14%] lg:right-[5%]",
  },
  {
    name: "Gmail",
    logo: gmailLogo,
    short: "Connected inbox",
    position: "top-[43%] left-[1%] sm:top-[42%] sm:left-[3%] lg:top-[43%] lg:left-[5%]",
  },
  {
    name: "Google Meet",
    logo: googleMeetLogo,
    short: "Schedule video calls",
    position: "top-[43%] right-[1%] sm:top-[42%] sm:right-[3%] lg:top-[43%] lg:right-[5%]",
  },
  {
    name: "Slack",
    logo: slackLogo,
    short: "Team notifications",
    position: "bottom-[12%] left-[8%] sm:bottom-[8%] sm:left-[3%] lg:bottom-[10%] lg:left-[5%]",
  },
  {
    name: "Teams",
    logo: microsoftTeamsLogo,
    short: "Channel updates",
    position: "bottom-[12%] right-[8%] sm:bottom-[8%] sm:right-[3%] lg:bottom-[10%] lg:right-[5%]",
  },
];

const integrationDetails = [
  {
    name: "Google Calendar",
    logo: googleCalendarLogo,
    desc: "Connect your calendar to sync meetings, deadlines, and create Google Meet links directly from KaryaUp.",
    color: "blue"
  },
  {
    name: "Google Drive",
    logo: googleDriveLogo,
    desc: "Access files, attach documents, and keep project resources linked without opening another workspace.",
    color: "emerald"
  },
  {
    name: "Gmail",
    logo: gmailLogo,
    desc: "Read and send emails inside KaryaUp so client communication stays connected to project execution.",
    color: "fuchsia"
  },
  {
    name: "Google Meet",
    logo: googleMeetLogo,
    desc: "Schedule meetings with a Meet link and manage upcoming calls from the same connected workflow.",
    color: "emerald"
  },
  {
    name: "Slack",
    logo: slackLogo,
    desc: "Receive task, project, and meeting notifications in Slack so updates reach the team instantly.",
    color: "purple"
  },
  {
    name: "Microsoft Teams",
    logo: microsoftTeamsLogo,
    desc: "Send KaryaUp notifications into Teams channels and keep collaboration updates visible where teams talk.",
    color: "blue"
  },
];

export default function Integrations() {
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
        <title>App Integrations & Connected Workspace | Karyaup</title>

        <meta
          name="description"
          content="Connect your favorite tools with Karyaup. Integrate Google Calendar, Drive, Gmail, Meet, Slack, and Microsoft Teams to keep your workflow unified and efficient."
        />

        <meta
          name="keywords"
          content="app integrations, workflow integrations, Google Calendar integration, Slack integration, Microsoft Teams integration, productivity tools, Karyaup"
        />

        <meta name="author" content="Karyaup" />

        <meta
          property="og:title"
          content="App Integrations & Connected Workspace | Karyaup"
        />
        <meta
          property="og:description"
          content="Bring all your tools into one place and keep meetings, files, and communication connected."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://karyaup.com/integrations"
        />
        <meta property="og:site_name" content="Karyaup" />

        <link
          rel="canonical"
          href="https://karyaup.com/integrations"
        />
      </Helmet>
      <div className="min-h-screen bg-white pt-14 sm:pt-16 pb-12 sm:pb-16 lg:pb-20 text-slate-900">
        <section className="relative overflow-hidden pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-10 lg:pb-12">
          <div className="absolute top-0 left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-purple-100/70 blur-[130px]" />
          <div className="absolute right-0 top-20 -z-10 h-[300px] w-[300px] rounded-full bg-cyan-100/70 blur-[120px]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-6">
              <div className="text-center lg:text-left flex flex-col items-center lg:items-start lg:translate-y-2 xl:translate-y-4">
                <motion.div
                  initial={{ opacity: 0, y: isMobile ? 0 : 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-black uppercase tracking-widest shadow-sm"
                >
                  INTEGRATIONS — CONNECT YOUR WORKFLOW
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                  className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.06]"
                >
                  Integrations That Work Inside
                  <span className="block">
                    {" "}
                    <motion.span
                      className="bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto] bg-clip-text text-transparent"
                      animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      Where Your Team Already Works
                    </motion.span>
                  </span>
                </motion.h1>



                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
                  className="mt-5 sm:mt-6 space-y-3 max-w-lg w-full mx-auto lg:mx-0"
                >
                  {[
                    "Files, meetings, and updates stay connected",
                    "Your stack stays the same while work stays centralized",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3.5 text-left">
                      <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full border border-purple-200 bg-purple-100">
                        <Check className="h-2.5 w-2.5 stroke-[4] text-[#7e22ce]" />
                      </div>
                      <p className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed text-slate-600">{item}</p>
                    </div>
                  ))}
                </motion.div>

                <FeatureStack items={[
                  "Native Integrations",
                  "Two-Way Sync",
                  "API Access",
                  "Webhooks"
                ]} />

              </div>

              <motion.div
                initial={{ opacity: 0, x: isMobile ? 0 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
                className="relative w-full max-w-[660px] mx-auto lg:mx-0 lg:justify-self-end"
              >
                <div className="relative min-h-[420px] sm:min-h-[500px] w-full overflow-hidden rounded-[2.1rem] sm:rounded-[2.35rem] border border-slate-900/80 bg-[#0b0b16] p-3 sm:p-4 shadow-[0_40px_100px_-40px_rgba(15,23,42,0.8)]">
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

                  <svg className="pointer-events-none absolute inset-0 h-full w-full sm:hidden" viewBox="0 0 320 420" fill="none">
                    <defs>
                      <linearGradient id="integrationLineMobile" x1="52" y1="110" x2="268" y2="320" gradientUnits="userSpaceOnUse">
                        <stop stopColor="rgba(216,180,254,0.95)" />
                        <stop offset="1" stopColor="rgba(96,165,250,0.95)" />
                      </linearGradient>
                      <filter id="integrationGlowMobile">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    <g filter="url(#integrationGlowMobile)" opacity="0.95">
                      <path d="M78 84V118H132V182" stroke="url(#integrationLineMobile)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M242 84V118H188V182" stroke="url(#integrationLineMobile)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M52 210H132" stroke="url(#integrationLineMobile)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M268 210H188" stroke="url(#integrationLineMobile)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M70 336H78V302H132V238" stroke="url(#integrationLineMobile)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M250 336H242V302H188V238" stroke="url(#integrationLineMobile)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </g>

                  </svg>

                  <svg className="pointer-events-none absolute inset-0 hidden h-full w-full sm:block" viewBox="0 0 640 560" fill="none">
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
                      <path d="M120 270H150V280H240" stroke="url(#integrationLineA)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M520 270H490V280H400" stroke="url(#integrationLineA)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
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

                  <div className="absolute left-1/2 top-1/2 z-20 w-[56px] sm:w-[164px] -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                      className="rounded-[1.1rem] sm:rounded-[1.6rem] bg-transparent sm:bg-gradient-to-r sm:from-[#8b5cf6] sm:via-[#ec4899] sm:to-[#60a5fa] sm:bg-[length:220%_220%] p-0 sm:p-[1.5px] shadow-none sm:shadow-[0_0_85px_rgba(168,85,247,0.5)]"
                    >
                      <div className="rounded-[calc(1.1rem-1.5px)] sm:rounded-[calc(1.6rem-1.5px)] border-0 sm:border sm:border-white/10 bg-transparent sm:bg-[#171428]/95 px-0 sm:px-4 py-0 sm:py-5 text-center">
                        <div className="mx-auto flex h-14 w-14 sm:h-12 sm:w-12 items-center justify-center rounded-[0.85rem] bg-white shadow-[0_0_35px_rgba(168,85,247,0.25)]">
                          <img src={logo} alt="KaryaUp" className="h-8 w-8 sm:h-8 sm:w-8 object-contain" />
                        </div>
                        <div className="mt-3 sm:mt-3.5 hidden sm:block text-[8px] sm:text-[9.5px] font-black uppercase tracking-[0.2em] text-purple-300">
                          Integration hub
                        </div>
                        <div className="mt-1.5 hidden sm:block text-[1.05rem] sm:text-[1.35rem] font-black leading-none tracking-tight text-white">KaryaUp</div>
                        <p className="mt-1.5 hidden sm:block text-[9px] sm:text-[10px] font-medium leading-relaxed text-slate-300">One connected workspace</p>
                      </div>
                    </motion.div>
                  </div>

                  {integrations.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.92, y: 18 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.55, delay: 0.12 * index, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ y: 4, scale: 1.015 }}
                      whileTap={{ scale: 1.01 }}
                      className={`group absolute z-10 w-[72px] sm:w-[180px] rounded-[1.1rem] sm:rounded-[1.45rem] border border-white/10 bg-white/5 p-[1.5px] backdrop-blur-xl shadow-[0_0_32px_rgba(76,29,149,0.16)] ${item.position}`}
                    >
                      <div className="rounded-[calc(1.1rem-1.5px)] sm:rounded-[calc(1.45rem-1.5px)] border border-white/8 bg-[#131526]/95 px-2.5 py-2.5 sm:px-4 sm:py-4 shadow-[0_10px_28px_rgba(0,0,0,0.18)] transition-all duration-500 ease-out group-hover:border-white/20 group-hover:bg-[#17192c]/95 group-hover:shadow-[0_20px_42px_rgba(0,0,0,0.3)]">
                        <div className="flex items-center justify-center sm:justify-start gap-0 sm:gap-3">
                          <div className="flex h-11 w-11 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-white shadow-[0_10px_20px_-14px_rgba(255,255,255,0.4)]">
                            <img src={item.logo} alt={item.name} className="h-6 w-6 sm:h-7 sm:w-7 object-contain" />
                          </div>
                          <div className="min-w-0 hidden sm:block">
                            <div className="text-sm font-black text-white">{item.name}</div>
                            <div className="mt-1 text-xs font-medium leading-relaxed text-slate-400">
                              {item.short}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="pt-4 lg:pt-8 pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-10">
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
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.06] mb-4 sm:mb-6 tracking-tight"
              >
                Works With Your <br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-600 bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                >
                  Existing Tools
                </motion.span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-sm sm:text-base lg:text-lg text-slate-500 font-medium"
              >
                No need to rebuild your workflow. Connect instantly:
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {integrationDetails.map((item, index) => (
                <TiltCard
                  key={item.name}
                  className="bg-white border border-slate-200 hover:border-purple-300 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-purple-900/15 p-7 sm:p-8 rounded-[2rem] cursor-default h-full transition-colors transition-shadow duration-300 group"
                >
                  <div className="flex flex-col h-full">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-5 sm:mb-6 transition-all duration-300 group-hover:shadow-md ${getColorClasses(item.color)}`}>
                      <img
                        src={item.logo}
                        alt={item.name}
                        className={`${item.name === "Microsoft Teams" ? "w-7 h-7 sm:w-8 sm:h-8 mix-blend-multiply" : "w-5 h-5 sm:w-6 sm:h-6"} object-contain`}
                        style={{ filter: item.color === 'white' ? 'none' : '' }}
                      />
                    </div>

                    <div className="flex-grow flex flex-col">
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2.5 leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-slate-600 text-sm font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        <FeatureCTA
          title={<>Integrations That Keep <br /> Your Stack Connected</>}
          description="Bring your tools into one workflow and let KaryaUp keep meetings, files, email, and notifications in sync."
          buttonText="Explore integrations"
          image={app}
          imageAlt="KaryaUp integrations dashboard"
          containerClassName="mt-0"
          imageClassName="w-full max-w-[760px]"
          imageOuterClassName="relative w-[108%] sm:w-[102%] lg:w-[88%] mx-auto translate-x-0 lg:translate-x-3"
        />
      </div>
    </>
  );
}
