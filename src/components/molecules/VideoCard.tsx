'use client'

import { motion } from 'framer-motion'
import { Play, Clock, Calendar, ExternalLink, Eye } from 'lucide-react'
import { Heading, Paragraph, Text, Badge, Icon, Button } from '@/components/atoms'
import Card from './Card'
import Image from 'next/image'
import { formatDateShort, formatViewsWithLabel } from '@/lib/utils'

interface VideoCardProps {
  title: string
  description: string
  thumbnail: string
  duration: string
  publishedAt: string
  viewCount: string
  youtubeUrl: string
  featured?: boolean
  animated?: boolean
}

const VideoCard = ({
  title,
  description,
  thumbnail,
  duration,
  publishedAt,
  viewCount,
  youtubeUrl,
  featured = false,
  animated = true
}: VideoCardProps) => {
  


  return (
    <Card
      variant={featured ? 'elevated' : 'default'}
      padding="none"
      className={`overflow-hidden group ${featured ? 'lg:col-span-2' : ''}`}
      animated={animated}
      clickable
      onClick={() => window.open(youtubeUrl, '_blank')}
    >
      {/* Thumbnail Container */}
      <div className="relative h-48 md:h-56 overflow-hidden bg-bg-tertiary">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-16 h-16 bg-accent-green/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon icon={Play} size="lg" className="text-bg-primary ml-1" />
          </motion.div>
        </div>
        
        {/* Duration badge */}
        <div className="absolute bottom-4 right-4">
          <div className="bg-bg-primary/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-text-accent">
            {duration}
          </div>
        </div>
        
        {/* Featured badge */}
        {featured && (
          <div className="absolute top-4 left-4">
            <Badge variant="primary" animated>
              Vídeo em Destaque
            </Badge>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="space-y-4">
          {/* Meta info */}
          <div className="flex items-center justify-between text-text-secondary">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Icon icon={Calendar} size="xs" />
                <Text variant="small">{formatDateShort(publishedAt)}</Text>
              </div>
              
              <div className="flex items-center gap-1">
                <Icon icon={Eye} size="xs" />
                <Text variant="small">{formatViewsWithLabel(parseInt(viewCount))}</Text>
              </div>
            </div>
            
            <Text variant="small" className="text-accent-green">
              YouTube
            </Text>
          </div>
          
          {/* Title */}
          <Heading 
            as="h3" 
            variant="card" 
            className="group-hover:text-accent-green transition-colors duration-300 line-clamp-2"
          >
            {title}
          </Heading>
          
          {/* Description */}
          <Paragraph variant="body" color="secondary" className="line-clamp-3">
            {description}
          </Paragraph>
          
          {/* Action */}
          <div className="flex items-center justify-between pt-2">
            <motion.a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-green transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Icon icon={ExternalLink} size="sm" />
            </motion.a>
            
            <Button
              variant="ghost"
              size="sm"
              rightIcon={<Icon icon={Play} size="sm" />}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Assistir
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default VideoCard 