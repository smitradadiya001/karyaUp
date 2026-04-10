import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Calendar, BarChart, Briefcase, Sparkles, Check } from 'lucide-react';
import TeamImg from "../assets/Team2.webp";

const Management = () => {
    const items = [
        { title: "Salary Management", icon: <CreditCard className="w-6 h-6" />, desc: "Automated payroll and expense tracking." },
        { title: "Attendance & Leave", icon: <Calendar className="w-6 h-6" />, desc: "Effortless check-ins and time-off requests." },
        { title: "Brand Assets", icon: <Briefcase className="w-6 h-6" />, desc: "Centralized storage for all brand identities." },
        { title: "Performance Stats", icon: <BarChart className="w-6 h-6" />, desc: "Deep insights into team productivity." }
    ];

    return (
        <section className="py-6 sm:py-16 lg:py-20 bg-white overflow-hidden relative">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    {/* Text and Features Side (40% Width) - Condensed */}
                    <div className="lg:flex-[0.4] w-full text-center lg:text-left flex flex-col items-center lg:items-start">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-[10px] sm:text-xs font-bold mb-3 uppercase tracking-widest shadow-sm">
                            <Sparkles size={11} />
                            Operations Layer
                        </div>
                        <h2 className="text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 tracking-normal leading-[1.05] mb-2 sm:mb-3">
                            More Than <br />
                            <motion.span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-[#ec4899] to-[#7e22ce] bg-[length:200%_auto]"
                                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            >
                                Just Tasks.
                            </motion.span>
                        </h2>
                        <div className="flex flex-col items-center lg:items-start gap-4 mb-8 sm:mb-12">
                            <div className="flex items-center gap-2.5">
                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center border border-purple-100">
                                    <Check className="w-3 h-3 text-[#7e22ce]" strokeWidth={3} />
                                </div>
                                <span className="text-sm sm:text-base font-bold text-slate-700">Unified management for all business essentials</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center border border-purple-100">
                                    <Check className="w-3 h-3 text-[#7e22ce]" strokeWidth={3} />
                                </div>
                                <span className="text-sm sm:text-base font-bold text-slate-700">Salary, attendance, and HR seamlessly integrated</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-7 w-full">
                            {items.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-col items-center text-center gap-2 sm:flex-row sm:items-start sm:text-left sm:justify-start sm:gap-5 group"
                                >
                                    <div className="p-2.5 bg-purple-50 rounded-2xl text-[#7e22ce] border border-purple-100 group-hover:scale-110 transition-transform flex-shrink-0">
                                        {React.cloneElement(item.icon, { className: "w-5 h-5" })}
                                    </div>
                                    <div className="flex flex-col items-center sm:items-start">
                                        <h4 className="font-black text-slate-800 text-base sm:text-lg mb-0.5 tracking-normal">{item.title}</h4>
                                        <p className="text-xs sm:text-sm font-medium text-slate-400 leading-tight">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Side: Larger Vanishing Card (60% Width, Deep Connection) */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:flex-[0.6] relative w-full max-w-xl mx-auto lg:max-w-none lg:mx-0 lg:-mr-24 xl:-mr-40"
                    >
                        {/* Vanishing Card Container */}
                        <div className="relative overflow-hidden bg-white">
                            <img
                                src={TeamImg}
                                alt="KaryaUp Management Dashboard"
                                width="940"
                                height="360"
                                loading="lazy"
                                className="block w-full h-auto object-contain object-left-top bg-white"
                            />
                            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-14 bg-gradient-to-l from-white/75 via-white/25 to-transparent blur-[3px]" />
                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 sm:h-12 bg-gradient-to-t from-white/70 via-white/20 to-transparent blur-[4px]" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Management;
