import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, LogIn, UserPlus } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center group cursor-pointer">
                            <img src="/src/assets/logo.png" alt="KaryaUp Logo" className="h-10 w-auto group-hover:scale-105 transition-transform duration-300" />
                        </div>

                        <div className="hidden md:block ml-10">
                            <div className="flex items-baseline space-x-8">
                                <a href="#" className="text-gray-600 hover:text-primary font-bold transition-all hover:translate-y-[-2px] flex items-center gap-1">Product <ChevronDown size={14} /></a>
                                <a href="#" className="text-gray-600 hover:text-primary font-bold transition-all hover:translate-y-[-2px] flex items-center gap-1">Solutions <ChevronDown size={14} /></a>
                                <a href="#" className="text-gray-600 hover:text-primary font-bold transition-all hover:translate-y-[-2px]">Resources</a>
                                <a href="#" className="text-gray-600 hover:text-primary font-bold transition-all hover:translate-y-[-2px]">Pricing</a>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <div className="flex items-center space-x-6">
                            <button className="flex items-center gap-2 text-gray-600 font-bold hover:text-primary px-4 py-2 transition-all hover:scale-110 active:scale-95 group">
                                <LogIn size={18} className="group-hover:translate-x-1 transition-transform" />
                                Log In
                            </button>
                            <button className="btn-primary group">
                                <UserPlus size={18} className="group-hover:rotate-12 transition-transform" />
                                Sign Up Free
                            </button>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 animate-in fade-in slide-in-from-top-4 shadow-2xl">
                    <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
                        <a href="#" className="block px-3 py-4 text-gray-600 font-bold hover:bg-primary/5 rounded-xl">Product</a>
                        <a href="#" className="block px-3 py-4 text-gray-600 font-bold hover:bg-primary/5 rounded-xl">Solutions</a>
                        <a href="#" className="block px-3 py-4 text-gray-600 font-bold hover:bg-primary/5 rounded-xl">Resources</a>
                        <a href="#" className="block px-3 py-4 text-gray-600 font-bold hover:bg-primary/5 rounded-xl">Pricing</a>
                        <div className="pt-6 pb-2 border-t border-gray-100 flex flex-col gap-4 px-3">
                            <button className="w-full flex justify-center items-center gap-2 py-4 text-gray-700 font-bold rounded-xl border border-gray-200 hover:bg-gray-50 transition-all">
                                <LogIn size={18} /> Log In
                            </button>
                            <button className="w-full btn-primary py-4">
                                <UserPlus size={18} /> Sign Up Free
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
