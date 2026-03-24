import React from "react";
import { motion } from "framer-motion";

export default function Enterprise() {
  return (
    <div className="bg-white font-sans overflow-hidden min-h-screen">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-screen left-1/2 right-1/2 -translate-x-1/2 pt-32 pb-40 px-6 text-center z-10 border-b border-slate-100">
        
        {/* Pink/Purple Background Gradient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-[100%] pointer-events-none -z-10"></div>

        <div className="max-w-[75rem] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[0.80rem] tracking-[0.25em] font-extrabold text-[#7B61FF] uppercase mb-8">
              KARYAUP ENTERPRISE
            </p>

        <span className="text-6xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
              The world's most <br /> powerful, flexible,<br /> and intuitive <br /> enterprise software.
            </span>
            <p className="text-[1.5rem] md:text-[1.35rem] text-slate-600 max-w-4xl mx-auto leading-[1.6] mb-12">
              Break down silos, align teams, and accelerate AI transformation with KaryaUp. Run all your key business processes with ultimate security, scalability, and reliability.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button className="relative px-8 py-4 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-pink-500/40
            bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 
            bg-[length:200%_200%] animate-gradient 
            shadow-lg hover:scale-105 transition">
                Get a Demo 
                <span>→</span>
              </button>
              <button className="w-full sm:w-auto bg-[#f0f1f3] text-[#1f2328] px-8 py-4 rounded-xl font-bold hover:bg-[#e4e6e9] transition-colors inline-flex items-center justify-center text-[1.1rem]">
                Get started free 
              </button>
            </div>

            {/* Reviews */}
            <div className="flex items-center justify-center gap-2 text-[0.9rem] font-semibold text-slate-500">
              <div className="flex text-yellow-400 text-lg mr-1">
                ★★★★★
              </div>
              <span className="tracking-tight">25,000+ reviews from</span>
              {/* Brand tiny dots simulating the logos */}
              <div className="flex items-center gap-1.5 ml-1">
                <div className="w-5 h-5 rounded-full bg-rose-500 shadow-sm" />
                <div className="w-5 h-5 rounded-full bg-blue-400 shadow-sm" />
                <div className="w-5 h-5 rounded-full bg-orange-500 shadow-sm" />
                <div className="w-5 h-5 rounded-full bg-[#f04935] shadow-sm" />
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      

      {/* ================= SCALABILITY CARDS SECTION ================= */}
      <section className="max-w-[85rem] mx-auto px-3 py-10 pb-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[2.5rem] md:text-5xl lg:text-[3rem] font-extrabold text-[#1f2328] mb-20 tracking-tight leading-[1.05] max-w-4xl mx-auto"
        >
          Built for unmatched enterprise scalability, security, and reliability.
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Card 1: Uptime Guarantee */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#fcfdfd] border border-slate-100 rounded-[2.5rem] overflow-hidden flex flex-col items-center shadow-sm"
          >
            <div className="p-10 md:p-10 pb-0 w-full text-left">
              <h3 className="text-[1.7rem] font-extrabold text-[#1f2328] mb-4 tracking-tight">99.9% uptime guarantee</h3>
              <p className="text-[1.1rem] text-slate-600 leading-[1.6] max-w-[90%]">
                Ensure your operations never skip a beat with our 99.9% uptime guarantee, keeping your workflow smooth and uninterrupted.
              </p>
            </div>
            
            <div className="relative w-full h-[200px] mt-8 flex items-end justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-100/50 via-emerald-50/10 to-transparent z-0"></div>
              
              <div className="relative z-10 w-[85%] bg-white rounded-t-2xl border-t border-x border-[#22c55e]/30 p-6 md:p-8 shadow-[0_-15px_40px_rgba(34,197,94,0.12)] translate-y-6 hover:translate-y-4 transition-transform duration-500">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-3 font-bold text-[#1f2328] text-lg">
                    <div className="w-6 h-6 rounded-full bg-[#22c55e] flex items-center justify-center text-white text-sm shadow-sm">✓</div>
                    All services online
                  </div>
                  <div className="font-extrabold text-[#22c55e] text-lg">99.9% uptime</div>
                </div>
                <div className="flex gap-[2px] h-12 w-full mt-auto">
                  {Array.from({length: 45}).map((_, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ height: "0%" }}
                      whileInView={{ height: `${85 + Math.random() * 15}%` }}
                      transition={{ duration: 1, delay: i * 0.02 }}
                      className="flex-1 bg-[#22c55e] rounded-sm mt-auto"
                    ></motion.div>
                  ))}
                </div>
                <div className="flex justify-between mt-4 text-[0.8rem] font-semibold text-slate-400">
                  <span>3 months ago</span>
                  <span>Today</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Speed and Scalability */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#fcfdfd] border border-slate-100 rounded-[2.5rem] overflow-hidden flex flex-col items-center shadow-sm"
          >
            <div className="p-10 md:p-14 pb-0 w-full text-left">
              <h3 className="text-[1.7rem] font-extrabold text-[#1f2328] mb-4 tracking-tight">Unmatched speed and scalability</h3>
              <p className="text-[1.1rem] text-slate-600 leading-[1.6] max-w-[90%]">
                Leverage our exclusive RapidViews DB™ technology for ultimate scalability and performance unmatched by any other solution.
              </p>
            </div>
            
            <div className="relative w-full h-[150px] mt-8 flex flex-col items-center justify-end overflow-hidden pb-10 px-6">
              <div className="absolute inset-0 bg-gradient-to-t from-rose-100/40 via-orange-50/20 to-transparent z-0"></div>
              
              <div className="flex gap-4 md:gap-6 w-full max-w-lg justify-center relative z-10">
                {[ 
                  { v: "2x", label: "Faster Performance", from: "#ec4899", to: "#f59e0b" },
                  { v: "3x", label: "Faster Task Views", from: "#db2777", to: "#f97316" },
                  { v: "5x", label: "Faster Universal Search", from: "#e11d48", to: "#fbbf24" }
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-[2.5rem] border border-slate-100 p-4 shadow-xl flex-1 flex flex-col items-center justify-center translate-y-6 hover:translate-y-4 transition-transform duration-500 h-[10.5rem]">
                    <div className="relative w-20 md:w-24 h-12 md:h-14 flex justify-center overflow-hidden mb-4">
                      <svg viewBox="0 0 100 50" className="w-full absolute bottom-0">
                        <defs>
                          <linearGradient id={`grad-${i}`} x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor={item.from} />
                            <stop offset="100%" stopColor={item.to} />
                          </linearGradient>
                        </defs>
                        <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke={`url(#grad-${i})`} strokeWidth="14" strokeLinecap="round" opacity="0.15" />
                        <motion.path 
                          initial={{ strokeDasharray: "125, 125", strokeDashoffset: "125" }}
                          whileInView={{ strokeDashoffset: "0" }}
                          transition={{ duration: 1.5, delay: 0.3 }}
                          d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke={`url(#grad-${i})`} strokeWidth="14" strokeLinecap="round" 
                        />
                      </svg>
                      <div className="absolute bottom-[-6px] font-extrabold text-[1.6rem] md:text-[1.8rem] text-[#1f2328] tracking-tight">{item.v}</div>
                    </div>
                    <div className="text-[0.7rem] md:text-[0.75rem] text-center font-bold text-slate-500 px-1 leading-tight tracking-tight mt-1">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= ADMIN TOOLS SECTION ================= */}
      <section className="max-w-[85rem] mx-auto px-6 py-10 pb-20">
        <div className="bg-[#fcfdfd] border border-slate-100/60 rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-sm min-h-[500px]">
          
          {/* Left: Graphic */}
          <div className="w-full lg:w-3/5 h-[400px] lg:h-auto relative flex items-center justify-center overflow-hidden bg-white/50 border-b lg:border-b-0 lg:border-r border-slate-100/80">
            {/* Radiant Lines SVG */}
            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40">
              <svg viewBox="0 0 800 600" className="w-full h-full">
                <defs>
                  <radialGradient id="fade" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <g stroke="url(#fade)" strokeWidth="1.5" fill="none">
                  {Array.from({length: 36}).map((_, i) => (
                    <line key={i} x1="400" y1="300" x2={400 + Math.cos(i*(Math.PI/18))*800} y2={300 + Math.sin(i*(Math.PI/18))*800} />
                  ))}
                </g>
              </svg>
            </div>
            
            {/* Center Node */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="absolute z-20 bg-white px-4 py-2 rounded-full shadow-xl shadow-indigo-100/40 border border-slate-100 flex items-center gap-2 font-bold text-slate-800 text-sm top-[35%] left-1/2 -translate-x-1/2 -mt-4 lg:-mt-0"
            >
              <div className="w-7 h-7 rounded-full bg-orange-400 overflow-hidden text-center text-white flex items-center justify-center text-[10px] shadow-inner font-extrabold flex-shrink-0">A</div>
              Admin
            </motion.div>

            {/* Google 2FA Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="absolute z-10 top-[45%] left-[8%] lg:left-[15%] w-[110px] bg-white rounded-[1.5rem] shadow-xl border border-slate-100 p-4 pb-5 flex flex-col items-center gap-3 hover:-translate-y-2 transition-transform cursor-default"
            >
              <div className="text-[0.7rem] font-bold text-slate-700 text-center leading-tight">Google<br/>and 2FA</div>
              <div className="w-10 h-10 border-[2px] border-slate-100 rounded-full flex items-center justify-center opacity-40">
                <div className="w-6 h-6 border-[1px] border-slate-400 rounded-full"></div>
              </div>
              <div className="absolute -bottom-3 -right-2 w-8 h-8 bg-white border border-slate-100 rounded-full shadow-md flex items-center justify-center text-slate-500 font-bold text-xs">🔒</div>
            </motion.div>

            {/* Permissions Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute z-10 bottom-[10%] left-[32%] w-36 bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-slate-100 p-4 hover:-translate-y-2 transition-transform cursor-default"
            >
              <div className="text-[0.7rem] font-bold text-slate-700 mb-4">Permissions</div>
              <div className="space-y-3">
                {[true, false, true].map((on, k) => (
                  <div key={k} className="flex justify-between items-center gap-2">
                    <div className="w-full flex flex-col gap-1.5">
                       <div className={`h-1.5 rounded-full ${k===0 ? 'w-2/3 bg-slate-200' : (k===1 ? 'w-full bg-slate-100' : 'w-3/4 bg-slate-200')}`}></div>
                       {k!==1 && <div className="h-1.5 w-1/2 bg-slate-100 rounded-full"></div>}
                    </div>
                    <div className={`shrink-0 w-8 h-4 rounded-full relative ${on ? 'bg-indigo-500' : 'bg-indigo-100'}`}>
                      <div className={`absolute top-[2px] w-3 h-3 bg-white rounded-full transition-all shadow-sm ${on ? 'right-[2px]' : 'left-[2px]'}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

             {/* Audit Log Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute z-10 top-[35%] right-[12%] lg:right-[20%] w-[100px] bg-white rounded-[1.25rem] shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-slate-100 p-4 pb-6 hover:-translate-y-2 transition-transform cursor-default pt-5"
            >
              <div className="text-[0.75rem] font-bold text-slate-700 mb-4 text-center tracking-tight">Audit log</div>
              <div className="space-y-2.5 w-full">
                <div className="w-full h-[3px] bg-indigo-100 rounded-full"></div>
                <div className="w-5/6 h-[3px] bg-slate-100 rounded-full"></div>
                <div className="w-full h-[3px] bg-indigo-100 rounded-full"></div>
                <div className="w-4/5 h-[3px] bg-slate-100 rounded-full"></div>
              </div>
            </motion.div>

            {/* Pills */}
            {[
              { label: "Session management", icon: "🕒", pos: "top-[10%] left-[5%] lg:left-[10%]", delay: 0.2 },
              { label: "IP restrictions", icon: "⊖", pos: "top-[6%] right-[30%]", delay: 0.1 },
              { label: "Penetration testing", icon: "⚠", pos: "bottom-[15%] left-[2%]", delay: 0.4 },
              { label: "Regional data residency", icon: "📍", pos: "bottom-[12%] right-[5%] lg:right-[15%]", delay: 0.4 },
            ].map((node, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: node.delay + 0.3 }}
                className={`absolute z-20 bg-white px-3 py-1.5 rounded-full shadow-md border border-slate-100 flex items-center gap-2 text-[0.7rem] font-bold text-slate-700 ${node.pos} hover:scale-105 transition-transform cursor-default hover:border-indigo-100`}
              >
                <span className="text-base origin-center">{node.icon}</span> {node.label}
              </motion.div>
            ))}
          </div>

          {/* Right: Text Content */}
          <div className="w-full lg:w-2/5 p-10 md:p-14 lg:p-16 flex flex-col justify-center bg-[#fafbfc]">
            <h3 className="text-[2.2rem] lg:text-[2.5rem] font-extrabold text-[#1f2328] mb-4 tracking-tight leading-[1.05]">
              Advanced admin tools
            </h3>
            <p className="text-[1.1rem] text-slate-600 leading-[1.6]">
              Everything you need to protect your data, manage access, configure permissions and keep a comprehensive activities log is built-in.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-slate-900 to-black text-white text-center rounded-[3rem] mx-4 md:mx-10 mb-10 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Ready to scale with KaryaUp?
          </h2>
          <p className="text-[1.15rem] mb-10 text-slate-300 leading-relaxed">
            Contact us for a custom enterprise plan and dedicated onboarding tailored to your complex operational needs.
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform text-[1.1rem]">
            Talk to Sales →
          </button>
        </div>
      </section>

    </div>
  );
}
