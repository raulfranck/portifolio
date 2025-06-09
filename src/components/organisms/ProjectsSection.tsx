'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heading, Text, Button, Badge } from '@/components/atoms'
import { ProjectCard } from '@/components/molecules'
import { ExternalLink, Filter, Grid, List } from 'lucide-react'

interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  category: 'web' | 'mobile' | 'fullstack' | 'tool'
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
  status: 'completed' | 'in-progress' | 'concept'
}

const projectsData: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'Plataforma completa de e-commerce com sistema de pagamento, gestão de produtos, painel administrativo e integração com APIs de frete.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'MongoDB', 'Node.js'],
    category: 'fullstack',
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com',
    featured: true,
    status: 'completed'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Aplicativo de gerenciamento de tarefas com drag & drop, colaboração em tempo real e notificações push.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
    technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Redis'],
    category: 'web',
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com',
    status: 'completed'
  },
  {
    id: '3',
    title: 'Mobile Finance App',
    description: 'App mobile para controle financeiro pessoal com gráficos interativos, categorização automática e sincronização na nuvem.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop',
    technologies: ['React Native', 'Expo', 'Firebase', 'Chart.js'],
    category: 'mobile',
    githubUrl: 'https://github.com',
    status: 'in-progress'
  },
  {
    id: '4',
    title: 'DevTools Extension',
    description: 'Extensão do navegador para desenvolvedores com ferramentas de debug, análise de performance e geração de código.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop',
    technologies: ['JavaScript', 'Chrome API', 'Vue.js', 'Webpack'],
    category: 'tool',
    githubUrl: 'https://github.com',
    status: 'completed'
  },
  {
    id: '5',
    title: 'SaaS Dashboard',
    description: 'Dashboard completo para SaaS com analytics, métricas em tempo real, sistema de usuários e billing.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe'],
    category: 'fullstack',
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com',
    featured: true,
    status: 'completed'
  },
  {
    id: '6',
    title: 'AI Content Generator',
    description: 'Ferramenta de geração de conteúdo com IA, templates customizáveis e integração com redes sociais.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop',
    technologies: ['Python', 'OpenAI', 'FastAPI', 'React', 'Docker'],
    category: 'tool',
    githubUrl: 'https://github.com',
    status: 'concept'
  }
]

const categories = [
  { id: 'all', label: 'Todos', count: projectsData.length },
  { id: 'web', label: 'Web Apps', count: projectsData.filter(p => p.category === 'web').length },
  { id: 'mobile', label: 'Mobile', count: projectsData.filter(p => p.category === 'mobile').length },
  { id: 'fullstack', label: 'Full Stack', count: projectsData.filter(p => p.category === 'fullstack').length },
  { id: 'tool', label: 'Ferramentas', count: projectsData.filter(p => p.category === 'tool').length }
]

const statusLabels = {
  completed: 'Concluído',
  'in-progress': 'Em Desenvolvimento',
  concept: 'Conceito'
}

const statusColors = {
  completed: 'success',
  'in-progress': 'warning',
  concept: 'secondary'
} as const

interface ProjectsSectionProps {
  showAll?: boolean
  className?: string
}

const ProjectsSection = ({ showAll = true, className = '' }: ProjectsSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const filteredProjects = selectedCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory)

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6)

  return (
    <section id="projetos" className={`section-spacing ${className}`}>
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
            Meus <span className="gradient-text">Projetos</span>
          </Heading>
          <Text variant="body" color="secondary" className="max-w-2xl mx-auto">
            Uma seleção dos projetos que desenvolvi, desde aplicações web complexas 
            até ferramentas mobile e soluções inovadoras.
          </Text>
        </motion.div>

        {/* Filters & Controls */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                  ${selectedCategory === category.id
                    ? 'bg-accent-green text-bg-primary'
                    : 'bg-bg-secondary text-text-secondary hover:bg-bg-tertiary hover:text-text-accent'
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
                <span className="ml-2 text-xs opacity-75">
                  ({category.count})
                </span>
              </motion.button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 bg-bg-secondary rounded-lg p-1">
            <motion.button
              onClick={() => setViewMode('grid')}
              className={`
                p-2 rounded-md transition-colors duration-200
                ${viewMode === 'grid' ? 'bg-accent-green text-bg-primary' : 'text-text-secondary hover:text-text-accent'}
              `}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Grid size={16} />
            </motion.button>
            <motion.button
              onClick={() => setViewMode('list')}
              className={`
                p-2 rounded-md transition-colors duration-200
                ${viewMode === 'list' ? 'bg-accent-green text-bg-primary' : 'text-text-secondary hover:text-text-accent'}
              `}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <List size={16} />
            </motion.button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className={`
              grid gap-6
              ${viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
              }
            `}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={project.featured ? 'md:col-span-2' : ''}
              >
                <div className="relative">
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    technologies={project.technologies}
                    githubUrl={project.githubUrl}
                    liveUrl={project.liveUrl}
                    featured={project.featured}
                    animated
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge 
                      variant={statusColors[project.status]}
                      size="sm"
                      className="shadow-lg"
                    >
                      {statusLabels[project.status]}
                    </Badge>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Filter className="w-12 h-12 text-text-secondary mx-auto mb-4" />
            <Text variant="body" color="secondary">
              Nenhum projeto encontrado nesta categoria.
            </Text>
          </motion.div>
        )}

        {/* Show More Button */}
        {!showAll && filteredProjects.length > 6 && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              variant="outline"
              rightIcon={<ExternalLink size={18} />}
              onClick={() => window.open('/projetos', '_blank')}
            >
              Ver Todos os Projetos
            </Button>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center p-12 bg-gradient-to-r from-bg-secondary to-bg-tertiary rounded-2xl border border-bg-tertiary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Heading as="h3" variant="subsection" className="mb-4">
            Tem um projeto em mente?
          </Heading>
          <Text variant="body" color="secondary" className="mb-8 max-w-2xl mx-auto">
            Estou sempre aberto a novos desafios e oportunidades de colaboração. 
            Vamos conversar sobre como posso ajudar a transformar sua ideia em realidade.
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Iniciar Projeto
            </Button>
            <Button
              variant="outline"
              rightIcon={<ExternalLink size={18} />}
              onClick={() => window.open('/portfolio', '_blank')}
            >
              Ver Portfolio Completo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection 