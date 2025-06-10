'use client'

import { motion } from 'framer-motion'
import { Heading, Text, Button } from '@/components/atoms'
import { VideoCard } from '@/components/molecules'
import { ExternalLink, Play, Users, Eye, ArrowRight, Youtube } from 'lucide-react'
import { formatDate, formatViews } from '@/lib/utils'

interface YouTubeVideo {
  id: string
  title: string
  description: string
  thumbnail: string
  duration: string
  publishedAt: string
  views: number
  likes: number
  url: string
  tags: string[]
  featured?: boolean
}

const youtubeVideos: YouTubeVideo[] = [
  {
    id: '1',
    title: 'Criando um Portfólio Moderno com Next.js 14 e Tailwind CSS',
    description: 'Neste tutorial completo, vamos criar um portfólio profissional do zero usando Next.js 14, TypeScript e Tailwind CSS. Aprenda as melhores práticas de desenvolvimento frontend.',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop',
    duration: '28:45',
    publishedAt: '2024-01-10',
    views: 15420,
    likes: 892,
    url: 'https://youtube.com/watch?v=example1',
    tags: ['Next.js', 'Tailwind CSS', 'Portfolio', 'Tutorial'],
    featured: true
  },
  {
    id: '2',
    title: 'React Hooks Avançados: useCallback, useMemo e useRef na Prática',
    description: 'Domine os hooks mais avançados do React com exemplos práticos. Entenda quando e como usar cada um para otimizar suas aplicações.',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop',
    duration: '22:15',
    publishedAt: '2024-01-05',
    views: 12350,
    likes: 756,
    url: 'https://youtube.com/watch?v=example2',
    tags: ['React', 'Hooks', 'Performance', 'JavaScript']
  },
  {
    id: '3',
    title: 'API REST com Node.js e Express: Do Zero ao Deploy',
    description: 'Aprenda a criar uma API completa com autenticação JWT, validação de dados e deploy na nuvem. Projeto prático passo a passo.',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop',
    duration: '45:30',
    publishedAt: '2023-12-28',
    views: 18900,
    likes: 1240,
    url: 'https://youtube.com/watch?v=example3',
    tags: ['Node.js', 'Express', 'API', 'Backend']
  },
  {
    id: '4',
    title: 'Animações Incríveis com Framer Motion - React',
    description: 'Transforme suas interfaces com animações profissionais usando Framer Motion. Efeitos de entrada, hover e transições de página.',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
    duration: '19:20',
    publishedAt: '2023-12-20',
    views: 9840,
    likes: 623,
    url: 'https://youtube.com/watch?v=example4',
    tags: ['Framer Motion', 'Animation', 'React', 'UI/UX']
  },
  {
    id: '5',
    title: 'TypeScript para Iniciantes: Guia Completo 2024',
    description: 'Aprenda TypeScript do básico ao avançado. Types, interfaces, generics e como migrar um projeto JavaScript para TypeScript.',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop',
    duration: '35:12',
    publishedAt: '2023-12-15',
    views: 21500,
    likes: 1450,
    url: 'https://youtube.com/watch?v=example5',
    tags: ['TypeScript', 'JavaScript', 'Beginner', 'Tutorial']
  },
  {
    id: '6',
    title: 'Deploy Automático com GitHub Actions e Vercel',
    description: 'Configure CI/CD para seus projetos frontend. Deploy automático, testes e verificações de qualidade a cada commit.',
    thumbnail: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=500&h=300&fit=crop',
    duration: '16:40',
    publishedAt: '2023-12-10',
    views: 7620,
    likes: 445,
    url: 'https://youtube.com/watch?v=example6',
    tags: ['CI/CD', 'GitHub Actions', 'Vercel', 'DevOps']
  }
]

interface YouTubeSectionProps {
  showAll?: boolean
  className?: string
}

