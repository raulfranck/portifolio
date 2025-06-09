'use client'

import { motion } from 'framer-motion'
import TechIcon from './TechIcon'

interface TechStackProps {
  technologies: string[]
  size?: 'xs' | 'sm' | 'md' | 'lg'
  maxVisible?: number
  showTooltip?: boolean
  animated?: boolean
  className?: string
}

const TechStack = ({
  technologies,
  size = 'sm',
  maxVisible = 5,
  showTooltip = true,
  animated = true,
  className = ''
}: TechStackProps) => {
  const visibleTechs = technologies.slice(0, maxVisible)
  const remainingCount = technologies.length - maxVisible

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Visible tech icons */}
      {visibleTechs.map((tech, index) => (
        <motion.div
          key={tech}
          initial={animated ? { opacity: 0, scale: 0.8 } : {}}
          animate={animated ? { opacity: 1, scale: 1 } : {}}
          transition={{ 
            duration: 0.3, 
            delay: animated ? index * 0.1 : 0 
          }}
        >
          <TechIcon
            tech={tech}
            size={size}
            animated={animated}
            showTooltip={showTooltip}
          />
        </motion.div>
      ))}

      {/* More technologies indicator */}
      {remainingCount > 0 && (
        <motion.div
          className={`
            flex items-center justify-center rounded-full bg-bg-tertiary text-text-secondary
            ${getSizeClasses(size)}
            text-xs font-semibold
            hover:bg-accent-green/20 hover:text-accent-green transition-colors duration-300
          `}
          initial={animated ? { opacity: 0, scale: 0.8 } : {}}
          animate={animated ? { opacity: 1, scale: 1 } : {}}
          transition={{ 
            duration: 0.3, 
            delay: animated ? visibleTechs.length * 0.1 : 0 
          }}
          title={`+${remainingCount} mais tecnologias: ${technologies.slice(maxVisible).join(', ')}`}
        >
          +{remainingCount}
        </motion.div>
      )}
    </div>
  )
}

function getSizeClasses(size: string): string {
  const sizes: Record<string, string> = {
    xs: 'w-4 h-4',
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  }
  return sizes[size] || sizes.sm
}

export default TechStack 