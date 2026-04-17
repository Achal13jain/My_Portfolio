'use client'

import { motion, useMotionTemplate, useMotionValue, Variants } from 'framer-motion'
import { MouseEvent } from 'react'
import { SkillCategory } from '@/data/portfolio-data'

interface SkillCardProps {
  category: SkillCategory
  variants: Variants
}

const SkillCard = ({ category, variants }: SkillCardProps) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const spotlightBackground = useMotionTemplate`
    radial-gradient(
      400px circle at ${mouseX}px ${mouseY}px,
      rgba(20, 184, 166, 0.15),
      transparent 80%
    )
  `

  return (
    <motion.div
      variants={variants}
      onMouseMove={handleMouseMove}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        transition: { type: 'spring', stiffness: 300 }
      }}
      className="group relative"
    >
      {/* Spotlight Overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 z-20"
        style={{ background: spotlightBackground }}
      />

      {/* Card */}
      <div className="glass rounded-2xl px-5 py-5 h-full border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 relative overflow-hidden">
        {/* Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} text-white mb-3 group-hover:scale-110 transition-transform duration-300`}>
            {<category.icon size={28} />}
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
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
  )
}

export default SkillCard
