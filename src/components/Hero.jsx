import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-[white] pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-48 lg:pb-32">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-60 animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-accent-pink/5 rounded-full blur-3xl opacity-60 animate-pulse-slow"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 mb-8"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-sm font-bold text-gray-600">New: Role-Based Dashboards are here</span>
                            <ArrowRight size={14} className="text-primary" />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-3xl sm:text-4xl lg:text-6xl font-black text-gray-900 leading-[1.05] tracking-tight mb-6 sm:mb-8"
                        >
                            The platform
                            for everything.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-base sm:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
                        >
                            Plan, track, and collaborate on any project with one tool. <br />Built for Bosses, Managers, and Employees.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center mb-12"
                        >
                            <button className="btn-primary text-base sm:text-xl px-8 py-4 sm:px-10 sm:py-5 w-full sm:w-auto shadow-2xl">
                                Get Started Free <ArrowRight size={20} />
                            </button>
                            <button className="flex items-center gap-3 text-gray-700 font-bold hover:text-primary transition-all group">
                                <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Play size={20} fill="currentColor" className="ml-1" />
                                </div>
                                Watch Video
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap justify-center lg:justify-start gap-6"
                        >
                            {['Free Forever', 'No Credit Card', 'Unlimited Users'].map((text, i) => (
                                <div key={i} className="flex items-center gap-2 text-gray-500 font-semibold text-sm">
                                    <CheckCircle2 size={16} className="text-green-500" />
                                    {text}
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Content - Provided Dashboard Image with Animation */}
                    <div className="flex-1 relative w-full lg:max-w-2xl mt-12 lg:mt-0">
                        <div className="relative z-20">
                            {/* Main Image: User Provided Dashboard */}
                            <motion.div
                                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="relative z-10 glass-card p-2 shadow-2xl overflow-hidden hover:scale-[1.02] transition-all duration-700 cursor-pointer border-primary/20"
                            >
                                <div className="rounded-xl overflow-hidden shadow-inner bg-white">
                                    <img
                                        src="/src/assets/dashboard.jpeg"
                                        alt="KaryaUp Dashboard"
                                        className="w-full h-auto max-h-[250px] sm:max-h-[350px] lg:max-h-[400px] object-contain"
                                    />

                                    {/* "Goggles" Scanning Animation Overlay */}
                                    {/* <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                        <motion.div
                                            animate={{
                                                top: ['-100%', '200%'],
                                            }}
                                            transition={{
                                                duration: 8,
                                                repeat: Infinity,
                                                ease: "linear"
                                            }}
                                            className="absolute left-0 w-full h-40 bg-gradient-to-b from-transparent via-primary/20 to-transparent blur-xl"
                                        />
                                        <motion.div
                                            animate={{
                                                scale: [1, 1.1, 1],
                                                opacity: [0.3, 0.6, 0.3]
                                            }}
                                            transition={{ duration: 4, repeat: Infinity }}
                                            className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full border-[1px] border-primary/30 shadow-[0_0_50px_rgba(123,104,238,0.2)]"
                                        />
                                    </div> */}
                                </div>
                            </motion.div>

                            {/* Offset Image: Focus View using the same Dashboard for consistency */}





                            {/* Background Blob for Depth */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/10 via-transparent to-accent-pink/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
                        </div>

                        {/* Futuristic Scanning Line (instead of boy) */}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
