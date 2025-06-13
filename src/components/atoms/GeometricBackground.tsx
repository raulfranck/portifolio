'use client'

import { motion } from 'framer-motion'

interface GeometricBackgroundProps {
  className?: string
  density?: 'low' | 'medium' | 'high'
  variant?: 'floating' | 'scattered' | 'grid'
}

const GeometricBackground = ({ 
  className = '', 
  density = 'medium',
  variant = 'floating' 
}: GeometricBackgroundProps) => {
  const getElementCount = () => {
    switch (density) {
      case 'low': return 8
      case 'medium': return 15
      case 'high': return 25
      default: return 15
    }
  }

  const generateFloatingElements = () => {
    const count = getElementCount()
    const elements = []

    for (let i = 0; i < count; i++) {
      const shapes = [
        'rounded-full',
        'rounded-xl',
        'rounded-lg',
        'rounded-none rotate-45'
      ]
      
      const colors = [
        'bg-accent-green/5',
        'bg-accent-purple/5',
        'bg-accent-yellow/5',
        'border border-accent-green/10',
        'border border-accent-purple/10',
        'border border-accent-yellow/10'
      ]

      const sizes = ['w-4 h-4', 'w-6 h-6', 'w-8 h-8', 'w-12 h-12', 'w-16 h-16', 'w-20 h-20']
      const blurs = ['', 'blur-sm', 'blur-md', 'blur-lg']

      const randomShape = shapes[Math.floor(Math.random() * shapes.length)]
      const randomColor = colors[Math.floor(Math.random() * colors.length)]
      const randomSize = sizes[Math.floor(Math.random() * sizes.length)]
      const randomBlur = blurs[Math.floor(Math.random() * blurs.length)]

      const randomX = Math.random() * 100
      const randomY = Math.random() * 100

      elements.push(
        <motion.div
          key={`floating-${i}`}
          className={`absolute ${randomSize} ${randomColor} ${randomShape} ${randomBlur}`}
          style={{
            left: `${randomX}%`,
            top: `${randomY}%`,
          }}
          animate={{
            y: [0, -30 - Math.random() * 20, 0],
            x: [0, Math.random() * 40 - 20, 0],
            rotate: [0, Math.random() * 360, Math.random() * 720],
            scale: [1, 1 + Math.random() * 0.5, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 8 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut"
          }}
        />
      )
    }

    return elements
  }

  const generateScatteredElements = () => {
    const count = getElementCount()
    const elements = []

    for (let i = 0; i < count; i++) {
      const isCircle = Math.random() > 0.5
      const isBorder = Math.random() > 0.6
      
      const baseClasses = isCircle ? 'rounded-full' : 'rounded-xl'
      const colorClasses = isBorder 
        ? `border ${['border-accent-green/15', 'border-accent-purple/15', 'border-accent-yellow/15'][Math.floor(Math.random() * 3)]}`
        : `${['bg-accent-green/8', 'bg-accent-purple/8', 'bg-accent-yellow/8'][Math.floor(Math.random() * 3)]} blur-md`

      const size = [6, 8, 10, 12, 16, 20][Math.floor(Math.random() * 6)]

      elements.push(
        <motion.div
          key={`scattered-${i}`}
          className={`absolute w-${size} h-${size} ${baseClasses} ${colorClasses}`}
          style={{
            left: `${Math.random() * 90 + 5}%`,
            top: `${Math.random() * 90 + 5}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: isCircle ? [0, 360] : [0, 90, 180, 270, 360],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        />
      )
    }

    return elements
  }

  const generateGridElements = () => {
    const elements = []
    const gridSize = density === 'low' ? 3 : density === 'medium' ? 4 : 5

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        if (Math.random() > 0.6) { // Only show some grid items
          const x = (col / (gridSize - 1)) * 80 + 10 // 10% to 90%
          const y = (row / (gridSize - 1)) * 80 + 10

          elements.push(
            <motion.div
              key={`grid-${row}-${col}`}
              className="absolute w-3 h-3 bg-accent-green/10 rounded-full blur-sm"
              style={{
                left: `${x}%`,
                top: `${y}%`,
              }}
              animate={{
                scale: [0.5, 1, 0.5],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: (row + col) * 0.2,
                ease: "easeInOut"
              }}
            />
          )
        }
      }
    }

    return elements
  }

  const renderElements = () => {
    switch (variant) {
      case 'floating':
        return generateFloatingElements()
      case 'scattered':
        return generateScatteredElements()
      case 'grid':
        return generateGridElements()
      default:
        return generateFloatingElements()
    }
  }

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {renderElements()}
      
      {/* Additional ambient effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent-green/3 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent-purple/3 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/3 w-24 h-24 bg-accent-yellow/3 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.6, 0.2]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />
    </div>
  )
}

export default GeometricBackground 