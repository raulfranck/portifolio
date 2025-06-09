'use client'

import { motion } from 'framer-motion'
import { forwardRef } from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'elevated' | 'bordered' | 'glass'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  animated?: boolean
  clickable?: boolean
  hover?: boolean
  onClick?: () => void
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({
    children,
    className = '',
    variant = 'default',
    padding = 'md',
    rounded = 'xl',
    animated = false,
    clickable = false,
    hover = true,
    onClick,
    ...props
  }, ref) => {
    
    const baseClasses = 'relative transition-all duration-300'
    
    const variantClasses = {
      default: 'bg-bg-secondary border border-bg-tertiary',
      elevated: 'bg-bg-secondary shadow-xl border border-bg-tertiary/50',
      bordered: 'bg-transparent border-2 border-bg-tertiary',
      glass: 'bg-bg-secondary/50 backdrop-blur-md border border-bg-tertiary/30'
    }
    
    const paddingClasses = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
      xl: 'p-10'
    }
    
    const roundedClasses = {
      none: '',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl'
    }
    
    const hoverClasses = hover ? 'hover:shadow-2xl hover:-translate-y-1 hover:border-accent-green/30' : ''
    const clickableClasses = clickable ? 'cursor-pointer select-none' : ''
    
    const combinedClasses = `
      ${baseClasses}
      ${variantClasses[variant]}
      ${paddingClasses[padding]}
      ${roundedClasses[rounded]}
      ${hoverClasses}
      ${clickableClasses}
      ${className}
    `.trim()

    const cardContent = (
      <div
        ref={ref}
        className={combinedClasses}
        onClick={onClick}
        {...props}
      >
        {/* Gradient overlay for hover effect */}
        {hover && (
          <div className="absolute inset-0 bg-gradient-to-r from-accent-green/5 to-accent-purple/5 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-inherit pointer-events-none" />
        )}
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    )

    if (animated) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={clickable ? { scale: 1.02 } : undefined}
          whileTap={clickable ? { scale: 0.98 } : undefined}
        >
          {cardContent}
        </motion.div>
      )
    }

    return cardContent
  }
)

Card.displayName = 'Card'

export default Card 