'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heading, Text } from '@/components/atoms'
import { SkillItem } from '@/components/molecules'

interface Skill {
  name: string
  experience: string
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'ai'
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
  { name: 'Angular', experience: '2 anos', category: 'frontend', description: 'Framework para aplicações web' },

  // Backend
  { name: 'Node.js', experience: '4 anos', category: 'backend', description: 'Runtime JavaScript no servidor' },
  { name: 'Express', experience: '4 anos', category: 'backend', description: 'Framework web para Node.js' },
  { name: 'Python', experience: '3 anos', category: 'backend', description: 'Linguagem de programação versátil' },
  { name: 'PHP', experience: '3 anos', category: 'backend', description: 'Linguagem para desenvolvimento web' },
  { name: 'Laravel', experience: '2 anos', category: 'backend', description: 'Framework PHP elegante' },
  { name: 'FastAPI', experience: '2 anos', category: 'backend', description: 'Framework Python para APIs' },
  { name: 'Nest.js', experience: '1 ano', category: 'backend', description: 'Framework Node.js escalável' },

  // Database
  { name: 'MongoDB', experience: '3 anos', category: 'database', description: 'Banco de dados NoSQL' },
  { name: 'PostgreSQL', experience: '2 anos', category: 'database', description: 'Banco de dados relacional avançado' },
  { name: 'MySQL', experience: '4 anos', category: 'database', description: 'Sistema de gerenciamento de banco de dados' },
  { name: 'Prisma', experience: '2 anos', category: 'database', description: 'ORM moderno para TypeScript' },
  { name: 'Redis', experience: '1 ano', category: 'database', description: 'Banco de dados em memória' },
  { name: 'Supabase', experience: '1 ano', category: 'database', description: 'Plataforma de backend como serviço' },

  // Tools & DevOps
  { name: 'Git', experience: '5 anos', category: 'tools', description: 'Sistema de controle de versão' },
  { name: 'Docker', experience: '2 anos', category: 'tools', description: 'Plataforma de containerização' },
  { name: 'Vercel', experience: '3 anos', category: 'tools', description: 'Plataforma de deploy para frontend' },
  { name: 'Firebase', experience: '2 anos', category: 'tools', description: 'Plataforma de desenvolvimento Google' },
  { name: 'Figma', experience: '3 anos', category: 'tools', description: 'Ferramenta de design colaborativo' },
  { name: 'GitHub Actions', experience: '2 anos', category: 'tools', description: 'CI/CD e automação' },
  { name: 'GCP', experience: '1 ano', category: 'tools', description: 'Google Cloud Platform' },
  { name: 'AWS', experience: '1 ano', category: 'tools', description: 'Amazon Web Services' },

  // AI & Machine Learning
  { name: 'OpenAI API', experience: '2 anos', category: 'ai', description: 'Integração com modelos de linguagem' },
  { name: 'LangChain', experience: '1 ano', category: 'ai', description: 'Framework para aplicações com LLM' },
  { name: 'Hugging Face', experience: '1 ano', category: 'ai', description: 'Modelos e transformers' },
  { name: 'Python ML', experience: '2 anos', category: 'ai', description: 'Machine Learning com Python' },
  { name: 'TensorFlow', experience: '1 ano', category: 'ai', description: 'Framework de machine learning' },
  { name: 'RAG Systems', experience: '1 ano', category: 'ai', description: 'Retrieval-Augmented Generation' },
  { name: 'Vector DBs', experience: '1 ano', category: 'ai', description: 'Bancos de dados vetoriais' }
]

const categories = [
  { id: 'all', label: 'Todas', count: skillsData.length },
  { id: 'frontend', label: 'Frontend', count: skillsData.filter(s => s.category === 'frontend').length },
  { id: 'backend', label: 'Backend', count: skillsData.filter(s => s.category === 'backend').length },
  { id: 'database', label: 'Database', count: skillsData.filter(s => s.category === 'database').length },
  { id: 'tools', label: 'Ferramentas & DevOps', count: skillsData.filter(s => s.category === 'tools').length },
  { id: 'ai', label: 'IA & ML', count: skillsData.filter(s => s.category === 'ai').length }
]

const categoryTitles = {
  frontend: 'Frontend',
  backend: 'Backend', 
  database: 'Database',
  tools: 'Ferramentas & DevOps',
  ai: 'Inteligência Artificial'
}

const categoryDescriptions = {
  frontend: 'Tecnologias para criar interfaces de usuário modernas e responsivas',
  backend: 'Desenvolvimento de APIs, servidores e lógica de negócio',
  database: 'Gerenciamento e manipulação de dados',
  tools: 'Ferramentas de desenvolvimento, deploy e colaboração',
  ai: 'Inteligência artificial, machine learning e automação'
}

interface SkillsSectionProps {
  showDetailed?: boolean
  className?: string
}

