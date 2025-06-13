'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ExternalLink, ChevronRight } from 'lucide-react'
import { Heading, Text, Badge, Button } from '@/components/atoms'
import { RadixModal, ExperienceItem, AnimatedTimeline, MagneticCursor } from '@/components/molecules'
import { TechStack } from '@/components/atoms'

interface Experience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate?: string
  current?: boolean
  description: string
  fullDescription: string
  technologies: string[]
  achievements: string[]
  companyUrl?: string
}

const experiences: Experience[] = [
  {
    id: '1',
    title: 'Software Engineer',
    company: 'DRZ Consultoria Em Serviços de Informática LTDA',
    location: 'São Paulo, SP - Remoto',
    startDate: '2024-02-01',
    current: true,
    description: 'Foco no desenvolvimento de soluções com LLMs (Large Language Models), LangChain e Machine Learning, atuando na criação e integração de modelos de inteligência artificial em aplicações diversas e escaláveis.',
    fullDescription: `Como Software Engineer na DRZ Consultoria, atuo no desenvolvimento de soluções avançadas com LLMs (Large Language Models), LangChain e Machine Learning.

Principais responsabilidades:
• Criação e integração de modelos de inteligência artificial em aplicações escaláveis
• Desenvolvimento de sistemas completos com Node.js no backend e Vue.js/React no frontend
• Trabalho com infraestrutura em nuvem (GCP, Huawei Cloud, Microsoft Azure)
• Implementação de soluções com Docker e Kubernetes para conteinerização
• Desenvolvimento de pipelines automatizadas com CI/CD
• Foco na experiência do usuário e otimização de processos`,
    technologies: ['LLMs', 'LangChain', 'Machine Learning', 'Node.js', 'Vue.js', 'React', 'GCP', 'Huawei Cloud', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'],
    achievements: [
      'Desenvolvimento de soluções inovadoras com IA generativa',
      'Integração de modelos de linguagem em aplicações escaláveis',
      'Implementação de infraestrutura multi-cloud',
      'Otimização de processos com automação CI/CD'
    ]
  },
  {
    id: '2',
    title: 'Fullstack Developer',
    company: 'TaxData Inovação em Tecnologia LTDA',
    location: 'São Paulo, SP',
    startDate: '2024-05-01',
    endDate: '2024-12-31',
    description: 'Responsável pelo desenvolvimento de páginas web responsivas, com foco em escalabilidade, performance e qualidade. Atuação em todo o ciclo do projeto, desde a concepção até o lançamento do MVP.',
    fullDescription: `Na TaxData, atuei como Fullstack Developer responsável pelo desenvolvimento completo de aplicações web escaláveis.

Principais atividades:
• Desenvolvimento de páginas web responsivas com foco em performance
• Atuação em todo ciclo do projeto: concepção, desenvolvimento e lançamento do MVP
• Criação dos principais fluxos de negócio da aplicação
• Aplicação de boas práticas de componentização e organização de código
• Integração de testes automatizados com Cypress no GitHub Actions
• Otimização de performance e experiência do usuário com foco em SEO`,
    technologies: ['Remix', 'Tailwind CSS', 'ShadCN', 'Zod', 'Redux', 'Node.js', 'PostgreSQL', 'Google Cloud', 'Cypress'],
    achievements: [
      'Desenvolvimento completo do MVP da aplicação principal',
      'Implementação de testes automatizados para fluxos críticos',
      'Otimização de performance e SEO',
      'Arquitetura escalável de frontend com componentização'
    ]
  },
  {
    id: '3',
    title: 'Frontend Engineer',
    company: 'Company Hero LTDA',
    location: 'São Paulo, SP',
    startDate: '2023-10-01',
    endDate: '2024-05-31',
    description: 'Desenvolvimento de interfaces responsivas e de alto desempenho em colaboração com equipes multidisciplinares. Experiência em ambientes ágeis com metodologia Scrum.',
    fullDescription: `Na Company Hero, atuei como Frontend Engineer desenvolvendo interfaces modernas e performáticas em ambiente ágil.

Principais responsabilidades:
• Desenvolvimento de interfaces responsivas e de alto desempenho
• Colaboração com equipes multidisciplinares de design e produto
• Trabalho em ambiente ágil com metodologia Scrum
• Implementação de testes end-to-end com Cypress integrados ao CI/CD
• Utilização do Figma para prototipação e colaboração com design
• Monitoramento e análise de logs com Kibana e ElasticSearch`,
    technologies: ['JavaScript', 'React.js', 'Next.js', 'AntDesign', 'GitHub Actions', 'Cypress', 'Figma', 'Kibana', 'ElasticSearch'],
    achievements: [
      'Desenvolvimento de interfaces de alto desempenho',
      'Implementação de testes automatizados end-to-end',
      'Colaboração efetiva com equipes de design usando Figma',
      'Monitoramento proativo de aplicações em produção'
    ]
  },
  {
    id: '4',
    title: 'Fullstack Developer',
    company: 'GFT BRASIL CONSULTORIA DE INFORMÁTICA LTDA',
    location: 'São Paulo, SP',
    startDate: '2022-04-01',
    endDate: '2023-09-30',
    description: 'Atuação no projeto AppInvest do Banco Safra, com foco em aplicações financeiras de alto desempenho e alta segurança. Desenvolvimento de aplicações utilizando Angular, Ionic, Node.js e ASP.NET Core.',
    fullDescription: `Na GFT, trabalhei no desenvolvimento do projeto AppInvest do Banco Safra, uma aplicação financeira crítica que exige alto desempenho e segurança.

Principais atividades:
• Desenvolvimento de aplicações financeiras com Angular e Ionic
• Criação de APIs robustas com Node.js e ASP.NET Core
• Utilização de Azure DevOps para CI/CD e gestão de projetos
• Implementação de testes unitários com Jest e cobertura com SonarQube
• Conteinerização de aplicações com Docker
• Monitoramento de logs e observabilidade com Kibana`,
    technologies: ['Angular', 'Ionic', 'Node.js', 'ASP.NET Core', 'Azure DevOps', 'Docker', 'CI/CD', 'Jest', 'SonarQube', 'Kibana'],
    achievements: [
      'Contribuição para aplicação financeira crítica do Banco Safra',
      'Implementação de práticas de qualidade com testes e cobertura',
      'Automação de processos com Azure DevOps',
      'Melhoria na observabilidade das aplicações'
    ]
  },
  {
    id: '5',
    title: 'Desenvolvedor FrontEnd',
    company: 'Dotz Inc. S.A.',
    location: 'São Paulo, SP',
    startDate: '2021-06-01',
    endDate: '2022-04-30',
    description: 'Participação no desenvolvimento do novo site da Dotz, do início do projeto até o lançamento em produção. Criação de componentes reutilizáveis e micro-frontends com Angular.',
    fullDescription: `Na Dotz, participei do desenvolvimento completo do novo site da empresa, desde a concepção até o lançamento em produção.

Principais contribuições:
• Desenvolvimento do novo site da Dotz do zero até produção
• Criação de componentes reutilizáveis e micro-frontends com Angular
• Gerenciamento de estado complexo com NgRx
• Colaboração estreita com equipes de design e produto
• Utilização de Sass para estilização avançada
• Integração com Prismic CMS para gestão de conteúdo`,
    technologies: ['Angular', 'Sass', 'Prismic CMS', 'NgRx', 'Micro-frontends', 'Design System'],
    achievements: [
      'Lançamento bem-sucedido do novo site da Dotz',
      'Desenvolvimento de arquitetura de micro-frontends',
      'Criação de design system interno',
      'Colaboração efetiva entre equipes técnicas e de produto'
    ]
  },
  {
    id: '6',
    title: 'Software Developer',
    company: '7COMm Informática LTDA',
    location: 'São Paulo, SP',
    startDate: '2020-10-01',
    endDate: '2021-06-30',
    description: 'Desenvolvimento de soluções front-end para o Bradesco, com foco na plataforma de investimentos Ágora e no sistema BGSL (Bradesco Global Solution).',
    fullDescription: `Na 7COMm, trabalhei no desenvolvimento de soluções front-end críticas para o Bradesco, contribuindo para sistemas financeiros de grande escala.

Principais projetos:
• Desenvolvimento para a plataforma de investimentos Ágora do Bradesco
• Contribuição no sistema BGSL (Bradesco Global Solution)
• Utilização de Angular 2+ com TypeScript para aplicações robustas
• Implementação de testes unitários com Jest
• Desenvolvimento com foco em performance e segurança`,
    technologies: ['Angular 2+', 'TypeScript', 'HTML', 'Sass', 'Jest', 'Sistemas Financeiros'],
    achievements: [
      'Contribuição para sistemas críticos do Bradesco',
      'Desenvolvimento de aplicações financeiras seguras',
      'Implementação de boas práticas de teste',
      'Manutenção de código em ambiente de alta disponibilidade'
    ]
  }
]

interface ExperienceSectionProps {
  className?: string
}

const ExperienceSection = ({ className = '' }: ExperienceSectionProps) => {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleExperienceClick = (experience: Experience) => {
    setSelectedExperience(experience)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedExperience(null)
  }

  const formatPeriod = (startDate: string, endDate?: string, current?: boolean) => {
    const start = new Date(startDate).toLocaleDateString('pt-BR', { 
      month: 'long', 
      year: 'numeric' 
    })
    
    if (current) {
      return `${start} - Atual`
    }
    
    if (endDate) {
      const end = new Date(endDate).toLocaleDateString('pt-BR', { 
        month: 'long', 
        year: 'numeric' 
      })
      return `${start} - ${end}`
    }
    
    return start
  }

  const calculateDuration = (startDate: string, endDate?: string, current?: boolean) => {
    const start = new Date(startDate)
    const end = current ? new Date() : new Date(endDate || startDate)
    
    const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
    
    if (months < 12) {
      return `${months} meses`
    }
    
    const years = Math.floor(months / 12)
    const remainingMonths = months % 12
    
    if (remainingMonths === 0) {
      return `${years} ano${years > 1 ? 's' : ''}`
    }
    
    return `${years} ano${years > 1 ? 's' : ''} e ${remainingMonths} meses`
  }

  return (
    <>
      <MagneticCursor />
      <section id="experiencia" className={`section-spacing ${className}`}>
        <div className="container-custom">
          {/* Header */}
          <motion.div
            className="text-center mb-8 md:mb-12" // Ainda mais compacto no mobile
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent-purple/10 text-accent-purple rounded-full mb-6 text-sm font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Briefcase size={16} />
              Trajetória Profissional
            </motion.div>
            
            <Heading as="h2" variant="section" className="mb-6">
              Experiência <span className="gradient-text">Profissional</span>
            </Heading>
            <Text variant="body" color="secondary" className="max-w-2xl mx-auto text-lg">
              Mais de 5 anos de experiência em desenvolvimento web, trabalhando com tecnologias modernas 
              e contribuindo para projetos de diferentes escalas e complexidades.
            </Text>
          </motion.div>

          {/* Animated Timeline - Desktop Only */}
          <div className="hidden md:block relative max-w-6xl mx-auto" data-magnetic>
            <AnimatedTimeline className="py-8">
              {experiences.map((experience, index) => (
                <ExperienceItem
                  key={experience.id}
                  experience={experience}
                  index={index}
                  isLast={index === experiences.length - 1}
                  onClick={() => handleExperienceClick(experience)}
                />
              ))}
            </AnimatedTimeline>
          </div>

          {/* Mobile Simple Cards */}
          <div className="block md:hidden space-y-6">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                className="bg-gradient-to-br from-bg-secondary to-bg-tertiary border border-bg-tertiary rounded-xl p-6 cursor-pointer group hover:border-accent-green/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleExperienceClick(experience)}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1 min-w-0">
                    <Heading as="h3" variant="card" className="mb-2 group-hover:text-accent-green transition-colors">
                      {experience.title}
                    </Heading>
                    <div className="flex items-center gap-2 mb-3">
                      <Text variant="body" className="font-medium text-text-accent">
                        {experience.company}
                      </Text>
                      {experience.companyUrl && (
                        <ExternalLink 
                          size={14} 
                          className="text-text-secondary hover:text-accent-green transition-colors" 
                        />
                      )}
                    </div>
                  </div>
                  
                  {experience.current && (
                    <Badge variant="success" size="sm">
                      Atual
                    </Badge>
                  )}
                </div>

                {/* Meta Info */}
                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex items-center gap-2 text-text-secondary">
                    <Calendar size={14} className="text-accent-green" />
                    <Text variant="small">
                      {formatPeriod(experience.startDate, experience.endDate, experience.current)}
                    </Text>
                    <span className="text-text-secondary">•</span>
                    <Text variant="small">
                      {calculateDuration(experience.startDate, experience.endDate, experience.current)}
                    </Text>
                  </div>
                  <div className="flex items-center gap-2 text-text-secondary">
                    <MapPin size={14} className="text-accent-purple" />
                    <Text variant="small">{experience.location}</Text>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-4">
                  <Text variant="body" color="secondary" className="line-clamp-2 leading-relaxed">
                    {experience.description}
                  </Text>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <TechStack 
                    technologies={experience.technologies} 
                    size="sm" 
                    maxVisible={6}
                    animated={false}
                  />
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between pt-3 border-t border-bg-tertiary/50">
                  <Text variant="small" color="secondary" className="opacity-70 group-hover:opacity-100 transition-opacity">
                    Toque para ver detalhes
                  </Text>
                  <ChevronRight 
                    size={16} 
                    className="text-text-secondary group-hover:text-accent-green transition-all" 
                  />
                </div>
              </motion.div>
            ))}
          </div>


        </div>
      </section>

      {/* Modal de Detalhes */}
      <RadixModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedExperience ? `${selectedExperience.title} | ${selectedExperience.company}` : ''}
        size="lg"
      >
        {selectedExperience && (
          <div className="p-6">
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-accent-green" />
                  <Text variant="body" className="font-medium">
                    {formatPeriod(selectedExperience.startDate, selectedExperience.endDate, selectedExperience.current)}
                  </Text>
                  <Badge variant="outline" size="sm">
                    {calculateDuration(selectedExperience.startDate, selectedExperience.endDate, selectedExperience.current)}
                  </Badge>
                </div>
                
                {selectedExperience.current && (
                  <Badge variant="success">Posição Atual</Badge>
                )}
              </div>

              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-text-secondary" />
                <Text variant="small" color="secondary">
                  {selectedExperience.location}
                </Text>
                
                {selectedExperience.companyUrl && (
                  <>
                    <span className="text-text-secondary">•</span>
                    <a 
                      href={selectedExperience.companyUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-accent-green hover:text-accent-green/80 transition-colors"
                    >
                      <Text variant="small">Site da empresa</Text>
                      <ExternalLink size={12} />
                    </a>
                  </>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <Heading as="h4" variant="subsection" className="mb-3">
                Sobre o cargo
              </Heading>
              <Text variant="body" color="secondary" className="whitespace-pre-line leading-relaxed">
                {selectedExperience.fullDescription}
              </Text>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <Heading as="h4" variant="subsection" className="mb-3">
                Tecnologias utilizadas
              </Heading>
              <TechStack 
                technologies={selectedExperience.technologies} 
                size="md"
                maxVisible={10}
              />
            </div>

            {/* Achievements */}
            <div className="mb-6">
              <Heading as="h4" variant="subsection" className="mb-3">
                Principais conquistas
              </Heading>
              <ul className="space-y-2">
                {selectedExperience.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-green rounded-full mt-2 flex-shrink-0" />
                    <Text variant="body" color="secondary">
                      {achievement}
                    </Text>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="border-t border-bg-tertiary pt-6">
              <Button
                variant="outline"
                onClick={closeModal}
                className="w-full"
              >
                Fechar detalhes
              </Button>
            </div>
          </div>
        )}
      </RadixModal>
    </>
  )
}

export default ExperienceSection 