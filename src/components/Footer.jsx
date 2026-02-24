import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white text-gray-900 pt-20 pb-10 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 mb-16">
                    <div className="col-span-2 lg:col-span-1">
                        <div className="flex-shrink-0 flex items-center group cursor-pointer">
                            <img src="/src/assets/logo.png" alt="KaryaUp Logo" className="h-10 w-auto group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            The only platform you need for team management, tracking, and growth.
                        </p>
                    </div>

                    <div>
                        <h5 className="font-bold mb-6 text-gray-900">KaryaUp</h5>
                        <ul className="space-y-3 text-gray-500 text-sm">
                            <li><a href="#" className="hover:text-purple-600 hover:translate-x-1 inline-block transition-all duration-200">About Us</a></li>
                            <li><a href="#" className="hover:text-purple-600 hover:translate-x-1 inline-block transition-all duration-200">Careers</a></li>
                            <li><a href="#" className="hover:text-purple-600 hover:translate-x-1 inline-block transition-all duration-200">Brand Assets</a></li>
                            <li><a href="#" className="hover:text-purple-600 hover:translate-x-1 inline-block transition-all duration-200">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-bold mb-6 text-gray-900">Product</h5>
                        <ul className="space-y-3 text-gray-500 text-sm">
                            <li><a href="#" className="hover:text-purple-600 hover:translate-x-1 inline-block transition-all duration-200">Tasks</a></li>
                            <li><a href="#" className="hover:text-purple-600 hover:translate-x-1 inline-block transition-all duration-200">Docs</a></li>
                            <li><a href="#" className="hover:text-purple-600 hover:translate-x-1 inline-block transition-all duration-200">Goals</a></li>
                            <li><a href="#" className="hover:text-purple-600 hover:translate-x-1 inline-block transition-all duration-200">Chat</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-bold mb-6 text-gray-900">Resources</h5>
                        <ul className="space-y-3 text-gray-500 text-sm">
                            <li><a href="#" className="hover:text-purple-600 hover:translate-x-1 inline-block transition-all duration-200">Help Center</a></li>
                            <li><a href="#" className="hover:text-purple-600 hover:translate-x-1 inline-block transition-all duration-200">API Docs</a></li>
                            <li><a href="#" className="hover:text-purple-600 hover:translate-x-1 inline-block transition-all duration-200">Status</a></li>
                            <li><a href="#" className="hover:text-purple-600 hover:translate-x-1 inline-block transition-all duration-200">Security</a></li>
                        </ul>
                    </div>

                    <div className="col-span-2 md:col-span-1">
                        <h5 className="font-bold mb-6 text-gray-900">Newsletter</h5>
                        <p className="text-gray-500 text-sm mb-4">Stay updated with the latest in team productivity.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Email"
                                className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm w-full focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:outline-none placeholder-gray-400 transition-all text-gray-900"
                            />
                            <button
                                className="text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 active:scale-95 whitespace-nowrap"
                                style={{ background: 'linear-gradient(135deg, #7b68ee, #a78bfa)' }}
                            >
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-400 text-xs">© 2026 KaryaUp. All rights reserved.</p>
                    <div className="flex gap-8 text-gray-400 text-xs">
                        <a href="#" className="hover:text-purple-600 transition-colors duration-200">Privacy Policy</a>
                        <a href="#" className="hover:text-purple-600 transition-colors duration-200">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
