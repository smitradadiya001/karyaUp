import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';

const authUrl = "https://www.karyaup.com/auth";

export default function FeatureCTA({ 
  title, 
  description, 
  buttonText = "Get started. It's FREE", 
  image, 
  imageAlt = "KaryaUp Showcase",
  imageClassName = "w-full",
  containerClassName = "mt-24 mb-10",
  paddingClassName = "p-1.5 sm:p-3 lg:p-4",
  titleClassName = "text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-[1.08] mb-2 tracking-tight drop-shadow-lg",
  imageOuterClassName = "relative w-full max-w-[260px] sm:max-w-[400px] lg:max-w-none lg:w-full mx-auto lg:mx-0 translate-x-0 lg:translate-x-6"
}) {
  const handleAuthRedirect = () => {
    window.location.href = authUrl;
  };

  return (
    <section className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
      <div className={`relative rounded-[2.5rem] overflow-hidden bg-black flex flex-col lg:flex-row items-stretch border border-white/5 ${paddingClassName}`}>
        {/* Ambient Background Gradients for Depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(168,85,247,0.4),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(236,72,153,0.1),transparent_40%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(126,34,206,0.1),transparent_40%)] pointer-events-none" />
        
        {/* Left Content Area */}
        <div className="flex-[0.5] xl:flex-[0.6] z-20 text-center lg:text-left flex flex-col items-center lg:items-start justify-center pt-3 lg:pt-5 pb-0 lg:pb-3 px-4 lg:pl-10 lg:pr-0">
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative h-11 mb-4 self-center lg:self-start flex items-center gap-3"
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
            className="text-slate-400 text-sm font-medium mb-4 max-w-xs mx-auto lg:mx-0 leading-relaxed"
          >
            {description}
          </motion.p>
          <motion.button
            type="button"
            onClick={handleAuthRedirect}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group relative z-10 flex h-[3.5em] w-full max-w-[14em] shrink-0 items-center justify-center overflow-hidden rounded-[30em] font-bold text-[15px] transition-all duration-300 self-center lg:self-start cursor-pointer"
            style={{
              boxShadow: "0 18px 40px rgba(126, 34, 206, 0.22)"
            }}
          >
            <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#7e22ce] to-fuchsia-500" />
            <div className="absolute -inset-[3px] -z-10 origin-left scale-x-0 rounded-[30em] bg-white transition-transform duration-500 ease-in-out group-hover:scale-x-100" />
            <span className="relative z-10 flex items-center justify-center gap-3 text-white transition-colors duration-300 group-hover:text-slate-800">
              {buttonText}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1.5" />
            </span>
          </motion.button>
        </div>

        {/* Right Content Area: Interface Showcase with Glows */}
        <div className="flex-[1.5] xl:flex-[1.4] relative mt-2 lg:mt-0 flex items-center justify-center lg:justify-end p-2 lg:p-4 lg:pr-10">
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
             <div className={`relative p-[1.5px] rounded-[1.1rem] bg-gradient-to-br from-purple-500 via-fuchsia-500 to-[#7e22ce] ${imageClassName}`}>
               <img 
                 src={image} 
                 alt={imageAlt} 
                 className="relative w-full h-auto object-contain rounded-[1.1rem] border border-white/10 hover:border-white/20 transition-all duration-500 z-10"
               />
             </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
