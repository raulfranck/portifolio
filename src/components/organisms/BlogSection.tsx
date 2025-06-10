'use client'

import { motion } from 'framer-motion'
import { Heading, Text, Button } from '@/components/atoms'
import { BlogCard } from '@/components/molecules'
import { ExternalLink, Calendar, Clock, Eye, ArrowRight } from 'lucide-react'
import { formatNumber, formatDate } from '@/lib/utils'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  image: string
  tags: string[]
  publishedAt: string
  readTime: string
  views: number
  featured?: boolean
  url: string
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Como Criar Componentes Reutilizáveis com React e TypeScript',
    excerpt: 'Aprenda as melhores práticas para criar componentes React reutilizáveis, escaláveis e type-safe usando TypeScript. Um guia completo com exemplos práticos.',
    content: 'Neste artigo, vamos explorar as técnicas fundamentais para criar componentes React...',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop',
    tags: ['React', 'TypeScript', 'Frontend', 'Componentes'],
    publishedAt: '2024-01-15',
    readTime: '8 min',
    views: 1250,
    featured: true,
    url: 'https://blog.example.com/componentes-react-typescript'
  },
  {
    id: '2',
    title: 'Next.js 14: Novidades e Como Migrar seu Projeto',
    excerpt: 'Explore as principais novidades do Next.js 14, incluindo o App Router aprimorado, Server Components e as melhorias de performance.',
    content: 'O Next.js 14 trouxe várias melhorias significativas...',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop',
    tags: ['Next.js', 'React', 'SSR', 'Performance'],
    publishedAt: '2024-01-08',
    readTime: '12 min',
    views: 890,
    url: 'https://blog.example.com/nextjs-14-novidades'
  },
  {
    id: '3',
    title: 'Tailwind CSS: Design System Escalável em Minutos',
    excerpt: 'Como criar um design system consistente e escalável usando Tailwind CSS. Dicas para configuração, customização e boas práticas.',
    content: 'Tailwind CSS revolucionou a forma como pensamos sobre CSS...',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=500&h=300&fit=crop',
    tags: ['CSS', 'Tailwind', 'Design System', 'UI/UX'],
    publishedAt: '2024-01-03',
    readTime: '6 min',
    views: 675,
    url: 'https://blog.example.com/tailwind-design-system'
  },
  {
    id: '4',
    title: 'API RESTful com Node.js e Express: Guia Completo',
    excerpt: 'Aprenda a construir APIs robustas e escaláveis com Node.js, Express, MongoDB e autenticação JWT. Do básico ao avançado.',
    content: 'Construir APIs eficientes é fundamental para qualquer aplicação moderna...',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop',
    tags: ['Node.js', 'Express', 'API', 'Backend'],
    publishedAt: '2023-12-28',
    readTime: '15 min',
    views: 1180,
    url: 'https://blog.example.com/api-nodejs-express'
  },
  {
    id: '5',
    title: 'Animações com Framer Motion: Do Básico ao Avançado',
    excerpt: 'Domine a criação de animações fluidas e interativas usando Framer Motion. Exemplos práticos e técnicas avançadas.',
    content: 'Framer Motion é uma das bibliotecas mais poderosas para animações em React...',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
    tags: ['Animation', 'Framer Motion', 'React', 'UX'],
    publishedAt: '2023-12-20',
    readTime: '10 min',
    views: 520,
    url: 'https://blog.example.com/framer-motion-animacoes'
  },
  {
    id: '6',
    title: 'Docker para Desenvolvedores Frontend: Guia Prático',
    excerpt: 'Como usar Docker para containerizar aplicações frontend, melhorar o workflow de desenvolvimento e facilitar deploys.',
    content: 'Docker não é só para backend! Veja como pode transformar seu desenvolvimento frontend...',
    image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=500&h=300&fit=crop',
    tags: ['Docker', 'DevOps', 'Frontend', 'Deploy'],
    publishedAt: '2023-12-15',
    readTime: '7 min',
    views: 425,
    url: 'https://blog.example.com/docker-frontend'
  }
]

interface BlogSectionProps {
  showAll?: boolean
  className?: string
}

const BlogSection = ({ showAll = false, className = '' }: BlogSectionProps) => {
  const displayedPosts = showAll ? blogPosts : blogPosts.slice(0, 4)
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = displayedPosts.filter(post => !post.featured)



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
            e dicas práticas que podem ajudar outros desenvolvedores.
          </Text>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-6">
              <Heading as="h3" variant="subsection" className="text-center">
                Post em Destaque
              </Heading>
            </div>
            
                         <BlogCard
               title={featuredPost.title}
               excerpt={featuredPost.excerpt}
               image={featuredPost.image}
               publishedAt={featuredPost.publishedAt}
               readTime={featuredPost.readTime}
               tags={featuredPost.tags}
               url={featuredPost.url}
               featured
               animated
             />
          </motion.div>
        )}

        {/* Blog Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {regularPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
                             <BlogCard
                 title={post.title}
                 excerpt={post.excerpt}
                 image={post.image}
                 publishedAt={post.publishedAt}
                 readTime={post.readTime}
                 tags={post.tags}
                 url={post.url}
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
              {blogPosts.length}+
            </div>
            <Text variant="small" color="secondary">
              Artigos Publicados
            </Text>
          </div>
          
          <div className="text-center p-6 bg-bg-secondary rounded-xl border border-bg-tertiary">
            <div className="text-3xl font-bold text-accent-purple mb-2">
              {formatNumber(blogPosts.reduce((acc, post) => acc + post.views, 0))}
            </div>
            <Text variant="small" color="secondary">
              Visualizações Totais
            </Text>
          </div>
          
          <div className="text-center p-6 bg-bg-secondary rounded-xl border border-bg-tertiary">
            <div className="text-3xl font-bold text-accent-yellow mb-2">
              {Math.round(blogPosts.reduce((acc, post) => acc + parseInt(post.readTime), 0) / blogPosts.length)}min
            </div>
            <Text variant="small" color="secondary">
              Tempo Médio de Leitura
            </Text>
          </div>
          
          <div className="text-center p-6 bg-bg-secondary rounded-xl border border-bg-tertiary">
            <div className="text-3xl font-bold text-text-accent mb-2">
              4
            </div>
            <Text variant="small" color="secondary">
              Categorias
            </Text>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center p-12 bg-gradient-to-r from-bg-secondary to-bg-tertiary rounded-2xl border border-bg-tertiary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Calendar className="w-12 h-12 text-accent-green mx-auto mb-6" />
          <Heading as="h3" variant="subsection" className="mb-4">
            Não Perca Nenhum Post
          </Heading>
          <Text variant="body" color="secondary" className="mb-8 max-w-2xl mx-auto">
            Publico regularmente sobre desenvolvimento web, tecnologias emergentes e 
            dicas práticas. Siga-me nas redes sociais para não perder nenhuma novidade!
          </Text>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {!showAll && (
              <Button
                variant="primary"
                rightIcon={<ArrowRight size={18} />}
                onClick={() => window.open('/blog', '_blank')}
              >
                Ver Todos os Posts
              </Button>
            )}
            <Button
              variant="outline"
              rightIcon={<ExternalLink size={18} />}
              onClick={() => window.open('https://dev.to', '_blank')}
            >
              Seguir no Dev.to
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogSection 