import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, User } from 'lucide-react';

const Roles = () => {
    const roles = [
        {
            title: "Boss",
            icon: <Shield className="w-12 h-12 text-primary" />,
            desc: "Full visibility and control. Manage team roles, high-level projects, and strategic goals.",
            color: "bg-purple-50",
            features: ["Manage Team Roles", "Strategic Overview", "All Access"]
        },
        {
            title: "Manager",
            icon: <Users className="w-12 h-12 text-blue-500" />,
            desc: "Coordinate tasks and track progress. Chat with everyone and ensure deadlines are met.",
            color: "bg-blue-50",
            features: ["Assign Tasks", "Track Progress", "Chat Coordination"]
        },
        {
            title: "Employee",
            icon: <User className="w-12 h-12 text-green-500" />,
            desc: "Focused execution. Update status, chat with teammates, and manage your personal task list.",
            color: "bg-green-50",
            features: ["Status Updates", "Team Chat", "Personal Inbox"]
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Tailored for Every Role</h2>
                <p className="text-base sm:text-xl text-gray-600 mb-12 sm:mb-16 max-w-2xl mx-auto">
                    KaryaUp provides specific tools and views for every member of your organization.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {roles.map((role, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className={`p-8 rounded-2xl ${role.color} border border-transparent hover:border-primary/20 transition-all duration-300`}
                        >
                            <div className="mb-6 flex justify-center">{role.icon}</div>
                            <h3 className="text-2xl font-bold mb-4">{role.title}</h3>
                            <p className="text-gray-600 mb-8">{role.desc}</p>
                            <ul className="text-left space-y-3">
                                {role.features.map((f, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Roles;
