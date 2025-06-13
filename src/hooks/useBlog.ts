import { useState, useEffect } from 'react'

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  image: string
  tags: string[]
  publishedAt: string
  readTime: string
  views: number
  reactions: number
  url: string
  author: {
    name: string
    username: string
    avatar: string
  }
}

interface UseBlogReturn {
  posts: BlogPost[]
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
  featuredPost: BlogPost | null
  regularPosts: BlogPost[]
  totalViews: number
  totalReactions: number
  averageReadTime: number
}

interface BlogApiResponse {
  success: boolean
  posts: BlogPost[]
  total: number
  error?: string
  message?: string
}

export const useBlog = (limit: number = 10): UseBlogReturn => {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchPosts = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch(`/api/blog?limit=${limit}`)
      const data: BlogApiResponse = await response.json()

      if (!response.ok) {
        throw new Error(data.error || `Erro HTTP: ${response.status}`)
      }

      if (!data.success) {
        throw new Error(data.message || 'Erro ao buscar posts')
      }

      setPosts(data.posts)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido'
      setError(errorMessage)
      console.error('Erro ao buscar posts:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [limit])

  // Computar valores derivados
  const featuredPost = posts.length > 0 ? posts[0] : null // Primeiro post como destaque
  const regularPosts = posts.slice(1) // Resto dos posts

  const totalViews = posts.reduce((acc, post) => acc + post.views, 0)
  const totalReactions = posts.reduce((acc, post) => acc + post.reactions, 0)
  const averageReadTime = posts.length > 0 
    ? Math.round(posts.reduce((acc, post) => acc + parseInt(post.readTime), 0) / posts.length)
    : 0

  return {
    posts,
    loading,
    error,
    refetch: fetchPosts,
    featuredPost,
    regularPosts,
    totalViews,
    totalReactions,
    averageReadTime
  }
} 