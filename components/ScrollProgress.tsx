'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

const ScrollProgress = () => {
  const [isMounted, setIsMounted] = useState(false)
  
  // Set mounted state to avoid hydration mismatch
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  if (!isMounted) return null

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-teal-500 to-purple-500 origin-left z-[100]"
      style={{ scaleX }}
    />
  )
}

export default ScrollProgress
