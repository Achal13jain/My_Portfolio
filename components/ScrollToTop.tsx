'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500)
    }
    window.addEventListener('scroll', toggleVisibility, { passive: true })
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ type: 'spring', damping: 20, stiffness: 200 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-40 p-3 rounded-full bg-gradient-to-r from-purple-500 to-teal-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
