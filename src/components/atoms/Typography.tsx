'use client'

import { motion } from 'framer-motion'
import { forwardRef } from 'react'

// Heading component
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  variant?: 'hero' | 'section' | 'subsection' | 'card'
  gradient?: boolean
  children: React.ReactNode
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as = 'h2', variant = 'section', gradient = false, children, className = '', ...props }, ref) => {
    const Component = as
    
    const baseClasses = 'font-heading font-bold tracking-tight'
    
    const variantClasses = {
      hero: 'text-4xl md:text-6xl lg:text-7xl leading-tight',
      section: 'text-3xl md:text-4xl lg:text-5xl leading-tight',
      subsection: 'text-2xl md:text-3xl leading-tight',
      card: 'text-xl md:text-2xl leading-tight'
    }
    
    const gradientClass = gradient ? 'gradient-text' : 'text-text-accent'
    const classes = `${baseClasses} ${variantClasses[variant]} ${gradientClass} ${className}`

    return (
      <Component
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Heading.displayName = 'Heading'

// Paragraph component
interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 'body' | 'lead' | 'small' | 'caption'
  color?: 'primary' | 'secondary' | 'accent'
  children: React.ReactNode
}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ variant = 'body', color = 'primary', children, className = '', ...props }, ref) => {
    const baseClasses = 'font-body leading-relaxed'
    
    const variantClasses = {
      lead: 'text-xl md:text-2xl font-medium',
      body: 'text-base md:text-lg',
      small: 'text-sm md:text-base',
      caption: 'text-xs md:text-sm'
    }
    
    const colorClasses = {
      primary: 'text-text-primary',
      secondary: 'text-text-secondary',
      accent: 'text-text-accent'
    }
    
    const classes = `${baseClasses} ${variantClasses[variant]} ${colorClasses[color]} ${className}`

    return (
      <p
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </p>
    )
  }
)

Paragraph.displayName = 'Paragraph'

// Text component for inline text
interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'body' | 'small' | 'caption' | 'code'
  color?: 'primary' | 'secondary' | 'accent' | 'green' | 'purple' | 'yellow'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  children: React.ReactNode
}

const Text = forwardRef<HTMLSpanElement, TextProps>(
  ({ variant = 'body', color = 'primary', weight = 'normal', children, className = '', ...props }, ref) => {
    const baseClasses = 'font-body'
    
    const variantClasses = {
      body: 'text-base',
      small: 'text-sm',
      caption: 'text-xs',
      code: 'text-sm font-mono bg-bg-secondary px-2 py-1 rounded'
    }
    
    const colorClasses = {
      primary: 'text-text-primary',
      secondary: 'text-text-secondary',
      accent: 'text-text-accent',
      green: 'text-accent-green',
      purple: 'text-accent-purple',
      yellow: 'text-accent-yellow'
    }
    
    const weightClasses = {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold'
    }
    
    const classes = `${baseClasses} ${variantClasses[variant]} ${colorClasses[color]} ${weightClasses[weight]} ${className}`

    return (
      <span
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Text.displayName = 'Text'

// Animated Text component
interface AnimatedTextProps {
  children: string
  className?: string
  delay?: number
}

const AnimatedText = ({ children, className = '', delay = 0 }: AnimatedTextProps) => {
  const words = children.split(' ')
  
  return (
    <motion.span className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: delay + index * 0.1,
            ease: [0.645, 0.045, 0.355, 1]
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}

export { Heading, Paragraph, Text, AnimatedText } 