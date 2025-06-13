'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring, useTransform, useMotionValue } from 'framer-motion'

interface AnimatedTimelineProps {
  children: React.ReactNode
  className?: string
}

const AnimatedTimeline = ({ children, className = '' }: AnimatedTimelineProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerHeight, setContainerHeight] = useState(0)
  const [currentProgress, setCurrentProgress] = useState(0)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"] // Melhor detecção de scroll
  })

  // Enhanced smooth spring animation for the line growth
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001
  })

  // Transform progress to height with smooth easing
  const lineHeight = useTransform(smoothProgress, [0, 1], [0, containerHeight])
  
  // Dynamic line width based on progress
  const lineWidth = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [2, 4, 3, 2])
  
  // Glow intensity based on progress
  const glowIntensity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.8])

  useEffect(() => {
    if (containerRef.current) {
      const height = containerRef.current.scrollHeight
      setContainerHeight(height)
    }

    // Listen to scroll progress for additional effects
    const unsubscribe = smoothProgress.on('change', (latest) => {
      setCurrentProgress(latest)
    })

    return () => unsubscribe()
  }, [smoothProgress])

  // Progress-based particle count
  const particleCount = Math.floor(15 + (currentProgress * 10))

  return (
    <div ref={containerRef} className={`relative ${className}`} data-magnetic>
      {/* Enhanced background decorative elements with progress-based effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dynamic floating particles */}
        {[...Array(particleCount)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className={`absolute rounded-full ${
              i % 5 === 0 ? 'w-4 h-4 bg-accent-green/25' :
              i % 5 === 1 ? 'w-2 h-2 bg-accent-purple/35' :
              i % 5 === 2 ? 'w-3 h-3 bg-accent-yellow/20' :
              i % 5 === 3 ? 'w-1.5 h-1.5 bg-white/50' :
              'w-1 h-1 bg-text-accent/60'
            }`}
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%',
              scale: 0,
              opacity: 0
            }}
            animate={{ 
              y: [0, -50 - Math.random() * 40, 0],
              x: [0, Math.random() * 40 - 20, 0],
              scale: [0, 1 + currentProgress * 0.5, 0],
              opacity: [0, 0.9 + currentProgress * 0.1, 0],
              rotate: [0, 360 + currentProgress * 180, 720]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          />
        ))}

        {/* Enhanced geometric shapes with progress responsiveness */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className={`absolute ${
              i % 4 === 0 ? 'w-8 h-8 border-2 border-accent-green/20' : 
              i % 4 === 1 ? 'w-6 h-6 bg-accent-purple/15 backdrop-blur-sm' :
              i % 4 === 2 ? 'w-7 h-7 border border-accent-yellow/18' :
              'w-5 h-5 bg-gradient-to-br from-accent-green/10 to-accent-purple/10'
            } ${
              i % 5 === 0 ? 'rounded-full' : 
              i % 5 === 1 ? 'rounded-xl rotate-45' : 
              i % 5 === 2 ? 'rounded-2xl' : 
              i % 5 === 3 ? 'rounded-lg rotate-12' :
              'rounded-md -rotate-12'
            }`}
            style={{
              left: 10 + (i * 8) + '%',
              top: 5 + (i * 15) + '%'
            }}
            animate={{
              rotate: [0, 360 + currentProgress * 180],
              scale: [1, 1.3 + currentProgress * 0.4, 1],
              opacity: [0.05, 0.3 + currentProgress * 0.2, 0.05],
              borderWidth: i % 4 === 0 ? [1, 3, 1] : undefined,
              boxShadow: currentProgress > 0.5 ? [
                '0 0 0 0 rgba(0, 255, 198, 0.2)',
                '0 0 20px 5px rgba(127, 90, 240, 0.1)',
                '0 0 0 0 rgba(255, 214, 0, 0.2)'
              ] : undefined
            }}
            transition={{
              duration: 8 + i * 1.2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        {/* Enhanced flowing light streams */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`stream-${i}`}
            className={`absolute w-0.5 h-20 ${
              i === 0 ? 'bg-gradient-to-b from-accent-green/40 via-accent-green/20 to-transparent' :
              i === 1 ? 'bg-gradient-to-b from-accent-purple/30 via-accent-purple/15 to-transparent' :
              i === 2 ? 'bg-gradient-to-b from-accent-yellow/25 via-accent-yellow/10 to-transparent' :
              i === 3 ? 'bg-gradient-to-b from-white/30 via-white/15 to-transparent' :
              'bg-gradient-to-b from-accent-green/20 via-accent-purple/10 to-transparent'
            }`}
            style={{
              left: 25 + i * 15 + '%',
              top: '5%',
              filter: `blur(${0.5 + currentProgress}px)`
            }}
            animate={{
              y: [0, containerHeight * 0.9],
              opacity: [0, 1, 0],
              scaleY: [0.3, 1.2, 0.3],
              scaleX: [1, 1 + currentProgress * 0.5, 1]
            }}
            transition={{
              duration: 3 + i * 0.8,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Progress-based energy waves */}
        {currentProgress > 0.2 && [...Array(3)].map((_, i) => (
          <motion.div
            key={`wave-${i}`}
            className="absolute left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full border border-accent-green/20"
            style={{
              top: containerHeight * currentProgress - 64
            }}
            animate={{
              scale: [0.5, 2, 0.5],
              opacity: [0.5, 0, 0.5],
              borderWidth: [1, 3, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.7,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Enhanced main timeline line container */}
      <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2">
        {/* Enhanced background line with segments */}
        <div className="absolute inset-0 w-0.5 bg-gradient-to-b from-transparent via-text-secondary/10 to-transparent">
          {/* Segmented dots along the line */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`segment-${i}`}
              className="absolute left-1/2 transform -translate-x-1/2 w-1 h-1 bg-text-secondary/20 rounded-full"
              style={{ top: `${i * 5}%` }}
              animate={{
                scale: currentProgress > i * 0.05 ? [1, 1.5, 1] : 1,
                opacity: currentProgress > i * 0.05 ? [0.2, 0.8, 0.2] : 0.1
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.1
              }}
            />
          ))}
        </div>
        
        {/* Main animated growing line with enhanced effects */}
        <motion.div
          className="absolute top-0 left-0 shadow-2xl"
          style={{ 
            height: lineHeight,
            width: lineWidth,
            background: 'linear-gradient(180deg, #00FFC6 0%, #7F5AF0 50%, #FFD600 100%)',
            filter: `drop-shadow(0 0 ${4 + currentProgress * 8}px rgba(0, 255, 198, ${glowIntensity.get()}))`,
            borderRadius: '2px'
          }}
        >
          {/* Enhanced multi-layer glowing effect */}
          <div 
            className="absolute inset-0 rounded-sm"
            style={{
              background: 'linear-gradient(180deg, #00FFC6 0%, #7F5AF0 50%, #FFD600 100%)',
              filter: `blur(${2 + currentProgress * 4}px)`,
              opacity: 0.7
            }}
          />
          
          {/* Energy pulse traveling along the line */}
          <motion.div
            className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-white/70 via-accent-green/50 to-transparent rounded-full"
            animate={{ y: [0, containerHeight - 32] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          />
          
          {/* Secondary energy pulse */}
          <motion.div
            className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-accent-purple/60 to-transparent rounded-full"
            animate={{ y: [0, containerHeight - 16] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "linear",
              delay: 1.5
            }}
          />

          {/* Sparkle effects */}
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"
            animate={{ 
              y: [0, containerHeight],
              scale: [0, 2, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0.8
            }}
          />

          {/* Progress indicator */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white/90 border-2 border-accent-green shadow-lg"
            style={{ top: containerHeight * currentProgress - 12 }}
            animate={{
              scale: [1, 1.2, 1],
              boxShadow: [
                '0 0 0 0 rgba(0, 255, 198, 0.6)',
                '0 0 0 8px rgba(0, 255, 198, 0)',
                '0 0 0 0 rgba(0, 255, 198, 0.6)'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="absolute inset-1 bg-accent-green rounded-full" />
          </motion.div>
        </motion.div>

        {/* Enhanced starting point */}
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-accent-green rounded-full shadow-xl z-10"
          initial={{ scale: 0 }}
          animate={{ 
            scale: [1, 1.3, 1],
            boxShadow: [
              '0 0 0 0 rgba(0, 255, 198, 0.5)',
              '0 0 0 12px rgba(0, 255, 198, 0)',
              '0 0 0 0 rgba(0, 255, 198, 0.5)'
            ]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3
          }}
        >
          <div className="absolute inset-0.5 bg-white rounded-full opacity-80" />
        </motion.div>

        {/* Enhanced ending point */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent-yellow rounded-full shadow-2xl z-10"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.9, 1, 0.9],
            boxShadow: [
              '0 0 0 0 rgba(255, 214, 0, 0.6)',
              '0 0 0 16px rgba(255, 214, 0, 0)',
              '0 0 0 0 rgba(255, 214, 0, 0.6)'
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="absolute inset-1 bg-white rounded-full opacity-90" />
        </motion.div>
      </div>

      {/* Content with enhanced spacing */}
      <div className="relative z-20 py-6"> 
        {children}
      </div>
    </div>
  )
}

export default AnimatedTimeline 