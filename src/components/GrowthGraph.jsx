import React from "react";
import { motion } from "framer-motion";

const GrowthGraph = ({ className = "" }) => {
  return (
    <div className={`relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[8/3] ${className}`}>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="relative w-[92%] h-[60%]">
          {/* Main SVG Chart Area */}
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 800 300"
            preserveAspectRatio="none"
          >
            {/* Grid Lines (Horizontal) */}
            {[0, 1, 2, 3, 4].map((i) => (
              <line
                key={i}
                x1="0"
                y1={i * 75}
                x2="800"
                y2={i * 75}
                stroke="#e2e8f0"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            ))}

            {/* Y-Axis Labels */}
            {[20, 15, 10, 5, 0].map((v, i) => (
              <text
                key={v}
                x="-45"
                y={i * 75 + 5}
                className="text-[12px] fill-slate-400 font-bold select-none"
              >
                {v}
              </text>
            ))}

            {/* Active tasks (Blue/Purple) */}
            <motion.path
              d="M0,150 C50,150 70,240 120,240 C150,240 170,225 220,225 
                 C270,225 290,300 340,300 C390,300 420,0 470,0 
                 C520,0 550,255 600,255 C630,255 650,300 700,300 
                 C730,300 750,45 800,255"
              fill="none"
              stroke="#6366f1"
              strokeWidth="3.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />

            {/* Completed tasks (Green) */}
            <motion.path
              d="M0,300 C50,300 80,150 130,150 C180,150 200,300 250,300 
                 L450,300 C500,300 530,90 580,90 
                 C630,90 650,250 700,250 C750,250 780,300 800,300"
              fill="none"
              stroke="#10b981"
              strokeWidth="3.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeInOut", delay: 0.3 }}
            />

            {/* Overdue tasks (Orange) */}
            <motion.path
              d="M0,300 L250,300 C300,300 320,165 370,165 
                 C420,165 450,285 500,285 L600,285 
                 C650,285 680,225 730,225 C760,225 780,150 800,300"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="3.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeInOut", delay: 0.6 }}
            />
          </svg>

          {/* X-Axis Labels */}
          <div className="absolute -bottom-10 inset-x-0 hidden sm:flex justify-between text-[11px] font-bold text-slate-400 select-none px-2">
            <span>2026-02-20</span>
            <span>2026-03-11</span>
            <span>2026-03-15</span>
            <span>2026-03-19</span>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-12 sm:mt-20 flex flex-wrap justify-center gap-x-8 sm:gap-x-12 gap-y-4">
          {[
            { l: "Completed", c: "#10b981" },
            { l: "Overdue", c: "#f59e0b" },
            { l: "Active (created)", c: "#6366f1" },
          ].map((item) => (
            <div key={item.l} className="flex items-center gap-2.5 sm:gap-3 group">
              <div className="relative w-6 h-3 sm:w-8 sm:h-4 flex items-center justify-center">
                <div
                  className="w-full h-[3px] rounded-full"
                  style={{ backgroundColor: item.c }}
                />
                <div
                  className="absolute w-2.5 h-2.5 rounded-full border-2 border-white shadow-sm ring-1 ring-slate-100"
                  style={{ backgroundColor: item.c }}
                />
              </div>
              <span className="text-sm font-bold text-slate-600 tracking-tight group-hover:text-slate-900 transition-colors uppercase tracking-widest text-[10px] sm:text-[11px]">
                {item.l}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GrowthGraph;
