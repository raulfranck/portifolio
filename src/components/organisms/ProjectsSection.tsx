'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heading, Text, Button, TechStack } from '@/components/atoms'
import { ProjectCard, RadixModal } from '@/components/molecules'
import { ExternalLink, Filter, Grid, List } from 'lucide-react'
import { Project } from '@/lib/types'

const projectsData: Project[] = [
  {
    id: '1',
    title: 'Portfólio Pessoal',
    description: 'Portfólio moderno e interativo desenvolvido com Next.js 14, Framer Motion e Tailwind CSS. Apresenta animações fluidas, design responsivo e otimizações de performance.',
    fullDescription: `Meu portfólio pessoal foi desenvolvido com foco em demonstrar habilidades técnicas através de uma experiência visual impressionante. Utilizei as mais modernas tecnologias do ecossistema React para criar uma aplicação performática e envolvente.

Principais características:
• Arquitetura baseada em Atomic Design para componentes reutilizáveis e escaláveis
• Animações fluidas e interativas com Framer Motion, incluindo efeitos de parallax e transições suaves
• Design system personalizado com Tailwind CSS e paleta de cores moderna
• Otimizações de performance com Next.js 14 (App Router, Server Components, Image Optimization)
• Responsividade completa com abordagem mobile-first
• SEO otimizado com meta tags dinâmicas e structured data

O projeto demonstra proficiência em desenvolvimento frontend moderno, UX/UI design e boas práticas de performance web.`,
    image: '/portifolio/Captura de tela 2025-06-12 210216.png',
    technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel', 'Atomic Design', 'React Hooks'],
    category: 'web',
    githubUrl: 'https://github.com/raulfranck/portifolio',
    liveUrl: 'https://raulfranck.vercel.app',
    featured: true,
    status: 'completed',
    highlights: [
      'Animações avançadas com Framer Motion e efeitos de parallax',
      'Arquitetura Atomic Design para máxima reutilização',
      'Performance Score 95+ no Lighthouse',
      'Deploy automatizado na Vercel com CI/CD'
    ],
    challenges: [
      'Implementar animações complexas sem comprometer performance',
      'Criar sistema de design consistente e escalável',
      'Otimizar carregamento de imagens e assets'
    ],
    results: [
      'Tempo de carregamento < 2s em conexões 3G',
      'Score perfeito em acessibilidade (100/100)',
      'Design responsivo testado em 15+ dispositivos'
    ]
  },
  {
    id: '2',
    title: 'Brain Agriculture',
    description: 'Sistema completo de gestão agrícola com monitoramento em tempo real. Monorepo com NestJS + PostgreSQL no backend e React + Redux no frontend. Inclui dashboard analítico com gráficos interativos, validações de CPF/CNPJ e métricas de performance com Grafana e Prometheus.',
    fullDescription: `Brain Agriculture é uma aplicação full-stack desenvolvida para demonstrar competências em arquitetura de software, desenvolvimento de APIs robustas e interfaces analíticas avançadas. O projeto simula um sistema real de gestão agrícola com foco em monitoramento, observabilidade e visualização de dados.

Arquitetura e Backend:
• Backend modular com NestJS, seguindo princípios SOLID e Clean Architecture
• API RESTful documentada com Swagger, incluindo validações de CPF/CNPJ
• Banco PostgreSQL com relacionamentos otimizados e constraints de integridade
• Monorepo com pnpm workspaces para compartilhamento de tipos entre front/back
• Sistema de validações complexas para regras de negócio agrícolas

Frontend e Dashboard Analytics:
• Interface React com Redux Toolkit para gerenciamento de estado complexo
• Dashboard analítico com gráficos interativos usando Chart.js
• Sistema de filtros avançados com 15+ critérios de busca
• Exportação de relatórios em múltiplos formatos (PDF, Excel, CSV)
• Design system próprio com 50+ componentes reutilizáveis
• Performance otimizada para datasets com 10k+ registros

Observabilidade e Monitoramento:
• Integração com Grafana e Prometheus para métricas em tempo real
• Monitoramento de performance de endpoints e queries do banco
• Logs estruturados com correlação de requests
• Health checks e alertas automatizados
• Sistema de alertas detectando 99.9% dos problemas

O projeto foi desenvolvido especificamente para validar conceitos de monitoramento de aplicações Node.js em produção e demonstrar expertise em desenvolvimento full-stack, DevOps e observabilidade.`,
    image: '/brain-agriculture/dash-brain-agriculture.png',
    images: [
      '/brain-agriculture/dash-brain-agriculture.png',
      '/brain-agriculture/cadastro-fazendas.png',
      '/brain-agriculture/diagrama-db.png'
    ],
    technologies: ['NestJS', 'React', 'TypeScript', 'PostgreSQL', 'Redux Toolkit', 'Docker', 'Prisma', 'Chart.js', 'Grafana', 'Prometheus', 'Swagger'],
    category: 'fullstack',
    githubUrl: 'https://github.com/raulfranck/brain-agriculture',
    liveUrl: 'https://brain-agriculture.vercel.app',
    featured: true,
    status: 'completed',
    highlights: [
      'Monorepo completo com frontend, backend e documentação',
      'Sistema de monitoramento com Grafana e Prometheus',
      'API documentada com Swagger e validações robustas',
      'Dashboard analítico com gráficos interativos e 8+ tipos de visualização',
      'Sistema de filtros avançados e exportação de relatórios',
      'Cobertura de testes > 80% em ambos os lados',
      'Performance otimizada para grandes volumes de dados'
    ],
    challenges: [
      'Implementar monitoramento eficiente sem impactar performance',
      'Criar validações complexas de regras de negócio agrícolas',
      'Sincronizar estado entre múltiplas entidades relacionadas',
      'Renderizar grandes volumes de dados sem travamentos',
      'Configurar pipeline de CI/CD para monorepo',
      'Criar gráficos responsivos e acessíveis'
    ],
    results: [
      'Sistema de alertas detectando 99.9% dos problemas',
      'Redução de 60% no tempo de debug com logs estruturados',
      'API com tempo de resposta médio < 100ms',
      'Tempo de renderização < 500ms para 5k registros',
      'Interface responsiva testada por 5+ usuários reais',
      'Taxa de satisfação de usuários: 4.8/5',
      'Zero bugs reportados em produção nos últimos 3 meses'
    ]
  },
  {
    id: '3',
    title: 'API Gateway Microserviços',
    description: 'Gateway centralizado para arquitetura de microserviços com autenticação JWT, rate limiting, cache Redis e balanceamento de carga. Desenvolvido em Node.js com TypeScript.',
    fullDescription: `API Gateway é um projeto conceitual que demonstra a implementação de um gateway centralizado para arquitetura de microserviços. O projeto foca em aspectos críticos de infraestrutura e segurança em sistemas distribuídos.

Características Principais:
• Gateway centralizado para roteamento de requisições
• Sistema de autenticação e autorização com JWT
• Rate limiting e throttling para proteção contra abuso
• Cache inteligente com Redis para otimização de performance
• Balanceamento de carga entre instâncias de serviços
• Logs centralizados e métricas de performance

Tecnologias e Arquitetura:
• Node.js com TypeScript para type safety
• Express.js como framework base
• Redis para cache e sessões
• Docker para containerização
• Nginx para proxy reverso
• Prometheus para métricas

Segurança e Observabilidade:
• Validação de tokens JWT com refresh automático
• Middleware de segurança (CORS, Helmet, etc.)
• Monitoramento de saúde dos serviços downstream
• Alertas automáticos para falhas de serviços
• Dashboard de métricas em tempo real

Este projeto demonstra conhecimento em arquitetura de sistemas distribuídos, segurança de APIs e DevOps.`,
    technologies: ['Node.js', 'TypeScript', 'Express.js', 'Redis', 'JWT', 'Docker', 'Nginx', 'Prometheus'],
    category: 'fullstack',
    githubUrl: 'https://github.com/raulfranck/api-gateway',
    featured: false,
    status: 'concept',
    highlights: [
      'Arquitetura de microserviços escalável',
      'Sistema de autenticação robusto com JWT',
      'Rate limiting e proteção contra DDoS',
      'Cache inteligente com Redis',
      'Monitoramento e alertas automatizados',
      'Balanceamento de carga dinâmico'
    ],
    challenges: [
      'Implementar rate limiting eficiente sem impactar UX',
      'Gerenciar estado de sessões em ambiente distribuído',
      'Configurar balanceamento de carga inteligente',
      'Implementar circuit breaker para resiliência'
    ],
    results: [
      'Redução de 40% na latência média das requisições',
      'Capacidade de lidar com 10k+ requisições/minuto',
      'Uptime de 99.9% com failover automático',
      'Detecção de anomalias em tempo real'
    ]
  }
]

