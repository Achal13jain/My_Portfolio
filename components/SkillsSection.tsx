
'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Brain, GitBranch, Server, Smartphone } from 'lucide-react'

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 size={32} />,
      skills: ['Python', 'Java', 'JavaScript', 'TypeScript'],
      color: 'from-purple-500 to-purple-700',
    },
    {
      title: 'Frontend',
      icon: <Smartphone size={32} />,
      skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML5/CSS3'],
      color: 'from-teal-500 to-teal-700',
    },
    {
      title: 'Backend',
      icon: <Server size={32} />,
      skills: ['FastAPI', 'Node.js', 'REST APIs', 'Microservices'],
      color: 'from-purple-600 to-teal-600',
    },
    {
      title: 'AI/ML',
      icon: <Brain size={32} />,
      skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas'],
      color: 'from-teal-600 to-purple-600',
    },
    {
      title: 'Database',
      icon: <Database size={32} />,
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'SQL'],
      color: 'from-purple-700 to-teal-500',
    },
    {
      title: 'DevOps',
      icon: <GitBranch size={32} />,
      skills: ['GitHub', 'Docker', 'AWS', 'CI/CD'],
      color: 'from-teal-700 to-purple-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
      },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '3s' }}></div>
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
            Skills & Technologies
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit built through academic projects, internships, and continuous learning.
            Specialized in full-stack development and AI/ML implementation.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { type: 'spring', stiffness: 300 }
              }}
              className="group relative"
            >
              {/* Card */}
              <div className="glass rounded-2xl p-6 h-full border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 relative overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {category.title}
                  </h3>

                  {/* Skills List */}
                  <div className="grid grid-cols-2 gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-teal-400"></div>
                        <span className="text-sm text-slate-300 group-hover:text-slate-200 transition-colors">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-teal-500/5 rounded-2xl"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-teal-500 rounded-2xl opacity-20 blur"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 mb-6">
            Always learning new technologies and staying updated with industry trends
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-2 text-purple-300 font-medium"
          >
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
            <span>Currently exploring: Next.js 15, AI Agents, and Cloud Architecture</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection
