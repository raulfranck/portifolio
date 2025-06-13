'use client'

import { motion } from 'framer-motion'

interface BlogSkeletonProps {
  featured?: boolean
}

const BlogSkeleton = ({ featured = false }: BlogSkeletonProps) => {
  if (featured) {
    return (
      <motion.div
        className="bg-bg-secondary rounded-2xl border border-bg-tertiary overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Skeleton */}
          <div className="relative h-64 md:h-full bg-bg-tertiary animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-bg-tertiary via-bg-secondary to-bg-tertiary animate-shimmer"></div>
          </div>
          
          {/* Content Skeleton */}
          <div className="p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-6 w-16 bg-bg-tertiary rounded-full animate-pulse"></div>
              ))}
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="h-8 bg-bg-tertiary rounded animate-pulse"></div>
              <div className="h-8 bg-bg-tertiary rounded w-3/4 animate-pulse"></div>
            </div>
            
            <div className="space-y-2 mb-6">
              <div className="h-4 bg-bg-tertiary rounded animate-pulse"></div>
              <div className="h-4 bg-bg-tertiary rounded animate-pulse"></div>
              <div className="h-4 bg-bg-tertiary rounded w-2/3 animate-pulse"></div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-4 w-20 bg-bg-tertiary rounded animate-pulse"></div>
                <div className="h-4 w-16 bg-bg-tertiary rounded animate-pulse"></div>
              </div>
              <div className="h-10 w-32 bg-bg-tertiary rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="bg-bg-secondary rounded-2xl border border-bg-tertiary overflow-hidden group"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Image Skeleton */}
      <div className="relative h-48 bg-bg-tertiary animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-r from-bg-tertiary via-bg-secondary to-bg-tertiary animate-shimmer"></div>
      </div>
      
      {/* Content Skeleton */}
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {[1, 2].map((i) => (
            <div key={i} className="h-5 w-14 bg-bg-tertiary rounded-full animate-pulse"></div>
          ))}
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="h-6 bg-bg-tertiary rounded animate-pulse"></div>
          <div className="h-6 bg-bg-tertiary rounded w-4/5 animate-pulse"></div>
        </div>
        
        <div className="space-y-2 mb-6">
          <div className="h-4 bg-bg-tertiary rounded animate-pulse"></div>
          <div className="h-4 bg-bg-tertiary rounded animate-pulse"></div>
          <div className="h-4 bg-bg-tertiary rounded w-3/4 animate-pulse"></div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-4 w-16 bg-bg-tertiary rounded animate-pulse"></div>
            <div className="h-4 w-12 bg-bg-tertiary rounded animate-pulse"></div>
          </div>
          <div className="h-8 w-24 bg-bg-tertiary rounded animate-pulse"></div>
        </div>
      </div>
    </motion.div>
  )
}

export default BlogSkeleton 