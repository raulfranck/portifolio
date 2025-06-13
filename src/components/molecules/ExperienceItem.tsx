'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import { Calendar, MapPin, ExternalLink, ChevronRight, Zap, Star, Briefcase, Code, Rocket } from 'lucide-react'
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
  const [isHovered, setIsHovered] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 90%", "end 10%"]
  })

  // Enhanced parallax effects with better performance
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15])
  
  // Smooth spring animations for better feel
  const smoothY = useSpring(y, { stiffness: 300, damping: 30 })
  const smoothScale = useSpring(scale, { stiffness: 300, damping: 30 })
  const smoothRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 })

  // Interactive rotation based on position
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

  // Enhanced variants with 3D effects
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: index % 2 === 0 ? -100 : 100,
      y: 60,
      rotateY: index % 2 === 0 ? -15 : 15,
      rotateX: 20,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      rotateY: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  const isLeft = index % 2 === 0

  // Dynamic icon based on role
  const getRoleIcon = () => {
    if (current) return <Star className="w-4 h-4 text-bg-primary relative z-10" />
    if (title.toLowerCase().includes('senior') || title.toLowerCase().includes('engineer')) return <Rocket className="w-4 h-4 text-bg-primary relative z-10" />
    if (title.toLowerCase().includes('fullstack')) return <Code className="w-4 h-4 text-bg-primary relative z-10" />
    if (title.toLowerCase().includes('frontend')) return <Briefcase className="w-4 h-4 text-bg-primary relative z-10" />
    return <Zap className="w-4 h-4 text-bg-primary relative z-10" />
  }

  return (
    <motion.div
      ref={cardRef}
      className="relative flex items-center w-full mb-12 last:mb-0"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      style={{
        perspective: '1000px'
      }}
    >
      {/* Enhanced connecting line with gradient animation */}
      <motion.div
        className={`absolute top-8 w-6 h-0.5 z-20`}
        style={{ 
          [isLeft ? 'right' : 'left']: 'calc(50% + 0.25rem)',
          opacity: opacity,
          background: `linear-gradient(${isLeft ? '90deg' : '270deg'}, transparent 0%, #00FFC6 50%, #7F5AF0 100%)`
        }}
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 24, opacity: 1 }}
        transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
      />

      {/* Enhanced Timeline Dot with advanced animations */}
      <motion.div
        className="absolute left-1/2 top-8 transform -translate-x-1/2 z-30"
        style={{ 
          scale: smoothScale,
          rotateX: smoothRotateX
        }}
        initial={{ scale: 0, rotate: -180, y: 20 }}
        whileInView={{ 
          scale: 1,
          rotate: 0,
          y: 0,
          transition: { 
            duration: 0.8, 
            delay: index * 0.2 + 0.3,
            type: "spring",
            stiffness: 150,
            damping: 12
          }
        }}
        viewport={{ once: true }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative">
          {/* Multi-layer glow effect */}
          <motion.div
            className="absolute inset-0 w-10 h-10 rounded-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
            style={{
              background: current ? 
                'conic-gradient(from 0deg, #00FFC6, #7F5AF0, #FFD600, #00FFC6)' : 
                'conic-gradient(from 0deg, #7F5AF0, #FFD600, #00FFC6, #7F5AF0)',
              filter: 'blur(6px)',
              opacity: 0.6
            }}
            animate={{
              rotate: [0, 360],
              scale: isHovered ? [1, 1.4, 1] : [1, 1.2, 1],
              opacity: isHovered ? [0.6, 0.9, 0.6] : [0.4, 0.6, 0.4]
            }}
            transition={{
              rotate: { duration: 4, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          
          {/* Main dot with enhanced design */}
          <motion.div
            className={`relative w-10 h-10 rounded-full border-4 border-bg-primary shadow-2xl flex items-center justify-center overflow-hidden backdrop-blur-sm
              ${current ? 'bg-gradient-to-br from-accent-green to-accent-purple' : 
                index % 3 === 0 ? 'bg-gradient-to-br from-accent-purple to-accent-yellow' :
                index % 3 === 1 ? 'bg-gradient-to-br from-accent-green to-accent-purple' :
                'bg-gradient-to-br from-accent-yellow to-accent-green'}`}
            whileHover={{ 
              scale: 1.3, 
              rotate: 180,
              borderWidth: 6
            }}
            transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
          >
            {/* Animated background pattern */}
            <motion.div 
              className="absolute inset-0 opacity-30"
              style={{
                background: 'conic-gradient(from 45deg, transparent, rgba(255,255,255,0.3), transparent)'
              }}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Dynamic inner glow */}
            <div className="absolute inset-1 bg-gradient-to-br from-white/30 to-transparent rounded-full" />
            
            {/* Role-based icon */}
            <motion.div
              animate={{ 
                scale: isHovered ? [1, 1.2, 1] : 1,
                rotate: isHovered ? [0, 15, -15, 0] : 0
              }}
              transition={{ duration: 0.5 }}
            >
              {getRoleIcon()}
            </motion.div>

            {/* Sparkle effects */}
            {current && (
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: [
                    'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.8) 0%, transparent 50%)',
                    'radial-gradient(circle at 80% 80%, rgba(255,255,255,0.8) 0%, transparent 50%)',
                    'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.8) 0%, transparent 50%)',
                    'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.8) 0%, transparent 50%)',
                    'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.8) 0%, transparent 50%)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Content Card with 3D effects */}
      <motion.div
        className={`
          w-[calc(50%-3rem)] cursor-pointer group 
          ${isLeft ? 'mr-auto pr-4' : 'ml-auto pl-4'}
        `}
        style={{ 
          y: smoothY,
          rotate: rotate,
          opacity: opacity,
          rotateX: smoothRotateX,
          transformStyle: 'preserve-3d'
        }}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ 
          scale: 1.05,
          rotateY: isLeft ? 5 : -5,
          z: 100,
          transition: { type: "spring", stiffness: 300, damping: 20 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div 
          className="relative overflow-hidden bg-gradient-to-br from-bg-secondary via-bg-secondary to-bg-tertiary border border-bg-tertiary/50 rounded-3xl shadow-2xl transition-all duration-700 group-hover:shadow-accent-green/20"
          style={{
            boxShadow: isHovered ? 
              '0 25px 50px -12px rgba(0, 255, 198, 0.25), 0 0 0 1px rgba(0, 255, 198, 0.1)' :
              '0 10px 25px -5px rgba(0, 0, 0, 0.3)'
          }}
        >
          {/* Animated background effects */}
          <div className="absolute inset-0 opacity-10">
            <motion.div 
              className={`absolute top-6 ${isLeft ? 'right-6' : 'left-6'} w-40 h-40 rounded-full blur-3xl`}
              style={{
                background: current ? 
                  'linear-gradient(135deg, #00FFC6, #7F5AF0)' :
                  'linear-gradient(135deg, #7F5AF0, #FFD600)'
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Dynamic border glow */}
          <motion.div
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
            style={{
              background: 'linear-gradient(45deg, transparent, rgba(0, 255, 198, 0.1), transparent, rgba(127, 90, 240, 0.1), transparent)',
              backgroundSize: '400% 400%'
            }}
            animate={{
              backgroundPosition: isHovered ? ['0% 0%', '100% 100%', '0% 0%'] : '0% 0%'
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Content */}
          <div className="relative z-10 p-8">
            {/* Header with enhanced animations */}
            <div className="mb-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1 min-w-0">
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <Heading as="h3" variant="card" className="mb-3 group-hover:text-accent-green transition-colors duration-300 text-xl font-bold">
                      {title}
                    </Heading>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-3 mb-3"
                    initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    <Text variant="body" className="font-semibold text-text-accent text-lg">
                      {company}
                    </Text>
                    {companyUrl && (
                      <motion.div
                        whileHover={{ scale: 1.3, rotate: 45 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <ExternalLink 
                          size={16} 
                          className="text-text-secondary hover:text-accent-green transition-colors cursor-pointer flex-shrink-0" 
                        />
                      </motion.div>
                    )}
                  </motion.div>
                </div>
                
                {current && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                  >
                    <motion.div
                      animate={{
                        boxShadow: [
                          '0 0 0 0 rgba(0, 255, 198, 0.4)',
                          '0 0 0 8px rgba(0, 255, 198, 0.1)',
                          '0 0 0 0 rgba(0, 255, 198, 0.4)'
                        ]
                      }}
                      transition={{
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut"
                      }}
                    >
                      <Badge variant="success" size="md" className="ml-3 flex-shrink-0 font-semibold">
                        <Star className="w-3 h-3 mr-1" />
                        Atual
                      </Badge>
                    </motion.div>
                  </motion.div>
                )}
              </div>

              {/* Enhanced Meta Info */}
              <div className="flex flex-col gap-3">
                <motion.div 
                  className="flex items-center gap-3 text-text-secondary"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ x: isLeft ? 3 : -3 }}
                >
                  <Calendar size={14} className="text-accent-green flex-shrink-0" />
                  <Text variant="body" className="font-medium">{formatPeriod()}</Text>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-3 text-text-secondary"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                  whileHover={{ x: isLeft ? 3 : -3 }}
                >
                  <MapPin size={14} className="text-accent-purple flex-shrink-0" />
                  <Text variant="body">{location}</Text>
                </motion.div>
              </div>
            </div>

            {/* Enhanced Description */}
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.7 }}
            >
              <Text variant="body" color="secondary" className="leading-relaxed text-base line-clamp-3">
                {description}
              </Text>
            </motion.div>

            {/* Enhanced Technologies */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <TechStack 
                technologies={technologies} 
                size="md" 
                maxVisible={5}
                animated={true}
              />
            </motion.div>

            {/* Enhanced CTA */}
            <motion.div 
              className="flex items-center justify-between pt-4 border-t border-bg-tertiary/30"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.9 }}
            >
              <Text variant="body" color="secondary" className="opacity-70 group-hover:opacity-100 transition-opacity">
                Ver detalhes completos
              </Text>
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ x: isLeft ? -3 : 3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                                 <motion.div
                   animate={{
                     opacity: isHovered ? [0.5, 1, 0.5] : 0.5,
                     scale: isHovered ? [1, 1.1, 1] : 1
                   }}
                   transition={{ duration: 1.5, repeat: Infinity }}
                 >
                   <Text variant="body" className="text-accent-green font-medium">
                     Expandir
                   </Text>
                 </motion.div>
                 <motion.div
                   animate={{
                     x: isHovered ? [0, 5, 0] : 0,
                     rotate: isHovered ? [0, 15, 0] : 0
                   }}
                   transition={{ duration: 1, repeat: Infinity }}
                >
                  <ChevronRight 
                    size={18} 
                    className="text-text-secondary group-hover:text-accent-green transition-all" 
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default ExperienceItem 