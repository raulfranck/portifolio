'use client'

import { motion } from 'framer-motion'
import { Heading, Text } from '@/components/atoms'
import TechIcon from '@/components/atoms/TechIcon'
import Card from './Card'

interface SkillItemProps {
  name: string
  description?: string
  experience: string // "2 anos", "6+ anos", etc.
  category?: 'frontend' | 'backend' | 'database' | 'tools' | 'ai' | 'other'
  animated?: boolean
  variant?: 'default' | 'compact' | 'detailed'
}

const SkillItem = ({
  name,
  description,
  experience,
  category = 'other',
  animated = true,
  variant = 'default'
}: SkillItemProps) => {
  
  const categoryColors = {
    frontend: 'text-accent-green',
    backend: 'text-accent-purple',
    database: 'text-accent-yellow',
    tools: 'text-text-accent',
    ai: 'text-accent-green',
    other: 'text-text-secondary'
  }
  
  const categoryLabels = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database',
    tools: 'Ferramentas',
    ai: 'IA & ML',
    other: 'Outros'
  }

  if (variant === 'compact') {
    return (
      <motion.div
        className="flex items-center gap-3 p-4 bg-bg-secondary rounded-xl border border-bg-tertiary hover:border-accent-green/30 transition-all duration-300 group"
        initial={animated ? { opacity: 0, scale: 0.9 } : {}}
        animate={animated ? { opacity: 1, scale: 1 } : {}}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="group-hover:scale-110 transition-transform duration-300">
          <TechIcon tech={name} size="md" animated={false} />
        </div>
        
        <div className="flex-1">
          <Heading as="h4" variant="card" className="text-sm group-hover:text-accent-green transition-colors duration-300">
            {name}
          </Heading>
          <Text variant="small" color="secondary" className="mt-1">
            {experience} de experiência
          </Text>
        </div>
      </motion.div>
    )
  }

  return (
    <Card
      variant="default"
      padding={variant === 'detailed' ? 'lg' : 'md'}
      animated={animated}
      hover
      className="text-center group"
    >
      <div className="space-y-4">
        {/* Tech Icon */}
        <motion.div
          className="flex justify-center group-hover:scale-110 transition-transform duration-300"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ duration: 0.3 }}
        >
          <TechIcon 
            tech={name} 
            size={variant === 'detailed' ? '2xl' : 'xl'} 
            animated={false}
            showTooltip
          />
        </motion.div>
        
        {/* Name */}
        <Heading 
          as="h4" 
          variant="card" 
          className="group-hover:text-accent-green transition-colors duration-300"
        >
          {name}
        </Heading>
        
        {/* Category */}
        <Text variant="small" color="secondary" className="uppercase tracking-wider">
          {categoryLabels[category]}
        </Text>
        
        {/* Experience */}
        <div className="space-y-1">
          <Text variant="small" color="accent" className="font-semibold">
            {experience} de experiência
          </Text>
          
          {/* Visual experience indicator */}
          <div className="flex justify-center gap-1">
            {Array.from({ length: getExperienceLevel(experience) }, (_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-accent-green"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
              />
            ))}
            {Array.from({ length: 5 - getExperienceLevel(experience) }, (_, i) => (
              <div
                key={i + getExperienceLevel(experience)}
                className="w-2 h-2 rounded-full bg-bg-tertiary"
              />
            ))}
          </div>
        </div>
        
        {/* Description */}
        {description && variant === 'detailed' && (
          <Text variant="small" color="secondary" className="text-center">
            {description}
          </Text>
        )}
      </div>
    </Card>
  )
}

// Helper function to convert experience to level (1-5)
function getExperienceLevel(experience: string): number {
  const exp = experience.toLowerCase()
  
  if (exp.includes('6+') || exp.includes('mais de 6') || exp.includes('7') || exp.includes('8') || exp.includes('9') || exp.includes('10')) {
    return 5
  } else if (exp.includes('4') || exp.includes('5')) {
    return 4
  } else if (exp.includes('3')) {
    return 3
  } else if (exp.includes('2')) {
    return 2
  } else {
    return 1
  }
}

export default SkillItem 