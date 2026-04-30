import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import MovingPurpleRing from "./MovingPurpleRing";
import { 
  Check, Users, Calendar, Target, ListTree, Zap, MessageSquare, ShieldCheck, 
  BarChart2, Rocket, Settings, CalendarDays, Mail, Globe, Layers, Briefcase, 
  CheckSquare, FileText, Clock, Play, Shuffle, Download, Lightbulb, TrendingUp, 
  BookOpen, GraduationCap, School, Video, Megaphone 
} from "lucide-react";

/**
 * Returns an appropriate icon based on keywords in the feature label
 */
const getIconForLabel = (label) => {
  if (!label) return Check;
  const l = label.toLowerCase();
  
  if (l.includes('assignee') || l.includes('member') || l.includes('team') || l.includes('role')) return Users;
  if (l.includes('date') || l.includes('schedule') || l.includes('calendar')) return CalendarDays;
  if (l.includes('priorit') || l.includes('target')) return Target;
  if (l.includes('task') || l.includes('hierarch') || l.includes('breakdown')) return ListTree;
  if (l.includes('automat') || l.includes('trigger') || l.includes('dynamic')) return Zap;
  if (l.includes('replies') || l.includes('chat') || l.includes('message') || l.includes('channel')) return MessageSquare;
  if (l.includes('permission') || l.includes('enterpris') || l.includes('security')) return ShieldCheck;
  if (l.includes('performance') || l.includes('visibilit') || l.includes('track') || l.includes('balance') || l.includes('calculat')) return BarChart2;
  if (l.includes('launch') || l.includes('rocket')) return Rocket;
  if (l.includes('setting') || l.includes('rule')) return Settings;
  if (l.includes('invite') || l.includes('mail')) return Mail;
  if (l.includes('global') || l.includes('world')) return Globe;
  if (l.includes('view') || l.includes('layer') || l.includes('graphic')) return Layers;
  if (l.includes('leave') || l.includes('briefcase')) return Briefcase;
  if (l.includes('approv') || l.includes('check')) return CheckSquare;
  if (l.includes('payslip') || l.includes('file') || l.includes('sheet') || l.includes('document')) return FileText;
  if (l.includes('histor') || l.includes('time') || l.includes('log') || l.includes('clock')) return Clock;
  if (l.includes('action') || l.includes('play')) return Play;
  if (l.includes('condition') || l.includes('shuffle')) return Shuffle;
  if (l.includes('export') || l.includes('download')) return Download;
  if (l.includes('ideation') || l.includes('bulb')) return Lightbulb;
  if (l.includes('growth') || l.includes('trend')) return TrendingUp;
  if (l.includes('admission')) return BookOpen;
  if (l.includes('learning')) return GraduationCap;
  if (l.includes('admin')) return School;
  if (l.includes('video')) return Video;
  if (l.includes('marketing')) return Megaphone;
  
  return Check;
};

const FeatureStack = ({ items = [], interval = 2500, size = "default", className = "" }) => {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const containerRef = useRef(null);
  const isSmall = size === "sm";
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isExpanded = isMobile ? mobileExpanded : hovered;

  useEffect(() => {
    if (items.length === 0 || isExpanded) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, interval);
    return () => clearInterval(timer);
  }, [items.length, interval, isExpanded]);

  const visibleItems = useMemo(() => {
    if (items.length === 0) return [];
    return [0, 1, 2].map((offset) => {
      const itemIndex = (index + offset) % items.length;
      const rawItem = items[itemIndex];
      
      // Normalize item to object
      let itemObj = typeof rawItem === "string" ? { label: rawItem } : { ...rawItem };
      
      // Apply smart keyword-based icon if one wasn't explicitly provided
      if (!itemObj.icon) {
        itemObj.icon = getIconForLabel(itemObj.label);
      }

      return { offset, item: itemObj };
    });
  }, [items, index]);

  if (items.length === 0) return null;

  return (
    <Motion.div
      ref={containerRef}
      className={`relative z-20 mx-auto mt-4 w-full overflow-visible sm:mt-6 sm:mb-12 md:mb-0 lg:mx-0 lg:mt-8 transition-all duration-500 ease-in-out cursor-pointer sm:cursor-default ${
        isSmall ? "max-w-[210px] sm:max-w-[265px]" : "max-w-[240px] sm:max-w-[320px]"
      } ${
        isExpanded
          ? isSmall
            ? "min-h-[116px] sm:min-h-[86px] lg:min-h-[86px]"
            : "min-h-[132px] sm:min-h-[92px] lg:min-h-[92px]"
          : isSmall
            ? "min-h-[46px] sm:min-h-[86px] lg:min-h-[86px]"
            : "min-h-[54px] sm:min-h-[92px] lg:min-h-[92px]"
      } pb-0 ${isSmall ? "scale-[0.92] origin-top-left" : ""} ${className}`}
      onMouseEnter={() => {
        if (!isMobile) setHovered(true);
      }}
      onMouseLeave={() => {
        if (!isMobile) setHovered(false);
      }}
      onPointerUp={() => {
        if (isMobile) setMobileExpanded((prev) => !prev);
      }}
    >
      <AnimatePresence mode="popLayout">
        {visibleItems.map(({ offset, item }) => {
          const Icon = item.icon;
          const color = item.iconColor;

          return (
            <Motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={
                isExpanded
                  ? {
                      opacity: 1,
                      scale: 1,
                      y: offset * 46,
                      zIndex: 10 - offset,
                    }
                  : {
                      opacity: offset === 0 ? 1 : offset === 1 ? 0.45 : 0.2,
                      scale: 1 - offset * 0.035,
                      y: offset * 11,
                      zIndex: 10 - offset,
                    }
              }
              exit={{
                opacity: 0,
                y: -10,
                scale: 0.95,
                transition: { duration: 0.5, ease: "easeOut" },
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: isExpanded ? offset * 0.05 : offset * 0.02,
              }}
              className="absolute top-0 left-0 w-full"
            >
              <MovingPurpleRing
                className="w-full"
                rounded="rounded-xl"
                ringPadding="p-px"
                innerRounded="rounded-[calc(0.75rem-1px)]"
                delayIndex={offset}
                compact
                subtleOutline
                innerClassName={`flex items-center justify-center gap-3 border border-slate-200/90 bg-white ${
                  isSmall ? "px-3 py-[5px] sm:px-3.5 sm:py-1.5" : "px-4 py-1.5 sm:py-2"
                }`}
              >
                <div className={`flex shrink-0 items-center justify-center rounded-md border border-slate-200/60 bg-white/80 ${
                  isSmall ? "h-5 w-5 sm:h-[22px] sm:w-[22px]" : "h-6 w-6 sm:h-[26px] sm:w-[26px]"
                }`}>
                  <Icon
                    className={isSmall ? "h-2.5 w-2.5 sm:h-3 sm:w-3" : "h-3 w-3 sm:h-3.5 sm:w-3.5"}
                    style={{ color: color || "#9333ea" }}
                    strokeWidth={2.5}
                  />
                </div>
                <span className={`font-black uppercase tracking-widest text-slate-900 ${
                  isSmall ? "text-[9px] sm:text-[10px]" : "text-[10px] sm:text-[11.5px]"
                }`}>
                  {item.label}
                </span>
              </MovingPurpleRing>
            </Motion.div>
          );
        })}
      </AnimatePresence>
    </Motion.div>
  );
};

export default FeatureStack;
