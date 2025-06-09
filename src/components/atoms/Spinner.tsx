'use client'

import { motion } from 'framer-motion'
import { forwardRef } from 'react'

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  color?: 'primary' | 'secondary' | 'accent' | 'green' | 'purple' | 'yellow'
  variant?: 'spinner' | 'dots' | 'pulse' | 'bars'
  speed?: 'slow' | 'normal' | 'fast'
}

const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({
    size = 'md',
    color = 'primary',
    variant = 'spinner',
    speed = 'normal',
    className = '',
    ...props
  }, ref) => {
    const sizeClasses = {
      xs: 'w-3 h-3',
      sm: 'w-4 h-4',
      md: 'w-6 h-6',
      lg: 'w-8 h-8',
      xl: 'w-12 h-12'
    }
    
    const colorClasses = {
      primary: 'text-text-primary',
      secondary: 'text-text-secondary',
      accent: 'text-text-accent',
      green: 'text-accent-green',
      purple: 'text-accent-purple',
      yellow: 'text-accent-yellow'
    }
    
    const speedClasses = {
      slow: 'animate-spin duration-2000',
      normal: 'animate-spin duration-1000',
      fast: 'animate-spin duration-500'
    }
    
    const baseClasses = `${sizeClasses[size]} ${colorClasses[color]} ${className}`
    
    const renderSpinner = () => {
      switch (variant) {
        case 'spinner':
          return (
            <div
              className={`${baseClasses} border-2 border-current border-t-transparent rounded-full ${speedClasses[speed]}`}
            />
          )
        
        case 'dots':
          return (
            <div className={`flex space-x-1 ${className}`}>
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className={`${sizeClasses[size]} ${colorClasses[color]} bg-current rounded-full`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: speed === 'fast' ? 0.6 : speed === 'slow' ? 1.4 : 1,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
          )
        
        case 'pulse':
          return (
            <motion.div
              className={`${baseClasses} bg-current rounded-full`}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: speed === 'fast' ? 0.8 : speed === 'slow' ? 2 : 1.5,
                repeat: Infinity
              }}
            />
          )
        
        case 'bars':
          return (
            <div className={`flex space-x-1 ${className}`}>
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className={`w-1 ${colorClasses[color]} bg-current rounded-sm`}
                  style={{ height: size === 'xs' ? '12px' : size === 'sm' ? '16px' : size === 'md' ? '24px' : size === 'lg' ? '32px' : '48px' }}
                  animate={{
                    scaleY: [1, 2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: speed === 'fast' ? 0.6 : speed === 'slow' ? 1.4 : 1,
                    repeat: Infinity,
                    delay: i * 0.1
                  }}
                />
              ))}
            </div>
          )
        
        default:
          return null
      }
    }
    
    return (
      <div
        ref={ref}
        className="inline-flex items-center justify-center"
        role="status"
        aria-label="Carregando"
        {...props}
      >
        {renderSpinner()}
      </div>
    )
  }
)

Spinner.displayName = 'Spinner'

export default Spinner 