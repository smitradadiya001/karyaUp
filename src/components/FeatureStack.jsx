import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const FeatureStack = ({ items = [], interval = 2500 }) => {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const containerRef = useRef(null);



  useEffect(() => {
    if (items.length === 0 || hovered) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, interval);
    return () => clearInterval(timer);
  }, [items.length, interval, hovered]);

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
    <motion.div
      ref={containerRef}
      className="relative h-[80px] z-20 w-full max-w-[240px] sm:max-w-[320px] mt-6 lg:mt-8 overflow-visible mx-auto lg:mx-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence mode="popLayout">
        {visibleItems.map(({ offset, item }) => {
          const Icon = item.icon;
          const color = item.iconColor;

          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={
                hovered
                  ? {
                      opacity: 1,
                      scale: 1,
                      y: offset * 54, // Clear separation between cards
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
                delay: hovered ? offset * 0.05 : offset * 0.02,
              }}
              className="absolute top-0 left-0 w-full px-4 sm:px-4 py-1.5 sm:py-2 rounded-xl flex items-center justify-center gap-3"
              style={{
                background:
                  offset === 0
                    ? "linear-gradient(135deg, rgba(226, 232, 240, 0.15) 0%, rgba(203, 213, 225, 0.08) 100%)"
                    : "linear-gradient(135deg, rgba(226, 232, 240, 0.06) 0%, rgba(203, 213, 225, 0.03) 100%)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1.2px solid rgba(0, 0, 0, 0.25)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
              }}
            >
              {/* Icon box with colorful icon */}
              <div className="flex-shrink-0 w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-md border border-black/5 bg-white/25 flex items-center justify-center">
                <Icon
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                  style={{ color: "#9333ea" }} 
                  strokeWidth={2.5}
                />
              </div>

              {/* Precise Small Uppercase Text */}
              <span className="text-[10px] sm:text-[11.5px] font-black tracking-widest text-black uppercase">
                {item.label}
              </span>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
};

export default FeatureStack;
