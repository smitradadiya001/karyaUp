/* ═══════════════════════════════════════════
   KAI -PAGE LOADER CONTROLLER
═══════════════════════════════════════════ */

(function () {
    'use strict';

    const loader = document.getElementById('page-loader');
    if (!loader) return;

    const counterEl = loader.querySelector('.loader-counter-val');
    const fillEl = loader.querySelector('.loader-counter-fill');
    const barFill = loader.querySelector('.loader-bar-fill');
    const barGlow = loader.querySelector('.loader-bar-glow');
    const percentLabel = loader.querySelector('.loader-percent-label');
    const brand = loader.querySelector('.loader-brand');
    const barWrap = loader.querySelector('.loader-bar-wrap');
    const status = loader.querySelector('.loader-status');
    const tagline = loader.querySelector('.loader-tagline');
    const glitch = loader.querySelector('.loader-glitch');
    const panelTop = loader.querySelector('.loader-panel.top');
    const panelBottom = loader.querySelector('.loader-panel.bottom');

    // Status messages to cycle through
    const STATUS_MSGS = [
        'Initializing neural core…',
        'Loading agent modules…',
        'Calibrating decision engine…',
        'Syncing memory banks…',
        'Deploying Kai v3.0…',
    ];
    let statusIdx = 0;

    // ── GSAP entrance ──
    gsap.set([brand, barWrap, status, tagline], { opacity: 0 });

    const entranceTl = gsap.timeline();
    entranceTl
        .to(brand, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 0.1)
        .to(status, { opacity: 1, duration: 0.5, ease: 'power2.out' }, 0.2)
        .to(barWrap, { opacity: 1, duration: 0.5, ease: 'power2.out' }, 0.3)
        .to(tagline, { opacity: 1, duration: 0.6, ease: 'power2.out' }, 0.4);

    // ── Counter animation ──
    let current = 0;
    const DURATION_MS = 2600; // total count time
    const startTime = performance.now();

    // Easing: fast start, slow finish (exponential)
    function easeInOutExpo(t) {
        return t === 0 ? 0 : t === 1 ? 1 :
            t < 0.5 ? Math.pow(2, 20 * t - 10) / 2
                : (2 - Math.pow(2, -20 * t + 10)) / 2;
    }

    // Cycle status messages
    const statusInterval = setInterval(() => {
        statusIdx = (statusIdx + 1) % STATUS_MSGS.length;
        gsap.to(status, {
            opacity: 0, duration: 0.2, onComplete: () => {
                status.textContent = STATUS_MSGS[statusIdx];
                gsap.to(status, { opacity: 1, duration: 0.3 });
            }
        });
    }, 520);

    function tick(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / DURATION_MS, 1);
        const eased = easeInOutExpo(progress);
        const val = Math.round(eased * 100);

        if (val !== current) {
            current = val;
            const display = String(val).padStart(2, '0');
            counterEl.textContent = display;
            fillEl.textContent = display;

            // Clip reveal synchronized with value
            const pct = val; // 0–100
            fillEl.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
            barFill.style.width = pct + '%';
            barGlow.style.left = pct + '%';
            percentLabel.textContent = display + '%';
        }

        if (progress < 1) {
            requestAnimationFrame(tick);
        } else {
            // Done -trigger exit
            clearInterval(statusInterval);
            exitLoader();
        }
    }

    requestAnimationFrame(tick);

    // ── Exit sequence ──
    function exitLoader() {
        // 1. Flash glitch
        gsap.timeline()
            .to(glitch, { opacity: 0.6, duration: 0.06, ease: 'none' })
            .to(glitch, { opacity: 0, duration: 0.06, ease: 'none' })
            .to(glitch, { opacity: 0.3, duration: 0.04, ease: 'none' })
            .to(glitch, { opacity: 0, duration: 0.06, ease: 'none' })

            // 2. Counter scales up & fades
            .to('.loader-counter', {
                scale: 1.12,
                opacity: 0,
                duration: 0.5,
                ease: 'power3.in'
            }, '-=0.05')

            // 3. UI fades
            .to([brand, barWrap, status, tagline, '.loader-corner'], {
                opacity: 0,
                duration: 0.3,
                ease: 'power2.in'
            }, '-=0.3')

            // 4. Panels split apart (top goes up, bottom goes down)
            .to(panelTop, {
                yPercent: -100,
                duration: 0.75,
                ease: 'power4.inOut'
            }, '-=0.1')
            .to(panelBottom, {
                yPercent: 100,
                duration: 0.75,
                ease: 'power4.inOut'
            }, '<')

            // 5. Remove from DOM
            .add(() => {
                loader.remove();
                document.body.classList.remove('loading');
            });
    }
})();
