// Tipos para YouTube API
export interface YouTubeVideo {
  id: string
  title: string
  description: string
  thumbnail: string
  publishedAt: string
  viewCount: string
  url: string
}

// Tipos para Blog Posts (RSS)
export interface BlogPost {
  id: string
  title: string
  description: string
  url: string
  publishedAt: string
  tags: string[]
  thumbnail?: string
}

// Tipos para Projetos
export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

// Tipos para Contato
export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

// Tipos para Seções do Site
export interface Section {
  id: string
  title: string
  isVisible: boolean
} 