import React from 'react';
import { motion } from 'framer-motion';
import { Link2 } from 'lucide-react';

const Integrations = () => {
    const integrations = [
        { 
            name: 'Google Calendar', 
            logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg',
            description: 'Sync your tasks with Google Calendar to manage your deadlines and schedule seamlessly.'
        },
        { 
            name: 'Slack', 
            logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg',
            description: 'Receive real-time notifications and updates in Slack to keep your team aligned and productive.'
        },
        { 
            name: 'Gmail', 
            logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg',
            description: 'Connect your email tools to track communications and turn emails into actionable tasks.'
        },
        { 
            name: 'Google Drive', 
            logo: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg',
            description: 'Attach and manage your files directly from Google Drive within your KaryaUp projects.'
        },
        { 
            name: 'Google Meet', 
            logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Google_Meet_icon_%282020%29.svg',
            description: 'Schedule meetings with a Google Meet link and manage your upcoming conferences with ease.'
        },
        { 
            name: 'Microsoft Teams', 
            logo: 'https://statics.teams.cdn.live.net/evergreen-assets/icons/Teams_Logo_v2025_80x80.png',
            description: 'Collaborate with your team on Microsoft Teams and sync your project progress effortlessly.'
        }
    ];

    return (
        <section className="pt-10 pb-0 sm:pt-16 sm:pb-0 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-xs font-bold mb-4 uppercase tracking-widest"
                    >
                        <Link2 size={14} />
                        Connected Ecosystem
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[0.95] mb-4 tracking-tight"
                    >
                        Works with your <br/><motion.span 
                            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-600 bg-[length:200%_auto]"
                            animate={{ backgroundPosition: ["0% center", "-200% center"] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        >
                            existing tools
                        </motion.span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg sm:text-xl text-slate-500 font-medium"
                    >
                        No need to rebuild your workflow. Connect instantly:
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
                    {integrations.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index }}
                            className="flex items-start gap-6 group cursor-default"
                        >
                            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                                <motion.img 
                                    src={item.logo} 
                                    alt={item.name} 
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="w-full h-full object-contain transition-all duration-300 drop-shadow-sm group-hover:drop-shadow-md"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-slate-900 mb-2 transition-colors duration-300 group-hover:text-purple-600">
                                    {item.name}
                                </h3>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-12 sm:mt-16"
                >
                   
                </motion.div>
            </div>
        </section>
    );
};

export default Integrations;
