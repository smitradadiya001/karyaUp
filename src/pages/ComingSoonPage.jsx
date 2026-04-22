import React, { useRef, useState, useEffect } from "react";
import { FlipText } from "../components/ui/FlipText";
import { motion, useMotionValue, useSpring, useTransform, useInView, animate, AnimatePresence, useVelocity } from "framer-motion";
import { Helmet } from "react-helmet-async";
import logo from "../assets/Logo(2).png";
import { Countdown } from "../components/Countdown";
import { ApplicationForm } from "../components/ApplicationForm";
import ComingSoon from "../components/ComingSoon";
import InteractiveRays from "../components/InteractiveRays";
import { XCircle, Layers, EyeOff, Shuffle, ArrowRight, Sparkles } from "lucide-react";
import logo2 from "../assets/Logo(2).png";
import osImage from "../assets/os.webp";
import slackIcon from "../assets/slack.svg";
import clickupIcon from "../assets/ClickUp.webp";
import gmailIcon from "../assets/gmail.svg";
import whatsappIcon from "../assets/whatsapp.webp";
import jiraIcon from "../assets/Jira.webp";
import zapierIcon from "../assets/zapier.webp";
import calIcon from "../assets/google-calendar.svg";
import teamsIcon from "../assets/microsoft-teams.svg";
import driveIcon from "../assets/google-drive.svg";
import confusedLine from "../assets/confused-line.webp";
import zoominfoIcon from "../assets/zoominfo.webp";
import hubspotIcon from "../assets/hubspot.webp";
import hubstaffIcon from "../assets/hubstaff.webp";
import notionIcon from "../assets/notion.webp";
import CollabTiltCard from "../components/CollabTiltCard";
import NotebookExclusivity from "../components/NotebookExclusivity";


const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

