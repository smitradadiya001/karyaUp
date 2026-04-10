import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import logo from "../../assets/logo.webp";
import microsoftTeamsLogo from "../../assets/Teams-logo.webp";
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
    color: "purple"
  },
  {
    name: "Google Drive",
    logo: googleDriveLogo,
    desc: "Access files, attach documents, and keep project resources linked without opening another workspace.",
    color: "purple"
  },
  {
    name: "Gmail",
    logo: gmailLogo,
    desc: "Read and send emails inside KaryaUp so client communication stays connected to project execution.",
    color: "purple"
  },
  {
    name: "Google Meet",
    logo: googleMeetLogo,
    desc: "Schedule meetings with a Meet link and manage upcoming calls from the same connected workflow.",
    color: "purple"
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
    color: "purple"
  },
];

export default function Integrations() {
  const [isMobile, setIsMobile] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHoveredOrbit, setIsHoveredOrbit] = useState(false);

  // Snake trail springs for high-end cursor effect
  const trailConfig = [
    { stiffness: 220, damping: 24 },
    { stiffness: 180, damping: 21 },
    { stiffness: 140, damping: 18 },
    { stiffness: 100, damping: 15 },
    { stiffness: 70, damping: 12 },
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

  const segments = [
    { x: s1x, y: s1y, size: 110, opacity: 0.5, blur: 14 },
    { x: s2x, y: s2y, size: 90, opacity: 0.4, blur: 18 },
    { x: s3x, y: s3y, size: 70, opacity: 0.35, blur: 22 },
    { x: s4x, y: s4y, size: 55, opacity: 0.25, blur: 26 },
    { x: s5x, y: s5y, size: 40, opacity: 0.15, blur: 30 },
  ];

  const handleHubMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

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
      <div className="min-h-screen bg-white pt-20 sm:pt-24 pb-12 sm:pb-16 lg:pb-20 text-slate-900">
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
                  className="mt-4 sm:mt-5 text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black tracking-normal leading-[1.05] text-slate-900"
                >
                  Integrate This <br /> Apps With Your
                  <span className="block">
                    {" "}
                    <motion.span
                      className="bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto] bg-clip-text text-transparent"
                      animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      Workspace
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
                <div 
                  onMouseMove={handleHubMouseMove}
                  onMouseEnter={() => setIsHoveredOrbit(true)}
                  onMouseLeave={() => setIsHoveredOrbit(false)}
                  className={`relative aspect-square sm:aspect-auto sm:h-[500px] w-full overflow-hidden rounded-[2.1rem] sm:rounded-[2.35rem] border border-slate-800/50 bg-[#080516] flex items-center justify-center p-3 sm:p-4 ${isHoveredOrbit ? 'cursor-none' : ''}`}
                >
                  {segments.map((seg, i) => (
                    <motion.div
                      key={i}
                      className="absolute pointer-events-none z-[60] rounded-full mix-blend-screen"
                      style={{
                        width: seg.size,
                        height: seg.size,
                        left: seg.x,
                        top: seg.y,
                        x: "-50%",
                        y: "-50%",
                        opacity: isHoveredOrbit ? seg.opacity : 0,
                        background: `radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, rgba(168, 85, 247, 0) 70%)`,
                        filter: `blur(${seg.blur}px)`,
                        scale: isHoveredOrbit ? 1 : 0
                      }}
                    />
                  ))}

                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle_at_50%_50%,rgba(126,34,206,0.15),transparent_60%)]" />
                    <motion.div
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-[radial-gradient(circle_at_50%_50%,rgba(192,38,211,0.1),transparent_50%)]"
                    />
                  </div>

                  <div className="absolute inset-0 opacity-[0.1] mix-blend-screen">
                    <svg className="h-full w-full">
                      <filter id="integrationNoise">
                        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
                      </filter>
                      <rect width="100%" height="100%" filter="url(#integrationNoise)" />
                    </svg>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                    {[
                      isMobile ? 48 : 100,
                      isMobile ? 68 : 130,
                      isMobile ? 88 : 160,
                      isMobile ? 108 : 190,
                      isMobile ? 128 : 220,
                      isMobile ? 148 : 245
                    ].map((radius, i) => (
                      <div
                        key={i}
                        className="absolute rounded-full border border-purple-500/40 shadow-[0_0_12px_rgba(168,85,247,0.15)]"
                        style={{
                          width: radius * 2,
                          height: radius * 2
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative z-30 flex flex-col items-center">
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 40px rgba(126, 34, 206, 0.4)",
                          "0 0 80px rgba(126, 34, 206, 0.7)",
                          "0 0 40px rgba(126, 34, 206, 0.4)"
                        ]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white shadow-2xl relative overflow-hidden border border-purple-100/50"
                    >
                      <img src="/KaryaUp.jpeg" alt="KaryaUp Symbol" className="h-full w-full object-cover" />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/10 to-transparent pointer-events-none" />
                    </motion.div>
                  </div>

                  {integrations.map((item, index) => {
                    const baseDuration = 48;
                    const configs = [
                      { radius: isMobile ? 48 : 100, angle: 0 },
                      { radius: isMobile ? 68 : 130, angle: 60 },
                      { radius: isMobile ? 88 : 160, angle: 120 },
                      { radius: isMobile ? 108 : 190, angle: 180 },
                      { radius: isMobile ? 128 : 220, angle: 240 },
                      { radius: isMobile ? 148 : 245, angle: 300 },
                    ];
                    const cfg = configs[index];

                    return (
                      <motion.div
                        key={item.name}
                        animate={{ rotate: [cfg.angle, cfg.angle + 360] }}
                        transition={{
                          duration: baseDuration,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="absolute w-full h-full flex items-center justify-center pointer-events-none"
                      >
                        <div
                          className="absolute pointer-events-auto"
                          style={{
                            transform: `translateX(${cfg.radius}px)`
                          }}
                        >
                          <motion.div
                            animate={{ rotate: [-(cfg.angle), -(cfg.angle + 360)] }}
                            transition={{
                              duration: baseDuration,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                            whileHover={{ scale: 1.15 }}
                            className="group flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#131526]/90 border border-white/10 shadow-lg backdrop-blur-md cursor-pointer transition-colors hover:border-purple-500/50 hover:bg-[#17192c]"
                          >
                            <img
                              src={item.logo}
                              alt={item.name}
                              className={`${item.name === 'Teams' ? 'h-full w-full p-0.5' : 'h-4 w-4 sm:h-5 sm:w-5'} object-contain brightness-110 group-hover:brightness-125 transition-all`}
                            />
                            <div className="absolute -inset-[1px] rounded-full bg-gradient-to-tr from-purple-500/0 via-purple-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </motion.div>
                        </div>
                      </motion.div>
                    );
                  })}
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
                className="text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 leading-[1.05] mb-4 sm:mb-6 tracking-normal"
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
                        className={`${item.name === "Microsoft Teams" ? "w-8 h-8 sm:w-11 sm:h-11" : "w-5 h-5 sm:w-6 sm:h-6"} object-contain`}
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
          title={<>Integrations That Keep  Your Stack Connected</>}
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
