import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Users, Cpu, Handshake, UserCircle2, CheckCircle2 } from 'lucide-react';

const teams = [
  {
    icon: Rocket,
    label: 'Startups',
    headline: 'Launch faster with structured execution.',
    result: 'Move from idea to release in days, not weeks.',
    summary: 'Keep planning, ownership, and execution in one place so small teams can ship without tool sprawl.',
    bullets: ['Clear sprint priorities', 'Fast release coordination', 'Founder-level visibility'],
    gradient: 'from-violet-500 to-purple-600',
    textGrad: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-50',
    stat: 'Days, not weeks',
    statSub: 'from idea to release',
    accent: '#7e22ce',
  },
  {
    icon: Users,
    label: 'Agencies',
    headline: 'Manage multiple clients without chaos.',
    result: 'Handle 2x more projects with the same team.',
    summary: 'Bring client work, approvals, and delivery timelines into one workflow your team can actually follow.',
    bullets: ['Multi-client tracking', 'Approval-ready delivery', 'Less context switching'],
    gradient: 'from-fuchsia-500 to-pink-500',
    textGrad: 'from-fuchsia-500 to-pink-500',
    bg: 'bg-fuchsia-50',
    stat: '2x more',
    statSub: 'projects, same team',
    accent: '#d946ef',
  },
  {
    icon: Cpu,
    label: 'Product Teams',
    headline: 'Plan, build, and ship with clarity.',
    result: 'Reduce delays across sprints.',
    summary: 'Align product, design, and engineering around one shared source of truth from planning to launch.',
    bullets: ['Sprint-ready planning', 'Cross-team sync', 'Better release control'],
    gradient: 'from-violet-500 to-purple-600',
    textGrad: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-50',
    stat: 'Zero delays',
    statSub: 'across sprints',
    accent: '#7e22ce',
  },
  {
    icon: Handshake,
    label: 'Sales Teams',
    headline: 'Track deals and stay aligned with delivery.',
    result: 'Close faster with full visibility.',
    summary: 'Connect pipeline activity with execution so handoffs stay smooth and revenue work keeps moving.',
    bullets: ['Lead-to-delivery flow', 'Shared client context', 'Faster follow-ups'],
    gradient: 'from-fuchsia-500 to-pink-500',
    textGrad: 'from-fuchsia-500 to-pink-500',
    bg: 'bg-fuchsia-50',
    stat: 'Close faster',
    statSub: 'with full visibility',
    accent: '#d946ef',
  },
  {
    icon: UserCircle2,
    label: 'Freelancers',
    headline: 'Stay organized across clients.',
    result: 'Never miss a deadline again.',
    summary: 'Run every client, task, and due date from one clean workspace that feels built for solo operators.',
    bullets: ['Client-by-client clarity', 'Reliable reminders', 'One-person control'],
    gradient: 'from-violet-500 to-purple-600',
    textGrad: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-50',
    stat: '0 missed',
    statSub: 'deadlines',
    accent: '#7e22ce',
  },
];

const CARD_ADVANCE_DELAY = 700; // ms between card changes (fast scroll still waits this)

