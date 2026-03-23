import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

export default function FeatureCTA({ 
  title, 
  description, 
  buttonText = "Get started. It's FREE", 
  image, 
  imageAlt = "KaryaUp Showcase",
  imageClassName = "w-full",
  containerClassName = "mt-24 mb-10",
  paddingClassName = "p-3 lg:p-8",
  titleClassName = "text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-[1.1] mb-3 tracking-tight drop-shadow-lg",
  imageOuterClassName = "relative w-[105%] lg:w-full translate-x-2 lg:translate-x-6"
}) {
  return (
    <section className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 group ${containerClassName}`}>
      <div className={`relative rounded-[2.5rem] overflow-hidden bg-black flex flex-col lg:flex-row items-stretch border border-white/5 ${paddingClassName}`}>
        {/* Ambient Background Gradients for Depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(168,85,247,0.4),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(236,72,153,0.1),transparent_40%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(126,34,206,0.1),transparent_40%)] pointer-events-none" />
        
        {/* Left Content Area */}
        <div className="flex-[0.5] xl:flex-[0.6] z-20 text-left flex flex-col justify-center pt-6 lg:pt-10 pb-4 lg:pb-8 pl-4 lg:pl-10">
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative h-11 mb-6 self-start flex items-center gap-3"
          >
            {/* Dual-layer Logo: Colorful Icon + White Text */}
            <div className="relative h-full flex items-center">
              {/* White Base (Text and Icon) */}
              <img 
                src={logo} 
                alt="KaryaUp" 
                className="h-full w-auto filter brightness-0 invert opacity-100" 
              />
              {/* Colorful Overlay (Icon only) */}
              <div className="absolute inset-0 pointer-events-none" style={{ clipPath: 'inset(0 75% 0 0)' }}>
                <img src={logo} alt="" className="h-full w-auto" />
              </div>
            </div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={titleClassName}
          >
            {title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm font-medium mb-6 max-w-xs leading-relaxed"
          >
            {description}
          </motion.p>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-black px-10 py-4 rounded-[1.25rem] font-black text-base hover:bg-slate-50 transition-all shadow-2xl relative overflow-hidden self-start"
          >
            <span className="relative z-10">{buttonText}</span>
          </motion.button>
        </div>

        {/* Right Content Area: Interface Showcase with Glows */}
        <div className="flex-[1.5] xl:flex-[1.4] relative mt-12 lg:mt-0 flex items-center justify-end p-4 lg:p-6 lg:pr-10">
           <motion.div 
             initial={{ opacity: 0, x: 80, scale: 0.95 }}
             whileInView={{ opacity: 1, x: 0, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
             className={imageOuterClassName}
           >
             {/* Light spot overlay on image left side */}
             <div className="absolute top-1/4 -left-10 w-64 h-64 bg-white/10 blur-[80px] rounded-full z-30 pointer-events-none" />

             {/* Accent Gradient Glow around/behind image */}
             <div className="absolute top-1/2 left-0 w-full h-full bg-purple-600/50 blur-[150px] rounded-full opacity-70 pointer-events-none" />
             <div className="absolute -top-20 -right-20 w-80 h-80 bg-fuchsia-500/30 blur-[100px] rounded-full opacity-60 pointer-events-none" />
             
             {/* Image Wrapper with Gradient Border */}
             <div className={`relative p-[1.5px] rounded-[2.1rem] bg-gradient-to-br from-purple-500 via-fuchsia-500 to-[#7e22ce] ${imageClassName}`}>
               <img 
                 src={image} 
                 alt={imageAlt} 
                 className="relative w-full h-auto object-contain rounded-[2rem] border border-white/10 hover:border-white/20 transition-all duration-500 z-10"
               />
             </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