const categories = [
  { id: 'all', label: 'Todos', count: projectsData.length },
  { id: 'web', label: 'Frontend', count: projectsData.filter(p => p.category === 'web').length },
  { id: 'fullstack', label: 'Full Stack', count: projectsData.filter(p => p.category === 'fullstack').length }
]



interface ProjectsSectionProps {
  showAll?: boolean
  className?: string
}

const ProjectsSection = ({ showAll = true, className = '' }: ProjectsSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredProjects = selectedCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory)

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6)

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section id="projetos" className={`section-spacing relative overflow-hidden ${className}`}>
      {/* Background Geometric Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-24 h-24 border border-accent-purple/15 rounded-xl"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-16 w-16 h-16 bg-accent-green/8 rounded-full blur-md"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div
          className="absolute top-1/2 left-8 w-12 h-12 bg-accent-yellow/10 rounded-lg"
          animate={{
            x: [0, 15, 0],
            rotate: [0, 45, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            Projetos reais que demonstram expertise em desenvolvimento full-stack, 
            arquitetura de software e tecnologias modernas. Cada projeto conta uma história técnica única.
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
              grid gap-6 max-w-6xl mx-auto
              ${viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1 max-w-2xl'
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
                className="w-full"
              >
                <div className="relative">
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    images={project.images}
                    technologies={project.technologies}
                    githubUrl={project.githubUrl}
                    liveUrl={project.liveUrl}
                    featured={project.featured}
                    animated
                    viewProject={() => handleProjectClick(project)}
                  />
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


      </div>

      {/* Modal de Detalhes do Projeto */}
      <RadixModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedProject ? selectedProject.title : ''}
        size="full"
        className="max-w-6xl"
      >
        {selectedProject && (
          <div className="space-y-10">
            {/* Grid de Imagens ou Imagem Única */}
            {selectedProject.images && selectedProject.images.length > 1 ? (
              <div className="space-y-6">
                <Heading as="h4" variant="subsection" className="text-center">
                  Capturas do Projeto
                </Heading>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {selectedProject.images.map((img, index) => (
                    <motion.div
                      key={index}
                      className="relative group rounded-xl overflow-hidden bg-bg-tertiary"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="aspect-video">
                        <img
                          src={img}
                          alt={`${selectedProject.title} - Imagem ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : selectedProject.image ? (
              <div className="relative h-80 rounded-xl overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 to-transparent" />
              </div>
            ) : null}

            {/* Links de ação */}
            <div className="flex gap-4 justify-center">
              {selectedProject.githubUrl && (
                <Button
                  variant="secondary"
                  leftIcon={<ExternalLink size={16} />}
                  onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                  className="min-w-[120px]"
                >
                  GitHub
                </Button>
              )}
              {selectedProject.liveUrl && (
                <Button
                  variant="primary"
                  leftIcon={<ExternalLink size={16} />}
                  onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                  className="min-w-[120px]"
                >
                  Ver Projeto
                </Button>
              )}
            </div>

            {/* Descrição Completa */}
            <div>
              <Heading as="h4" variant="subsection" className="mb-4">
                Sobre o Projeto
              </Heading>
              <Text variant="body" color="secondary" className="whitespace-pre-line leading-relaxed">
                {selectedProject.fullDescription || selectedProject.description}
              </Text>
            </div>

            {/* Tecnologias */}
            <div>
              <Heading as="h4" variant="subsection" className="mb-4">
                Tecnologias Utilizadas
              </Heading>
              <TechStack 
                technologies={selectedProject.technologies} 
                size="md"
                maxVisible={15}
              />
            </div>

            {/* Destaques */}
            {selectedProject.highlights && selectedProject.highlights.length > 0 && (
              <div>
                <Heading as="h4" variant="subsection" className="mb-4">
                  Principais Destaques
                </Heading>
                <ul className="space-y-3">
                  {selectedProject.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent-green rounded-full mt-2 flex-shrink-0" />
                      <Text variant="body" color="secondary">
                        {highlight}
                      </Text>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Desafios */}
            {selectedProject.challenges && selectedProject.challenges.length > 0 && (
              <div>
                <Heading as="h4" variant="subsection" className="mb-4">
                  Desafios Técnicos
                </Heading>
                <ul className="space-y-3">
                  {selectedProject.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent-purple rounded-full mt-2 flex-shrink-0" />
                      <Text variant="body" color="secondary">
                        {challenge}
                      </Text>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Resultados */}
            {selectedProject.results && selectedProject.results.length > 0 && (
              <div>
                <Heading as="h4" variant="subsection" className="mb-4">
                  Resultados Alcançados
                </Heading>
                <ul className="space-y-3">
                  {selectedProject.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent-yellow rounded-full mt-2 flex-shrink-0" />
                      <Text variant="body" color="secondary">
                        {result}
                      </Text>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Ações do Modal */}
            <div className="border-t border-bg-tertiary pt-6 flex flex-col sm:flex-row gap-4">
              <Button
                variant="outline"
                onClick={closeModal}
                className="flex-1"
              >
                Fechar
              </Button>
              {selectedProject.liveUrl && (
                <Button
                  variant="primary"
                  rightIcon={<ExternalLink size={16} />}
                  onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                  className="flex-1"
                >
                  Visitar Projeto
                </Button>
              )}
            </div>
          </div>
        )}
      </RadixModal>
    </section>
  )
}

export default ProjectsSection 