const TeamsSection = () => {
  const [active, setActive] = useState(0);

  // ── refs ──
  const sectionRef = useRef(null);
  const rightPanelRef = useRef(null);
  const activeRef = useRef(0);
  const isInsideRef = useRef(false);
  const lastAdvance = useRef(0);

  useEffect(() => { activeRef.current = active; }, [active]);

  // Snap section top to viewport top (entering from above)
  const snapSectionToTop = useCallback(() => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    if (Math.abs(rect.top) > 2) {
      window.scrollBy({ top: rect.top, behavior: 'smooth' });
    }
  }, []);

  // Snap section bottom to viewport bottom (entering from below)
  const snapSectionToBottom = useCallback(() => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const delta = rect.bottom - window.innerHeight;
    if (Math.abs(delta) > 2) {
      window.scrollBy({ top: delta, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    // ── IntersectionObserver: detect enter / leave ──
    const observer = new IntersectionObserver(
      ([entry]) => {
        isInsideRef.current = entry.isIntersecting && entry.intersectionRatio >= 0.5;

        if (isInsideRef.current) {
          const rect = sectionRef.current?.getBoundingClientRect();
          if (rect && rect.top >= -10) {
            // Entering from above → start at card 1
            activeRef.current = 0;
            setActive(0);
            snapSectionToTop();
          } else {
            // Entering from below → start at last card
            activeRef.current = teams.length - 1;
            setActive(teams.length - 1);
            snapSectionToBottom();
          }
        }
      },
      { threshold: [0.5] }
    );

    if (rightPanelRef.current) observer.observe(rightPanelRef.current);

    // ── Wheel handler: simple boundary logic ──
    const onWheel = (e) => {
      if (!isInsideRef.current) return;

      const now = Date.now();
      const idx = activeRef.current;
      const goingDown = e.deltaY > 0;
      const goingUp = e.deltaY < 0;

      if (goingDown) {
        if (idx < teams.length - 1) {
          // Not on last card → block scroll and advance card
          e.preventDefault();
          e.stopPropagation();
          if (now - lastAdvance.current < CARD_ADVANCE_DELAY) return;
          lastAdvance.current = now;
          const next = idx + 1;
          activeRef.current = next;
          setActive(next);
          snapSectionToTop();
        }
        // On last card → let native scroll pass (exit to next section)
      }

      if (goingUp) {
        if (idx > 0) {
          // Not on first card → block scroll and retreat card
          e.preventDefault();
          e.stopPropagation();
          if (now - lastAdvance.current < CARD_ADVANCE_DELAY) return;
          lastAdvance.current = now;
          const prev = idx - 1;
          activeRef.current = prev;
          setActive(prev);
        }
        // On first card → let native scroll pass (exit to previous section)
      }
    };

    // ── Key handler (arrow keys / page down) ──
    const onKeyDown = (e) => {
      if (!isInsideRef.current) return;
      const idx = activeRef.current;

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        if (idx < teams.length - 1) {
          e.preventDefault();
          const next = idx + 1;
          activeRef.current = next;
          setActive(next);
        }
      }
      if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (idx > 0) {
          e.preventDefault();
          const prev = idx - 1;
          activeRef.current = prev;
          setActive(prev);
        }
      }
    };

    // ── Touch support ──
    let touchStartY = 0;
    let touchLocked = false;
    const onTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
      touchLocked = false;
    };
    const onTouchMove = (e) => {
      if (!isInsideRef.current) return;
      const diff = touchStartY - e.touches[0].clientY;
      const idx = activeRef.current;

      if (!touchLocked && Math.abs(diff) > 40) {
        touchLocked = true;
        if (diff > 0 && idx < teams.length - 1) {
          e.preventDefault();
          const next = idx + 1;
          activeRef.current = next;
          setActive(next);
          touchStartY = e.touches[0].clientY;
        } else if (diff < 0 && idx > 0) {
          e.preventDefault();
          const prev = idx - 1;
          activeRef.current = prev;
          setActive(prev);
          touchStartY = e.touches[0].clientY;
        }
      } else if (touchLocked) {
        e.preventDefault();
      }
    };

    // Use capture phase so we intercept before anything else
    window.addEventListener('wheel', onWheel, { passive: false, capture: true });
    window.addEventListener('keydown', onKeyDown, { capture: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false, capture: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('wheel', onWheel, { capture: true });
      window.removeEventListener('keydown', onKeyDown, { capture: true });
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove, { capture: true });
    };
  }, [snapSectionToTop]);

  const team = teams[active];
  const Icon = team.icon;

  return (
    <section
      ref={sectionRef}
      className="py-4 sm:py-12 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-4 sm:mb-8 text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-[10px] sm:text-xs font-bold mb-3 uppercase tracking-widest">
            <Users size={12} /> Who it's for
          </span>
          <h2 className="text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-black text-slate-900 leading-[1.05] tracking-normal max-w-3xl mx-auto">
            Built For Teams That{' '}<br />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#7e22ce] via-fuchsia-500 to-[#7e22ce] bg-[length:200%_auto]"
              animate={{ backgroundPosition: ['0% center', '-200% center'] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            >
              Move Fast
            </motion.span>
          </h2>
        </div>



        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* Mobile: icon row */}
          <div className="lg:hidden w-full overflow-x-auto pb-1.5 scrollbar-hide">
            <div className="mx-auto flex w-max items-center justify-center gap-2">
              {teams.map((t, i) => {
                const TIcon = t.icon;
                const isActive = active === i;
                return (
                  <button
                    key={t.label}
                    onClick={() => { activeRef.current = i; setActive(i); }}
                    className={`flex h-10 w-10 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl border transition-all ${isActive ? `${t.bg} border-purple-200 shadow-sm` : 'border-slate-200 bg-white'
                      }`}
                  >
                    <div className={`flex h-7 w-7 sm:h-10 sm:w-10 items-center justify-center rounded-full transition-all ${isActive ? `bg-gradient-to-br ${t.gradient}` : 'bg-slate-100'
                      }`}>
                      <TIcon size={14} className={isActive ? 'text-white' : 'text-slate-400'} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* LEFT: stacked rows -desktop with Wizard Timeline */}
          <div className="hidden lg:col-span-4 lg:flex lg:flex-col relative px-4">
            {/* The Background Track (Line) */}
            <div className="absolute left-[36px] top-[40px] bottom-[40px] w-0.5 bg-slate-100 rounded-full z-0" />

            {/* The Animated Progress Line */}
            <motion.div
              animate={{
                height: `${(active / (teams.length - 1)) * 100}%`,
                background: `linear-gradient(to bottom, ${teams[Math.max(0, active - 1)].accent}, ${teams[active].accent})`
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 30 }}
              className="absolute left-[36px] top-[40px] w-0.5 rounded-full origin-top z-10"
              style={{ maxHeight: 'calc(100% - 80px)' }}
            />

            {teams.map((t, i) => {
              const TIcon = t.icon;
              const isActive = active === i;
              const isPast = active > i;

              return (
                <motion.button
                  key={t.label}
                  onClick={() => { activeRef.current = i; setActive(i); }}
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  className="flex items-center gap-6 py-6 text-left group w-full relative z-10"
                >
                  {/* Step dot / Icon Container */}
                  <motion.div
                    animate={{
                      scale: isActive ? 1.15 : 1,
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 relative z-20"
                    style={{
                      backgroundColor: isActive ? t.accent : isPast ? t.accent : '#6b21a8',
                      boxShadow: isActive ? `0 0 25px ${t.accent}66` : isPast ? `0 0 10px ${t.accent}33` : 'none',
                      opacity: 1,
                    }}
                  >
                    <TIcon size={18} className="text-white" />
                  </motion.div>

                  <div className="flex-1">
                    <motion.p
                      animate={{
                        color: isActive ? '#0f172a' : isPast ? '#64748b' : '#94a3b8',
                        scale: isActive ? 1.05 : 1
                      }}
                      className={`text-[15px] font-black tracking-tight leading-none`}
                    >
                      {t.label}
                    </motion.p>
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="text-xs text-slate-400 font-medium mt-1.5 overflow-hidden pr-4"
                        >
                          {t.result}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* RIGHT: detail panel */}
          <div className="lg:col-span-8" ref={rightPanelRef}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`relative overflow-hidden rounded-3xl border border-slate-100 p-4.5 sm:p-10 lg:p-12 ${team.bg}`}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-100 bg-white shadow-sm sm:mb-8 sm:h-16 sm:w-16">
                  <Icon size={20} style={{ color: team.accent }} />
                </div>
                <div>
                  <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${team.textGrad}`}>
                    {team.label}
                  </span>
                  <h3 className="mt-1 mb-2 text-xl font-black leading-snug text-slate-900 sm:text-3xl">
                    {team.headline}
                  </h3>
                  <p className="mb-3 text-sm font-medium italic text-slate-500 sm:text-base">
                    "{team.result}"
                  </p>
                  <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_240px] lg:items-start">
                    <div>
                      <p className="max-w-xl text-sm font-medium leading-relaxed text-slate-500 sm:text-base">
                        {team.summary}
                      </p>

                      <div className="mt-3 flex flex-col items-center lg:items-start gap-1 rounded-2xl border border-white/70 bg-white/70 p-3 shadow-sm backdrop-blur-sm w-full sm:max-w-[240px]">
                        <div className="flex items-baseline justify-center lg:justify-start gap-2">
                          <span className={`text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r sm:text-4xl ${team.textGrad}`}>
                            {team.stat.split(',')[0]}
                          </span>
                          <span className="text-slate-400 text-[11px] sm:text-sm font-bold uppercase tracking-wider">
                            {team.stat.includes(',') ? team.stat.split(',')[1] : ''}
                          </span>
                        </div>
                        <div className="h-1 w-12 rounded-full bg-gradient-to-r from-slate-200 to-transparent block lg:hidden" />
                        <p className="mt-1 text-sm font-medium text-slate-400">
                          {team.statSub}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {team.bullets.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 rounded-2xl border border-white/70 bg-white/75 px-4 py-2.5 text-sm font-bold text-slate-600 shadow-sm backdrop-blur-sm text-left"
                        >
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: team.accent }} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card counter */}
                <div className="absolute bottom-5 right-6 text-xs font-bold text-slate-300 tracking-widest">
                  {active + 1} / {teams.length}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;
