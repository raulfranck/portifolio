'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Calendar, MapPin, ExternalLink, ChevronRight, Zap, Star } from 'lucide-react'
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

  const cardRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  })

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])
  
  // Smooth spring animations
  const smoothY = useSpring(y, { stiffness: 400, damping: 40 })
  const smoothScale = useSpring(scale, { stiffness: 400, damping: 40 })

  // Rotation based on scroll
  const rotate = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -2 : 2, index % 2 === 0 ? 2 : -2])

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
      x: index % 2 === 0 ? -100 : 100,
      y: 50,
      rotateY: index % 2 === 0 ? -15 : 15
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  }

  const isLeft = index % 2 === 0

  return (
    <motion.div
      ref={cardRef}
      className="relative flex items-center w-full mb-20 last:mb-0"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-150px" }}
    >
      {/* Connecting Line to Timeline */}
      <motion.div
        className={`absolute top-12 w-8 h-px bg-gradient-to-${isLeft ? 'r' : 'l'} from-accent-green to-transparent z-20`}
        style={{ 
          [isLeft ? 'right' : 'left']: 'calc(50% + 0.5rem)',
          opacity: opacity
        }}
      />

      {/* Enhanced Timeline Dot */}
      <motion.div
        className="absolute left-1/2 top-12 transform -translate-x-1/2 z-30"
        style={{ scale: smoothScale }}
        whileInView={{ 
          rotate: [0, 360],
          transition: { duration: 2, delay: index * 0.1 }
        }}
        viewport={{ once: true }}
      >
        <div className="relative">
          {/* Outer glow ring */}
          <motion.div
            className={`absolute inset-0 w-8 h-8 rounded-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2`}
            style={{
              background: current ? 
                'linear-gradient(45deg, #00FFC6, #7F5AF0)' : 
                'linear-gradient(45deg, #7F5AF0, #FFD600)',
              filter: 'blur(4px)',
              opacity: 0.6
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Main dot */}
          <div className={`relative w-6 h-6 rounded-full border-2 border-bg-primary shadow-lg flex items-center justify-center
            ${current ? 'bg-accent-green' : 'bg-accent-purple'}`}>
            {current ? (
              <Star className="w-3 h-3 text-bg-primary" />
            ) : (
              <Zap className="w-3 h-3 text-bg-primary" />
            )}
          </div>
        </div>
      </motion.div>

      {/* Enhanced Content Card */}
      <motion.div
        className={`
          w-[calc(50%-3rem)] cursor-pointer group perspective-1000
          ${isLeft ? 'mr-auto pr-4' : 'ml-auto pl-4'}
        `}
        style={{ 
          y: smoothY,
          rotate: rotate,
          opacity: opacity 
        }}
        onClick={onClick}
        whileHover={{ 
          scale: 1.03,
          rotateY: isLeft ? 5 : -5,
          transition: { type: "spring", stiffness: 400, damping: 10 }
        }}
      >
        <div className="relative overflow-hidden bg-bg-secondary border border-bg-tertiary rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-accent-green/30">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className={`absolute top-4 ${isLeft ? 'right-4' : 'left-4'} w-24 h-24 bg-gradient-to-br from-accent-green to-accent-purple rounded-full blur-xl`} />
          </div>

          {/* Content */}
          <div className="relative p-6">
            {/* Header */}
            <div className="mb-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <motion.div
                    whileHover={{ x: isLeft ? 5 : -5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Heading as="h3" variant="card" className="mb-2 group-hover:text-accent-green transition-colors">
                      {title}
                    </Heading>
                  </motion.div>
                  <div className="flex items-center gap-2 mb-2">
                    <Text variant="body" className="font-medium text-text-accent">
                      {company}
                    </Text>
                    {companyUrl && (
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 45 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <ExternalLink 
                          size={14} 
                          className="text-text-secondary hover:text-accent-green transition-colors cursor-pointer" 
                        />
                      </motion.div>
                    )}
                  </div>
                </div>
                
                {current && (
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      boxShadow: [
                        '0 0 0 0 rgba(0, 255, 198, 0.4)',
                        '0 0 0 4px rgba(0, 255, 198, 0.1)',
                        '0 0 0 0 rgba(0, 255, 198, 0)'
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Badge variant="success" size="sm" className="ml-2">
                      Atual
                    </Badge>
                  </motion.div>
                )}
              </div>

              {/* Meta Info with icons */}
              <div className="flex flex-col gap-2">
                <motion.div 
                  className="flex items-center gap-2 text-text-secondary"
                  whileHover={{ x: isLeft ? 3 : -3 }}
                >
                  <Calendar size={14} className="text-accent-green" />
                  <Text variant="small">{formatPeriod()}</Text>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 text-text-secondary"
                  whileHover={{ x: isLeft ? 3 : -3 }}
                >
                  <MapPin size={14} className="text-accent-purple" />
                  <Text variant="small">{location}</Text>
                </motion.div>
              </div>
            </div>

            {/* Description with better typography */}
            <div className="mb-4">
              <Text variant="body" color="secondary" className="line-clamp-3 leading-relaxed">
                {description}
              </Text>
            </div>

            {/* Technologies with animation */}
            <motion.div 
              className="mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <TechStack 
                technologies={technologies} 
                size="sm" 
                maxVisible={4}
                animated={true}
              />
            </motion.div>

            {/* Enhanced CTA */}
            <div className="flex items-center justify-between pt-2 border-t border-bg-tertiary/50">
              <Text variant="small" color="secondary" className="opacity-70 group-hover:opacity-100 transition-opacity">
                Clique para ver detalhes
              </Text>
              <motion.div
                className="flex items-center gap-1"
                whileHover={{ x: isLeft ? -3 : 3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Text variant="small" className="text-accent-green opacity-0 group-hover:opacity-100 transition-opacity">
                  Expandir
                </Text>
                <ChevronRight 
                  size={16} 
                  className="text-text-secondary group-hover:text-accent-green transition-all" 
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ExperienceItem 