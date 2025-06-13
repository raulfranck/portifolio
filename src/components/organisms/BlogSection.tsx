'use client'

import { motion } from 'framer-motion'
import { Heading, Text, Button } from '@/components/atoms'
import { BlogCard, BlogSkeleton, BlogError } from '@/components/molecules'
import { ExternalLink, Calendar, Clock, Eye, ArrowRight, Heart, TrendingUp } from 'lucide-react'
import { formatNumber, formatDate } from '@/lib/utils'
import { useBlog } from '@/hooks/useBlog'

interface BlogSectionProps {
  showAll?: boolean
  className?: string
}

const BlogSection = ({ showAll = false, className = '' }: BlogSectionProps) => {
  const { 
    posts, 
    loading, 
    error, 
    refetch, 
    featuredPost, 
    regularPosts, 
    totalViews, 
    totalReactions, 
    averageReadTime 
  } = useBlog(showAll ? 10 : 6)

  const displayedPosts = showAll ? posts : posts.slice(0, 4)
  const displayedRegularPosts = showAll ? regularPosts : regularPosts.slice(0, 3)



  // Loading state
  if (loading) {
    return (
      <section id="blog" className={`section-spacing ${className}`}>
        <div className="container-custom">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Heading as="h2" variant="section" className="mb-4">
              Últimos <span className="gradient-text">Posts</span>
            </Heading>
            <Text variant="body" color="secondary" className="max-w-2xl mx-auto">
              Carregando posts do Dev.to...
            </Text>
          </motion.div>

          {/* Blog Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <BlogSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    )
  }

  // Error state
  if (error) {
    return (
      <section id="blog" className={`section-spacing ${className}`}>
        <div className="container-custom">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Heading as="h2" variant="section" className="mb-4">
              Últimos <span className="gradient-text">Posts</span>
            </Heading>
          </motion.div>

          <BlogError error={error} onRetry={refetch} />
        </div>
      </section>
    )
  }

  return (
    <section id="blog" className={`section-spacing ${className}`}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heading as="h2" variant="section" className="mb-4">
            Últimos <span className="gradient-text">Posts</span>
          </Heading>
          <Text variant="body" color="secondary" className="max-w-2xl mx-auto">
            Compartilho conhecimentos sobre desenvolvimento web, tecnologias modernas 
            e dicas práticas que podem ajudar outros desenvolvedores no Dev.to.
          </Text>
        </motion.div>

        {/* Blog Grid - Todos os posts em grid uniforme */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {posts.slice(0, showAll ? posts.length : 8).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <BlogCard
                title={post.title}
                excerpt={post.excerpt}
                image={post.image}
                publishedAt={post.publishedAt}
                readTime={post.readTime}
                tags={post.tags}
                url={post.url}
                views={post.views}
                reactions={post.reactions}
                author={post.author}
                animated
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Blog Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center p-6 bg-bg-secondary rounded-xl border border-bg-tertiary">
            <div className="text-3xl font-bold text-accent-green mb-2">
              {posts.length}+
            </div>
            <Text variant="small" color="secondary">
              Artigos Publicados
            </Text>
          </div>
          
          <div className="text-center p-6 bg-bg-secondary rounded-xl border border-bg-tertiary">
            <div className="text-3xl font-bold text-accent-purple mb-2">
              {formatNumber(totalViews)}
            </div>
            <Text variant="small" color="secondary">
              Visualizações Totais
            </Text>
          </div>
          
          <div className="text-center p-6 bg-bg-secondary rounded-xl border border-bg-tertiary">
            <div className="text-3xl font-bold text-accent-yellow mb-2">
              {averageReadTime}min
            </div>
            <Text variant="small" color="secondary">
              Tempo Médio de Leitura
            </Text>
          </div>
          
          <div className="text-center p-6 bg-bg-secondary rounded-xl border border-bg-tertiary">
            <div className="text-3xl font-bold text-text-accent mb-2">
              <Heart className="w-6 h-6 inline mr-2" />
              {formatNumber(totalReactions)}
            </div>
            <Text variant="small" color="secondary">
              Reações Totais
            </Text>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogSection 