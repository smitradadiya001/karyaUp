import React from "react";
import { Users, ShieldCheck, UserPlus, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function TeamInfoSection() {
  return (
    <section className="w-full py-20 px-6 md:px-16 bg-gradient-to-b from-white to-gray-50">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
            Your Team.{" "}
            <span className="text-gradient">
              Organized. Scalable.
            </span>
          </h2>

          <p className="mt-5 text-lg sm:text-xl font-bold text-slate-800/90 leading-relaxed">
            Manage roles, control access, and keep everyone aligned — all from one
            unified workspace designed for growing teams.
          </p>

          {/* FEATURES */}
          <div className="mt-10 space-y-6">
            
            <div className="flex items-start gap-4">
              <Users className="text-[#7e22ce]" size={26} />
              <div>
                <h4 className="font-black text-slate-800 text-lg">Centralized Team Management</h4>
                <p className="text-slate-500 text-sm font-medium">
                  Keep all members organized in one place with complete visibility.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <ShieldCheck className="text-[#7e22ce]" size={26} />
              <div>
                <h4 className="font-black text-slate-800 text-lg">Role-Based Access</h4>
                <p className="text-slate-500 text-sm font-medium">
                  Assign Admin, Manager, or Member roles with full control.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <UserPlus className="text-[#7e22ce]" size={26} />
              <div>
                <h4 className="font-black text-slate-800 text-lg">Add Members Instantly</h4>
                <p className="text-slate-500 text-sm font-medium">
                  Invite and onboard team members in seconds without friction.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Search className="text-[#7e22ce]" size={26} />
              <div>
                <h4 className="font-black text-slate-800 text-lg">Quick Search & Filters</h4>
                <p className="text-slate-500 text-sm font-medium">
                  Find any team member instantly with smart filters.
                </p>
              </div>
            </div>

          </div>

          
        </div>

        {/* RIGHT SIDE (UI MOCK / CARD STYLE) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Decorative glow behind card */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-[3rem] blur-2xl -z-10" />

          <div className="bg-white/80 backdrop-blur-2xl border border-slate-200/60 rounded-[2.5rem] p-8 shadow-2xl shadow-indigo-900/10">
            
            <h4 className="font-black text-slate-900 text-xl mb-6 flex items-center gap-3">
              <div className="w-2 h-6 bg-purple-600 rounded-full" />
              Team Overview
            </h4>

            <div className="space-y-4">
              
              {["Priya Mehta", "Arjun Shah", "Sara Nair"].map((name, i) => {
                const roles = ["Admin", "Manager", "Member"];
                const role = roles[i];
                return (
                  <div
                    key={i}
                    className="flex items-center justify-between bg-white border border-slate-100 rounded-2xl px-5 py-4 transition-all hover:shadow-md hover:border-purple-100 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white flex items-center justify-center font-black text-lg shadow-lg shadow-purple-200">
                        {name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-black text-slate-900 text-sm group-hover:text-[#7e22ce] transition-colors">{name}</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          {role}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                       <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Active</span>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
