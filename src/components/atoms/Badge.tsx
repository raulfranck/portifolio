'use client'

import { motion } from 'framer-motion'
import { forwardRef } from 'react'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  animated?: boolean
  removable?: boolean
  onRemove?: () => void
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({
    variant = 'primary',
    size = 'md',
    children,
    animated = false,
    removable = false,
    onRemove,
    className = '',
    ...props
  }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300'
    
    const variantClasses = {
      primary: 'bg-accent-green bg-opacity-20 text-accent-green border border-accent-green border-opacity-30',
      secondary: 'bg-accent-purple bg-opacity-20 text-accent-purple border border-accent-purple border-opacity-30',
      success: 'bg-green-500 bg-opacity-20 text-green-400 border border-green-500 border-opacity-30',
      warning: 'bg-accent-yellow bg-opacity-20 text-accent-yellow border border-accent-yellow border-opacity-30',
      outline: 'bg-transparent border-2 border-text-secondary text-text-secondary hover:border-accent-green hover:text-accent-green',
      ghost: 'bg-bg-secondary text-text-primary hover:bg-bg-tertiary'
    }
    
    const sizeClasses = {
      sm: 'px-2 py-1 text-xs',
      md: 'px-3 py-1.5 text-sm',
      lg: 'px-4 py-2 text-base'
    }
    
    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
    
    const badgeContent = (
      <span
        ref={ref}
        className={classes}
        {...props}
      >
        <span className="flex items-center gap-2">
          {children}
          {removable && onRemove && (
            <button
              onClick={onRemove}
              className="ml-1 hover:text-red-400 transition-colors duration-200"
              aria-label="Remover badge"
            >
              <svg
                className="w-3 h-3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </span>
      </span>
    )
    
    if (animated) {
      return (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {badgeContent}
        </motion.span>
      )
    }
    
    return badgeContent
  }
)

Badge.displayName = 'Badge'

export default Badge 