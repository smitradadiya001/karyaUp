import { useEffect, useState } from "react";

export default function ComingSoon() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Inter:wght@800&display=swap');

        .handwriting-svg {
          width: min(90vw, 900px);
          height: auto;
        }

        .handwriting-text {
          font-family: 'Caveat', cursive;
          font-size: 180px;
          font-weight: 700;
          fill: transparent;
          stroke: url(#gradientText);
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 2500;
          stroke-dashoffset: 2500;
        }

        .handwriting-text.animate {
          animation: draw 2.8s ease-in-out forwards;
        }

        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }
      `}</style>

      {/* Foreground handwriting */}
      <div className="relative z-10 flex items-center justify-center">
        <svg
          className="handwriting-svg"
          viewBox="0 0 900 280"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradientText" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7e22ce" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#7e22ce" />
            </linearGradient>
            <mask id="revealMask">
              <rect
                x="0"
                y="0"
                width="0"
                height="280"
                fill="white"
              >
                {animate && (
                  <animate
                    attributeName="width"
                    from="0"
                    to="900"
                    dur="2.8s"
                    fill="freeze"
                    calcMode="spline"
                    keySplines="0.4 0 0.2 1"
                  />
                )}
              </rect>
            </mask>
          </defs>

          {/* Stroke outline being drawn */}
          <text
            x="50%"
            y="60%"
            textAnchor="middle"
            dominantBaseline="middle"
            className={`handwriting-text ${animate ? "animate" : ""}`}
          >
            Coming soon...
          </text>

          {/* Filled text revealed left-to-right */}
          <text
            x="50%"
            y="60%"
            textAnchor="middle"
            dominantBaseline="middle"
            mask="url(#revealMask)"
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: "180px",
              fontWeight: 700,
              fill: "url(#gradientText)",
            }}
          >
            Coming soon...
          </text>
        </svg>
      </div>
    </div>
  );
}
