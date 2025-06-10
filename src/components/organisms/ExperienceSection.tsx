'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, Award, ExternalLink } from 'lucide-react'
import { Heading, Text, Badge, Button } from '@/components/atoms'
import { Modal, ExperienceItem } from '@/components/molecules'
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
    title: 'Senior Full Stack Developer',
    company: 'TechInova Solutions',
    location: 'São Paulo, SP - Remoto',
    startDate: '2023-01-15',
    current: true,
    description: 'Desenvolvimento de aplicações web modernas usando React, Next.js e Node.js. Liderança técnica de uma equipe de 5 desenvolvedores.',
    fullDescription: `Como Senior Full Stack Developer na TechInova Solutions, atuo no desenvolvimento de aplicações web de alta complexidade, utilizando tecnologias modernas como React, Next.js, TypeScript e Node.js.

Principais responsabilidades:
• Liderança técnica de uma equipe de 5 desenvolvedores júnior e pleno
• Arquitetura e desenvolvimento de soluções escaláveis para e-commerce
• Implementação de práticas de CI/CD e DevOps
• Mentoria e code review para garantir qualidade do código`,
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    achievements: [
      'Melhoria de 40% na performance das aplicações',
      'Implementação de arquitetura de microserviços',
      'Mentoria que resultou na promoção de 3 desenvolvedores',
      'Liderança no desenvolvimento de plataforma que aumentou conversão em 25%'
    ],
    companyUrl: 'https://techinova.com'
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    company: 'Startup Digital',
    location: 'São Paulo, SP',
    startDate: '2021-08-10',
    endDate: '2022-12-20',
    description: 'Desenvolvimento de MVP e produtos digitais para startups. Foco em desenvolvimento ágil e prototipagem rápida.',
    fullDescription: `Na Startup Digital, trabalhei no desenvolvimento de MVPs e produtos digitais para diversas startups em diferentes segmentos.

Principais atividades:
• Desenvolvimento full-stack de aplicações web responsivas
• Criação de APIs RESTful robustas e documentadas
• Implementação de sistemas de autenticação e autorização
• Integração com serviços terceiros (pagamentos, emails, etc.)`,
    technologies: ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    achievements: [
      'Desenvolvimento de 8 MVPs em 16 meses',
      'Implementação de sistema de pagamentos que processou R$ 2M+',
      'Redução de 50% no tempo de desenvolvimento',
      'Criação de biblioteca interna de componentes reutilizáveis'
    ],
    companyUrl: 'https://startupdigital.com'
  },
  {
    id: '3',
    title: 'Frontend Developer',
    company: 'WebCorp Agency',
    location: 'Santos, SP',
    startDate: '2020-03-01',
    endDate: '2021-07-30',
    description: 'Especialização em desenvolvimento frontend com React e Vue.js. Criação de interfaces modernas e responsivas.',
    fullDescription: `Na WebCorp Agency, atuei como Frontend Developer especializado em criar experiências digitais excepcionais para clientes de diversos segmentos.

Principais projetos:
• Sites institucionais e e-commerces para grandes marcas
• Aplicações web complexas com foco em UX/UI
• Desenvolvimento de SPAs (Single Page Applications)
• Otimização de performance e SEO`,
    technologies: ['React', 'Vue.js', 'JavaScript', 'SASS', 'Webpack', 'Git'],
    achievements: [
      'Desenvolvimento de mais de 20 projetos web',
      'Melhoria média de 35% no Page Speed Score',
      'Implementação de metodologia de CSS modular',
      'Reconhecimento como "Desenvolvedor do Mês" por 3 vezes'
    ],
    companyUrl: 'https://webcorp.com.br'
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
      <section id="experiencia" className={`section-spacing ${className}`}>
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
              Experiência <span className="gradient-text">Profissional</span>
            </Heading>
            <Text variant="body" color="secondary" className="max-w-2xl mx-auto">
              Mais de 5 anos de experiência em desenvolvimento web, trabalhando com tecnologias modernas 
              e contribuindo para projetos de diferentes escalas e complexidades.
            </Text>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-6xl mx-auto">
            {experiences.map((experience, index) => (
              <ExperienceItem
                key={experience.id}
                experience={experience}
                index={index}
                isLast={index === experiences.length - 1}
                onClick={() => handleExperienceClick(experience)}
              />
            ))}
          </div>

          {/* Summary Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center p-6 bg-bg-secondary rounded-xl border border-bg-tertiary">
              <Briefcase className="w-8 h-8 text-accent-green mx-auto mb-4" />
              <div className="text-3xl font-bold text-text-accent mb-2">
                {experiences.length}
              </div>
              <Text variant="small" color="secondary">
                Experiências Profissionais
              </Text>
            </div>
            
            <div className="text-center p-6 bg-bg-secondary rounded-xl border border-bg-tertiary">
              <Award className="w-8 h-8 text-accent-purple mx-auto mb-4" />
              <div className="text-3xl font-bold text-text-accent mb-2">
                {experiences.reduce((acc, exp) => acc + exp.achievements.length, 0)}+
              </div>
              <Text variant="small" color="secondary">
                Conquistas Importantes
              </Text>
            </div>
            
            <div className="text-center p-6 bg-bg-secondary rounded-xl border border-bg-tertiary">
              <Calendar className="w-8 h-8 text-accent-yellow mx-auto mb-4" />
              <div className="text-3xl font-bold text-text-accent mb-2">
                5+
              </div>
              <Text variant="small" color="secondary">
                Anos de Experiência
              </Text>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal de Detalhes */}
      <Modal
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
      </Modal>
    </>
  )
}

export default ExperienceSection 