// Spotlight/Torch Effect Component
function SpotlightHero() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Calculate angle for the rotating torch beam
  const getAngle = () => {
    if (!containerRef.current) return 0;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const dx = mousePosition.x - centerX;
    const dy = mousePosition.y - 0; // Origin is top center
    const angleRad = Math.atan2(dy, dx);
    const angleDeg = (angleRad * 180) / Math.PI;
    return angleDeg - 90; // Offset because polygon points down (90deg)
  };

  const torchRotation = useSpring(0, { stiffness: 60, damping: 20 });
  
  useEffect(() => {
    if (isHovering) {
      torchRotation.set(getAngle());
    } else {
      torchRotation.set(0);
    }
  }, [mousePosition, isHovering]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative min-h-[75vh] w-full overflow-hidden bg-[#fafafa] pt-10"
    >
      {/* Grid Pattern Background - Masked to be visible only in middle */}
      <div 
        className="absolute inset-0 opacity-[0.06] z-0"
        style={{
          backgroundImage: `
            linear-gradient(#000 1px, transparent 1px),
            linear-gradient(90deg, #000 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(circle at 50% 40%, #000 10%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 40%, #000 10%, transparent 70%)',
        }}
      />

      {/* Animated Rotating Yellow Halogen Torch Effect from Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.35, scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          style={{
            rotate: torchRotation,
            transformOrigin: 'top center',
          }}
          className="absolute top-0 left-1/2 -ml-[600px] w-[1200px] h-[140%]"
        >
          <div 
            style={{
              background: 'linear-gradient(to bottom, rgba(253, 224, 71, 0.5), transparent)',
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              filter: 'blur(70px)',
            }}
            className="w-full h-full"
          />
        </motion.div>
        
        {/* Top intensity glow source */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-12 bg-yellow-200/40 blur-3xl rounded-full" />
      </div>

      {/* Subtle Interactive Gray Spotlight Effect (Mouse Glow) */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-1"
        animate={{
          background: isHovering
            ? `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(15,23,42,0.03), transparent 70%)`
            : 'radial-gradient(350px circle at 50% 40%, rgba(15,23,42,0.01), transparent 70%)',
        }}
        transition={{ duration: 0.1, ease: 'linear' }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-20 text-center">
        {/* Countdown Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 w-fit"
        >
          <div className="backdrop-blur-sm bg-slate-50/50 border border-slate-200 px-5 py-2 rounded-full shadow-sm text-slate-900">
            <Countdown />
          </div>
        </motion.div>

        {/* Main Headline - Fixed clipping with pb-2 */}
        <div className="flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[2.6rem] sm:text-[3.2rem] lg:text-[4.5rem] font-black leading-[1.1] tracking-tight text-slate-950 pb-2"
          >
           Something Powerful Is Coming 
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="pb-2"
          >
            <FlipText 
              className="text-[2.6rem] sm:text-[3.2rem] lg:text-[4.5rem] font-black leading-[1.1] tracking-tight text-slate-900"
              duration={4.5}
            >
              to Run Your Business
            </FlipText>
          </motion.div>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mx-auto mt-10 max-w-2xl text-base font-medium leading-relaxed text-slate-500 sm:text-lg"
        >
          KaryaUp is opening access to only 100 companies before public launch.
        </motion.p>

        {/* CTA Buttons - Black Pill Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-col items-center gap-6"
        >
          <a
            href="#apply"
            className="group relative flex h-[3.8em] w-full max-w-[19em] shrink-0 items-center justify-center overflow-hidden rounded-full font-bold text-[15px] transition-all duration-300 active:scale-95 bg-slate-950 text-white shadow-2xl shadow-slate-200"
          >
            <span className="relative z-10 flex items-center gap-2">
              Apply for Early Access <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-900 to-slate-800" />
          </a>

          <p className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400">
            Strictly limited to 100 spots
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function OperatingSystemSVG() {
  return (
    <div className="relative h-full w-full min-h-[300px] flex items-center justify-center overflow-visible">
      {/* Background Glow */}
      <div className="absolute h-[300px] w-[300px] rounded-full bg-purple-600/20 blur-[100px] animate-pulse" />

      <svg viewBox="0 0 400 400" className="w-full max-w-[400px] drop-shadow-[0_0_30px_rgba(126,34,206,0.3)]">
        {/* Animated Connecting Lines (Circuits) */}
        <g stroke="#9333ea" strokeWidth="1.5" fill="none" opacity="0.4">
          <motion.path
            d="M200 200 L200 100 M200 100 L150 50 M200 100 L250 50"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.path
            d="M200 200 L200 300 M200 300 L150 350 M200 300 L250 350"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.path
            d="M200 200 L100 200 M100 200 L50 150 M100 200 L50 250"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.2, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.path
            d="M200 200 L300 200 M300 200 L350 150 M300 200 L350 250"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.8, repeat: Infinity, repeatType: "reverse" }}
          />
        </g>

        {/* Pulsing Data Nodes */}
        {[
          { cx: 150, cy: 50 }, { cx: 250, cy: 50 }, { cx: 150, cy: 350 }, { cx: 250, cy: 350 },
          { cx: 50, cy: 150 }, { cx: 50, cy: 250 }, { cx: 350, cy: 150 }, { cx: 350, cy: 250 }
        ].map((node, i) => (
          <motion.circle
            key={node.cx + '-' + node.cy}
            cx={node.cx}
            cy={node.cy}
            r="4"
            fill="#f5d0fe"
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2 + i * 0.2, repeat: Infinity }}
          />
        ))}

        {/* Central OS Core Node */}
        <motion.g
          animate={{ scale: [0.98, 1.02, 0.98] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Outer Ring */}
          <circle cx="200" cy="200" r="55" fill="none" stroke="#7e22ce" strokeWidth="1" strokeDasharray="5 5" className="animate-spin-slow" />
          {/* Inner Box */}
          <rect x="155" y="155" width="90" height="90" rx="16" fill="#030712" stroke="#9333ea" strokeWidth="2" />
          <rect x="155" y="155" width="90" height="90" rx="16" fill="url(#coreGlow)" opacity="0.3" />

          <text x="200" y="195" textAnchor="middle" className="fill-white font-black text-[10px] tracking-[0.2em] uppercase">KaryaUp</text>
          <text x="200" y="215" textAnchor="middle" className="fill-fuchsia-400 font-bold text-[8px] tracking-[0.1em] uppercase">Core OS</text>
        </motion.g>

        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#9333ea" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(useTransform(rawY, [-1, 1], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(rawX, [-1, 1], [-10, 10]), { stiffness: 300, damping: 30 });

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
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', transformPerspective: 1200 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      tabIndex={0}
      className={`${className} outline-none`}
    >
      <div style={{ transform: 'translateZ(20px)' }} className="h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
};

function Counter({ target }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(count, target, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, target, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}



function IntegrationCircle() {
  const innerApps = [
    { name: "Slack", icon: slackIcon },
    { name: "Teams", icon: teamsIcon },
    { name: "Gmail", icon: gmailIcon },
    { name: "Drive", icon: driveIcon },
    { name: "Calendar", icon: calIcon },
    { name: "Whatsapp", icon: whatsappIcon },
  ];

  const outerApps = [
    { name: "Zapier", icon: zapierIcon },
    { name: "ZoomInfo", icon: zoominfoIcon },
    { name: "Notion", icon: notionIcon },
    { name: "HubSpot", icon: hubspotIcon },
    { name: "Hubstaff", icon: hubstaffIcon },
    { name: "Jira", icon: jiraIcon },
  ];

  // Circle radii - Compacted
  const radiusInner = 90;
  const radiusOuter = 150;
  const centerX = 200;
  const centerY = 200;

  return (
    <div className="relative flex items-center justify-center h-[380px] w-full scale-[0.8] sm:scale-100 transition-transform duration-500">
      <div className="absolute inset-0 bg-[#030712] rounded-full blur-[100px] opacity-10" />

      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
        {[...innerApps, ...outerApps].map((app, i) => {
          const isOuter = i >= innerApps.length;
          const appsInRing = isOuter ? outerApps.length : innerApps.length;
          const indexInRing = isOuter ? i - innerApps.length : i;
          const radius = isOuter ? radiusOuter : radiusInner;

          // Offset outer ring by 30 degrees so lines pass between inner apps
          const angle = (indexInRing * 360) / appsInRing + (isOuter ? 30 : 0);
          const x = centerX + radius * Math.cos((angle * Math.PI) / 180);
          const y = centerY + radius * Math.sin((angle * Math.PI) / 180);

          return (
            <g key={app.name}>
              {/* Connection Line with fade gradient effect */}
              <motion.line
                x1={centerX}
                y1={centerY}
                x2={x}
                y2={y}
                stroke="#22c55e"
                strokeWidth="1"
                strokeOpacity="0.08"
              />

              {/* Glowing Line Animation */}
              <motion.line
                x1={x}
                y1={y}
                x2={centerX}
                y2={centerY}
                stroke="#22c55e"
                strokeWidth="2"
                strokeDasharray="5, 15"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 1, 1],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: isOuter ? 2.5 : 2,
                  repeat: Infinity,
                  delay: i * 0.6,
                  ease: "easeInOut"
                }}
              />

              {/* Traveling Pulse Dot */}
              <motion.circle
                r={isOuter ? "3" : "4"}
                fill="#22c55e"
                initial={{ cx: x, cy: y, opacity: 0 }}
                animate={{
                  cx: [x, centerX],
                  cy: [y, centerY],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: isOuter ? 2.5 : 2,
                  repeat: Infinity,
                  delay: i * 0.6,
                  ease: "easeInOut"
                }}
                className="shadow-[0_0_10px_#22c55e]"
              />
            </g>
          );
        })}
      </svg>

      {/* Center KaryaUp Logo Hub - Scale adjust */}
      <motion.div
        className="relative z-20 flex h-24 w-24 items-center justify-center rounded-full border-2 border-emerald-500/30 bg-white"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <img src={logo} alt="KaryaUp" className="h-12 w-12 object-contain" />
        <div className="absolute inset-0 rounded-full animate-ping bg-emerald-500/10" />
      </motion.div>

      {/* Render All App Circles across two rings */}
      {[...innerApps, ...outerApps].map((app, i) => {
        const isOuter = i >= innerApps.length;
        const appsInRing = isOuter ? outerApps.length : innerApps.length;
        const indexInRing = isOuter ? i - innerApps.length : i;
        const radius = isOuter ? radiusOuter : radiusInner;

        const angle = (indexInRing * 360) / appsInRing + (isOuter ? 30 : 0);
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);

        return (
          <motion.div
            key={app.name}
            className={`absolute z-30 flex items-center justify-center rounded-full border border-emerald-100 bg-white ${isOuter ? 'h-11 w-11' : 'h-13 w-13'}`}
            style={{
              x: x,
              y: y,
            }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.08, type: "spring" }}
          >
            <img
              src={app.icon}
              alt={app.name}
              className={`${isOuter ? 'h-5 w-5' : 'h-6 w-6'} object-contain`}
            />
          </motion.div>
        );
      })}
    </div>
  );
}

function ChaosVsKarya() {
  return (
    <div className="relative mx-auto mt-2 max-w-6xl overflow-hidden rounded-[2.5rem] border border-slate-200 bg-[#f9fafc] shadow-2xl shadow-purple-900/5">
      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">

        {/* LEFT: Chaos */}
        <div className="relative p-8 sm:p-14 bg-red-50/10 min-h-[380px] flex flex-col justify-between overflow-hidden text-center md:text-left">
          <div className="absolute top-0 left-0 h-48 w-48 bg-rose-500/20 blur-[80px] pointer-events-none rounded-br-full" />
          <div className="absolute bottom-0 left-0 h-48 w-48 bg-rose-500/20 blur-[80px] pointer-events-none rounded-tr-full" />

          <div className="relative z-20 mb-6 flex items-center gap-2 justify-center md:justify-start">
            <div className="h-2 w-2 rounded-full bg-rose-500 animate-ping" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-rose-500">YOUR CURRENT STACK</span>
          </div>

          <div className="relative flex-grow flex items-center justify-center">
            <div className="relative w-full max-w-[1000px] h-[380px] flex items-center justify-center">
              <motion.img
                src={confusedLine}
                alt="Chaos Stacks"
                className="w-full h-full object-contain drop-shadow-xl select-none opacity-40 scale-[1.3] grayscale contrast-[0.8]"
              />
              {[
                { icon: slackIcon, top: "15%", left: "12%", rotate: -15 },
                { icon: teamsIcon, top: "48%", left: "45%", rotate: 20 },
                { icon: gmailIcon, top: "62%", left: "8%", rotate: -12 },
                { icon: driveIcon, top: "28%", left: "28%", rotate: 25 },
                { icon: whatsappIcon, top: "35%", left: "75%", rotate: -8 },
                { icon: calIcon, top: "10%", left: "85%", rotate: 10 },
                { icon: jiraIcon, top: "75%", left: "40%", rotate: 15 },
                { icon: hubspotIcon, top: "5%", left: "45%", rotate: -20 },
                { icon: hubstaffIcon, top: "70%", left: "78%", rotate: -10 },
                { icon: zapierIcon, top: "35%", left: "55%", rotate: 25 },
                { icon: notionIcon, top: "20%", left: "65%", rotate: -18 },
                { icon: clickupIcon, top: "55%", left: "25%", rotate: 12 },
                { icon: zoominfoIcon, top: "80%", left: "60%", rotate: -22 },
              ].map((app, i) => (
                <motion.div
                  key={i}
                  className="absolute flex h-14 w-14 items-center justify-center rounded-full bg-white/90 border border-rose-100 p-3"
                  style={{ top: app.top, left: app.left, rotate: app.rotate }}
                >
                  <img src={app.icon} className="w-full h-full object-contain" alt="app" />
                </motion.div>
              ))}
            </div>
          </div>
          <p className="relative z-20 mt-8 text-lg font-medium text-rose-500/80 italic flex items-center gap-2 justify-center md:justify-start">
            Multiple tools open. Zero clarity.
          </p>
        </div>

        {/* RIGHT: Success */}
        <div className="relative flex flex-col justify-between p-8 sm:p-14 bg-emerald-50/10 min-h-[380px] overflow-hidden">
          <div className="absolute top-0 right-0 h-48 w-48 bg-emerald-500/15 blur-[80px] pointer-events-none rounded-bl-full" />
          <div className="absolute bottom-0 right-0 h-48 w-48 bg-emerald-500/10 blur-[80px] pointer-events-none rounded-tl-full" />
          <div className="relative z-20 mb-12 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600">THE KARYAUP SHIFT</span>
          </div>
          <div className="flex-grow flex items-center justify-center">
            <IntegrationCircle />
          </div>
          <p className="relative z-20 mt-12 text-lg font-medium text-emerald-600/80 italic flex items-center gap-2">
            One source of truth. Absolute focus.
          </p>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex h-14 w-14 items-center justify-center rounded-full bg-white border-2 border-slate-200 z-30 font-black text-sm text-slate-500">
          VS
        </div>
      </div>
    </div>
  );
}

const TrailSegment = ({ seg, index, isHovered, movementOpacity }) => {
  const opacity = useTransform(movementOpacity, (v) =>
    isHovered ? (index === 0 ? seg.opacity : v * seg.opacity) : 0,
  );

  return (
    <motion.div
      className="absolute pointer-events-none z-[100] rounded-full mix-blend-screen"
      style={{
        width: seg.size,
        height: seg.size,
        left: seg.x,
        top: seg.y,
        x: "-50%",
        y: "-50%",
        opacity,
        scale: isHovered ? 1 : 0,
        background: `radial-gradient(circle, rgba(168, 85, 247, 0.9) 0%, rgba(168, 85, 247, 0) 70%)`,
        filter: `blur(${seg.blur}px)`,
      }}
    />
  );
};

function ShiftCard() {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

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
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-[2.5rem] bg-[#0a0a0f] px-8 py-8 sm:px-12 md:grid md:grid-cols-2 md:items-center md:gap-10 shadow-2xl shadow-purple-950/40 transition-all duration-500 ${isHovered ? "cursor-none" : ""}`}
    >
      {/* Snake Trail Effect */}
      {segments.map((seg, i) => (
        <TrailSegment
          key={i}
          seg={seg}
          index={i}
          isHovered={isHovered}
          movementOpacity={movementOpacity}
        />
      ))}

      {/* Cursor Glow */}
      <motion.div
        className="absolute w-80 h-80 pointer-events-none z-[90] rounded-full mix-blend-screen"
        style={{
          left: s1x,
          top: s1y,
          x: "-50%",
          y: "-50%",
          opacity: isHovered ? 0.4 : 0,
          scale: isHovered ? 1 : 0,
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Ambient Depth Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(168,85,247,0.3),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(236,72,153,0.08),transparent_40%)] pointer-events-none" />

      {/* LEFT — CONTENT */}
      <div className="relative z-20 text-center md:text-left">
        <h2 className="text-3xl font-black leading-[1.15] tracking-tight text-white sm:text-5xl">
          KaryaUp is your <br />
          <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">Business Operating</span><br />
          <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">System</span>
        </h2>

        <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
          {["Tasks", "CRM", "HR", "Analytics"].map((feat) => (
            <span
              key={feat}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-bold text-white backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
              {feat}
            </span>
          ))}
        </div>

        <p className="mt-8 text-lg font-medium leading-relaxed text-slate-400 max-w-xl">
          Built for <span className="text-white font-bold">founders & operators</span> who are done juggling tools and ready to run everything in one place.
        </p>

        <a
          href="#apply"
          className="group relative mt-10 mx-auto md:mx-0 flex h-[3.8em] w-full max-w-[18em] shrink-0 items-center justify-center overflow-hidden rounded-full font-bold text-[16px] transition-all duration-300 active:scale-95 shadow-[0_20px_50px_rgba(126,34,206,0.3)]"
        >
          <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#7e22ce] to-fuchsia-500" />
          <div className="absolute -inset-[3px] -z-10 origin-left scale-x-0 rounded-full bg-white transition-transform duration-500 ease-in-out group-hover:scale-x-100" />
          <span className="relative z-10 flex items-center gap-2 text-white transition-colors duration-300 group-hover:text-slate-900">
            Apply for Early Access <ArrowRight size={20} className="transition-transform group-hover:translate-x-1.5" />
          </span>
        </a>
      </div>

      {/* RIGHT — OS IMAGE */}
      <div className="relative z-10 mt-12 md:mt-0 flex items-center justify-center">
        <div className="relative group/img">
          <div className="absolute -inset-4 z-20 pointer-events-none rounded-3xl bg-[radial-gradient(circle,transparent_50%,#0a0a0f_100%)] opacity-90" />
          
          <motion.img
            src={osImage}
            alt="Operating System"
            className="relative z-10 w-full max-w-[450px] rounded-3xl object-cover transition-all duration-1000 group-hover/img:brightness-125"
            style={{
              mixBlendMode: "screen",
              filter: "contrast(1.4) brightness(1.1) saturate(1.1)",
            }}
            whileHover={{ scale: 1.02, rotate: 1 }}
          />

          <div className="absolute inset-0 z-0 bg-purple-600/30 blur-[80px] opacity-0 group-hover/img:opacity-100 transition-opacity duration-1000" />
        </div>
      </div>
    </div>
  );
}

