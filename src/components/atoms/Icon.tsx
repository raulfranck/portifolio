'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { forwardRef } from 'react'

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  color?: 'primary' | 'secondary' | 'accent' | 'green' | 'purple' | 'yellow'
  animated?: boolean
  hoverEffect?: 'scale' | 'rotate' | 'bounce' | 'none'
}

const Icon = forwardRef<HTMLDivElement, IconProps>(
  ({
    icon: IconComponent,
    size = 'md',
    color = 'primary',
    animated = false,
    hoverEffect = 'none',
    className = '',
    ...props
  }, ref) => {
    const sizeClasses = {
      xs: 'w-3 h-3',
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6',
      xl: 'w-8 h-8',
      '2xl': 'w-10 h-10'
    }
    
    const colorClasses = {
      primary: 'text-text-primary',
      secondary: 'text-text-secondary',
      accent: 'text-text-accent',
      green: 'text-accent-green',
      purple: 'text-accent-purple',
      yellow: 'text-accent-yellow'
    }
    
    const hoverAnimations = {
      scale: { scale: 1.1 },
      rotate: { rotate: 360 },
      bounce: { y: -2 },
      none: {}
    }
    
    const iconClasses = `${sizeClasses[size]} ${colorClasses[color]} transition-all duration-300`
    const containerClasses = `inline-flex items-center justify-center ${className}`
    
    if (animated) {
      return (
        <motion.div
          ref={ref}
          className={containerClasses}
          whileHover={hoverAnimations[hoverEffect]}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          {...(props as any)}
        >
          <IconComponent className={iconClasses} />
        </motion.div>
      )
    }
    
    return (
      <div
        ref={ref}
        className={containerClasses}
        {...props}
      >
        <IconComponent className={iconClasses} />
      </div>
    )
  }
)

Icon.displayName = 'Icon'

export default Icon 