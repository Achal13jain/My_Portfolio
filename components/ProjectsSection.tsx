'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

import { projects } from '@/data/portfolio-data'

const ProjectsSection = () => {
  // projects data moved to @/data/portfolio-data

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
      },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-gradient mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A collection of full-stack applications and AI/ML projects showcasing modern development practices,
            clean architecture, and innovative problem-solving approaches.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { type: 'spring', stiffness: 300 }
              }}
              className="group relative project-card"
            >
              {/* Card Container */}
              <div className={`glass rounded-2xl overflow-hidden h-full border ${project.border} hover:border-opacity-50 transition-all duration-500 relative ${project.gradient}`}>

                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    style={{ objectPosition: 'center top' }}
                  />
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Action Buttons on Image Hover */}
                  <div className="absolute top-4 right-4 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg bg-black/60 hover:bg-black/80 text-white transition-colors backdrop-blur-sm"
                    >
                      <Github size={18} />
                    </motion.a>
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg bg-black/60 hover:bg-black/80 text-white transition-colors backdrop-blur-sm"
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  {/* Icon & Title */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                      {<project.icon size={32} />}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 leading-relaxed mb-4 group-hover:text-slate-200 transition-colors text-sm">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: techIndex * 0.1 }}
                        className="px-2 py-1 text-xs font-medium bg-slate-800/80 text-slate-300 rounded-full border border-slate-600/50 group-hover:bg-slate-700/80 group-hover:text-slate-200 group-hover:border-purple-500/30 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${project.glow} shadow-2xl -z-10`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 mb-6">
            Explore more projects and contributions on my GitHub profile
          </p>
          <motion.a
            href="https://github.com/Achal13jain"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 btn-primary px-8 py-3 rounded-full font-semibold"
          >
            <Github size={20} />
            <span>View All Projects</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
