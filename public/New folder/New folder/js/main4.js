// main4.js - Phase 4 Advanced Interactive Global Sections

// A. Explore Kai Capabilities (Horizontal Scroll)
const hSection = document.querySelector('.horizontal-scroll-section');
const hTrack = document.querySelector('.h-track');

if (hSection && hTrack) {
    // Calculate total scroll distance based on track width vs viewport
    function getScrollAmount() {
        let trackWidth = hTrack.scrollWidth;
        return -(trackWidth - window.innerWidth + 100);
    }

    const tween = gsap.to(hTrack, {
        x: getScrollAmount,
        ease: "none"
    });

    ScrollTrigger.create({
        trigger: hSection,
        start: "top top",
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true
    });
}

// B. How Kai Thinks (Neural Network Canvas) -Stable Cyber Animation
const nnCanvas = document.getElementById('nn-canvas');
const nnContainer = document.querySelector('.nn-container');
const nnSection = document.querySelector('.neural-network-section');
const nnNodes = document.querySelectorAll('.nn-node');

if (nnCanvas && nnContainer && nnNodes.length > 0) {
    const ctx = nnCanvas.getContext('2d');

    const LINE_COLORS = [
        [0, 255, 204],
        [123, 47, 255],
        [255, 0, 204],
        [0, 255, 136],
        [255, 107, 53],
    ];

    // STATIC cached positions -measured once, never inside rAF
    let pts = [];
    let connections = [];
    let pulses = [];

    function cachePositions() {
        // offsetLeft/offsetTop relative to nn-container are scroll-stable
        pts = Array.from(nnNodes).map(node => ({
            x: node.offsetLeft + node.offsetWidth / 2,
            y: node.offsetTop + node.offsetHeight / 2,
        }));
    }

    function buildConnections() {
        connections = [];
        pulses = [];
        const MAX_NEIGHBORS = 3;

        pts.forEach((p, i) => {
            const sorted = pts
                .map((q, j) => ({ j, dist: Math.hypot(q.x - p.x, q.y - p.y) }))
                .filter(d => d.j !== i)
                .sort((a, b) => a.dist - b.dist)
                .slice(0, MAX_NEIGHBORS);

            sorted.forEach(({ j, dist }) => {
                const exists = connections.some(c =>
                    (c.i === i && c.j === j) || (c.i === j && c.j === i)
                );
                if (!exists) {
                    const col = LINE_COLORS[Math.floor(Math.random() * LINE_COLORS.length)];
                    connections.push({ i, j, dist, col });
                    pulses.push({
                        ci: connections.length - 1,
                        t: Math.random(),
                        speed: 0.003 + Math.random() * 0.003,
                        dir: Math.random() > 0.5 ? 1 : -1,
                        col,
                        size: 2 + Math.random() * 1.5,
                    });
                }
            });
        });
    }

    function setup() {
        nnCanvas.width = nnContainer.offsetWidth;
        nnCanvas.height = nnContainer.offsetHeight;
        cachePositions();
        buildConnections();
    }

    window.addEventListener('resize', setup);
    setTimeout(setup, 300);

    function drawNeuralNetwork(ts) {
        ctx.clearRect(0, 0, nnCanvas.width, nnCanvas.height);

        // Connection lines
        connections.forEach(conn => {
            const p1 = pts[conn.i];
            const p2 = pts[conn.j];
            if (!p1 || !p2) return;
            const [r, g, b] = conn.col;
            const opacity = Math.max(0.06, 0.18 - conn.dist / 3000);

            // Glow underlay
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${r},${g},${b},${opacity * 0.18})`;
            ctx.lineWidth = 5;
            ctx.stroke();

            // Crisp line
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${r},${g},${b},${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
        });

        // Traveling pulses
        pulses.forEach(pulse => {
            pulse.t += pulse.speed * pulse.dir;
            if (pulse.t > 1) pulse.t = 0;
            if (pulse.t < 0) pulse.t = 1;

            const conn = connections[pulse.ci];
            if (!conn) return;
            const p1 = pts[conn.i];
            const p2 = pts[conn.j];
            if (!p1 || !p2) return;

            const x = p1.x + (p2.x - p1.x) * pulse.t;
            const y = p1.y + (p2.y - p1.y) * pulse.t;
            const [r, g, b] = pulse.col;

            const glow = ctx.createRadialGradient(x, y, 0, x, y, pulse.size * 4);
            glow.addColorStop(0, `rgba(${r},${g},${b},0.5)`);
            glow.addColorStop(1, `rgba(${r},${g},${b},0)`);
            ctx.beginPath();
            ctx.arc(x, y, pulse.size * 4, 0, Math.PI * 2);
            ctx.fillStyle = glow;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(x, y, pulse.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgb(${r},${g},${b})`;
            ctx.fill();
        });

        // Central node breathing aura
        if (pts[1]) {
            const { x: cx, y: cy } = pts[1];
            const wave = 0.25 + 0.2 * Math.sin(ts * 0.0015);
            const aura = ctx.createRadialGradient(cx, cy, 0, cx, cy, 55);
            aura.addColorStop(0, `rgba(0,255,204,${wave})`);
            aura.addColorStop(1, `rgba(0,255,204,0)`);
            ctx.beginPath();
            ctx.arc(cx, cy, 55, 0, Math.PI * 2);
            ctx.fillStyle = aura;
            ctx.fill();
        }

        requestAnimationFrame(drawNeuralNetwork);
    }

    requestAnimationFrame(drawNeuralNetwork);
}


// C. Try Kai Live (Chat Demo)
const demoSection = document.querySelector('.live-demo-section');
const demoUI = document.querySelector('.demo-ui');
const typingIndicator = document.getElementById('typing-indicator');

if (demoSection) {
    // Reset state
    const chatBody = document.querySelector('.chat-body');

    const demoTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: demoSection,
            start: "top 60%", // Start when halfway visible
            once: true
        }
    });

    // Simulate user message reveal
    demoTimeline.to(".msg-user", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out"
    });

    // Show typing, pulse UI box
    demoTimeline.add(() => {
        typingIndicator.style.display = 'flex';
        gsap.to(typingIndicator, { opacity: 1, y: 0, duration: 0.3 });
        demoUI.classList.add('active-glow');
    }, "+=0.5");

    // Hide typing, show generated responses
    demoTimeline.add(() => {
        gsap.to(typingIndicator, { opacity: 0, duration: 0.3, onComplete: () => typingIndicator.style.display = 'none' });
        demoUI.classList.remove('active-glow');

        // Inject fake responses
        const responses = [
            "Analyzing request parameters...",
            "• Market research strategy formulated.",
            "• Launch timeline established (3 weeks).",
            "• Generating 45 automation sub-tasks."
        ];

        responses.forEach((text, index) => {
            const div = document.createElement('div');
            div.className = 'chat-msg msg-kai';
            div.innerText = text;
            chatBody.appendChild(div);

            // Initial state
            gsap.set(div, { opacity: 0, y: 20 });

            // Pop in
            gsap.to(div, {
                opacity: 1,
                y: 0,
                duration: 0.4,
                ease: "back.out(1.2)",
                delay: index * 0.4
            });
        });

    }, "+=2.0"); // "Type" for 2 seconds
}
