import { useRef, useState } from "react";
import { motion } from "framer-motion";

/** Matches Team Collaboration / Notifications-style feature cards — icon fills with brand color on hover */
function getCollabIconColorClasses(color) {
  switch (color) {
    case "purple":
      return "bg-purple-100 text-[#7e22ce] group-hover:bg-[#7e22ce] group-hover:text-white shadow-purple-200/50";
    case "fuchsia":
      return "bg-fuchsia-100 text-fuchsia-600 group-hover:bg-fuchsia-500 group-hover:text-white shadow-fuchsia-200/50";
    default:
      return "bg-purple-100 text-[#7e22ce] group-hover:bg-[#7e22ce] group-hover:text-white shadow-purple-200/50";
  }
}

/** item: { icon, title, desc, color?: "purple" | "fuchsia" } */
export default function CollabTiltCard({ item, delay = 0 }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;

  const handleMouseMove = (e) => {
    const r = cardRef.current?.getBoundingClientRect();
    if (!r) return;
    const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    setTilt({ x: dy * -12, y: dx * 12 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setTilt({ x: 0, y: 0 });
          setHovered(false);
        }}
        animate={{ rotateX: tilt.x, rotateY: tilt.y, scale: hovered ? 1.03 : 1 }}
        transition={{ type: "spring", stiffness: 280, damping: 24 }}
        style={{ transformStyle: "preserve-3d" }}
        className="h-full"
      >
        <article
          className={`group relative h-full rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-8 shadow-xl shadow-slate-200/40 cursor-default transition-all duration-300 hover:shadow-2xl ${
            item.color === "fuchsia"
              ? "hover:border-fuchsia-300/60 hover:shadow-fuchsia-900/10"
              : "hover:border-purple-300 hover:shadow-purple-900/15"
          }`}
          style={{ transform: "translateZ(0)" }}
        >
          <div
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-5 sm:mb-6 transition-all duration-300 group-hover:shadow-md group-hover:scale-110 ${getCollabIconColorClasses(item.color)}`}
            style={{ transform: "translateZ(24px)" }}
          >
            <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.25} />
          </div>
          <h3
            className="text-lg sm:text-xl font-black text-slate-900 mb-2.5 leading-tight"
            style={{ transform: "translateZ(12px)" }}
          >
            {item.title}
          </h3>
          <p
            className="text-slate-600 text-sm font-medium leading-relaxed"
            style={{ transform: "translateZ(8px)" }}
          >
            {item.desc}
          </p>
        </article>
      </motion.div>
    </motion.div>
  );
}
