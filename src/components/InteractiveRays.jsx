import React, { useEffect, useRef } from "react";

export default function InteractiveRays({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    let rays = [];
    let mouse = { x: -1000, y: -1000 };
    let isHovering = false;

    // Palette: Purple (#7e22ce) and Pink (#ec4899)
    const colors = ["#7e22ce", "#a21caf", "#d946ef", "#ec4899"];

    const init = () => {
      const parent = canvas.parentElement;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

      rays = [];
      const numRays = 120;
      for (let i = 0; i < numRays; i++) {
        // Angles between roughly PI + 0.1 to 2*PI - 0.1 (semi-circle above the bottom center)
        const minAngle = Math.PI + 0.15;
        const maxAngle = Math.PI * 2 - 0.15;
        const baseAngle = minAngle + Math.random() * (maxAngle - minAngle);
        
        // Random lengths
        const baseLength = Math.random() * (height * 0.8) + (height * 0.2);

        rays.push({
          baseAngle,
          angle: baseAngle,
          baseLength,
          length: baseLength,
          color: colors[Math.floor(Math.random() * colors.length)],
          thickness: Math.random() * 0.4 + 0.15, // Made thinner
          dotSize: Math.random() * 1.0 + 0.5,    // Made smaller
          speed: Math.random() * 0.05 + 0.02,
          currentX: null,
          currentY: null
        });
      }
    };

    init();

    window.addEventListener("resize", init);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      isHovering = true;
    };
    
    const handleMouseLeave = () => {
      isHovering = false;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    let animationFrameId;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const originX = width / 2;
      const originY = height + 10; // Slightly below the visible bottom

      rays.forEach((ray) => {
        // Find normal end point
        let targetX = originX + Math.cos(ray.baseAngle) * ray.baseLength;
        let targetY = originY + Math.sin(ray.baseAngle) * ray.baseLength;

        // Interactive pulling towards mouse
        if (isHovering) {
          const dx = mouse.x - targetX;
          const dy = mouse.y - targetY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          // Pull effect radius - wider for watermark
          if (dist < 400) {
            const pullFactor = (400 - dist) / 400;
            // Pull the end point towards the mouse
            targetX += dx * pullFactor * 0.4;
            targetY += dy * pullFactor * 0.4;
          }
        }

        // Smooth Interpolation (Lerp)
        if (ray.currentX === null || ray.currentY === null) {
          ray.currentX = targetX;
          ray.currentY = targetY;
        } else {
          ray.currentX += (targetX - ray.currentX) * 0.1; // Lerp factor (higher is faster, lower is smoother)
          ray.currentY += (targetY - ray.currentY) * 0.1;
        }

        // Draw the ray line
        ctx.beginPath();
        ctx.moveTo(originX, originY);
        ctx.lineTo(ray.currentX, ray.currentY);
        
        // Create a gradient for the line
        const grad = ctx.createLinearGradient(originX, originY, ray.currentX, ray.currentY);
        grad.addColorStop(0, `${ray.color}00`); // Transparent at base
        grad.addColorStop(0.5, `${ray.color}35`); // Brighter body
        grad.addColorStop(1, `${ray.color}85`);   // Brighter tip
        
        ctx.strokeStyle = grad;
        ctx.lineWidth = ray.thickness;
        ctx.stroke();

        // Draw the dot at the end
        ctx.beginPath();
        ctx.arc(ray.currentX, ray.currentY, ray.dotSize, 0, Math.PI * 2);
        ctx.fillStyle = `${ray.color}A0`; // Brighter dot
        ctx.fill();
        
        // Very subtle floating animation for base lengths
        ray.baseLength += Math.sin(Date.now() * ray.speed * 0.05) * 0.2;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", init);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`block w-full h-full pointer-events-auto cursor-crosshair ${className}`}
    />
  );
}
