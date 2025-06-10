'use client'

import { motion } from 'framer-motion'
import { Clock, Calendar, ExternalLink, Eye } from 'lucide-react'
import { Heading, Paragraph, Text, Badge, Icon, Button } from '@/components/atoms'
import Card from './Card'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'

interface BlogCardProps {
  title: string
  excerpt: string
  image?: string
  publishedAt: string
  readTime: string
  tags: string[]
  url: string
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
  featured = false,
  animated = true
}: BlogCardProps) => {
  


  return (
    <Card
      variant={featured ? 'elevated' : 'default'}
      padding="none"
      className={`overflow-hidden group ${featured ? 'lg:col-span-2 lg:flex' : ''}`}
      animated={animated}
      clickable
      onClick={() => window.open(url, '_blank')}
    >
      {/* Image Container */}
      {image && (
        <div className={`relative overflow-hidden ${featured ? 'lg:w-1/2' : 'h-48'}`}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Featured badge */}
          {featured && (
            <div className="absolute top-4 left-4">
              <Badge variant="primary" animated>
                Post em Destaque
              </Badge>
            </div>
          )}
          
          {/* Read time overlay */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-2 bg-bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-lg">
              <Icon icon={Clock} size="xs" color="secondary" />
              <Text variant="small" color="secondary">{readTime}</Text>
            </div>
          </div>
        </div>
      )}
      
      {/* Content */}
      <div className={`p-6 ${featured && image ? 'lg:w-1/2 lg:flex lg:flex-col lg:justify-center' : ''}`}>
        <div className="space-y-4">
          {/* Meta info */}
          <div className="flex items-center gap-4 text-text-secondary">
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
            variant={featured ? 'subsection' : 'card'} 
            className="group-hover:text-accent-green transition-colors duration-300 line-clamp-2"
          >
            {title}
          </Heading>
          
          {/* Excerpt */}
          <Paragraph 
            variant="body" 
            color="secondary" 
            className={`${featured ? 'line-clamp-4' : 'line-clamp-3'}`}
          >
            {excerpt}
          </Paragraph>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag, index) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Badge variant="outline" size="sm">
                  {tag}
                </Badge>
              </motion.div>
            ))}
            {tags.length > 3 && (
              <Badge variant="ghost" size="sm">
                +{tags.length - 3}
              </Badge>
            )}
          </div>
          
          {/* Action */}
          <div className="flex items-center justify-between pt-2">
            <motion.a
              href={url}
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
              rightIcon={<Icon icon={Eye} size="sm" />}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Ler Post
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default BlogCard 