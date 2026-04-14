import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const SuperAgents = () => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isInView, setIsInView] = useState(false);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const springConfig = { stiffness: 60, damping: 18 };
    const smoothMouseX = useSpring(0, springConfig);
    const smoothMouseY = useSpring(0, springConfig);

    // Scroll-driven animation values
    const boyY = useTransform(scrollYProgress, [0, 1], [80, -80]);
    const bgOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleMouse = (e) => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
            smoothMouseX.set(x * 20);
            smoothMouseY.set(y * 10);
            setMousePos({ x, y });
        };
        window.addEventListener('mousemove', handleMouse);
        return () => window.removeEventListener('mousemove', handleMouse);
    }, [smoothMouseX, smoothMouseY]);

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #0B0B1E 0%, #0d0620 40%, #1a0a2e 100%)', minHeight: '100vh' }}
        >
            {/* === Background noise / grain === */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* === Background purple radial glow (center-bottom) === */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(123,68,255,0.35) 0%, rgba(83,38,200,0.15) 40%, transparent 70%)',
                    opacity: bgOpacity,
                }}
            />


            {/* === Top Section Text === */}
            <div className="relative z-20 max-w-6xl mx-auto px-6 pt-24 pb-0 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <h2
                        className="font-black text-white mb-6 leading-[1.05] tracking-normal mx-auto"
                        style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', maxWidth: '900px' }}
                    >
                        A new era of humans,{' '}
                        <span
                            style={{
                                background: 'linear-gradient(90deg, #a78bfa, #e879f9, #f472b6)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            with Super Agents
                        </span>
                    </h2>
                    <p className="text-gray-400 text-xl mx-auto mb-10 font-medium" style={{ maxWidth: '600px' }}>
                        KaryaUp Agents work alongside your team -handling tasks, tracking progress, and getting things done while you focus on what matters.
                    </p>
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 font-bold text-white border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full transition-all"
                        style={{ fontSize: '1rem' }}
                    >
                        Learn More <ArrowRight size={16} />
                    </motion.a>
                </motion.div>
            </div>

            {/* === Character + Mask Stage === */}
            <div
                ref={containerRef}
                className="relative mx-auto"
                style={{ maxWidth: '900px', height: 'clamp(500px, 70vh, 760px)', marginTop: '-40px' }}
            >
                {/* Glow pool at feet of the character */}
                <motion.div
                    className="absolute pointer-events-none"
                    style={{
                        bottom: '0px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '600px',
                        height: '300px',
                        background: 'radial-gradient(ellipse at center bottom, rgba(120,70,255,0.6) 0%, rgba(180,50,255,0.2) 30%, transparent 70%)',
                        filter: 'blur(40px)',
                        x: smoothMouseX,
                    }}
                />

                {/* Agent / Boy Image -mid layer, parallax with scroll and mouse */}
                <motion.div
                    className="absolute left-1/2 bottom-0"
                    style={{
                        translateX: '-50%',
                        y: boyY,
                        x: smoothMouseX,
                    }}
                >
                    <img
                        src="https://images.ctfassets.net/w8fc6tgspyjz/7cC7zX7QJmkZ9PpLNgPjYh/e379dce8503c625a2038cea9a2b1b528/agent-new.png"
                        alt="KaryaUp Super Agent"
                        draggable={false}
                        loading="lazy"
                        width="680"
                        height="680"
                        className="select-none w-auto"
                        style={{
                            height: 'clamp(400px, 60vh, 680px)',
                            objectFit: 'contain',
                            objectPosition: 'bottom',
                            filter: 'drop-shadow(0px -10px 80px rgba(140,80,255,0.5))',
                        }}
                    />
                </motion.div>

                {/* === GOGGLES glow overlay -placed over the character's eye region === */}
                <motion.div
                    className="absolute pointer-events-none z-10"
                    style={{
                        bottom: 'clamp(340px, 47%, 450px)',
                        left: '50%',
                        translateX: '-50%',
                        x: smoothMouseX,
                        y: boyY,
                    }}
                >
                    {/* Left goggle */}
                    <motion.div
                        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
                        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute"
                        style={{
                            width: '64px',
                            height: '44px',
                            left: '-84px',
                            top: '-22px',
                            borderRadius: '12px',
                            background: 'radial-gradient(ellipse at center, rgba(50, 220, 255, 1) 0%, rgba(100, 80, 255, 0.7) 55%, transparent 100%)',
                            boxShadow: '0 0 25px 10px rgba(50,220,255,0.65), 0 0 60px 20px rgba(100,60,255,0.4)',
                        }}
                    />
                    {/* Right goggle */}
                    <motion.div
                        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
                        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                        className="absolute"
                        style={{
                            width: '64px',
                            height: '44px',
                            left: '20px',
                            top: '-22px',
                            borderRadius: '12px',
                            background: 'radial-gradient(ellipse at center, rgba(50, 220, 255, 1) 0%, rgba(100, 80, 255, 0.7) 55%, transparent 100%)',
                            boxShadow: '0 0 25px 10px rgba(50,220,255,0.65), 0 0 60px 20px rgba(100,60,255,0.4)',
                        }}
                    />
                    {/* Horizontal scan line that sweeps inside the goggles */}
                    <motion.div
                        animate={{ y: ['-200%', '200%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', repeatType: 'reverse' }}
                        style={{
                            position: 'absolute',
                            left: '-90px',
                            top: '-24px',
                            width: '180px',
                            height: '3px',
                            background: 'linear-gradient(90deg, transparent 0%, rgba(0, 240, 255, 1) 30%, rgba(200, 160, 255, 1) 70%, transparent 100%)',
                            boxShadow: '0 0 10px 4px rgba(0, 230, 255, 0.7)',
                            borderRadius: '3px',
                        }}
                    />
                </motion.div>

                {/* Foreground Mask Image -top layer, clips and frames the character */}
                <motion.div
                    className="absolute inset-0 pointer-events-none z-20 flex justify-center items-end"
                    style={{ x: useTransform(scrollYProgress, [0, 1], [0, 15]) }}
                >
                    <img
                        src="https://images.ctfassets.net/w8fc6tgspyjz/4tkmMlrg0fe772c5392202f299a421953d6/super-agents-mask.png"
                        alt=""
                        draggable={false}
                        loading="lazy"
                        width="900"
                        height="760"
                        className="select-none w-full h-full object-cover object-bottom"
                        style={{ maxWidth: '900px' }}
                    />
                </motion.div>

                {/* ===== Floating Feature Cards ===== */}
                {/* Left card */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                    animate={{ y: [0, -12, 0] }}
                    style={{ bottom: '35%', left: '0', y: [0, -12, 0] }}
                    className="absolute z-30"
                >
                    <div
                        className="rounded-2xl px-5 py-4 shadow-2xl"
                        style={{
                            background: 'rgba(255,255,255,0.05)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            minWidth: '180px',
                        }}
                    >
                        <p className="text-[10px] uppercase tracking-widest text-purple-300 font-bold mb-1">Tasks done today</p>
                        <p className="text-white text-2xl font-black">127</p>
                        <p className="text-green-400 text-xs font-bold mt-1">↑ 42% vs yesterday</p>
                    </div>
                </motion.div>

                {/* Right card */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.7 }}
                    className="absolute z-30"
                    style={{ bottom: '45%', right: '0' }}
                >
                    <motion.div
                        animate={{ y: [0, -14, 0] }}
                        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
                        className="rounded-2xl px-5 py-4 shadow-2xl"
                        style={{
                            background: 'rgba(255,255,255,0.05)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            minWidth: '180px',
                        }}
                    >
                        <p className="text-[10px] uppercase tracking-widest text-purple-300 font-bold mb-2">Agent activity</p>
                        <div className="flex items-end gap-1 h-10">
                            {[30, 60, 40, 80, 55, 100, 70, 90, 65, 95].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    whileInView={{ height: `${h}%` }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 + 0.5, duration: 0.5 }}
                                    className="flex-1 rounded-sm"
                                    style={{
                                        background: i >= 7
                                            ? 'linear-gradient(180deg, #a78bfa, #7c3aed)'
                                            : 'rgba(255,255,255,0.12)',
                                    }}
                                />
                            ))}
                        </div>
                        <p className="text-white text-xs font-bold mt-2">Reaching peak performance</p>
                    </motion.div>
                </motion.div>

                {/* Small badge -bottom center */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="absolute bottom-6 left-1/2 z-30"
                    style={{ transform: 'translateX(-50%)' }}
                >
                    <div
                        className="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold text-white"
                        style={{
                            background: 'rgba(255,255,255,0.07)',
                            backdropFilter: 'blur(12px)',
                            border: '1px solid rgba(255,255,255,0.12)',
                        }}
                    >
                        <motion.span
                            animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-2 h-2 rounded-full bg-green-400 inline-block"
                        />
                        KaryaUp AI is running 12 active agents
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SuperAgents;
