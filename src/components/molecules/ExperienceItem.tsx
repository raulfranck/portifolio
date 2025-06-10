'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink, ChevronRight } from 'lucide-react'
import { Heading, Text, Badge } from '@/components/atoms'
import { TechStack } from '@/components/atoms'

interface Experience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate?: string
  current?: boolean
  description: string
  fullDescription: string
  technologies: string[]
  achievements: string[]
  companyUrl?: string
}

interface ExperienceItemProps {
  experience: Experience
  index: number
  isLast: boolean
  onClick: () => void
}

const ExperienceItem = ({ experience, index, isLast, onClick }: ExperienceItemProps) => {
  const {
    title,
    company,
    location,
    startDate,
    endDate,
    current,
    description,
    technologies,
    companyUrl
  } = experience

  const formatPeriod = () => {
    const start = new Date(startDate).toLocaleDateString('pt-BR', { 
      month: 'short', 
      year: 'numeric' 
    })
    
    if (current) {
      return `${start} - Atual`
    }
    
    if (endDate) {
      const end = new Date(endDate).toLocaleDateString('pt-BR', { 
        month: 'short', 
        year: 'numeric' 
      })
      return `${start} - ${end}`
    }
    
    return start
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: index % 2 === 0 ? -50 : 50,
      y: 30
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div
      className="relative flex items-center w-full mb-16 last:mb-0"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Timeline Line */}
      <div className="absolute left-1/2 top-0 transform -translate-x-1/2">
        {!isLast && (
          <div className="w-px h-full bg-gradient-to-b from-bg-tertiary via-text-secondary/20 to-transparent" />
        )}
      </div>

      {/* Timeline Dot */}
      <motion.div
        className="absolute left-1/2 top-8 transform -translate-x-1/2 z-10"
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="w-4 h-4 bg-accent-green rounded-full border-4 border-bg-primary shadow-lg">
          <div className="w-full h-full bg-accent-green rounded-full animate-pulse" />
        </div>
      </motion.div>

      {/* Content Card */}
      <motion.div
        className={`
          w-[calc(50%-2rem)] cursor-pointer group
          ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}
        `}
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="bg-bg-secondary border border-bg-tertiary rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-accent-green/30">
          
          {/* Header */}
          <div className="mb-4">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <Heading as="h3" variant="card" className="mb-1 group-hover:text-accent-green transition-colors">
                  {title}
                </Heading>
                <div className="flex items-center gap-2 mb-2">
                  <Text variant="body" className="font-medium text-text-accent">
                    {company}
                  </Text>
                  {companyUrl && (
                    <ExternalLink 
                      size={14} 
                      className="text-text-secondary hover:text-accent-green transition-colors" 
                    />
                  )}
                </div>
              </div>
              
              {current && (
                <Badge variant="success" size="sm" className="ml-2">
                  Atual
                </Badge>
              )}
            </div>

            {/* Meta Info */}
            <div className="flex flex-col gap-1 text-text-secondary">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <Text variant="small">{formatPeriod()}</Text>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={14} />
                <Text variant="small">{location}</Text>
              </div>
            </div>
          </div>

          {/* Description */}
          <Text variant="body" color="secondary" className="mb-4 line-clamp-3">
            {description}
          </Text>

          {/* Technologies */}
          <div className="mb-4">
            <TechStack 
              technologies={technologies} 
              size="sm" 
              maxVisible={4}
            />
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between">
            <Text variant="small" color="secondary">
              Clique para ver detalhes
            </Text>
            <ChevronRight 
              size={16} 
              className="text-text-secondary group-hover:text-accent-green group-hover:translate-x-1 transition-all" 
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ExperienceItem 