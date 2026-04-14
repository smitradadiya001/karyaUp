import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserPlus, Shield, Users, User, ChevronRight, Check, Search, Filter } from 'lucide-react';

const roles = [
  { id: 'admin', name: 'Administrator', color: 'bg-indigo-600', light: 'bg-indigo-50', text: 'text-indigo-600', icon: Shield, desc: 'Full access to all settings and billing.' },
  { id: 'manager', name: 'Manager', color: 'bg-purple-600', light: 'bg-purple-50', text: 'text-purple-600', icon: Users, desc: 'Manage people and department resources.' },
  { id: 'member', name: 'Team Member', color: 'bg-blue-600', light: 'bg-blue-50', text: 'text-blue-600', icon: User, desc: 'Access assigned tasks and projects.' },
];

const mockMembers = [
  { id: 1, name: "Priya Mehta", role: "Administrator", color: "bg-indigo-100 text-indigo-700" },
  { id: 2, name: "Arjun Shah", role: "Manager", color: "bg-purple-100 text-purple-700" },
  { id: 3, name: "Sara Nair", role: "Team Member", color: "bg-blue-100 text-blue-700" },
  { id: 4, name: "Rohan Das", role: "Team Member", color: "bg-blue-100 text-blue-700" },
];

export default function TeamRoleShowcase() {
  const [activeTab, setActiveTab] = useState('add'); // 'add', 'change', 'filter'
  const [selectedRole, setSelectedRole] = useState(roles[0]);
  const [demoRole, setDemoRole] = useState("Team Member");
  const [filterRole, setFilterRole] = useState("All");

  const filteredMembers = mockMembers.filter(m => filterRole === "All" || m.role === filterRole);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-[10px] font-black uppercase tracking-widest mb-4"
          >
            Role Management
          </motion.div>
          <h2 className="text-4xl sm:text-[2.75rem] font-black text-slate-900 leading-tight tracking-normal mb-6">
            Permissions that scale <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">without the friction.</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium">
            Take complete control of how your team operates. Assign roles at the click of a button and filter your entire organization with ease.
          </p>
        </div>

        {/* Interaction Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { id: 'add', label: 'Add Member by Role', icon: UserPlus },
            { id: 'change', label: 'Change Member Role', icon: Shield },
            { id: 'filter', label: 'Filter based on Role', icon: Filter }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-2xl font-black text-sm transition-all duration-300 ${activeTab === tab.id
                  ? "bg-purple-600 text-white shadow-xl shadow-purple-200"
                  : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Preview Container */}
        <div className="relative min-h-[500px] rounded-[3rem] border border-slate-100 bg-slate-50/50 p-8 sm:p-12 overflow-hidden shadow-2xl shadow-purple-900/5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/40 rounded-full blur-[80px] -z-10" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-[80px] -z-10" />

          <AnimatePresence mode="wait">
            {/* 1. ADD MEMBER SHOWCASE */}
            {activeTab === 'add' && (
              <motion.div
                key="add"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-normal italic">
                    Invite new people <br />
                    <span className="text-purple-600">aligned by intent.</span>
                  </h3>
                  <p className="text-slate-500 font-medium leading-relaxed mb-8">
                    Don't just add emails -define ownership from day one. Select from custom roles that mirror your company's actual structure.
                  </p>
                  <div className="space-y-4">
                    {roles.map((role) => (
                      <button
                        key={role.id}
                        onClick={() => setSelectedRole(role)}
                        className={`w-full flex items-center gap-4 p-4 rounded-3xl border transition-all duration-300 ${selectedRole.id === role.id
                            ? "bg-white border-purple-200 shadow-lg scale-[1.02]"
                            : "bg-white/50 border-transparent hover:border-slate-200"
                          }`}
                      >
                        <div className={`w-10 h-10 rounded-xl ${role.light} flex items-center justify-center`}>
                          <role.icon className={`w-5 h-5 ${role.text}`} />
                        </div>
                        <div className="text-left">
                          <div className="font-black text-slate-900 text-sm">{role.name}</div>
                          <div className="text-xs text-slate-400 font-medium">{role.desc}</div>
                        </div>
                        {selectedRole.id === role.id && (
                          <div className="ml-auto w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                            <Check className="w-3 h-3 text-white stroke-[4]" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl p-8 max-w-md mx-auto relative z-10">
                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-50">
                      <span className="font-black text-slate-900">Add Team Member</span>
                      <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
                    </div>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</label>
                        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-400 text-sm font-medium">alex@company.com</div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Assigned Role</label>
                        <motion.div
                          layoutId="activeRole"
                          className={`p-4 rounded-2xl border flex items-center gap-3 ${selectedRole.light} ${selectedRole.color.replace('bg-', 'border-')}`}
                        >
                          <selectedRole.icon className={`w-4 h-4 ${selectedRole.text}`} />
                          <span className={`font-black text-sm ${selectedRole.text}`}>{selectedRole.name}</span>
                        </motion.div>
                      </div>
                      <button className="w-full py-4 rounded-2xl bg-purple-600 text-white font-black text-sm shadow-xl shadow-purple-200 mt-4 h-12 flex items-center justify-center">
                        Send Invitation
                      </button>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-purple-100/50 to-indigo-100/50 rounded-[2.5rem] -z-10" />
                </div>
              </motion.div>
            )}

            {/* 2. CHANGE ROLE SHOWCASE */}
            {activeTab === 'change' && (
              <motion.div
                key="change"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center justify-center py-10"
              >
                <div className="text-center mb-12 max-w-xl">
                  <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-normal">
                    Promote or re-assign <br />
                    <span className="text-indigo-600">in real-time.</span>
                  </h3>
                  <p className="text-slate-500 font-medium">
                    As your team grows, their responsibilities evolve. Change roles instantly with a single click.
                  </p>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-[3rem] border border-slate-100 shadow-2xl">
                  <div className="w-48 h-48 rounded-full bg-indigo-50 flex items-center justify-center border-4 border-white shadow-xl">
                    <div className="w-40 h-40 rounded-full bg-indigo-600 flex items-center justify-center text-white font-black text-[2.75rem]">JD</div>
                  </div>
                  <div className="space-y-6 text-center md:text-left">
                    <div>
                      <h4 className="text-2xl font-black text-slate-900">Jane Doe</h4>
                      <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Product Designer</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {["Team Member", "Manager", "Administrator"].map((r) => (
                        <button
                          key={r}
                          onClick={() => setDemoRole(r)}
                          className={`px-5 py-2.5 rounded-2xl font-black text-xs transition-all ${demoRole === r
                              ? "bg-purple-600 text-white shadow-lg shadow-purple-100"
                              : "bg-slate-50 text-slate-400 hover:bg-slate-100"
                            }`}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-slate-50">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-400 italic">Currently:</span>
                        <motion.span
                          key={demoRole}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-normal ${demoRole === "Administrator" ? "bg-indigo-100 text-indigo-600" :
                              demoRole === "Manager" ? "bg-purple-100 text-purple-600" :
                                "bg-blue-100 text-blue-600"
                            }`}
                        >
                          {demoRole}
                        </motion.span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 3. FILTER BY ROLE SHOWCASE */}
            {activeTab === 'filter' && (
              <motion.div
                key="filter"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid lg:grid-cols-12 gap-12"
              >
                <div className="lg:col-span-4">
                  <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-normal">
                    Find who you need, <br />
                    <span className="text-emerald-600">at light speed.</span>
                  </h3>
                  <p className="text-slate-500 font-medium mb-8">
                    Filter through hundreds of team members effortlessly using our instant role indexing system.
                  </p>
                  <div className="space-y-2">
                    {["All", "Administrator", "Manager", "Team Member"].map((r) => (
                      <button
                        key={r}
                        onClick={() => setFilterRole(r)}
                        className={`w-full text-left px-5 py-3 rounded-2xl font-black text-sm transition-all ${filterRole === r
                            ? "bg-white border border-emerald-200 text-emerald-600 shadow-xl shadow-emerald-900/5 translate-x-2"
                            : "text-slate-400 hover:text-slate-600"
                          }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-8">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <AnimatePresence mode="popLayout">
                      {filteredMembers.map((m) => (
                        <motion.div
                          layout
                          key={m.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="p-5 rounded-3xl bg-white border border-slate-100 shadow-sm flex items-center gap-4 group hover:shadow-xl transition-all"
                        >
                          <div className={`w-12 h-12 rounded-2xl ${m.color.split(' ')[0]} flex items-center justify-center font-black text-slate-900`}>
                            {m.name.split(' ')[0][0]}
                          </div>
                          <div className="flex-1">
                            <div className="font-black text-slate-900 text-sm group-hover:text-purple-600 transition-colors">{m.name}</div>
                            <div className={`text-[10px] font-black uppercase tracking-normal ${m.color.split(' ')[1]}`}>{m.role}</div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-purple-500" />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
