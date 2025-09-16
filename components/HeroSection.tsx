
'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download, ExternalLink, Github, Linkedin } from 'lucide-react'
import { useEffect, useState } from 'react'

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const particles = Array.from({ length: 20 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-60"
      initial={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }}
      animate={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }}
      transition={{
        duration: Math.random() * 10 + 20,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  ))

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {typeof window !== 'undefined' && particles}
      </div>

      {/* Interactive Gradient Orb */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{
          background: 'linear-gradient(45deg, #a855f7, #14b8a6)',
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-purple-900/20 border border-purple-500/30 rounded-full px-4 py-2 mb-6"
            >
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-purple-200 font-medium">Available for opportunities</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-space-grotesk font-bold leading-tight mb-6"
            >
              <span className="text-white">Achal Jain</span>
              <br />
              <span className="text-gradient">Software Engineer</span>
              <br />
              {/* <span className="text-2xl md:text-3xl lg:text-4xl text-slate-300 font-normal">
                & AI-ML Specialist
              </span> */}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed max-w-lg"
            >
              Building production-ready backend systems and ML apps with cutting-edge technologies. 
              Turning complex problems into elegant solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <motion.a
                href="/Achal_Jain_Resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-8 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 shadow-lg"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </motion.a>

              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full border-2 border-purple-500 text-purple-300 hover:bg-purple-500/10 transition-colors font-semibold flex items-center justify-center space-x-2"
              >
                <ExternalLink size={20} />
                <span>View Projects</span>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center space-x-6"
            >
              <span className="text-slate-500 text-sm font-medium">Connect with me:</span>
              <motion.a
                href="https://github.com/Achal13jain"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-slate-400 hover:text-purple-400 transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/achal-jain13"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-slate-400 hover:text-teal-400 transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Animated Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            {/* Central Orb */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="relative w-80 h-80 mx-auto"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-teal-500/20 blur-xl"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-600/40 to-teal-600/40 blur-lg"></div>
              <div className="absolute inset-8 rounded-full bg-gradient-to-r from-purple-700/60 to-teal-700/60"></div>

              {/* Floating Icons */}
              {[
                { icon: '🐍', delay: 0, radius: 120, color: 'text-yellow-400' },
                { icon: '⚛️', delay: 2, radius: 140, color: 'text-blue-400' },
                { icon: '🤖', delay: 4, radius: 100, color: 'text-green-400' },
                { icon: '🚀', delay: 6, radius: 160, color: 'text-red-400' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute text-3xl ${item.color}`}
                  animate={{
                    rotate: 360,
                    x: Math.cos(index * Math.PI / 2) * item.radius,
                    y: Math.sin(index * Math.PI / 2) * item.radius,
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: item.delay,
                  }}
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  {item.icon}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-slate-400 cursor-pointer"
            onClick={scrollToProjects}
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