const SkillsSection = ({ showDetailed = true, className = '' }: SkillsSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const filteredSkills = selectedCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === selectedCategory)

  return (
    <section id="tecnologias" className={`section-spacing ${className}`}>
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

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
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
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <SkillItem
                  name={skill.name}
                  experience={skill.experience}
                  category={skill.category}
                  description={showDetailed ? skill.description : undefined}
                  variant="compact"
                  animated
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Skills Message */}
        {filteredSkills.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Text variant="body" color="secondary">
              Nenhuma tecnologia encontrada nesta categoria.
            </Text>
          </motion.div>
        )}

        {/* Enhanced Learning Section */}
        <motion.div
          className="mt-20 space-y-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Header */}
          <div className="text-center">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent-purple/10 text-accent-purple rounded-full mb-6 text-sm font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              🚀 Sempre Evoluindo
            </motion.div>

            <Heading as="h3" variant="section" className="mb-6">
              O que estou <span className="gradient-text">Estudando</span>
            </Heading>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <Text variant="body" color="primary" className="text-xl leading-relaxed font-medium">
                A fronteira entre desenvolvimento e inteligência artificial está se dissolvendo rapidamente. 
                Por isso, estou focando meus estudos em <span className="text-accent-green font-semibold">arquiteturas híbridas</span> que 
                combinam desenvolvimento tradicional com capacidades de IA avançadas.
              </Text>
              
              <Text variant="body" color="secondary" className="text-lg leading-relaxed">
                Meu objetivo é dominar não apenas as ferramentas, mas entender profundamente como 
                <span className="text-accent-purple font-semibold"> projetar sistemas inteligentes</span> que aprendem, 
                se adaptam e otimizam continuamente — desde algoritmos de busca e recomendação até agentes autônomos 
                capazes de tomar decisões complexas.
              </Text>
            </div>
          </div>

          {/* Learning Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cloud Architecture */}
            <motion.div
              className="group p-8 bg-gradient-to-br from-bg-secondary to-bg-tertiary rounded-2xl border border-bg-tertiary hover:border-accent-green/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-accent-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent-green/20 transition-colors duration-300">
                <span className="text-2xl">☁️</span>
              </div>
              
              <Heading as="h4" variant="subsection" className="mb-4 group-hover:text-accent-green transition-colors duration-300">
                Arquitetura Cloud
              </Heading>
              
              <Text variant="body" color="secondary" className="mb-4 leading-relaxed">
                Aprofundando em <strong>cloud-native design patterns</strong>, serverless architectures e 
                como projetar aplicações que escalam automaticamente.
              </Text>

              <div className="flex flex-wrap gap-2">
                {['Kubernetes', 'Serverless', 'Microserviços', 'Auto-scaling'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-bg-tertiary text-text-secondary rounded text-xs border border-bg-tertiary group-hover:border-accent-green/30 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* AI Agents */}
            <motion.div
              className="group p-8 bg-gradient-to-br from-bg-secondary to-bg-tertiary rounded-2xl border border-bg-tertiary hover:border-accent-purple/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-accent-purple/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent-purple/20 transition-colors duration-300">
                <span className="text-2xl">🤖</span>
              </div>
              
              <Heading as="h4" variant="subsection" className="mb-4 group-hover:text-accent-purple transition-colors duration-300">
                Agentes de IA
              </Heading>
              
              <Text variant="body" color="secondary" className="mb-4 leading-relaxed">
                Estudando <strong>Multi-Agent Systems</strong>, LangGraph e como criar agentes que 
                colaboram para resolver problemas complexos autonomamente.
              </Text>

              <div className="flex flex-wrap gap-2">
                {['LangGraph', 'AutoGen', 'CrewAI', 'Multi-Agent'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-bg-tertiary text-text-secondary rounded text-xs border border-bg-tertiary group-hover:border-accent-purple/30 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Algorithms & Optimization */}
            <motion.div
              className="group p-8 bg-gradient-to-br from-bg-secondary to-bg-tertiary rounded-2xl border border-bg-tertiary hover:border-accent-yellow/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.0 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-accent-yellow/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent-yellow/20 transition-colors duration-300">
                <span className="text-2xl">⚡</span>
              </div>
              
              <Heading as="h4" variant="subsection" className="mb-4 group-hover:text-accent-yellow transition-colors duration-300">
                Algoritmos & Otimização
              </Heading>
              
              <Text variant="body" color="secondary" className="mb-4 leading-relaxed">
                Dominando <strong>algoritmos de busca avançados</strong>, otimização de performance 
                e estruturas de dados para sistemas de alta escala.
              </Text>

              <div className="flex flex-wrap gap-2">
                {['Vector Search', 'A* Algorithm', 'Caching', 'Performance'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-bg-tertiary text-text-secondary rounded text-xs border border-bg-tertiary group-hover:border-accent-yellow/30 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Current Focus Banner */}
          <motion.div
            className="relative p-8 bg-gradient-to-r from-accent-green/5 via-accent-purple/5 to-accent-yellow/5 rounded-2xl border border-accent-green/20 overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            {/* Background Animation */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                className="absolute top-4 right-4 w-32 h-32 bg-accent-green/5 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-4 left-4 w-24 h-24 bg-accent-purple/5 rounded-full blur-xl"
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  opacity: [0.4, 0.2, 0.4]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </div>

            <div className="relative z-10 text-center">
              <Heading as="h4" variant="subsection" className="mb-4">
                🎯 Foco Atual: <span className="text-accent-green">Arquitetura de Aplicações com IA</span>
              </Heading>
              
              <Text variant="body" color="secondary" className="mb-6 max-w-3xl mx-auto leading-relaxed">
                Estou construindo um framework próprio para integrar LLMs em aplicações web de forma 
                nativa e escalável. O objetivo é criar <strong>aplicações híbridas</strong> onde IA não é 
                apenas uma feature, mas está integrada na arquitetura fundamental do sistema.
              </Text>

              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'Embedding Systems', 
                  'RAG Architecture', 
                  'LLM Orchestration', 
                  'Smart Caching',
                  'AI-Native APIs',
                  'Semantic Search'
                ].map((concept, index) => (
                  <motion.span
                    key={concept}
                    className="px-4 py-2 bg-bg-secondary text-accent-green rounded-lg text-sm font-medium border border-accent-green/30 hover:bg-accent-green/10 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {concept}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection 