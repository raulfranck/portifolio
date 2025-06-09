'use client'

import { motion } from 'framer-motion'
import { forwardRef } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    variant = 'primary',
    size = 'md',
    children,
    isLoading = false,
    leftIcon,
    rightIcon,
    className = '',
    disabled,
    ...props
  }, ref) => {
    const baseClasses = 'relative inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg-primary disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden'
    
    const variantClasses = {
      primary: 'bg-accent-green text-bg-primary hover:bg-opacity-90 focus:ring-accent-green shadow-lg hover:shadow-xl hover:scale-105',
      secondary: 'bg-accent-purple text-text-accent hover:bg-opacity-90 focus:ring-accent-purple shadow-lg hover:shadow-xl hover:scale-105',
      outline: 'border-2 border-accent-green text-accent-green hover:bg-accent-green hover:text-bg-primary focus:ring-accent-green',
      ghost: 'text-text-primary hover:bg-bg-secondary focus:ring-text-secondary'
    }
    
    const sizeClasses = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    }

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

    return (
      <motion.button
        ref={ref}
        className={classes}
        disabled={disabled || isLoading}
        whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
        {...(props as any)}
      >
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent-green to-accent-purple opacity-0 hover:opacity-10 transition-opacity duration-300 rounded-2xl" />
        
        {/* Content */}
        <div className="relative flex items-center gap-2">
          {leftIcon && !isLoading && (
            <span className="flex items-center">{leftIcon}</span>
          )}
          
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
              <span>Carregando...</span>
            </div>
          ) : (
            children
          )}
          
          {rightIcon && !isLoading && (
            <span className="flex items-center">{rightIcon}</span>
          )}
        </div>
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export default Button 