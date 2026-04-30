import React, { useRef } from "react";
import { Check } from "lucide-react";

/**
 * TiltedCard — 3D perspective tilt on hover with glass-shine effect.
 * Props: icon, title, desc, points, delay
 */
export default function TiltedCard({ icon: Icon, title, desc, points = [] }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -12;
    const rotateY = ((x - cx) / cx) * 12;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04,1.04,1.04)`;
    const shineEl = card.querySelector(".tilt-shine");
    if (shineEl) {
      shineEl.style.opacity = "1";
      shineEl.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.25) 0%, transparent 70%)`;
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    const shineEl = card.querySelector(".tilt-shine");
    if (shineEl) shineEl.style.opacity = "0";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col items-center sm:items-start text-center sm:text-left gap-5 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm cursor-default overflow-hidden transition-all duration-300 hover:border-purple-300 hover:shadow-md"
      style={{
        transition: "transform 0.15s ease, box-shadow 0.15s ease, border-color 0.3s ease",
        willChange: "transform",
      }}
    >
      {/* Shine overlay */}
      <div
        className="tilt-shine pointer-events-none absolute inset-0 rounded-2xl z-10"
        style={{ opacity: 0, transition: "opacity 0.2s ease" }}
      />

      {/* Row: Icon + Title */}
      <div className="relative z-20 flex items-center justify-center sm:justify-start gap-4 w-full">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600 shrink-0 transition-all duration-300 group-hover:bg-[#7e22ce] group-hover:text-white group-hover:shadow-lg group-hover:shadow-purple-200">
          {Icon && <Icon className="h-5.5 w-5.5" />}
        </div>
        <h3 className="text-base font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#7e22ce]">
          {title}
        </h3>
      </div>

      {/* Description */}
      <div className="relative z-20 w-full flex flex-col items-center sm:items-start">
        <p className="text-sm leading-relaxed text-slate-500 font-medium mb-4">{desc}</p>
        
        {/* Three Points List — removed divider, added darker hover */}
        {points.length > 0 && (
          <div className="space-y-2 mt-4 w-fit transition-colors flex flex-col items-start">
            {points.map((point, i) => (
              <div key={i} className="flex items-center gap-2 text-[13px] text-slate-600">
                <div className="flex-shrink-0 w-4.5 h-4.5 rounded-full bg-purple-50 flex items-center justify-center transition-colors group-hover:bg-purple-200">
                  <Check className="w-3 h-3 text-purple-600 stroke-[4] transition-colors group-hover:text-purple-900" />
                </div>
                <span className="font-medium group-hover:text-slate-900 transition-colors">{point}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
