
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download, ChevronDown, Layout, Table, Book } from 'lucide-react'
import { RESUME_URL } from '../data/portfolio-data'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Force 'contact' active if scrolled to the absolute bottom of the page
      if (window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight - 100) {
        setActiveSection('contact')
      }
    }
    window.addEventListener('scroll', handleScroll)
    // Initial check
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = ['home', 'skills', 'certifications', 'projects', 'blogs', 'experience', 'contact']
    const observers: IntersectionObserver[] = []

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { threshold: 0, rootMargin: '-100px 0px -60% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy-900/80 backdrop-blur-md border-b border-purple-500/20' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-space-grotesk font-bold text-gradient cursor-pointer"
            onClick={() => scrollToSection('#home')}
          >
            AJ
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className={`transition-colors duration-200 font-medium ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-purple-400'
                    : 'text-slate-300 hover:text-purple-400'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}

            {/* Live Tools Dropdown */}
            <div className="relative group">
              <button className="text-slate-300 hover:text-purple-400 transition-colors duration-200 font-medium flex items-center space-x-1 cursor-pointer py-2">
                <span>Live Tools</span>
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
              </button>
              
              <div className="absolute top-[100%] right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 w-[320px]">
                 <div className="bg-navy-900 border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden p-2">
                    <a href="https://achal13jain.github.io/ui-design-patterns/" target="_blank" rel="noopener noreferrer" className="flex items-start p-3 hover:bg-slate-800/80 rounded-xl transition-colors group/item">
                       <div className="mt-0.5 p-2 bg-purple-500/10 rounded-lg text-purple-400 group-hover/item:text-purple-300 group-hover/item:bg-purple-500/20 transition-colors">
                          <Layout size={18} />
                       </div>
                       <div className="ml-3">
                          <div className="text-sm font-semibold text-white group-hover/item:text-purple-300 transition-colors">UI Design Patterns</div>
                          <div className="text-xs text-slate-400 mt-1 leading-snug">Curated visual gallery of modern frontend design patterns</div>
                       </div>
                    </a>
                    
                    <a href="https://jsontosheet.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-start p-3 hover:bg-slate-800/80 rounded-xl transition-colors group/item mt-1">
                       <div className="mt-0.5 p-2 bg-teal-500/10 rounded-lg text-teal-400 group-hover/item:text-teal-300 group-hover/item:bg-teal-500/20 transition-colors">
                          <Table size={18} />
                       </div>
                       <div className="ml-3">
                          <div className="text-sm font-semibold text-white group-hover/item:text-teal-300 transition-colors">JSON to Sheet</div>
                          <div className="text-xs text-slate-400 mt-1 leading-snug">Instantly convert and export JSON data directly into Excel/Sheets</div>
                       </div>
                    </a>
                   
                      <a href="https://achal13jain.github.io/cs-paper-roadmaps/" target="_blank" rel="noopener noreferrer" className="flex items-start p-3 hover:bg-slate-800/80 rounded-xl transition-colors group/item mt-1">
                        <div className="mt-0.5 p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover/item:text-blue-300 group-hover/item:bg-blue-500/20 transition-colors">
                          <Book size={18} />
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-semibold text-white group-hover/item:text-blue-300 transition-colors">CS Paper Roadmaps</div>
                          <div className="text-xs text-slate-400 mt-1 leading-snug">Curated computer science paper roadmaps and study guides</div>
                        </div>
                      </a>
                 </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 ml-8">
              <motion.a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2"
              >
                <Download size={16} />
                <span>Resume</span>
              </motion.a>
            </div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden text-slate-300 hover:text-purple-400 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-900/95 backdrop-blur-md border-t border-purple-500/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left py-3 text-lg font-medium transition-colors ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-purple-400'
                      : 'text-slate-300'
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}

              {/* Mobile Live Tools */}
              <div className="pt-2 pb-2">
                <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3 px-2">Live Tools</div>
                <div className="space-y-2 bg-slate-800/30 rounded-xl p-2">
                  <a href="https://achal13jain.github.io/ui-design-patterns/" target="_blank" rel="noopener noreferrer" className="flex items-center p-2 rounded-lg hover:bg-slate-700/50 transition-colors">
                     <Layout size={16} className="text-purple-400 mr-3" />
                     <span className="text-sm text-slate-300 font-medium">UI Design Patterns</span>
                  </a>
                  <a href="https://jsontosheet.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center p-2 rounded-lg hover:bg-slate-700/50 transition-colors">
                     <Table size={16} className="text-teal-400 mr-3" />
                     <span className="text-sm text-slate-300 font-medium">JSON to Sheet</span>
                  </a>
                  <a href="https://achal13jain.github.io/cs-paper-roadmaps/" target="_blank" rel="noopener noreferrer" className="flex items-center p-2 rounded-lg hover:bg-slate-700/50 transition-colors">
                    <Book size={16} className="text-blue-400 mr-3" />
                    <span className="text-sm text-slate-300 font-medium">CS Paper Roadmaps</span>
                  </a>
                </div>
              </div>

              {/* Mobile Social Links */}
              <div className="flex items-center space-x-6 pt-4 border-t border-slate-700">
                <motion.a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="btn-primary px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2"
                >
                  <Download size={16} />
                  <span>Resume</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation
