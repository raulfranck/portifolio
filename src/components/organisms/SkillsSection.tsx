'use client'

import { motion } from 'framer-motion'
import { Heading, Text } from '@/components/atoms'
import { SkillItem } from '@/components/molecules'

interface Skill {
  name: string
  experience: string
  category: 'frontend' | 'backend' | 'database' | 'tools'
  description?: string
}

const skillsData: Skill[] = [
  // Frontend
  { name: 'React', experience: '4 anos', category: 'frontend', description: 'Biblioteca para interfaces de usuário' },
  { name: 'Next.js', experience: '3 anos', category: 'frontend', description: 'Framework React para produção' },
  { name: 'TypeScript', experience: '3 anos', category: 'frontend', description: 'JavaScript com tipagem estática' },
  { name: 'Tailwind CSS', experience: '2 anos', category: 'frontend', description: 'Framework CSS utility-first' },
  { name: 'JavaScript', experience: '6+ anos', category: 'frontend', description: 'Linguagem de programação web' },
  { name: 'HTML5', experience: '6+ anos', category: 'frontend', description: 'Linguagem de marcação web' },
  { name: 'CSS3', experience: '6+ anos', category: 'frontend', description: 'Folhas de estilo em cascata' },
  { name: 'Vue.js', experience: '2 anos', category: 'frontend', description: 'Framework JavaScript progressivo' },

  // Backend
  { name: 'Node.js', experience: '4 anos', category: 'backend', description: 'Runtime JavaScript no servidor' },
  { name: 'Express', experience: '4 anos', category: 'backend', description: 'Framework web para Node.js' },
  { name: 'Python', experience: '3 anos', category: 'backend', description: 'Linguagem de programação versátil' },
  { name: 'PHP', experience: '3 anos', category: 'backend', description: 'Linguagem para desenvolvimento web' },
  { name: 'Laravel', experience: '2 anos', category: 'backend', description: 'Framework PHP elegante' },

  // Database
  { name: 'MongoDB', experience: '3 anos', category: 'database', description: 'Banco de dados NoSQL' },
  { name: 'PostgreSQL', experience: '2 anos', category: 'database', description: 'Banco de dados relacional avançado' },
  { name: 'MySQL', experience: '4 anos', category: 'database', description: 'Sistema de gerenciamento de banco de dados' },
  { name: 'Prisma', experience: '2 anos', category: 'database', description: 'ORM moderno para TypeScript' },
  { name: 'Redis', experience: '1 ano', category: 'database', description: 'Banco de dados em memória' },

  // Tools
  { name: 'Git', experience: '5 anos', category: 'tools', description: 'Sistema de controle de versão' },
  { name: 'Docker', experience: '2 anos', category: 'tools', description: 'Plataforma de containerização' },
  { name: 'Vercel', experience: '3 anos', category: 'tools', description: 'Plataforma de deploy para frontend' },
  { name: 'Firebase', experience: '2 anos', category: 'tools', description: 'Plataforma de desenvolvimento Google' },
  { name: 'Figma', experience: '3 anos', category: 'tools', description: 'Ferramenta de design colaborativo' }
]

const categoryTitles = {
  frontend: 'Frontend',
  backend: 'Backend', 
  database: 'Database',
  tools: 'Ferramentas & DevOps'
}

const categoryDescriptions = {
  frontend: 'Tecnologias para criar interfaces de usuário modernas e responsivas',
  backend: 'Desenvolvimento de APIs, servidores e lógica de negócio',
  database: 'Gerenciamento e manipulação de dados',
  tools: 'Ferramentas de desenvolvimento, deploy e colaboração'
}

interface SkillsSectionProps {
  showDetailed?: boolean
  className?: string
}

const SkillsSection = ({ showDetailed = true, className = '' }: SkillsSectionProps) => {
  const categories = ['frontend', 'backend', 'database', 'tools'] as const

  return (
    <section className={`section-spacing ${className}`}>
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
            Minhas <span className="gradient-text">Tecnologias</span>
          </Heading>
          <Text variant="body" color="secondary" className="max-w-2xl mx-auto">
            Experiências reais com as principais tecnologias do mercado, 
            organizadas por área de atuação e tempo de desenvolvimento.
          </Text>
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-16">
          {categories.map((category, categoryIndex) => {
            const categorySkills = skillsData.filter(skill => skill.category === category)
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                {/* Category Header */}
                <div className="text-center mb-8">
                  <Heading as="h3" variant="subsection" className="mb-2">
                    {categoryTitles[category]}
                  </Heading>
                  <Text variant="body" color="secondary" className="max-w-lg mx-auto">
                    {categoryDescriptions[category]}
                  </Text>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4, 
                        delay: skillIndex * 0.1 + categoryIndex * 0.2 
                      }}
                    >
                      <SkillItem
                        name={skill.name}
                        experience={skill.experience}
                        category={skill.category}
                        description={showDetailed ? skill.description : undefined}
                        variant={showDetailed ? 'detailed' : 'default'}
                        animated
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16 p-8 bg-bg-secondary rounded-2xl border border-bg-tertiary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Heading as="h3" variant="subsection" className="mb-4">
            Sempre Aprendendo
          </Heading>
          <Text variant="body" color="secondary" className="mb-6 max-w-2xl mx-auto">
            A tecnologia evolui constantemente, e eu também. Sempre buscando aprender novas ferramentas 
            e aperfeiçoar as habilidades existentes para entregar as melhores soluções.
          </Text>
          <div className="flex flex-wrap justify-center gap-2">
            {['Machine Learning', 'GraphQL', 'Rust', 'Web3', 'Cloud Architecture'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-bg-tertiary text-text-secondary rounded-lg text-sm border border-bg-tertiary hover:border-accent-green/30 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection 