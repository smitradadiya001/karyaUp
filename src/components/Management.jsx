import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Calendar, BarChart, Briefcase } from 'lucide-react';
import TeamImg from "../assets/Team.png";

const Management = () => {
    const items = [
        { title: "Salary Management", icon: <CreditCard className="w-6 h-6" />, desc: "Automated payroll and expense tracking." },
        { title: "Attendance & Leave", icon: <Calendar className="w-6 h-6" />, desc: "Effortless check-ins and time-off requests." },
        { title: "Brand Assets", icon: <Briefcase className="w-6 h-6" />, desc: "Centralized storage for all brand identities." },
        { title: "Performance Stats", icon: <BarChart className="w-6 h-6" />, desc: "Deep insights into team productivity." }
    ];

    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden relative">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Text and Features Side (40% Width) - Condensed */}
                    <div className="lg:flex-[0.4] w-full">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-6">
                            More than <br />
                            <motion.span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-[#ec4899] to-[#7e22ce] bg-[length:200%_auto]"
                                animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            >
                                just tasks.
                            </motion.span>
                        </h2>
                        <p className="text-lg sm:text-xl font-medium text-slate-500 mb-8 sm:mb-10 leading-relaxed">
                            KaryaUp handles the essentials of your business operations. From salary to attendance, everything is seamlessly integrated into your elite workflow.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
                            {items.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-5 group">
                                    <div className="p-3.5 bg-purple-50 rounded-2xl text-[#7e22ce] border border-purple-100 group-hover:scale-110 transition-transform">
                                        {React.cloneElement(item.icon, { className: "w-5 h-5" })}
                                    </div>
                                    <div>
                                        <h4 className="font-black text-slate-800 text-lg mb-0.5 tracking-tight">{item.title}</h4>
                                        <p className="text-sm font-bold text-slate-400 leading-tight">{item.desc}</p>
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
                        className="lg:flex-[0.6] relative w-full lg:-mr-32 xl:-mr-56"
                    >
                        {/* Vanishing Card Container */}
                        <div className="relative overflow-hidden border border-slate-200/80 rounded-[2.5rem] bg-white shadow-2xl shadow-purple-900/5">
                            <img
                                src={TeamImg}
                                alt="KaryaUp Management Dashboard"
                                className="w-full h-[280px] sm:h-[320px] lg:h-[360px] object-cover object-left"
                            />
                            {/* Ultra-smooth, ultra-wide right-side fade (Deep Vanishing look) */}
                            <div className="pointer-events-none absolute inset-y-0 right-0 w-[45%] lg:w-[50%] bg-gradient-to-r from-transparent via-white/50 to-white" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Management;
