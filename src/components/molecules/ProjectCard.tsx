'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'
import { Button, Heading, Paragraph, Icon, TechStack } from '@/components/atoms'
import Card from './Card'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  image?: string
  images?: string[]
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  viewProject?: () => void
  featured?: boolean
  animated?: boolean
}

const ProjectCard = ({
  title,
  description,
  image,
  images,
  technologies,
  githubUrl,
  liveUrl,
  viewProject,
  featured = false,
  animated = true
}: ProjectCardProps) => {
  
  // Determinar se tem múltiplas imagens
  const hasMultipleImages = images && images.length > 1
  // Altura do card baseada na quantidade de imagens - mais consistente
  const imageHeight = hasMultipleImages ? 'h-48' : 'h-44'
  
  return (
    <Card
      variant={featured ? 'elevated' : 'default'}
      padding="none"
      className="overflow-hidden group h-full flex flex-col"
      animated={animated}
      clickable={!!viewProject}
      onClick={viewProject}
    >
      {/* Image Container - Conditional */}
      {image && (
        <div className={`relative ${imageHeight} overflow-hidden`}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Action buttons */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-bg-primary/90 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-accent-green/20 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Icon icon={Github} size="sm" color="accent" />
              </motion.a>
            )}
            
            {liveUrl && (
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-bg-primary/90 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-accent-green/20 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Icon icon={ExternalLink} size="sm" color="accent" />
              </motion.a>
            )}
          </div>
          

        </div>
      )}
      

      
      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <div className="space-y-4 flex-grow">
          {/* Title */}
          <Heading as="h3" variant="card" className="group-hover:text-accent-green transition-colors duration-300">
            {title}
          </Heading>
          
          {/* Description */}
          <Paragraph variant="body" color="secondary" className="line-clamp-3">
            {description}
          </Paragraph>
          
          {/* Technologies */}
          <TechStack 
            technologies={technologies}
            size="sm"
            maxVisible={5}
            animated={animated}
          />
          
          {/* Actions */}
          <div className="flex items-center justify-between pt-4 mt-auto">
            <div className="flex gap-3">
              {githubUrl && (
                <motion.a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent-green transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Icon icon={Github} size="sm" />
                </motion.a>
              )}
              
              {liveUrl && (
                <motion.a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent-green transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Icon icon={ExternalLink} size="sm" />
                </motion.a>
              )}
            </div>
            
            {viewProject && (
              <Button
                variant="ghost"
                size="sm"
                rightIcon={<Icon icon={Eye} size="sm" />}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Ver Projeto
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ProjectCard 