'use client'

import { motion } from 'framer-motion'
import { Heading, Text, Button, Badge, FloatingElement } from '@/components/atoms'
import { Download, MapPin, ExternalLink, Sparkles, Code, Brain, Rocket } from 'lucide-react'
import Image from 'next/image'

interface AboutSectionProps {
  className?: string
}

const AboutSection = ({ className = '' }: AboutSectionProps) => {
  const highlights = [
    'Especialista em Full Stack com foco em soluções escaláveis e inteligentes',
    'Domínio de React, Next.js, Angular, Node.js e PostgreSQL',
    'Domínio em CI/CD – automação de deploys, versionamento e integração contínua com GitHub Actions e Docker',
    'Infraestrutura em Cloud (GCP) – arquitetura de soluções serverless, bancos escaláveis e serviços distribuídos',
    'Experiência prática com LLMs, OpenAI, modelos personalizados e pipelines de IA',
    'Arquitetura de APIs robustas e integração com serviços baseados em dados',
    'Desenho de soluções completas, da ideia inicial até o MVP validado e funcional',
    'Foco em produtos com experiência do usuário fluida (UX/UI) e impacto real no negócio',
    'Aprendizado contínuo em IA, engenharia de prompts, MLOps e edge computing'
  ]

  const specializations = [
    {
      icon: Code,
      title: 'Desenvolvimento Full Stack',
      description: 'Aplicações modernas e performáticas com React, Next.js e Node.js'
    },
    {
      icon: Brain,
      title: 'Inteligência Artificial',
      description: 'LLMs, Machine Learning e automação inteligente de processos'
    },
    {
      icon: Rocket,
      title: 'Arquitetura Escalável',
      description: 'Soluções cloud-native e microserviços para alta disponibilidade'
    }
  ]

  return (
    <section id="sobre" className={`section-spacing relative overflow-hidden ${className}`}>
      {/* Floating Elements Background */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingElement
          className="absolute top-20 left-10 w-20 h-20 bg-accent-green/10 rounded-full blur-xl"
          delay={0}
          duration={8}
        >
          <div></div>
        </FloatingElement>
        <FloatingElement
          className="absolute top-40 right-20 w-32 h-32 bg-accent-purple/10 rounded-full blur-xl"
          delay={2}
          duration={12}
        >
          <div></div>
        </FloatingElement>
        <FloatingElement
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-accent-yellow/10 rounded-full blur-xl"
          delay={4}
          duration={10}
        >
          <div></div>
        </FloatingElement>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent-green/10 text-accent-green rounded-full mb-6 text-sm font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Sparkles size={16} />
            Conheça minha trajetória
          </motion.div>
          
          <Heading as="h2" variant="section" className="mb-6">
            Sobre <span className="gradient-text">Mim</span>
          </Heading>
          <Text variant="body" color="secondary" className="max-w-3xl mx-auto text-lg">
            Construo soluções digitais robustas com foco em inteligência artificial, arquitetura moderna e inovação real.
          </Text>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Profile Image */}
            <div className="relative">
              <motion.div
                className="relative w-96 h-96 mx-auto lg:mx-0 rounded-3xl overflow-hidden bg-gradient-to-br from-accent-green/20 via-accent-purple/20 to-accent-yellow/20 p-1.5"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden bg-bg-secondary">
                  <Image
                    src="/62077452.jpeg"
                    alt="Raul - Desenvolvedor Full Stack"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              
              {/* Enhanced Floating badges */}
              <motion.div
                className="absolute -top-6 -right-6 lg:-right-10"
                initial={{ opacity: 0, scale: 0, rotate: -45 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8, type: 'spring', stiffness: 200 }}
                whileHover={{ rotate: 12, scale: 1.1 }}
              >
                <Badge variant="primary" className="shadow-2xl backdrop-blur-sm">
                  <Code size={14} className="mr-1" />
                  Full Stack Dev
                </Badge>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 lg:-left-10"
                initial={{ opacity: 0, scale: 0, rotate: 45 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1, type: 'spring', stiffness: 200 }}
                whileHover={{ rotate: -12, scale: 1.1 }}
              >
                <Badge variant="success" className="shadow-2xl backdrop-blur-sm">
                  <Brain size={14} className="mr-1" />
                  6+ Anos
                </Badge>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 lg:-right-12"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.2 }}
              >
                <Badge variant="outline" className="shadow-2xl backdrop-blur-sm bg-bg-primary/80">
                  <Sparkles size={14} className="mr-1 text-accent-yellow" />
                  IA Expert
                </Badge>
              </motion.div>
            </div>

            {/* Enhanced Location & Status */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center lg:items-start gap-6 p-6 bg-bg-secondary/50 rounded-2xl border border-bg-tertiary/50 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-3 text-text-secondary">
                <MapPin size={18} className="text-accent-green" />
                <Text variant="body" className="font-medium">São Paulo, Brasil</Text>
              </div>
              <div className="flex items-center gap-3">
                <motion.div 
                  className="w-3 h-3 bg-accent-green rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <Text variant="body" className="text-accent-green font-medium">
                  Disponível para projetos
                </Text>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Enhanced Introduction */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Text variant="body" color="primary" className="text-xl leading-relaxed font-medium">
                  Olá! Sou <span className="text-accent-green font-bold">Raul</span>, 
                  desenvolvedor Full Stack com mais de 6 anos de experiência construindo aplicações performáticas e escaláveis.
                </Text>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Text variant="body" color="secondary" className="text-lg leading-relaxed">
                  Nos últimos projetos, venho me aprofundando em <span className="text-accent-purple font-semibold">Inteligência Artificial</span>, 
                  Arquitetura de LLMs, Machine Learning e soluções autônomas baseadas em dados. Meu foco atual é integrar tecnologias de 
                  ponta em produtos digitais que realmente entregam valor — seja para startups em crescimento ou empresas que buscam 
                  escalar com eficiência e inovação.
                </Text>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <Text variant="body" color="secondary" className="leading-relaxed">
                  Com uma base sólida em desenvolvimento web, alio minha expertise em 
                  engenharia de software a uma visão estratégica para projetar sistemas inteligentes, performáticos e preparados para o futuro.
                </Text>
              </motion.div>
            </div>

            {/* Enhanced Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-bg-secondary/30 transition-colors duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  whileHover={{ x: 8 }}
                >
                  <motion.div 
                    className="w-2 h-2 bg-accent-green rounded-full mt-3 flex-shrink-0"
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.2 }}
                  />
                  <Text variant="body" color="secondary" className="leading-relaxed">
                    {highlight}
                  </Text>
                </motion.div>
              ))}
            </div>

            {/* Enhanced CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 2 }}
            >
              <Button
                variant="primary"
                leftIcon={<Download size={18} />}
                className="flex-1 sm:flex-initial hover:scale-105 transition-transform duration-200"
              >
                Download CV
              </Button>
              <Button
                variant="outline"
                leftIcon={<ExternalLink size={18} />}
                className="flex-1 sm:flex-initial hover:scale-105 transition-transform duration-200"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Vamos Conversar
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* New Specializations Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {specializations.map((spec, index) => (
            <motion.div
              key={spec.title}
              className="group p-8 bg-gradient-to-br from-bg-secondary to-bg-tertiary rounded-2xl border border-bg-tertiary hover:border-accent-green/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.div
                className="w-16 h-16 bg-accent-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent-green/20 transition-colors duration-300"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <spec.icon size={32} className="text-accent-green" />
              </motion.div>
              
              <Heading as="h3" variant="subsection" className="mb-4 group-hover:text-accent-green transition-colors duration-300">
                {spec.title}
              </Heading>
              
              <Text variant="body" color="secondary" className="leading-relaxed">
                {spec.description}
              </Text>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection 