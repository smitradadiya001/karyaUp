import React from "react";
import { motion } from "framer-motion";

import logo from "../assets/Logo(2).png";

import slackIcon from "../assets/slack.svg";
import clickupIcon from "../assets/clickup2.webp";
import gmailIcon from "../assets/gmail.svg";
import whatsappIcon from "../assets/whatsapp.webp";
import jiraIcon from "../assets/jira2.webp";
import zapierIcon from "../assets/zapier.webp";
import calIcon from "../assets/google-calendar.svg";
import teamsIcon from "../assets/microsoft-teams.svg";
import driveIcon from "../assets/google-drive.svg";
import zoominfoIcon from "../assets/zoominfo.webp";
import hubspotIcon from "../assets/hubspot.webp";
import hubstaffIcon from "../assets/hubstaff.webp";
import notionIcon from "../assets/notion.webp";

import TangledPipes from "./TangledPipes";
import TangledPipesMobile from "./TangledPipesMobile";

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
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.6,
                  ease: "easeInOut"
                }}
              />

              {/* Traveling Pulse Dot */}
              <motion.circle
                r={isOuter ? "2" : "2.5"}
                fill="#22c55e"
                initial={{ cx: x, cy: y, opacity: 0 }}
                animate={{
                  cx: [x, centerX],
                  cy: [y, centerY],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.6,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.9, 1]
                }}
                className="shadow-[0_0_8px_#22c55e]"
              />
            </g>
          );
        })}
      </svg>

      {/* Center KaryaUp Logo Hub */}
      <div className="relative z-20 flex h-24 w-24 items-center justify-center rounded-full border-2 border-emerald-500/30 bg-white shadow-xl shadow-emerald-500/5">
        <img src={logo} alt="KaryaUp" className="h-12 w-12 object-contain" />

        {/* Single Large Hub Blink synchronized with TangledPipes pulse */}
        <motion.div 
          className="absolute inset-0 rounded-full bg-emerald-500/30"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ 
            scale: [1, 3.5], 
            opacity: [0, 0.7, 0] 
          }}
          transition={{ 
            duration: 0.8,
            repeat: Infinity,
            repeatDelay: 9.2, // 10s cycle
            delay: 10, // First impact at 10s
            ease: "easeOut"
          }}
        />
      </div>

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

export default function ChaosVsKarya() {
  return (
    <div className="relative mx-auto mt-2 max-w-6xl overflow-hidden rounded-[2.5rem] border border-slate-200 bg-[#f9fafc] shadow-2xl shadow-purple-900/5">
      <TangledPipes 
        className="absolute inset-0 w-full h-full object-cover object-left opacity-70 z-0 pointer-events-none hidden md:block" 
      />
      <TangledPipesMobile 
        className="absolute inset-0 w-full h-full object-cover opacity-70 z-0 pointer-events-none block md:hidden -translate-y-24" 
      />
      <div className="relative z-10 grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">

        {/* LEFT: Chaos */}
        <div className="relative p-8 sm:p-14 bg-red-50/10 min-h-[380px] flex flex-col justify-between overflow-hidden text-center md:text-left">
          <div className="absolute top-0 left-0 h-48 w-48 bg-rose-500/20 blur-[80px] pointer-events-none rounded-br-full" />
          <div className="absolute bottom-0 left-0 h-48 w-48 bg-rose-500/20 blur-[80px] pointer-events-none rounded-tr-full" />

          <div className="relative z-20 mb-6 flex items-center gap-2 justify-center md:justify-start">
            <div className="h-2 w-2 rounded-full bg-rose-500 animate-ping" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-rose-500">YOUR CURRENT STACK</span>
          </div>

          <div className="relative flex-grow flex items-center justify-center">
            <div className="relative w-full max-w-[1000px] h-[250px] sm:h-[380px] flex items-center justify-center">
              {/* Logos on Chaos Side */}
              {[
                { icon: slackIcon, top: "6%", left: "5%", rotate: -15 },
                { icon: teamsIcon, top: "65%", left: "-5%", rotate: 20 },
                { icon: gmailIcon, top: "42%", left: "-1%", rotate: -12 },
                { icon: driveIcon, top: "26%", left: "30%", rotate: 25 },
                { icon: whatsappIcon, top: "45%", left: "43%", rotate: -8 },
                { icon: calIcon, top: "97%", left: "0%", rotate: 10 },
                { icon: jiraIcon, top: "75%", left: "44%", rotate: 15 },
                { icon: hubspotIcon, top: "20%", left: "45%", rotate: -20 },
                { icon: hubstaffIcon, top: "63%", left: "69%", rotate: -10 },
                { icon: zapierIcon, top: "35%", left: "55%", rotate: 25 },
                { icon: notionIcon, top: "83%", left: "20%", rotate: -18 },
                { icon: clickupIcon, top: "55%", left: "25%", rotate: 12 },
                { icon: zoominfoIcon, top: "94%", left: "30%", rotate: -22 },
              ].map((app, i) => (
                <motion.div
                  key={i}
                  className="absolute flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/90 border border-rose-100 p-1.5 sm:p-2"
                  style={{ top: app.top, left: app.left, rotate: app.rotate }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.1 + i * 0.08,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }}
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
        <div className="relative flex flex-col justify-between p-6 md:p-14 bg-emerald-50/10 min-h-[280px] md:min-h-[380px] overflow-hidden">
          <div className="absolute top-0 right-0 h-48 w-48 bg-emerald-500/15 blur-[80px] pointer-events-none rounded-bl-full" />
          <div className="absolute bottom-0 right-0 h-48 w-48 bg-emerald-500/10 blur-[80px] pointer-events-none rounded-tl-full" />
          <div className="relative z-20 mb-6 md:mb-12 flex items-center gap-2 justify-center md:justify-start">
            <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600">THE KARYAUP SHIFT</span>
          </div>
          <div className="flex-grow flex items-center justify-center py-2 md:py-0">
            <IntegrationCircle />
          </div>
          <p className="relative z-20 mt-6 md:mt-12 text-lg font-medium text-emerald-600/80 italic flex items-center gap-2 justify-center md:justify-start text-center md:text-left">
            One source of truth. Absolute focus.
          </p>
        </div>

        <div className="absolute top-[40%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-white border-2 border-slate-200 z-30 font-black text-sm text-slate-500 shadow-xl">
          VS
        </div>
      </div>
    </div>
  );
}
