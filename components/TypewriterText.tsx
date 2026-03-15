'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TypewriterTextProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenTexts?: number
}

const TypewriterText = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 2000
}: TypewriterTextProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false)
        setIsDeleting(true)
      }, delayBetweenTexts)
      return () => clearTimeout(timeout)
    }

    const currentFullText = texts[currentTextIndex]

    if (isDeleting) {
      if (displayedText === '') {
        setIsDeleting(false)
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
      } else {
        timeout = setTimeout(() => {
          setDisplayedText(currentFullText.substring(0, displayedText.length - 1))
        }, deletingSpeed)
      }
    } else {
      if (displayedText === currentFullText) {
        setIsWaiting(true)
      } else {
        timeout = setTimeout(() => {
          setDisplayedText(currentFullText.substring(0, displayedText.length + 1))
        }, typingSpeed)
      }
    }

    return () => clearTimeout(timeout)
  }, [
    displayedText,
    isDeleting,
    isWaiting,
    currentTextIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    delayBetweenTexts
  ])

  return (
    <span className="inline-block min-h-[40px] md:min-h-[48px]">
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
        className="inline-block w-[3px] h-[1em] ml-1 bg-teal-400 relative top-[0.1em]"
      />
    </span>
  )
}

export default TypewriterText
