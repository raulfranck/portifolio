'use client'

import { motion } from 'framer-motion'
import { Clock, Calendar, ExternalLink, Eye, Heart, User } from 'lucide-react'
import { Heading, Paragraph, Text, Badge, Icon, Button } from '@/components/atoms'
import Card from './Card'
import Image from 'next/image'
import { formatDate, formatNumber } from '@/lib/utils'

interface BlogCardProps {
  title: string
  excerpt: string
  image?: string
  publishedAt: string
  readTime: string
  tags: string[]
  url: string
  views?: number
  reactions?: number
  author?: {
    name: string
    username: string
    avatar: string
  }
  featured?: boolean
  animated?: boolean
}

const BlogCard = ({
  title,
  excerpt,
  image,
  publishedAt,
  readTime,
  tags,
  url,
  views,
  reactions,
  author,
  featured = false,
  animated = true
}: BlogCardProps) => {
  return (
    <Card
      variant="default"
      padding="none"
      className="overflow-hidden group h-full flex flex-col"
      animated={animated}
      clickable
      onClick={() => window.open(url, '_blank')}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        {image ? (
          <>
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Read time overlay */}
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-2 bg-bg-primary/90 backdrop-blur-sm px-2 py-1 rounded-lg">
                <Icon icon={Clock} size="xs" color="secondary" />
                <Text variant="small" color="secondary">{readTime}</Text>
              </div>
            </div>
          </>
        ) : (
          <div className="w-full h-full bg-bg-tertiary flex items-center justify-center">
            <div className="text-center">
              <Icon icon={Calendar} size="lg" color="secondary" />
              <Text variant="small" color="secondary" className="mt-2">
                {readTime}
              </Text>
            </div>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="space-y-3 flex-1">
          {/* Meta info */}
          <div className="flex items-center justify-between text-text-secondary">
            <div className="flex items-center gap-1">
              <Icon icon={Calendar} size="xs" />
              <Text variant="small">{formatDate(publishedAt)}</Text>
            </div>
            
            {!image && (
              <div className="flex items-center gap-1">
                <Icon icon={Clock} size="xs" />
                <Text variant="small">{readTime}</Text>
              </div>
            )}
          </div>
          
          {/* Title */}
          <Heading 
            as="h3" 
            variant="card" 
            className="group-hover:text-accent-green transition-colors duration-300 line-clamp-2 text-sm font-semibold"
          >
            {title}
          </Heading>
          
          {/* Excerpt */}
          <Paragraph 
            variant="body" 
            color="secondary" 
            className="line-clamp-2 text-xs"
          >
            {excerpt}
          </Paragraph>
          
          {/* Tags - Mostrar todas */}
          <div className="flex flex-wrap gap-1">
            {tags.map((tag, index) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Badge variant="outline" size="sm" className="text-xs px-2 py-1">
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>
          
        </div>
        
        {/* Footer - Stats e Actions */}
        <div className="mt-auto pt-3 border-t border-bg-tertiary">
          {/* Stats */}
          <div className="flex items-center justify-between text-text-secondary text-xs mb-2">
            <div className="flex items-center gap-3">
              {views !== undefined && (
                <div className="flex items-center gap-1">
                  <Icon icon={Eye} size="xs" />
                  <Text variant="small">{formatNumber(views)}</Text>
                </div>
              )}
              {reactions !== undefined && (
                <div className="flex items-center gap-1">
                  <Icon icon={Heart} size="xs" />
                  <Text variant="small">{formatNumber(reactions)}</Text>
                </div>
              )}
            </div>
            
            {author && (
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-full overflow-hidden">
                  <Image
                    src={author.avatar}
                    alt={author.name}
                    width={16}
                    height={16}
                    className="object-cover"
                  />
                </div>
                <Text variant="small" className="text-xs">
                  @{author.username}
                </Text>
              </div>
            )}
          </div>
          
          {/* Action */}
          <div className="flex items-center justify-between">
            <motion.a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-green transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Icon icon={ExternalLink} size="xs" />
            </motion.a>
            
            <Button
              variant="ghost"
              size="sm"
              rightIcon={<Icon icon={Eye} size="xs" />}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs px-2 py-1"
            >
              Ler
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default BlogCard 