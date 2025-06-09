'use client'

import { forwardRef, useState } from 'react'
import { motion } from 'framer-motion'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
  variant?: 'filled' | 'outlined' | 'minimal'
  resize?: 'none' | 'vertical' | 'horizontal' | 'both'
  autoResize?: boolean
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({
    label,
    error,
    helperText,
    variant = 'outlined',
    resize = 'vertical',
    autoResize = false,
    className = '',
    rows = 4,
    ...props
  }, ref) => {
    const [isFocused, setIsFocused] = useState(false)
    
    const baseTextareaClasses = 'w-full transition-all duration-300 focus:outline-none font-body'
    
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
    
    const resizeClasses = {
      none: 'resize-none',
      vertical: 'resize-y',
      horizontal: 'resize-x',
      both: 'resize'
    }
    
    const textClasses = `
      text-text-primary placeholder-text-secondary
      ${error ? 'text-red-300' : ''}
    `
    
    const textareaClasses = `
      ${baseTextareaClasses}
      ${variantClasses[variant]}
      ${sizeClasses[variant]}
      ${textClasses}
      ${autoResize ? 'resize-none overflow-hidden' : resizeClasses[resize]}
      ${className}
    `

    const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
      if (autoResize) {
        const target = e.currentTarget
        target.style.height = 'auto'
        target.style.height = `${target.scrollHeight}px`
      }
      props.onInput?.(e)
    }

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
          <textarea
            ref={ref}
            className={textareaClasses}
            rows={rows}
            onFocus={(e) => {
              setIsFocused(true)
              props.onFocus?.(e)
            }}
            onBlur={(e) => {
              setIsFocused(false)
              props.onBlur?.(e)
            }}
            onInput={handleInput}
            {...props}
          />
          
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

Textarea.displayName = 'Textarea'

export default Textarea 