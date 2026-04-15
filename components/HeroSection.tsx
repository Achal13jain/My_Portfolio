'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowDown, Download, ExternalLink, Github, Linkedin } from 'lucide-react'
import { SiMedium, SiHashnode, SiX } from 'react-icons/si'
import { techIcons, RESUME_URL } from '@/data/portfolio-data'
import TypewriterText from './TypewriterText'
import { useEffect, useState } from 'react'

const HeroSection = () => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { damping: 30, stiffness: 200 })
  const springY = useSpring(mouseY, { damping: 30, stiffness: 200 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const ORB_OFFSET = 192 // Half of w-96 (384px) to center the gradient orb on the cursor
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - ORB_OFFSET)
      mouseY.set(e.clientY - ORB_OFFSET)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const scrollToSkills = () => {
    const element = document.querySelector('#skills')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }



  // Fixed particle positions — reduced to 12 for better mobile performance
  const particlePositions = [
    { x: 100, y: 200 }, { x: 300, y: 150 }, { x: 500, y: 300 }, { x: 700, y: 100 },
    { x: 200, y: 400 }, { x: 600, y: 250 }, { x: 800, y: 350 }, { x: 150, y: 500 },
    { x: 400, y: 50 }, { x: 750, y: 450 }, { x: 50, y: 300 }, { x: 900, y: 200 },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Particles - Only render on client */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden">
          {particlePositions.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-60"
              initial={{ x: pos.x, y: pos.y }}
              animate={{
                x: pos.x + Math.sin(i) * 50,
                y: pos.y + Math.cos(i) * 30,
              }}
              transition={{
                duration: 10 + i,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      )}

      {/* Interactive Gradient Orb - Only render on client */}
      {isClient && (
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: 'linear-gradient(45deg, #a855f7, #14b8a6)',
            x: springX,
            y: springY,
          }}
        />
      )}

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
              className="mb-6 leading-tight font-space-grotesk"
            >
              {/* Intro */}
              <span className="block text-base md:text-lg lg:text-xl text-slate-400 tracking-wide">
                Hi, I&apos;m
              </span>

              {/* Name: largest */}
              <span className="block text-5xl md:text-7xl lg:text-8xl font-bold text-white">
                Achal Jain
              </span>

              {/* Role: strong but smaller than name */}
              <span className="mt-2 block text-2xl md:text-3xl lg:text-4xl font-semibold text-gradient h-[40px] md:h-[48px]">
                <TypewriterText 
                  texts={[
                    "Software Engineer",
                    "AI/ML Enthusiast",
                    "Full-Stack Developer",
                    "Problem Solver"
                  ]}
                />
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed max-w-xl"
            >
              I specialize in designing scalable backend systems and developing intelligent ML solutions. Passionate about leveraging technology to solve real-world problems and deliver impactful results.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <motion.a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-8 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 shadow-lg"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </motion.a>

              <motion.button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
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
                aria-label="GitHub Profile"
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
                aria-label="LinkedIn Profile"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-slate-400 hover:text-teal-400 transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="https://x.com/jainachal13"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter) Profile"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                <SiX size={22} />
              </motion.a>
              <motion.a
                href="https://medium.com/@jainachal38"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium Blog"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-slate-400 hover:text-slate-200 transition-colors"
              >
                <SiMedium size={24} />
              </motion.a>
              <motion.a
                href="https://achal-jain.hashnode.dev/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hashnode Blog"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-slate-400 hover:text-blue-500 transition-colors"
              >
                <SiHashnode size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Animated Visual with Tech Icons */}
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

              {/* Floating Tech Icons - FIXED: Removed boxes and improved animation */}
              {techIcons.map((item, index) => (
                <motion.div
                  key={item.name}
                  className={`absolute ${item.color} drop-shadow-lg`}
                  animate={{
                    rotate: [0, 360],
                    x: Math.cos((index * Math.PI * 2) / techIcons.length) * item.radius,
                    y: Math.sin((index * Math.PI * 2) / techIcons.length) * item.radius,
                  }}
                  transition={{
                    rotate: {
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    },
                    x: {
                      duration: 6,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'easeInOut',
                    },
                    y: {
                      duration: 6,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'easeInOut',
                    },
                  }}
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                  title={item.name}
                  whileHover={{
                    scale: 1.3,
                    rotate: 15,
                    filter: 'brightness(1.2)',
                    transition: { duration: 0.2 }
                  }}
                >
                  {/* REMOVED: The box/background container */}
                  {<item.icon size={40} />}
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
            onClick={scrollToSkills}
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
