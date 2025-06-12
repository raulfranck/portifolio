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

  // Enhanced smooth spring animation for the line growth
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001
  })

  // Transform progress to height with smooth easing
  const lineHeight = useTransform(smoothProgress, [0, 1], [0, containerHeight])
  
  // Breathing effect for the line
  const lineWidth = useTransform(scrollYProgress, [0, 0.5, 1], [1, 2, 1])

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.scrollHeight)
    }
  }, [])

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles com movimento mais fluido */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className={`absolute rounded-full ${
              i % 4 === 0 ? 'w-3 h-3 bg-accent-green/20' :
              i % 4 === 1 ? 'w-1.5 h-1.5 bg-accent-purple/30' :
              i % 4 === 2 ? 'w-2 h-2 bg-accent-yellow/15' :
              'w-1 h-1 bg-text-accent/40'
            }`}
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%',
              scale: 0,
              opacity: 0
            }}
            animate={{ 
              y: [0, -40 - Math.random() * 30, 0],
              x: [0, Math.random() * 30 - 15, 0],
              scale: [0, 1, 0],
              opacity: [0, 0.9, 0],
              rotate: [0, 360, 720]
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          />
        ))}

        {/* Enhanced geometric shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className={`absolute ${
              i % 3 === 0 ? 'w-6 h-6 border border-accent-green/15' : 
              i % 3 === 1 ? 'w-4 h-4 bg-accent-purple/8' :
              'w-5 h-5 border border-accent-yellow/12'
            } ${
              i % 4 === 0 ? 'rounded-full' : 
              i % 4 === 1 ? 'rounded-sm rotate-45' : 
              i % 4 === 2 ? 'rounded-lg' : 
              'rounded-md'
            }`}
            style={{
              left: 15 + (i * 12) + '%',
              top: 8 + (i * 20) + '%'
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
              opacity: [0.05, 0.25, 0.05],
              borderWidth: i % 3 === 0 ? [1, 2, 1] : undefined
            }}
            transition={{
              duration: 10 + i * 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        {/* Flowing light streams */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`stream-${i}`}
            className={`absolute w-px h-24 ${
              i === 0 ? 'bg-gradient-to-b from-accent-green/30 to-transparent' :
              i === 1 ? 'bg-gradient-to-b from-accent-purple/20 to-transparent' :
              'bg-gradient-to-b from-accent-yellow/15 to-transparent'
            }`}
            style={{
              left: 30 + i * 20 + '%',
              top: '10%'
            }}
            animate={{
              y: [0, containerHeight * 0.8],
              opacity: [0, 1, 0],
              scaleY: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Enhanced main timeline line container */}
      <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2">
        {/* Background line com gradiente mais suave */}
        <div className="absolute inset-0 w-px bg-gradient-to-b from-transparent via-text-secondary/8 to-transparent" />
        
        {/* Animated growing line com efeitos aprimorados */}
        <motion.div
          className="absolute top-0 left-0 bg-gradient-to-b from-accent-green via-accent-purple to-accent-yellow shadow-lg"
          style={{ 
            height: lineHeight,
            width: lineWidth
          }}
        >
          {/* Enhanced glowing effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-accent-green via-accent-purple to-accent-yellow blur-sm opacity-60" />
          
          {/* Multiple moving light effects */}
          <motion.div
            className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-white/50 via-accent-green/30 to-transparent"
            animate={{ y: [0, containerHeight - 48] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Secondary light pulse */}
          <motion.div
            className="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-accent-purple/40 to-transparent"
            animate={{ y: [0, containerHeight - 24] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
              delay: 2
            }}
          />

          {/* Sparkle effect */}
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"
            animate={{ 
              y: [0, containerHeight],
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeOut",
              delay: 1
            }}
          />
        </motion.div>

        {/* Enhanced pulsing end point */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-accent-yellow rounded-full shadow-xl"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.8, 1, 0.8],
            boxShadow: [
              '0 0 0 0 rgba(255, 214, 0, 0.5)',
              '0 0 0 12px rgba(255, 214, 0, 0)',
              '0 0 0 0 rgba(255, 214, 0, 0)'
            ]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Inner glow */}
          <div className="absolute inset-0 bg-white rounded-full opacity-50" />
        </motion.div>

        {/* Starting point */}
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-accent-green rounded-full shadow-lg"
          initial={{ scale: 0 }}
          animate={{ 
            scale: [1, 1.2, 1],
            boxShadow: [
              '0 0 0 0 rgba(0, 255, 198, 0.4)',
              '0 0 0 8px rgba(0, 255, 198, 0)',
              '0 0 0 0 rgba(0, 255, 198, 0)'
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>

      {/* Content with enhanced spacing - Mais compacto no mobile */}
      <div className="relative z-10 py-4 md:py-6"> {/* Padding ainda menor no mobile */}
        {children}
      </div>
    </div>
  )
}

export default AnimatedTimeline 