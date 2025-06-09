'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { Text, Icon } from '@/components/atoms'

interface SocialLinkProps {
  href: string
  icon: LucideIcon
  label: string
  variant?: 'default' | 'minimal' | 'card'
  size?: 'sm' | 'md' | 'lg'
  animated?: boolean
  showLabel?: boolean
}

const SocialLink = ({
  href,
  icon,
  label,
  variant = 'default',
  size = 'md',
  animated = true,
  showLabel = false
}: SocialLinkProps) => {
  
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }
  
  const iconSizes = {
    sm: 'sm' as const,
    md: 'md' as const,
    lg: 'lg' as const
  }
  
  const baseClasses = `
    ${sizeClasses[size]} 
    rounded-xl 
    flex items-center justify-center 
    transition-all duration-300 
    group
  `
  
  const variantClasses = {
    default: 'bg-bg-secondary hover:bg-accent-green/10 border border-bg-tertiary hover:border-accent-green/30',
    minimal: 'bg-transparent hover:bg-accent-green/10',
    card: 'bg-bg-secondary/50 backdrop-blur-sm border border-bg-tertiary/50 hover:bg-accent-green/10 hover:border-accent-green/30 shadow-lg hover:shadow-xl'
  }

  const linkContent = (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses[variant]}`}
      aria-label={label}
    >
      <Icon 
        icon={icon} 
        size={iconSizes[size]} 
        color="secondary"
        className="group-hover:text-accent-green transition-colors duration-300"
      />
    </a>
  )

  if (animated) {
    return (
      <div className="flex flex-col items-center gap-2">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -5, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          {linkContent}
        </motion.div>
        
        {showLabel && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Text variant="small" color="secondary" className="text-center">
              {label}
            </Text>
          </motion.div>
        )}
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center gap-2">
      {linkContent}
      {showLabel && (
        <Text variant="small" color="secondary" className="text-center">
          {label}
        </Text>
      )}
    </div>
  )
}

export default SocialLink 