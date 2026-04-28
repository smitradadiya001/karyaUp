import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/**
 * Glitchy 404 page on a WHITE background with Brand Purple/Fuchsia.
 * - "404" has a continuous RGB-split / glitch animation.
 * - No "ERROR" word, as requested.
 * - Navbar spacing preserved with pt-52 md:pt-64.
 */
export default function NotFound() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick((n) => n + 1), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-white px-6 text-center pt-12 md:pt-27 select-none overflow-hidden">
      
      {/* Glitch 404 centerpiece - Keeping original dark design as requested */}
      <div
        key={tick}
        className="glitch relative select-none text-[8rem] font-black leading-none text-slate-900 sm:text-[11rem] md:text-[14rem] lg:text-[16rem]"
        data-text="404"
      >
        404
        <span aria-hidden="true" className="glitch-layer glitch-purple" data-text="404">
          404
        </span>
        <span aria-hidden="true" className="glitch-layer glitch-fuchsia" data-text="404">
          404
        </span>
      </div>

      <p className="mt-8 text-lg font-black tracking-[0.4em] text-slate-400 sm:text-xl md:text-2xl uppercase">
        PAGE NOT FOUND
      </p>

      {/* Exact Hero-style CTA button */}
      <Link
        to="/"
        className="mt-12 group relative z-10 flex h-[3.5em] w-full max-w-[14em] shrink-0 items-center justify-center overflow-hidden rounded-[30em] font-bold text-[15px] transition-all duration-300 active:scale-95"
        style={{ boxShadow: "0 18px 40px rgba(126, 34, 206, 0.22)" }}
      >
        <div className="absolute inset-0 -z-20 bg-gradient-animated" />
        <div className="absolute -inset-[3px] -z-10 origin-left scale-x-0 rounded-[30em] bg-white transition-transform duration-500 ease-in-out group-hover:scale-x-100 group-active:scale-x-100" />
        <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-slate-800 group-active:text-slate-800">
          Go back home
        </span>
      </Link>

      <style>{`
        .glitch {
          position: relative;
          display: inline-block;
        }
        .glitch-layer {
          position: absolute;
          inset: 0;
          pointer-events: none;
          mix-blend-mode: multiply;
        }
        .glitch-purple {
          color: #7e22ce;
          animation: glitchShiftPurple 2.4s infinite steps(1, end);
        }
        .glitch-fuchsia {
          color: #d946ef;
          animation: glitchShiftFuchsia 2.4s infinite steps(1, end);
        }

        @keyframes glitchShiftPurple {
          0%   { transform: translate(0, 0);    clip-path: inset(0 0 85% 0); }
          10%  { transform: translate(-3px, 1px); clip-path: inset(20% 0 60% 0); }
          20%  { transform: translate(-5px, -2px); clip-path: inset(40% 0 40% 0); }
          30%  { transform: translate(-2px, 2px); clip-path: inset(10% 0 75% 0); }
          40%  { transform: translate(-4px, 0);   clip-path: inset(60% 0 20% 0); }
          50%  { transform: translate(-1px, -1px); clip-path: inset(80% 0 5% 0); }
          60%  { transform: translate(-6px, 1px); clip-path: inset(30% 0 55% 0); }
          70%  { transform: translate(-2px, -3px); clip-path: inset(50% 0 35% 0); }
          80%  { transform: translate(-4px, 2px); clip-path: inset(15% 0 70% 0); }
          90%  { transform: translate(-3px, 0);   clip-path: inset(70% 0 15% 0); }
          100% { transform: translate(0, 0);    clip-path: inset(0 0 85% 0); }
        }

        @keyframes glitchShiftFuchsia {
          0%   { transform: translate(0, 0);    clip-path: inset(75% 0 5% 0); }
          10%  { transform: translate(3px, -1px); clip-path: inset(55% 0 25% 0); }
          20%  { transform: translate(5px, 2px);  clip-path: inset(35% 0 50% 0); }
          30%  { transform: translate(2px, -2px); clip-path: inset(70% 0 10% 0); }
          40%  { transform: translate(4px, 0);    clip-path: inset(15% 0 65% 0); }
          50%  { transform: translate(1px, 1px);  clip-path: inset(5% 0 80% 0); }
          60%  { transform: translate(6px, -1px); clip-path: inset(45% 0 40% 0); }
          70%  { transform: translate(2px, 3px);  clip-path: inset(25% 0 60% 0); }
          80%  { transform: translate(4px, -2px); clip-path: inset(60% 0 25% 0); }
          90%  { transform: translate(3px, 0);    clip-path: inset(10% 0 75% 0); }
          100% { transform: translate(0, 0);    clip-path: inset(75% 0 5% 0); }
        }
      `}</style>
    </div>
  );
}
