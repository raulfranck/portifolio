import { NextRequest, NextResponse } from 'next/server'

// Interface para os dados do Dev.to
interface DevToArticle {
  id: number
  title: string
  description: string
  url: string
  published_at: string
  cover_image: string | null
  social_image: string
  tag_list: string[]
  reading_time_minutes: number
  public_reactions_count: number
  page_views_count: number
  user: {
    name: string
    username: string
    profile_image: string
  }
}

// Interface para nosso formato interno
interface BlogPost {
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

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const username = searchParams.get('username') || process.env.DEVTO_USERNAME
    const limit = searchParams.get('limit') || '10'

    if (!username) {
      return NextResponse.json(
        { error: 'Username do Dev.to não configurado' },
        { status: 400 }
      )
    }

    // Buscar artigos do usuário no Dev.to
    const response = await fetch(
      `https://dev.to/api/articles?username=${username}&per_page=${limit}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        // Cache por 1 hora
        next: { revalidate: 3600 }
      }
    )

    if (!response.ok) {
      throw new Error(`Erro na API do Dev.to: ${response.status}`)
    }

    const articles: DevToArticle[] = await response.json()

    // Transformar dados para nosso formato
    const blogPosts: BlogPost[] = articles.map((article) => ({
      id: article.id.toString(),
      title: article.title,
      excerpt: article.description || article.title,
      image: article.cover_image || article.social_image || '/images/blog-placeholder.svg',
      tags: article.tag_list,
      publishedAt: article.published_at,
      readTime: `${article.reading_time_minutes} min`,
      views: article.page_views_count || 0,
      reactions: article.public_reactions_count || 0,
      url: article.url,
      author: {
        name: article.user.name,
        username: article.user.username,
        avatar: article.user.profile_image
      }
    }))

    return NextResponse.json({
      success: true,
      posts: blogPosts,
      total: blogPosts.length
    })

  } catch (error) {
    console.error('Erro ao buscar posts do Dev.to:', error)
    
    return NextResponse.json(
      { 
        error: 'Erro interno do servidor',
        message: error instanceof Error ? error.message : 'Erro desconhecido'
      },
      { status: 500 }
    )
  }
} 