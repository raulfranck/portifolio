'use client'

import { motion } from 'framer-motion'
import { Heading, Text, Button, Badge } from '@/components/atoms'
import { Card } from '@/components/molecules'
import { Download, MapPin, Calendar, Coffee, Code2, Heart } from 'lucide-react'
import Image from 'next/image'

interface AboutSectionProps {
  className?: string
}

const AboutSection = ({ className = '' }: AboutSectionProps) => {
  const stats = [
    { label: 'Anos de Experiência', value: '6+', icon: Calendar },
    { label: 'Projetos Concluídos', value: '50+', icon: Code2 },
    { label: 'Xícaras de Café', value: '∞', icon: Coffee },
    { label: 'Linhas de Código', value: '100k+', icon: Heart }
  ]

  const highlights = [
    'Desenvolvedor Full Stack com foco em soluções escaláveis',
    'Especialista em React/Next.js e Node.js',
    'Experiência em arquitetura de sistemas e APIs RESTful',
    'Apaixonado por UX/UI e desenvolvimento mobile',
    'Constantemente aprendendo novas tecnologias'
  ]

  return (
    <section id="sobre" className={`section-spacing ${className}`}>
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
            Sobre <span className="gradient-text">Mim</span>
          </Heading>
          <Text variant="body" color="secondary" className="max-w-2xl mx-auto">
            Desenvolvedor apaixonado por criar experiências digitais incríveis e 
            soluções tecnológicas que fazem a diferença na vida das pessoas.
          </Text>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                className="relative w-80 h-80 mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-gradient-to-br from-accent-green/20 to-accent-purple/20 p-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full rounded-xl overflow-hidden bg-bg-secondary">
                  <Image
                    src="/62077452.jpeg"
                    alt="Raul - Desenvolvedor Full Stack"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              
              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 lg:-right-8"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ rotate: 12, scale: 1.1 }}
              >
                <Badge variant="primary" className="shadow-lg">
                  Full Stack Dev
                </Badge>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 lg:-left-8"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 }}
                whileHover={{ rotate: -12, scale: 1.1 }}
              >
                <Badge variant="success" className="shadow-lg">
                  6+ Anos
                </Badge>
              </motion.div>
            </div>

            {/* Location & Status */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
              <div className="flex items-center gap-2 text-text-secondary">
                <MapPin size={16} className="text-accent-green" />
                <Text variant="small">São Paulo, Brasil</Text>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse" />
                <Text variant="small" color="accent">Disponível para projetos</Text>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Introduction */}
            <div className="space-y-6">
              <Text variant="body" color="primary" className="text-lg leading-relaxed">
                Olá! Sou <span className="text-accent-green font-semibold">Raul</span>, 
                um desenvolvedor full stack apaixonado por tecnologia e inovação. 
                Com mais de 6 anos de experiência, especializo-me em criar aplicações 
                web modernas e escaláveis.
              </Text>
              
              <Text variant="body" color="secondary" className="leading-relaxed">
                Minha jornada começou com curiosidade sobre como as coisas funcionam 
                na web, e hoje trabalho com as mais modernas tecnologias do mercado, 
                sempre buscando entregar soluções que superem expectativas.
              </Text>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-accent-green rounded-full mt-2 flex-shrink-0" />
                  <Text variant="body" color="secondary">
                    {highlight}
                  </Text>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                leftIcon={<Download size={18} />}
                className="flex-1 sm:flex-initial"
              >
                Download CV
              </Button>
              <Button
                variant="outline"
                className="flex-1 sm:flex-initial"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Vamos Conversar
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <Card variant="glass" padding="lg" className="text-center group hover:border-accent-green/30">
                  <motion.div
                    className="flex justify-center mb-4 text-accent-green group-hover:text-accent-purple transition-colors duration-300"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon size={24} />
                  </motion.div>
                  
                  <motion.div
                    className="text-3xl font-bold text-text-accent mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: 'spring',
                      stiffness: 200,
                      delay: 1 + index * 0.1 
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  
                  <Text variant="small" color="secondary" className="text-center">
                    {stat.label}
                  </Text>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection 