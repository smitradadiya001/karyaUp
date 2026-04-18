import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  ShieldCheck, 
  ListTodo, 
  RefreshCcw, 
  Eye, 
  Settings2,
  ChevronRight
} from "lucide-react";
import AccessPanelImg from "../assets/Access-panel.webp";

export default function TeamHierarchySection() {
  const features = [
    {
      icon: Users,
      title: "Smart Role Management",
      desc: "Assign employees to managers and structure your team efficiently.",
    },
    {
      icon: ShieldCheck,
      title: "Controlled Access Permissions",
      desc: "Define what managers and employees can view, edit, or manage.",
    },
    {
      icon: ListTodo,
      title: "Task Assignment Flow",
      desc: "Managers can assign and manage tasks for their team members.",
    },
    {
      icon: RefreshCcw,
      title: "Instant Task Reassignment",
      desc: "Easily shift tasks between employees as priorities change.",
    }
  
  ];

  return (
    <section className="relative overflow-hidden bg-white pt-10 sm:pt-14 lg:pt-18 pb-12 sm:pb-16 lg:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] items-center">

          {/* Left Content - Preserved as requested */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative z-10 flex flex-col items-center lg:items-start lg:text-left lg:pl-4"
          >
            <div className="w-full px-0 py-0">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-purple-700 mb-6 mx-auto lg:mx-0">
                  <Settings2 className="h-3.5 w-3.5" />
                  Access Panel
                </div>

                <h2 className="text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 leading-[1.2] tracking-normal max-w-[12ch] sm:max-w-none">
                  Manage Your Team
                  <br />
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-purple-500 to-[#7e22ce] bg-[length:200%_auto] pb-1"
                    animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  >
                    With Full Control.
                  </motion.span>
                </h2>
              </div>

              <div className="space-y-4 sm:space-y-5">
                {features.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="group flex gap-4 items-start"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-100 border border-purple-200 text-[#7e22ce] transition-all duration-300 group-hover:bg-[#7e22ce] group-hover:text-white group-hover:border-[#7e22ce] group-active:bg-[#7e22ce] group-active:text-white group-active:border-[#7e22ce]">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-black text-slate-900 leading-tight mb-1">
                        {item.title}
                      </h3>
                      <p className="max-w-md text-sm font-medium text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content - Pure Image as requested */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
             <img 
                src={AccessPanelImg} 
                alt="Access Panel Interface" 
                className="w-full h-auto max-h-[500px] object-contain"
             />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
