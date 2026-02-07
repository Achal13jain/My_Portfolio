'use client'

import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { certifications } from '@/data/portfolio-data'
import Image from 'next/image'

const CertificationsSection = () => {
    return (
        <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-navy-900">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-3xl"></div>
                <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-teal-500/5 blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="text-purple-400 font-medium tracking-wider uppercase text-sm">Credentials</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                        Certifications & <span className="text-gradient">Awards</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-teal-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="group relative"
                        >
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block h-full cursor-pointer"
                            >
                                <div className="h-full p-6 glass rounded-2xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 shadow-lg hover:shadow-purple-500/10 flex flex-col items-start space-y-4">

                                    <div className="flex items-center justify-between w-full">
                                        {/* Logo Container - White background to ensure visibility for all logos */}
                                        <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center p-1 shadow-sm overflow-hidden">
                                            {/* Remote images require configuration in next.config.js, using standard img tag for external URLs to avoid config issues for now, or assume next/image is fine if configured. Using img is safer for this quick iteration unless the user has remote patterns set up. Let's use img for external simpleicons. */}
                                            <img
                                                src={cert.logo}
                                                alt={`${cert.issuer} logo`}
                                                className="w-full h-full object-contain bg-transparent"
                                            />
                                        </div>
                                        <div className="bg-purple-500/10 p-2 rounded-lg text-purple-400 group-hover:text-purple-300 transition-colors">
                                            <Award size={20} />
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-slate-100 group-hover:text-white transition-colors line-clamp-2 min-h-[3.5rem]">
                                            {cert.title}
                                        </h3>
                                        <div className="mt-2 text-sm font-medium text-slate-400">
                                            {cert.issuer}
                                        </div>
                                        {cert.date && (
                                            <div className="text-xs text-slate-500 mt-1">
                                                Issued: {cert.date}
                                            </div>
                                        )}
                                    </div>

                                    {/* Decorative gradient border on bottom */}
                                    <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CertificationsSection
