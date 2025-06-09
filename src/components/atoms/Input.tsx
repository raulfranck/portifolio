'use client'

import { forwardRef, useState } from 'react'
import { motion } from 'framer-motion'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  variant?: 'filled' | 'outlined' | 'minimal'
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({
    label,
    error,
    helperText,
    variant = 'outlined',
    leftIcon,
    rightIcon,
    className = '',
    ...props
  }, ref) => {
    const [isFocused, setIsFocused] = useState(false)
    
    const baseInputClasses = 'w-full transition-all duration-300 focus:outline-none font-body'
    
    const variantClasses = {
      filled: `
        bg-bg-secondary border-0 
        ${isFocused ? 'bg-bg-tertiary shadow-lg' : ''}
        ${error ? 'bg-red-900 bg-opacity-20' : ''}
      `,
      outlined: `
        bg-transparent border-2 
        ${isFocused ? 'border-accent-green shadow-lg shadow-accent-green/20' : 'border-bg-tertiary'}
        ${error ? 'border-red-500' : ''}
      `,
      minimal: `
        bg-transparent border-0 border-b-2 rounded-none
        ${isFocused ? 'border-accent-green' : 'border-bg-tertiary'}
        ${error ? 'border-red-500' : ''}
      `
    }
    
    const sizeClasses = {
      filled: 'px-4 py-3 rounded-2xl',
      outlined: 'px-4 py-3 rounded-2xl',
      minimal: 'px-0 py-2'
    }
    
    const textClasses = `
      text-text-primary placeholder-text-secondary
      ${error ? 'text-red-300' : ''}
    `
    
    const inputClasses = `
      ${baseInputClasses}
      ${variantClasses[variant]}
      ${sizeClasses[variant]}
      ${textClasses}
      ${leftIcon ? 'pl-12' : ''}
      ${rightIcon ? 'pr-12' : ''}
      ${className}
    `
    
    return (
      <div className="w-full">
        {label && (
          <motion.label
            className={`
              block text-sm font-medium mb-2 transition-colors duration-300
              ${error ? 'text-red-400' : isFocused ? 'text-accent-green' : 'text-text-secondary'}
            `}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {label}
          </motion.label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary">
              {leftIcon}
            </div>
          )}
          
          <input
            ref={ref}
            className={inputClasses}
            onFocus={(e) => {
              setIsFocused(true)
              props.onFocus?.(e)
            }}
            onBlur={(e) => {
              setIsFocused(false)
              props.onBlur?.(e)
            }}
            {...props}
          />
          
          {rightIcon && (
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-text-secondary">
              {rightIcon}
            </div>
          )}
          
          {/* Focus indicator line for minimal variant */}
          {variant === 'minimal' && (
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-accent-green"
              initial={{ width: 0 }}
              animate={{ width: isFocused ? '100%' : 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </div>
        
        {/* Error or Helper Text */}
        {(error || helperText) && (
          <motion.p
            className={`
              mt-2 text-sm
              ${error ? 'text-red-400' : 'text-text-secondary'}
            `}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {error || helperText}
          </motion.p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input 