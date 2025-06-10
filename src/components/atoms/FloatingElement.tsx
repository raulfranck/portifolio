'use client'

import { motion } from 'framer-motion'

interface FloatingElementProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
}

const FloatingElement = ({ 
  children, 
  className = '',
  delay = 0,
  duration = 3
}: FloatingElementProps) => {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
        scale: [1, 1.1, 1]
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}

export default FloatingElement 