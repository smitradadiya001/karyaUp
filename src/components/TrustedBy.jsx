import React from 'react';
import { motion } from 'framer-motion';

const TrustedBy = () => {
    const brands = [
        { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
        { name: 'Stripe', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg' },
        { name: 'Uber', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg' },
        { name: 'Spotify', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_with_text.svg' },
        { name: 'Logitech', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Logitech_logo.svg' },
        { name: 'T-Mobile', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/T-Mobile_logo_2013.svg' }
    ];

    return (
        <section className="py-8 sm:py-12 bg-white overflow-hidden border-t border-b border-black/[0.08]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-xs sm:text-sm font-bold text-black-400 uppercase tracking-widest mb-4 sm:mb-6">
                    Trusted by the best teams
                </p>
                <div className="group grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 place-items-center gap-x-8 gap-y-8 md:gap-x-12">
                    {brands.map((brand, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            className="relative cursor-pointer transition-all duration-300 transform"
                        >
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="h-5 sm:h-6 md:h-7 w-auto filter grayscale opacity-40 brightness-0 group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-100 transition-all duration-500 ease-in-out"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
