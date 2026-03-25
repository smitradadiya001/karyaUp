import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <footer className="bg-white text-gray-900 pt-20 sm:pt-24 pb-10 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 mb-16">
                    <div className="col-span-2 lg:col-span-1">

                        <p className="text-gray-500 text-base leading-relaxed">
                            The only platform you need for team management, tracking, and growth.
                        </p>
                    </div>

                    <div>
                        <h5 className="text-lg font-bold mb-6 text-gray-900">KaryaUp</h5>
                        <ul className="space-y-3 text-gray-500 text-base">
                            <li><a href="#" className="hover:text-purple-600 hover:translate-x-1 inline-block transition-all duration-200">About Us</a></li>
                            <li><a href="#" className="hover:text-purple-600 hover:translate-x-1 inline-block transition-all duration-200">Careers</a></li>
                            <li><a href="#" className="hover:text-purple-600 hover:translate-x-1 inline-block transition-all duration-200">Brand Assets</a></li>
                            <li><a href="#" className="hover:text-purple-600 hover:translate-x-1 inline-block transition-all duration-200">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-lg font-bold mb-6 text-gray-900">Product</h5>
                        <ul className="space-y-3 text-gray-500 text-base">
                            <li><a href="#" className="hover:text-purple-600 hover:translate-x-1 inline-block transition-all duration-200">Tasks</a></li>
                            <li><a href="#" className="hover:text-purple-600 hover:translate-x-1 inline-block transition-all duration-200">Docs</a></li>
                            <li><a href="#" className="hover:text-purple-600 hover:translate-x-1 inline-block transition-all duration-200">Goals</a></li>
                            <li><a href="#" className="hover:text-purple-600 hover:translate-x-1 inline-block transition-all duration-200">Chat</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-lg font-bold mb-6 text-gray-900">Resources</h5>
                        <ul className="space-y-3 text-gray-500 text-base">
                            <li><a href="#" className="hover:text-purple-600 hover:translate-x-1 inline-block transition-all duration-200">Help Center</a></li>
                            <li><a href="#" className="hover:text-purple-600 hover:translate-x-1 inline-block transition-all duration-200">API Docs</a></li>
                            <li><a href="#" className="hover:text-purple-600 hover:translate-x-1 inline-block transition-all duration-200">Status</a></li>
                            <li><a href="#" className="hover:text-purple-600 hover:translate-x-1 inline-block transition-all duration-200">Security</a></li>
                        </ul>
                    </div>

                    <div className="col-span-2 md:col-span-1">
                        <h5 className="text-lg font-bold mb-6 text-gray-900">Newsletter</h5>
                        <p className="text-gray-500 text-base mb-4">Stay updated with the latest in team productivity.</p>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="email"
                                placeholder="Email"
                                className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-base w-full focus:ring-2 focus:ring-[#7e22ce] focus:border-transparent focus:outline-none placeholder-gray-400 transition-all text-gray-900"
                            />
                            <button
                                className="text-white px-5 py-2.5 rounded-lg text-base font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#7e22ce]/25 active:scale-95 whitespace-nowrap w-full sm:w-auto"
                                style={{ background: 'linear-gradient(135deg, #7e22ce, #a855f7)' }}
                            >
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="flex justify-start gap-4 mb-6">
                    {/* LinkedIn */}
                    <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 transition-all duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                    {/* Facebook */}
                    <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 transition-all duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </a>
                    {/* Instagram */}
                    <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 transition-all duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                    </a>
                    {/* X / Twitter */}
                    <a href="#" aria-label="X" className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 transition-all duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                </div>

                <div className="border-t border-gray-200 pt-5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-400 text-sm">© 2026 KaryaUp. All rights reserved.</p>
                    <div className="flex gap-6 sm:gap-8 text-gray-400 text-sm">
                        <Link to="/privacy" className="hover:text-purple-600 transition-colors duration-200">Privacy Policy</Link>
                        <a href="#" className="hover:text-purple-600 transition-colors duration-200">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
