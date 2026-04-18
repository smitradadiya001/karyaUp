import { useState, useRef, useCallback, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useVelocity,
  useTransform,
} from "framer-motion";
import logo from "../assets/logo.webp";
import slackIcon from "../assets/slack.svg";
import teamsIcon from "../assets/Teams-logo.webp";
import calendarIcon from "../assets/google-calendar.svg";
import driveIcon from "../assets/google-drive.svg";
import mailIcon from "../assets/gmail.svg";

const integrations = [
  { name: "Slack", icon: slackIcon },
  { name: "Teams", icon: teamsIcon },
  { name: "Calendar", icon: calendarIcon },
  { name: "Drive", icon: driveIcon },
  { name: "Mail", icon: mailIcon },
];

const rightLabels = [" Knowledge", "Capabilities", "Engagement"];
const leftLabels = ["Siloed Info", "Context Loss", "Manual Sync"];

export default function IntegrationReveal({ className = "" }) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const animFrameRef = useRef(null);
  const targetRef = useRef(50);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mouse move for desktop
  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    targetRef.current = Math.max(15, Math.min(85, x));
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  useEffect(() => {
    let running = true;
    let phase = 0; // for the sine wave

    const animate = () => {
      if (!running) return;

      if (isMobile || !isHovered) {
        // Continuous smooth auto-sweep (Math.sin mapping -1 to 1)
        phase += 0.035; // Increased animation speed
        const autoSweepPos = 50 + Math.sin(phase) * 35; // Oscillation between 15 and 85

        setSliderPos((prev) => {
          const diff = autoSweepPos - prev;
          return prev + diff * 0.1; // Smooth interpolation
        });
      } else {
        // Follow Desktop Cursor
        setSliderPos((prev) => {
          const diff = targetRef.current - prev;
          if (Math.abs(diff) < 0.3) return targetRef.current;
          return prev + diff * 0.08;
        });
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      running = false;
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isMobile, isHovered]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full select-none overflow-hidden rounded-2xl bg-[#020617] ${className}`}
      style={{ minHeight: "200px" }}
      onMouseMove={!isMobile ? handleMouseMove : undefined}
      onMouseEnter={!isMobile ? handleMouseEnter : undefined}
      onMouseLeave={!isMobile ? handleMouseLeave : undefined}
    >
      {/* LEFT SIDE — Integration icons */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Left Labels — hidden on mobile */}
          <div className="absolute left-2 sm:left-6 lg:left-20 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <div className="flex flex-col items-end gap-5 md:gap-8 relative pr-2 md:pr-0">
              {leftLabels.map((label, i) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.95)] flex-shrink-0 order-3" />
                  <div
                    className="h-px bg-gradient-to-l from-purple-500/40 to-transparent hidden md:block order-2"
                    style={{ width: `40px` }}
                  />
                  <span className="text-white/70 font-black text-[9px] md:text-xs tracking-[0.15em] md:tracking-[0.2em] uppercase whitespace-nowrap order-1">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`flex flex-col items-center gap-2 md:gap-3 pr-4 sm:pr-32 relative z-0 transition-transform duration-300`}
          >
            {integrations.map((item, i) => (
              <div
                key={item.name}
                className="flex items-center gap-3"
                style={{
                  animation: `integSlideInLeft 0.6s ease-out ${i * 0.08}s both`,
                }}
              >
                <div className="flex items-center gap-2 md:gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2 md:px-4 md:py-2 hover:bg-white/10 transition-all duration-300 min-w-[130px] md:min-w-[140px]">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className={`w-6 h-6 md:w-6 md:h-6 object-contain ${item.name === "Teams" ? "[mix-blend-mode:plus-lighter] filter contrast-125" : ""}`}
                  />
                  <span className="text-white/80 font-bold text-[11px] md:text-xs tracking-wider uppercase">
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE — KaryaUp logo */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
      >
        <div className="relative w-full h-full overflow-visible">
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={logo}
              alt="KaryaUp"
              className="w-48 md:w-64 drop-shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-all duration-300"
              style={{
                animation: "integPulseGlow 3s ease-in-out infinite",
              }}
            />
          </div>

          {/* Right Labels — hidden on mobile */}
          <div className="absolute right-2 sm:right-6 lg:right-20 top-1/2 -translate-y-1/2 hidden md:block">
            <div className="flex flex-col gap-5 md:gap-8 relative pl-2 md:pl-0">
              {rightLabels.map((label, i) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.95)] flex-shrink-0" />
                  <div
                    className="h-px bg-gradient-to-r from-purple-500/40 to-transparent hidden md:block"
                    style={{ width: `40px` }}
                  />
                  <span className="text-white/70 font-black text-[9px] md:text-xs tracking-[0.15em] md:tracking-[0.2em] uppercase whitespace-nowrap">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider — Brighter with Bubbles — Only visible on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobile || isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute top-0 bottom-0 z-20 pointer-events-none"
        style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
      >
        {/* Intense Line Glow */}
        <div className="absolute inset-y-0 w-[40px] -translate-x-1/2 left-1/2 bg-purple-500/20 blur-[20px]" />

        {/* The Brighter Line */}
        <div className="absolute inset-y-0 w-[2.5px] mx-auto bg-gradient-to-b from-purple-400/0 via-white to-purple-400/0 shadow-[0_0_15px_rgba(255,255,255,0.8),0_0_30px_rgba(168,85,247,0.6)]" />

        {/* Bubbles / Particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full blur-[0.5px]"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${(Math.random() - 0.5) * 40}px`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animation: `lineBubble ${Math.random() * 4 + 3}s ease-in-out ${Math.random() * 2}s infinite`,
            }}
          />
        ))}

        {/* Center handle knob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-purple-500/30 border border-purple-400/60 backdrop-blur-sm flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_white]" />
        </div>
      </motion.div>

      <style>{`
        @keyframes integSlideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes integPulseGlow {
          0%, 100% { filter: drop-shadow(0 0 20px rgba(139,92,246,0.4)); }
          50% { filter: drop-shadow(0 0 40px rgba(139,92,246,0.7)); }
        }
        @keyframes lineBubble {
          0%, 100% { transform: translate(0, 0); opacity: 0; scale: 0.5; }
          30%, 70% { opacity: 0.8; scale: 1; }
          50% { transform: translate(${(Math.random() - 0.5) * 30}px, ${(Math.random() - 0.5) * 60}px); }
        }
      `}</style>
    </div>
  );
}
