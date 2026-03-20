import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, FileText, CheckCircle2, Database, Share2 } from 'lucide-react';
import ClickUpLogo from "../assets/ClickUp.webp";
import JiraLogo from "../assets/Jira.webp";
import KaryaUpLogo from "../assets/logo.png";

const DataImport = () => {
    // Animation variants for file icons - Slower, more deliberate flow
    const fileVariants = {
        animate: (i) => ({
            offsetDistance: ["0%", "100%"],
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 1, 0.5],
            transition: {
                duration: 6,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeInOut"
            }
        })
    };

    return (
        <section className="pt-5 lg:pt-5 bg-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    
                    {/* Left: Content */}
                    <div className="flex-[0.45] text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 mb-6 shadow-sm">
                                <Zap className="w-3.5 h-3.5 text-[#7e22ce]" />
                                <span className="text-[10px] font-bold text-[#7e22ce] uppercase tracking-wider">Zero Friction Sync</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-[0.95] mb-8">
                                Seamless Import from Your<br />
                                <motion.span
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-[#ec4899] to-[#7e22ce] bg-[length:200%_auto]"
                                    animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                >
                                    Existing Tools
                                </motion.span>
                            </h2>
                            <p className="text-lg sm:text-xl font-medium text-slate-500 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Move your entire workflow from ClickUp and Jira into Karyaup in one click. No data loss, just pure productivity.
                            </p>
                            <button className="btn-primary flex items-center gap-2 group mx-auto lg:mx-0">
                                Start Your Workspace
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </div>

                    {/* Right: Visual Area (Stretched Horizontal Flow) */}
                    <div className="flex-[0.55] relative w-full h-[500px] flex items-center justify-center lg:justify-end pr-4 lg:pr-12">
                        
                        {/* Central Hub (Karyaup) - Far Right */}
                        <div className="relative z-30">
                            <motion.div
                                animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.25, 0.1] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-slate-100 rounded-full blur-[100px] -z-10"
                            />
                            
                            <motion.div 
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                className="w-36 h-36 lg:w-48 lg:h-48 flex items-center justify-center p-4 -translate-y-[12px]"
                            >
                                <img src={KaryaUpLogo} alt="Karyaup" className="w-full h-full object-contain" />
                            </motion.div>
                        </div>

                        {/* Source Tools (Far Left) */}
                        <div className="absolute inset-x-0 h-full flex flex-col justify-between py-12 lg:py-20 pointer-events-none">
                            {/* ClickUp (Top Left) */}
                            <motion.div 
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="self-start pl-4 lg:pl-0 pointer-events-auto -translate-y-8"
                            >
                                <img src={ClickUpLogo} alt="ClickUp" className="w-20 h-20 lg:w-28 lg:h-28 object-contain drop-shadow-2xl" />
                            </motion.div>

                            {/* Jira (Bottom Left) */}
                            <motion.div 
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="self-start pl-4 lg:pl-0 pointer-events-auto"
                            >
                                <img src={JiraLogo} alt="Jira" className="w-20 h-20 lg:w-28 lg:h-28 object-contain drop-shadow-2xl" />
                            </motion.div>
                        </div>

                      

                        {/* Animated Converging File Icons */}
                        <div className="absolute inset-0 z-40 pointer-events-none overflow-visible">
                            {/* Files from ClickUp */}
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={`f-cu-${i}`}
                                    className="absolute top-0 left-0 w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-md border border-slate-100 text-[#7e22ce] -translate-x-1/2 -translate-y-1/2"
                                    style={{ 
                                        offsetPath: "path('M70 120 L210 120 C270 120, 270 250, 310 250 L440 250')",
                                        offsetRotate: "0deg"
                                    }}
                                    custom={i}
                                    variants={fileVariants}
                                    animate="animate"
                                >
                                    <FileText className="w-4 h-4" />
                                </motion.div>
                            ))}

                            {/* Files from Jira */}
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={`f-ji-${i}`}
                                    className="absolute top-0 left-0 w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-md border border-slate-100 text-[#ec4899] -translate-x-1/2 -translate-y-1/2"
                                    style={{ 
                                        offsetPath: "path('M70 380 L210 380 C270 380, 270 250, 310 250 L440 250')",
                                        offsetRotate: "0deg"
                                    }}
                                    custom={i + 0.6}
                                    variants={fileVariants}
                                    animate="animate"
                                >
                                    <Database className="w-4 h-4" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DataImport;