const YouTubeSection = ({ showAll = false, className = '' }: YouTubeSectionProps) => {
  const displayedVideos = showAll ? youtubeVideos : youtubeVideos.slice(0, 4)
  const featuredVideo = youtubeVideos.find(video => video.featured)
  const regularVideos = displayedVideos.filter(video => !video.featured)

  const totalViews = youtubeVideos.reduce((acc, video) => acc + video.views, 0)
  const totalLikes = youtubeVideos.reduce((acc, video) => acc + video.likes, 0)



  return (
    <section id="videos" className={`section-spacing ${className}`}>
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
            Últimos <span className="gradient-text">Vídeos</span>
          </Heading>
          <Text variant="body" color="secondary" className="max-w-2xl mx-auto">
            Tutoriais práticos, dicas de desenvolvimento e projetos completos. 
            Conteúdo gratuito para ajudar desenvolvedores em sua jornada.
          </Text>
        </motion.div>

        {/* Featured Video */}
        {featuredVideo && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-6">
              <Heading as="h3" variant="subsection" className="text-center">
                Vídeo em Destaque
              </Heading>
            </div>
            
                         <VideoCard
               title={featuredVideo.title}
               description={featuredVideo.description}
               thumbnail={featuredVideo.thumbnail}
               duration={featuredVideo.duration}
               publishedAt={featuredVideo.publishedAt}
               viewCount={featuredVideo.views.toString()}
               youtubeUrl={featuredVideo.url}
               featured
               animated
             />
          </motion.div>
        )}

        {/* Videos Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {regularVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
                             <VideoCard
                 title={video.title}
                 description={video.description}
                 thumbnail={video.thumbnail}
                 duration={video.duration}
                 publishedAt={video.publishedAt}
                 viewCount={video.views.toString()}
                 youtubeUrl={video.url}
                 animated
               />
            </motion.div>
          ))}
        </motion.div>

        {/* YouTube Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center p-6 bg-bg-secondary rounded-xl border border-bg-tertiary">
            <div className="text-3xl font-bold text-accent-green mb-2">
              {youtubeVideos.length}+
            </div>
            <Text variant="small" color="secondary">
              Vídeos Publicados
            </Text>
          </div>
          
          <div className="text-center p-6 bg-bg-secondary rounded-xl border border-bg-tertiary">
            <div className="text-3xl font-bold text-accent-purple mb-2">
              {formatViews(totalViews)}
            </div>
            <Text variant="small" color="secondary">
              Visualizações Totais
            </Text>
          </div>
          
          <div className="text-center p-6 bg-bg-secondary rounded-xl border border-bg-tertiary">
            <div className="text-3xl font-bold text-accent-yellow mb-2">
              {formatViews(totalLikes)}
            </div>
            <Text variant="small" color="secondary">
              Curtidas Totais
            </Text>
          </div>
          
          <div className="text-center p-6 bg-bg-secondary rounded-xl border border-bg-tertiary">
            <div className="text-3xl font-bold text-text-accent mb-2">
              2.5k+
            </div>
            <Text variant="small" color="secondary">
              Inscritos
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
          <Youtube className="w-12 h-12 text-red-500 mx-auto mb-6" />
          <Heading as="h3" variant="subsection" className="mb-4">
            Se Inscreva no Canal
          </Heading>
          <Text variant="body" color="secondary" className="mb-8 max-w-2xl mx-auto">
            Publico regularmente tutoriais de desenvolvimento web, projetos completos e 
            dicas práticas. Ative o sininho para não perder nenhum vídeo!
          </Text>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              leftIcon={<Youtube size={18} />}
              onClick={() => window.open('https://youtube.com/@channel', '_blank')}
              className="bg-red-600 hover:bg-red-700 border-red-600"
            >
              Se Inscrever
            </Button>
            {!showAll && (
              <Button
                variant="outline"
                rightIcon={<ArrowRight size={18} />}
                onClick={() => window.open('/videos', '_blank')}
              >
                Ver Todos os Vídeos
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default YouTubeSection 