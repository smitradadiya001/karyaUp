import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const GogglesAnimation = () => {
    const sectionRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    // Smooth spring physics for mouse parallax
    const springConfig = { stiffness: 80, damping: 20 };
    const smoothX = useSpring(0, springConfig);
    const smoothY = useSpring(0, springConfig);

    // Scroll-based transforms
    const boyY = useTransform(scrollYProgress, [0, 1], ['15%', '-15%']);
    const maskScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1.1, 1.0, 1.0, 1.1]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
    const contentY = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [40, 0, 0, -40]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const x = (e.clientX - centerX) / (rect.width / 2);
            const y = (e.clientY - centerY) / (rect.height / 2);
            smoothX.set(x * 12);
            smoothY.set(y * 8);
            setMousePos({ x, y });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [smoothX, smoothY]);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen overflow-hidden bg-[#0d0d1a] flex flex-col items-center justify-center py-24"
        >
            {/* Background grid */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `linear-gradient(rgba(123,104,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(123,104,238,0.5) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Radial glow from center */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_60%,rgba(123,104,238,0.18),transparent_75%)]" />

            {/* Top text */}
            <motion.div
                style={{ opacity: contentOpacity, y: contentY }}
                className="relative z-20 text-center mb-16 px-4"
            >
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                    Meet your AI companion
                </span>
                <h2 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight">
                    Your AI-powered <br />
                    <span
                        className="bg-clip-text text-transparent"
                        style={{ backgroundImage: 'linear-gradient(90deg, #7b68ee, #ff00bb)' }}
                    >
                        Super Agent
                    </span>
                </h2>
                <p className="text-gray-400 text-lg mt-6 max-w-xl mx-auto font-medium">
                    KaryaUp's AI sees everything — tasks, deadlines, blockers &amp; opportunities — so your team can move faster.
                </p>
            </motion.div>

            {/* Main animation container */}
            <div className="relative w-full max-w-5xl mx-auto flex justify-center items-end" style={{ height: '480px' }}>

                {/* Glow under the boy */}
                <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full"
                    style={{
                        background: 'radial-gradient(ellipse, rgba(123,104,238,0.45) 0%, transparent 70%)',
                        filter: 'blur(30px)',
                        x: smoothX,
                        y: smoothY,
                    }}
                />

                {/* Boy image - parallax */}
                <motion.div
                    className="absolute bottom-0 left-1/2 z-10"
                    style={{
                        x: '-50%',
                        y: boyY,
                    }}
                >
                    <motion.img
                        src="https://images.ctfassets.net/w8fc6tgspyjz/7cC7zX7QJmkZ9PpLNgPjYh/e379dce8503c625a2038cea9a2b1b528/agent-new.png"
                        alt="KaryaUp AI Agent"
                        className="w-[320px] md:w-[420px] h-auto object-contain select-none"
                        style={{
                            filter: 'drop-shadow(0 0 40px rgba(123,104,238,0.5))',
                        }}
                        draggable={false}
                    />
                </motion.div>

                {/* Goggles lens glow — sits over the boy's eye area */}
                <motion.div
                    className="absolute z-20"
                    style={{
                        bottom: '280px',
                        left: '50%',
                        x: '-50%',
                    }}
                >
                    {/* Left lens */}
                    <motion.div
                        animate={{
                            opacity: [0.6, 1, 0.6],
                            scale: [1, 1.08, 1],
                        }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute rounded-full"
                        style={{
                            width: '52px',
                            height: '38px',
                            left: '-58px',
                            top: '-19px',
                            background: 'radial-gradient(circle, rgba(0,210,255,0.95) 0%, rgba(123,104,238,0.6) 60%, transparent 100%)',
                            boxShadow: '0 0 30px 12px rgba(0,210,255,0.6), 0 0 80px 20px rgba(123,104,238,0.3)',
                            filter: 'blur(1px)',
                        }}
                    />
                    {/* Right lens */}
                    <motion.div
                        animate={{
                            opacity: [0.6, 1, 0.6],
                            scale: [1, 1.08, 1],
                        }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.15 }}
                        className="absolute rounded-full"
                        style={{
                            width: '52px',
                            height: '38px',
                            left: '6px',
                            top: '-19px',
                            background: 'radial-gradient(circle, rgba(0,210,255,0.95) 0%, rgba(123,104,238,0.6) 60%, transparent 100%)',
                            boxShadow: '0 0 30px 12px rgba(0,210,255,0.6), 0 0 80px 20px rgba(123,104,238,0.3)',
                            filter: 'blur(1px)',
                        }}
                    />
                    {/* Scan line through lenses */}
                    <motion.div
                        animate={{ y: ['-120%', '120%'] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
                        style={{
                            position: 'absolute',
                            left: '-66px',
                            top: '-26px',
                            width: '130px',
                            height: '4px',
                            background: 'linear-gradient(90deg, transparent, rgba(0,240,255,0.95), transparent)',
                            boxShadow: '0 0 12px 4px rgba(0,240,255,0.7)',
                            borderRadius: '4px',
                        }}
                    />
                </motion.div>

                {/* Mask / overlay image — foreground frame/ring */}
                <motion.div
                    className="absolute inset-0 z-30 pointer-events-none flex justify-center items-end"
                    style={{ scale: maskScale }}
                >
                    <img
                        src="https://images.ctfassets.net/w8fc6tgspyjz/4tkmMlrg0fe772c5392202f299a421953d6/super-agents-mask.png"
                        alt=""
                        className="w-full h-full object-cover object-bottom select-none"
                        draggable={false}
                        style={{ maxWidth: '900px' }}
                    />
                </motion.div>

                {/* Floating data cards */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute left-4 md:left-16 top-16 z-40 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-2xl"
                >
                    <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest mb-1">Tasks Automated</p>
                    <p className="text-2xl font-black text-white">2,847</p>
                    <p className="text-xs text-green-400 font-bold mt-1">↑ 38% this week</p>
                </motion.div>

                <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                    className="absolute right-4 md:right-16 top-28 z-40 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-2xl"
                >
                    <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest mb-1">AI Insights</p>
                    <div className="flex items-end gap-1">
                        {[40, 65, 45, 80, 60, 90, 75].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ delay: i * 0.1, duration: 0.6, ease: 'backOut' }}
                                className="w-2 rounded-full"
                                style={{
                                    height: `${h * 0.28}px`,
                                    background: i === 5 ? 'linear-gradient(180deg,#7b68ee,#ff00bb)' : 'rgba(255,255,255,0.15)',
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default GogglesAnimation;
