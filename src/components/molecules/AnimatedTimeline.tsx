'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

interface AnimatedTimelineProps {
  children: React.ReactNode
  className?: string
}

const AnimatedTimeline = ({ children, className = '' }: AnimatedTimelineProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerHeight, setContainerHeight] = useState(0)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  // Smooth spring animation for the line growth
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Transform progress to height
  const lineHeight = useTransform(smoothProgress, [0, 1], [0, containerHeight])

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.scrollHeight)
    }
  }, [])

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className={`absolute rounded-full ${
              i % 3 === 0 ? 'w-2 h-2 bg-accent-green/30' :
              i % 3 === 1 ? 'w-1 h-1 bg-accent-purple/40' :
              'w-1.5 h-1.5 bg-accent-yellow/25'
            }`}
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%',
              scale: 0 
            }}
            animate={{ 
              y: [0, -30 - Math.random() * 20, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Geometric shapes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className={`absolute ${
              i % 2 === 0 ? 'w-4 h-4 border border-accent-green/20' : 'w-3 h-3 bg-accent-purple/10'
            } ${i % 3 === 0 ? 'rounded-full' : i % 3 === 1 ? 'rounded-sm rotate-45' : 'rounded-lg'}`}
            style={{
              left: 20 + (i * 15) + '%',
              top: 10 + (i * 25) + '%'
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Main timeline line container */}
      <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-px">
        {/* Background line */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-text-secondary/10 to-transparent" />
        
        {/* Animated growing line */}
        <motion.div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-accent-green via-accent-purple to-accent-yellow"
          style={{ height: lineHeight }}
        >
          {/* Glowing effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-accent-green via-accent-purple to-accent-yellow blur-sm opacity-50" />
          
          {/* Moving light effect */}
          <motion.div
            className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-white/40 to-transparent"
            animate={{ y: [0, containerHeight - 32] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>

        {/* Pulsing end point */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-accent-yellow rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            boxShadow: [
              '0 0 0 0 rgba(255, 214, 0, 0.4)',
              '0 0 0 10px rgba(255, 214, 0, 0)',
              '0 0 0 0 rgba(255, 214, 0, 0)'
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export default AnimatedTimeline 