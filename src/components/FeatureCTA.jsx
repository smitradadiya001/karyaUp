import React, { useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useVelocity,
  useTransform,
} from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import logo from "../assets/logo.webp";

const authUrl = "https://app.karyaup.com/auth";

export default function FeatureCTA({
  title,
  description,
  eyebrow,
  highlights,
  buttonText = "Get Started. It's FREE",
  extra,
  image,
  imageAlt = "KaryaUp Showcase",
  imageClassName = "w-full",
  containerClassName = "mt-24 mb-10",
  paddingClassName = "p-1.5 sm:p-3 lg:p-4",
  titleClassName = "text-xl sm:text-2xl lg:text-[1.75rem] font-black text-white leading-[1.1] mb-2 tracking-tight drop-shadow-lg",
  imageOuterClassName = "relative w-full max-w-[300px] sm:max-w-[460px] lg:max-w-none lg:w-full lg:max-w-[560px] mx-auto lg:mx-0 translate-x-0 lg:translate-x-6",
  imageSectionClassName = "flex-[1.5] xl:flex-[1.4] relative mt-2 lg:mt-0 flex items-center justify-center lg:justify-end p-2 lg:p-4 lg:pr-8",
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tracking logic for custom cursor
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Chained springs for snake effect
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

  // Create a spring-smoothed opacity that reacts to movement
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

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleAuthRedirect = () => {
    window.location.href = authUrl;
  };

  return (
    <section
      className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative rounded-[2.5rem] overflow-hidden bg-black flex flex-col lg:flex-row items-stretch ${paddingClassName} ${isHovered ? "cursor-none" : ""}`}
      >
        {/* Snake Trail Effect */}
        {segments.map((seg, i) => (
          <motion.div
            key={i}
            className="absolute pointer-events-none z-[100] rounded-full mix-blend-screen"
            style={{
              width: seg.size,
              height: seg.size,
              left: seg.x,
              top: seg.y,
              x: "-50%",
              y: "-50%",
              opacity: useTransform([movementOpacity], ([v]) =>
                isHovered ? (i === 0 ? seg.opacity : v * seg.opacity) : 0,
              ),
              scale: isHovered ? 1 : 0,
              background: `radial-gradient(circle, rgba(192, 38, 211, 0.9) 0%, rgba(168, 85, 247, 0) 70%)`,
              filter: `blur(${seg.blur}px)`,
            }}
          />
        ))}

        {/* Lead Cursor Glow (Extra diffuse, always shows when hovered) */}
        <motion.div
          className="absolute w-80 h-80 pointer-events-none z-[90] rounded-full mix-blend-screen"
          style={{
            left: s1x,
            top: s1y,
            x: "-50%",
            y: "-50%",
            opacity: isHovered ? 0.45 : 0,
            scale: isHovered ? 1 : 0,
            background:
              "radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        {/* Ambient Background Gradients for Depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(168,85,247,0.4),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(236,72,153,0.1),transparent_40%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(126,34,206,0.1),transparent_40%)] pointer-events-none" />

        {/* Left Content Area */}
        <div className="flex-[0.5] xl:flex-[0.6] z-20 text-center lg:text-left flex flex-col items-center lg:items-start justify-center pt-3 lg:pt-5 pb-0 lg:pb-3 px-4 lg:pl-10 lg:pr-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-11 mb-4 self-center lg:self-start flex items-center gap-3"
          >
            {/* Dual-layer Logo: Colorful Icon + White Text */}
            <div className="relative h-full flex items-center">
              {/* White Base (Text and Icon) */}
              <img
                src={logo}
                alt="KaryaUp"
                width="160"
                height="44"
                loading="lazy"
                className="h-full w-auto filter brightness-0 invert opacity-100"
              />
              {/* Colorful Overlay (Icon only) */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ clipPath: "inset(0 75% 0 0)" }}
              >
                <img
                  src={logo}
                  alt=""
                  width="160"
                  height="44"
                  loading="lazy"
                  className="h-full w-auto"
                />
              </div>
            </div>
          </motion.div>
          {eyebrow ? (
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 text-[10px] font-black uppercase tracking-[0.18em] text-purple-200/95 mb-3 self-center lg:self-start"
            >
              {eyebrow}
            </motion.span>
          ) : null}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={titleClassName}
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-[13px] sm:text-sm font-medium mb-4 max-w-xs mx-auto lg:mx-0 leading-relaxed"
          >
            {description}
          </motion.p>
          {Array.isArray(highlights) && highlights.length > 0 ? (
            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="mb-5 w-full max-w-md mx-auto lg:mx-0 space-y-2.5 text-left"
            >
              {highlights.map((line, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-slate-300 text-[13px] sm:text-sm font-medium leading-snug"
                >
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-fuchsia-400" strokeWidth={3} />
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </motion.ul>
          ) : null}
          <motion.button
            type="button"
            onClick={handleAuthRedirect}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group relative z-10 flex h-[3.5em] w-full max-w-[14em] shrink-0 items-center justify-center overflow-hidden rounded-[30em] font-bold text-[15px] transition-all duration-300 self-center lg:self-start cursor-pointer"
            style={{
              boxShadow: "0 18px 40px rgba(126, 34, 206, 0.22)",
            }}
          >
            <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#7e22ce] to-fuchsia-500" />
            <div className="absolute -inset-[3px] -z-10 origin-left scale-x-0 rounded-[30em] bg-white transition-transform duration-500 ease-in-out group-hover:scale-x-100" />
            <span className="relative z-10 flex items-center justify-center gap-3 text-white transition-colors duration-300 group-hover:text-slate-800">
              {buttonText}
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1.5"
              />
            </span>
          </motion.button>
          {extra && (
            <div className="mt-6 w-full opacity-90">
              {extra}
            </div>
          )}
        </div>

        {/* Right Content Area: Interface Showcase with Glows */}
        <div className={imageSectionClassName}>
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 80, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className={imageOuterClassName}
          >
            {/* Light spot overlay on image left side */}
            <div className="absolute top-1/4 -left-10 w-64 h-64 bg-white/10 blur-[80px] rounded-full z-30 pointer-events-none" />

            {/* Accent Gradient Glow around/behind image */}
            <div className="absolute top-1/2 left-0 w-full h-full bg-purple-600/50 blur-[150px] rounded-full opacity-70 pointer-events-none" />
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-fuchsia-500/30 blur-[100px] rounded-full opacity-60 pointer-events-none" />

            {/* Image Wrapper (No border line, just smooth shadow/glow) */}
            <div className={`relative ${imageClassName}`}>
              <img
                src={image}
                alt={imageAlt}
                width="960"
                height="600"
                loading="lazy"
                className="relative w-full h-auto max-h-[360px] sm:max-h-[420px] lg:max-h-[500px] object-contain rounded-[12px] transition-all duration-500 z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
