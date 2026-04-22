import React from 'react';


import utopia from '../assets/logo-13utopia.webp';
import inox from '../assets/logo-INOX .webp';
import navkar from '../assets/logo-navkar.webp';
import ooko from '../assets/logo-ooko.webp';
import rayon from '../assets/logo-rayon.webp';
import textson from '../assets/logo-textson.webp';
import tqs from '../assets/logo-tqs.webp';
import zaab from '../assets/logo-zaab.png';
import zenith from '../assets/logo-zenithive.webp';

const TrustedBy = () => {
    const brands = [
        { name: '13 Utopia', logo: utopia },
        { name: 'INOX', logo: inox },
        { name: 'Navkar', logo: navkar },
        { name: 'Ooko', logo: ooko },
        { name: 'Rayon', logo: rayon },
        
        { name: 'TQS', logo: tqs },
        { name: 'Zaab', logo: zaab },
       
    ];

    const LogoGroup = () => (
        <div className="flex flex-nowrap shrink-0 items-center gap-10 sm:gap-14 md:gap-16 lg:gap-20 pr-5 sm:pr-8 md:pr-10 lg:pr-15">
            {brands.map((brand, index) => (
                <div key={index} className="flex items-center shrink-0">
                    <img
                        src={brand.logo}
                        alt={brand.name}
                        width="200"
                        height="80"
                        loading="lazy"
                        className="h-10 sm:h-12 md:h-14 w-auto grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 block object-contain"
                    />
                </div>
            ))}
        </div>
    );

    return (
        <section className="group bg-white border-y border-black/[0.08] overflow-hidden w-full pt-6 pb-6 sm:pt-8 sm:pb-8">
            <div className="flex flex-col items-center">
                
                <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-[0.25em] m-0 mb-6 leading-[1.05]">
                    Trusted by the best teams
                </p>

                <div className="relative flex overflow-x-hidden w-full">
                    {/* Premium Edge Fades */}
                    <div className="absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />

                    <div className="flex flex-nowrap w-max animate-infinite-scroll">
                        <LogoGroup />
                        <LogoGroup />
                    </div>
                </div>
            </div>

            {/* Injected CSS for the smooth marquee effect */}
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-infinite-scroll {
                    display: flex;
                    width: max-content;
                    animation: scroll 30s linear infinite;
                }
                .animate-infinite-scroll:hover {
                    animation-play-state: paused;
                }
            `}} />
        </section>
    );
};

export default TrustedBy;
