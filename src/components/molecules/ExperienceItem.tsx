'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Calendar, MapPin, ExternalLink, ChevronRight, Zap, Star, Briefcase } from 'lucide-react'
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
  isLast?: boolean
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

  // Enhanced parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [30, -30])
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.9, 1, 1, 0.9])
  
  // Smooth spring animations
  const smoothY = useSpring(y, { stiffness: 400, damping: 40 })
  const smoothScale = useSpring(scale, { stiffness: 400, damping: 40 })

  // More subtle rotation based on scroll
  const rotate = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -1 : 1, index % 2 === 0 ? 1 : -1])

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
      x: index % 2 === 0 ? -80 : 80,
      y: 40,
      rotateY: index % 2 === 0 ? -10 : 10,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 120,
        damping: 12
      }
    }
  }

  const isLeft = index % 2 === 0

  return (
    <motion.div
      ref={cardRef}
      className="relative flex items-center w-full mb-8 last:mb-0"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Connecting Line to Timeline - Mais próximo do centro */}
      <motion.div
        className={`absolute top-6 w-4 h-px bg-gradient-to-${isLeft ? 'r' : 'l'} from-accent-green via-accent-purple to-transparent z-20`}
        style={{ 
          [isLeft ? 'right' : 'left']: 'calc(50% + 0.125rem)',
          opacity: opacity
        }}
        initial={{ width: 0 }}
        animate={{ width: 16 }}
        transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
      />

      {/* Enhanced Timeline Dot com nova animação */}
      <motion.div
        className="absolute left-1/2 top-6 transform -translate-x-1/2 z-30"
        style={{ scale: smoothScale }}
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ 
          scale: 1,
          rotate: 0,
          transition: { 
            duration: 0.6, 
            delay: index * 0.15 + 0.2,
            type: "spring",
            stiffness: 200
          }
        }}
        viewport={{ once: true }}
      >
        <div className="relative">
          {/* Enhanced outer glow ring */}
          <motion.div
            className={`absolute inset-0 w-8 h-8 rounded-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2`}
            style={{
              background: current ? 
                'linear-gradient(45deg, #00FFC6, #7F5AF0)' : 
                `linear-gradient(45deg, #7F5AF0, #FFD600)`,
              filter: 'blur(4px)',
              opacity: 0.4
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Main dot com ícone */}
          <motion.div 
            className={`relative w-8 h-8 rounded-full border-3 border-bg-primary shadow-xl flex items-center justify-center overflow-hidden
              ${current ? 'bg-accent-green' : 'bg-accent-purple'}`}
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.4 }}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
            
            {current ? (
              <Star className="w-4 h-4 text-bg-primary relative z-10" />
            ) : index === 0 ? (
              <Briefcase className="w-4 h-4 text-bg-primary relative z-10" />
            ) : (
              <Zap className="w-4 h-4 text-bg-primary relative z-10" />
            )}
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Content Card - Mais próximo do centro */}
      <motion.div
        className={`
          w-[calc(50%-2rem)] cursor-pointer group perspective-1000
          ${isLeft ? 'mr-auto pr-2' : 'ml-auto pl-2'}
        `}
        style={{ 
          y: smoothY,
          rotate: rotate,
          opacity: opacity 
        }}
        onClick={onClick}
        whileHover={{ 
          scale: 1.02,
          rotateY: isLeft ? 3 : -3,
          z: 50,
          transition: { type: "spring", stiffness: 400, damping: 15 }
        }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="relative overflow-hidden bg-gradient-to-br from-bg-secondary to-bg-tertiary border border-bg-tertiary rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-accent-green/40 group-hover:shadow-accent-green/10">
          {/* Enhanced background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className={`absolute top-4 ${isLeft ? 'right-4' : 'left-4'} w-32 h-32 bg-gradient-to-br from-accent-green via-accent-purple to-accent-yellow rounded-full blur-2xl`} />
          </div>

          {/* Animated border glow */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-green/0 via-accent-green/20 to-accent-green/0 opacity-0 group-hover:opacity-100"
            initial={false}
            animate={{ 
              background: [
                'linear-gradient(90deg, rgba(0,255,198,0) 0%, rgba(0,255,198,0.1) 50%, rgba(0,255,198,0) 100%)',
                'linear-gradient(90deg, rgba(0,255,198,0) 0%, rgba(127,90,240,0.1) 50%, rgba(0,255,198,0) 100%)',
                'linear-gradient(90deg, rgba(0,255,198,0) 0%, rgba(0,255,198,0.1) 50%, rgba(0,255,198,0) 100%)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Content */}
          <div className="relative z-10 p-6">
            {/* Header */}
            <div className="mb-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 min-w-0">
                  <motion.div
                    whileHover={{ x: isLeft ? 3 : -3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Heading as="h3" variant="card" className="mb-2 group-hover:text-accent-green transition-colors truncate">
                      {title}
                    </Heading>
                  </motion.div>
                  <div className="flex items-center gap-2 mb-2">
                    <Text variant="body" className="font-medium text-text-accent truncate">
                      {company}
                    </Text>
                    {companyUrl && (
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 45 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <ExternalLink 
                          size={14} 
                          className="text-text-secondary hover:text-accent-green transition-colors cursor-pointer flex-shrink-0" 
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
                    <Badge variant="success" size="sm" className="ml-2 flex-shrink-0">
                      Atual
                    </Badge>
                  </motion.div>
                )}
              </div>

              {/* Meta Info compacto */}
              <div className="flex flex-col gap-1.5">
                <motion.div 
                  className="flex items-center gap-2 text-text-secondary"
                  whileHover={{ x: isLeft ? 2 : -2 }}
                >
                  <Calendar size={12} className="text-accent-green flex-shrink-0" />
                  <Text variant="small" className="truncate">{formatPeriod()}</Text>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 text-text-secondary"
                  whileHover={{ x: isLeft ? 2 : -2 }}
                >
                  <MapPin size={12} className="text-accent-purple flex-shrink-0" />
                  <Text variant="small" className="truncate">{location}</Text>
                </motion.div>
              </div>
            </div>

            {/* Description mais compacta */}
            <div className="mb-4">
              <Text variant="body" color="secondary" className="line-clamp-2 leading-relaxed text-sm">
                {description}
              </Text>
            </div>

            {/* Technologies mais compactas */}
            <motion.div
              className="mb-4"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <TechStack 
                technologies={technologies} 
                size="sm" 
                maxVisible={4}
                animated={true}
              />
            </motion.div>

            {/* Enhanced CTA mais compacto */}
            <div className="flex items-center justify-between pt-3 border-t border-bg-tertiary/50">
              <Text variant="small" color="secondary" className="opacity-70 group-hover:opacity-100 transition-opacity text-xs">
                Ver detalhes
              </Text>
              <motion.div
                className="flex items-center gap-1"
                whileHover={{ x: isLeft ? -2 : 2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Text variant="small" className="text-accent-green opacity-0 group-hover:opacity-100 transition-opacity text-xs">
                  Expandir
                </Text>
                <ChevronRight 
                  size={14} 
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