export default function ComingSoonPage() {
  return (
    <>
      <Helmet>
        <title>KaryaUp — Stop managing tools. Start running your business.</title>
        <meta name="description" content="KaryaUp is opening access to only 100 companies before public launch. Tasks, CRM, HR and analytics in one Business Operating System." />
        <meta property="og:title" content="KaryaUp — Stop managing tools. Start running your business." />
        <meta property="og:description" content="Early access opening for 100 serious companies. Apply now." />
      </Helmet>

      {/* NEW HERO WITH SPOTLIGHT EFFECT */}
      <SpotlightHero />



      <div className="relative min-h-screen overflow-hidden bg-white text-slate-900">

        {/* LOGO & COUNTDOWN SECTION */}


        {/* Trusted By Marquee Section */}


        {/* CHAOS vs KARYAUP visual */}
        <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
          <motion.div {...fadeUp} className="mx-auto mb-6 max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/70 px-4 py-1.5 text-xs font-semibold text-[#7e22ce] backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7e22ce] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7e22ce]" />
              </span>
              The shift
            </motion.div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-slate-900">
              From  Chaos To One System.
            </h2>
          </motion.div>
          <ChaosVsKarya />
        </section>

        {/* SECTION 2 — THE PROBLEM */}
        <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
          <motion.div {...fadeUp} className="mx-auto mb-10 max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/70 px-4 py-1.5 text-xs font-semibold text-[#7e22ce] backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7e22ce] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7e22ce]" />
              </span>
              The Problem
            </motion.div>
            <h2 className="text-4xl font-bold tracking-normal sm:text-5xl text-slate-900 leading-tight">
              Broken System. Lost Efficiency.
            </h2>

          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            <CollabTiltCard
              item={{
                icon: Layers,
                title: "Too many tools",
                desc: "Notion, Slack, Sheets, ClickUp — context shattered across tabs.",
                color: "purple",
                points: [
                  "Context switching kills 40% of productivity",
                  "Data silos lead to manual double-entry",

                ]
              }}
              delay={0}
            />
            <CollabTiltCard
              item={{
                icon: EyeOff,
                title: "No visibility",
                desc: "You can’t see what’s happening across teams in real time.",
                color: "purple",
                points: [
                  "Project status depends on manual updates",
                  "Invisible bottlenecks slowing execution",

                ]
              }}
              delay={0.1}
            />
            <CollabTiltCard
              item={{
                icon: Shuffle,
                title: "Team misalignment",
                desc: "Everyone works hard. Nothing connects. Output suffers.",
                color: "purple",
                points: [
                  "60% of work is 'work about work'",
                  "Cross-functional communication breakdowns",

                ]
              }}
              delay={0.2}
            />
          </div>
        </section>

        {/* SECTION 3 — BUSINESS OPERATING SYSTEM */}
        <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
          <ShiftCard />
        </section>

        {/* SECTION 4 — EXCLUSIVITY */}
        <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
          <NotebookExclusivity />
        </section>

        {/* SECTION 5 — APPLICATION */}
        <section id="apply" className="relative z-10 mx-auto max-w-3xl px-6 py-16">
          <motion.div {...fadeUp} className="mb-10 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#7e22ce]">
              Application form
            </p>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-slate-900">
              Tell us about your company.
            </h2>
            <p className="mt-3 text-slate-900 font-medium">
              Tell us about your company and its operations. Our team reviews every application to ensure a high-execution community.
            </p>
          </motion.div>
          <motion.div {...fadeUp}>
            <ApplicationForm />
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row border-t border-slate-100 pt-8">
            <img src={logo} alt="KaryaUp" className="h-8 w-auto" />
            <p className="text-xs font-medium text-slate-400">
              © {new Date().getFullYear()} KaryaUp · Stay in the loop — follow us on social media.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
