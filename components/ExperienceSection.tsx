
'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building, Award, TrendingUp, Users } from 'lucide-react'

import { experience, education } from '@/data/portfolio-data'

const ExperienceSection = () => {
  // experience and education data moved to @/data/portfolio-data

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-gradient mb-6">
            Experience & Education
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Professional experience and academic background that shaped my expertise in software development and AI/ML technologies.
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Professional Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 text-white">
                <Building size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Professional Experience</h3>
                <p className="text-slate-400">Building real-world solutions</p>
              </div>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 timeline-line"></div>

              {/* Experience Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative glass rounded-2xl p-8 ml-20 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[4.5rem] top-8 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-teal-500 border-4 border-navy-950"></div>

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{experience.position}</h4>
                    <div className="flex items-center space-x-4 text-slate-300 mb-2">
                      <div className="flex items-center space-x-2">
                        <Building size={16} className="text-purple-400" />
                        <span className="font-medium">{experience.company}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} className="text-teal-400" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-400">
                    <Calendar size={16} />
                    <span>{experience.duration}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 leading-relaxed mb-6">
                  {experience.description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                    <Award size={18} className="text-purple-400" />
                    <span>Key Achievements</span>
                  </h5>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {experience.achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <TrendingUp size={16} className="text-teal-400 mt-1 flex-shrink-0" />
                        <span className="text-slate-300 text-sm leading-relaxed">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Skills Used */}
                <div>
                  <h5 className="text-lg font-semibold text-white mb-3">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="px-3 py-1 text-xs font-medium bg-slate-800/80 text-slate-300 rounded-full border border-slate-600/50"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 text-white">
                <Award size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
                <p className="text-slate-400">Academic foundation</p>
              </div>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 timeline-line"></div>

              {/* Education Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative glass rounded-2xl p-8 ml-20 border border-slate-700/50 hover:border-teal-500/30 transition-all duration-300"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[4.5rem] top-8 w-4 h-4 rounded-full bg-gradient-to-r from-teal-500 to-purple-500 border-4 border-navy-950"></div>

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{education.degree}</h4>
                    <div className="flex items-center space-x-4 text-slate-300 mb-2">
                      <div className="flex items-center space-x-2">
                        <Building size={16} className="text-teal-400" />
                        <span className="font-medium">{education.university}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} className="text-purple-400" />
                        <span>{education.location}</span>
                      </div>
                    </div>
                    <p className="text-purple-300 font-medium">{education.specialization}</p>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-400">
                    <Calendar size={16} />
                    <span>{education.duration}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <h5 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                    <Users size={18} className="text-teal-400" />
                    <span>Academic Highlights</span>
                  </h5>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {education.highlights.map((highlight, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <Award size={16} className="text-purple-400 mt-1 flex-shrink-0" />
                        <span className="text-slate-300 text-sm leading-relaxed">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
