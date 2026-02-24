import React from 'react';
import { CreditCard, Calendar, BarChart, Briefcase } from 'lucide-react';

const Management = () => {
    const items = [
        { title: "Salary Management", icon: <CreditCard className="w-6 h-6" />, desc: "Automated payroll and expense tracking." },
        { title: "Attendance & Leave", icon: <Calendar className="w-6 h-6" />, desc: "Effortless check-ins and time-off requests." },
        { title: "Brand Assets", icon: <Briefcase className="w-6 h-6" />, desc: "Centralized storage for all brand identities." },
        { title: "Performance Stats", icon: <BarChart className="w-6 h-6" />, desc: "Deep insights into team productivity." }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                    <div className="flex-1">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-6">More than just tasks.</h2>
                        <p className="text-base sm:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed">
                            KaryaUp handles the essentials of your business operations. From salary to attendance, everything is seamlessly integrated.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {items.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <div className="p-3 bg-white rounded-lg shadow-sm text-primary">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">{item.title}</h4>
                                        <p className="text-sm text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        {/* Dashboard mockup */}
                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                            {/* Dashboard header */}
                            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">KaryaUp Dashboard</span>
                                <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                                    <span className="text-[8px] font-bold text-primary">SM</span>
                                </div>
                            </div>

                            {/* Dashboard body */}
                            <div className="p-5 space-y-4">
                                {/* Top stats row */}
                                <div className="grid grid-cols-3 gap-3">
                                    <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-3">
                                        <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1">Total Payroll</p>
                                        <p className="text-lg font-black text-gray-900">₹12.4L</p>
                                        <p className="text-[9px] font-bold text-green-500 mt-0.5">↑ 8% this month</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl p-3">
                                        <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1">Present Today</p>
                                        <p className="text-lg font-black text-gray-900">47/52</p>
                                        <p className="text-[9px] font-bold text-green-500 mt-0.5">90.3% attendance</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-xl p-3">
                                        <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1">Leaves Pending</p>
                                        <p className="text-lg font-black text-gray-900">5</p>
                                        <p className="text-[9px] font-bold text-amber-500 mt-0.5">3 urgent</p>
                                    </div>
                                </div>

                                {/* Salary chart */}
                                <div className="bg-gray-50 rounded-xl p-4">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-xs font-bold text-gray-700">Monthly Payroll Overview</span>
                                        <span className="text-[9px] text-gray-400 font-semibold">Last 6 months</span>
                                    </div>
                                    <div className="flex items-end gap-2 h-20">
                                        {[55, 70, 60, 85, 75, 90].map((h, i) => (
                                            <div key={i} className="flex-1 flex flex-col items-center gap-1">
                                                <div
                                                    className="w-full rounded-md transition-all"
                                                    style={{
                                                        height: `${h}%`,
                                                        background: i === 5
                                                            ? 'linear-gradient(180deg, #7b68ee, #a78bfa)'
                                                            : '#e5e7eb',
                                                    }}
                                                ></div>
                                                <span className="text-[7px] text-gray-400 font-semibold">
                                                    {['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'][i]}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Attendance row */}
                                <div className="flex gap-3">
                                    <div className="flex-1 bg-gray-50 rounded-xl p-3">
                                        <span className="text-[10px] font-bold text-gray-500 mb-2 block">Team Attendance</span>
                                        <div className="flex flex-wrap gap-1.5">
                                            {Array.from({ length: 12 }).map((_, i) => (
                                                <div key={i} className="flex items-center gap-1">
                                                    <div className={`w-5 h-5 rounded-full ${i < 9 ? 'bg-purple-200' : 'bg-gray-200'} flex items-center justify-center`}>
                                                        <span className="text-[6px] font-bold text-gray-500">{String.fromCharCode(65 + i)}</span>
                                                    </div>
                                                    <div className={`w-1.5 h-1.5 rounded-full ${i < 9 ? 'bg-green-400' : i < 11 ? 'bg-red-400' : 'bg-yellow-400'}`}></div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="w-32 bg-gray-50 rounded-xl p-3">
                                        <span className="text-[10px] font-bold text-gray-500 mb-1 block">Performance</span>
                                        <div className="relative w-16 h-16 mx-auto">
                                            <svg viewBox="0 0 36 36" className="w-full h-full">
                                                <path
                                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                    fill="none"
                                                    stroke="#e5e7eb"
                                                    strokeWidth="3"
                                                />
                                                <path
                                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                    fill="none"
                                                    stroke="#7b68ee"
                                                    strokeWidth="3"
                                                    strokeDasharray="87, 100"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                            <span className="absolute inset-0 flex items-center justify-center text-xs font-black text-gray-800">87%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating salary card */}
                        <div className="absolute -top-4 -right-4 p-3 bg-white rounded-xl shadow-lg border border-gray-100 w-40 animate-float z-20 hidden sm:block">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Salary</span>
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            </div>
                            <div className="text-base font-black text-gray-900">₹4,25,000</div>
                            <div className="text-[9px] text-gray-400 font-medium">Processed this month</div>
                        </div>

                        {/* Background blob */}
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-100/40 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Management;
