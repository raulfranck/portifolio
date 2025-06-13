'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp, Sparkles, Code, Zap } from 'lucide-react'
import { Heading, Text, Icon } from '@/components/atoms'
import Image from 'next/image'

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:contato@raul.dev', label: 'Email' }
]

const quickLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contato', href: '#contato' }
]

const skills = [
  'React', 'Angular 10+', 'Next.js', 'TypeScript', 'Node.js', 
  'Python', 'PostgreSQL', 'MongoDB', 'Docker'
]

const decorativeElements = [
  { icon: Code, x: '10%', y: '20%', delay: 0 },
  { icon: Zap, x: '90%', y: '30%', delay: 0.5 },
  { icon: Sparkles, x: '15%', y: '80%', delay: 1 },
  { icon: Code, x: '85%', y: '70%', delay: 1.5 }
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-bg-secondary border-t border-bg-tertiary overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        {decorativeElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{ left: element.x, top: element.y }}
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 4,
              delay: element.delay,
              repeat: Infinity,
              repeatDelay: 2
            }}
          >
            <Icon icon={element.icon} size="lg" className="text-accent-green" />
          </motion.div>
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-green/5 via-transparent to-accent-purple/5 pointer-events-none" />
      
      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-accent-green to-accent-purple text-bg-primary rounded-2xl shadow-2xl hover:shadow-accent-green/25 transition-all duration-300 flex items-center justify-center group z-10"
        whileHover={{ scale: 1.1, y: -4, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Icon 
          icon={ArrowUp} 
          size="md" 
          className="group-hover:scale-110 transition-transform duration-300"
        />
      </motion.button>

      <div className="container-custom pt-20 pb-12 relative z-10">
        {/* Hero Section with Large Logo */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center">
            {/* Large Logo */}
            <motion.div
              className="relative w-32 h-32 md:w-40 md:h-40 mb-8"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-green/20 to-accent-purple/20 rounded-3xl blur-2xl" />
              <div className="relative w-full h-full bg-bg-tertiary/50 backdrop-blur-sm rounded-3xl border border-accent-green/20 p-4 shadow-2xl">
                <Image
                  src="/logo-minimalista.png"
                  alt="Raul Franck Logo"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </motion.div>

            {/* Brand Name and Title */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Heading as="h2" variant="section" className="text-text-accent mb-3 bg-gradient-to-r from-accent-green to-accent-purple bg-clip-text text-transparent">
                Raul Franck
              </Heading>
              <Text variant="body" color="secondary" className="mb-6 max-w-2xl mx-auto text-lg">
                Desenvolvedor Full Stack & IA • Criando soluções digitais inovadoras 
                e experiências de usuário excepcionais
              </Text>

              {/* Social Links - Enhanced */}
              <div className="flex justify-center space-x-6 mb-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-14 h-14 rounded-2xl bg-gradient-to-r from-bg-tertiary to-bg-tertiary/50 hover:from-accent-green/10 hover:to-accent-purple/10 border border-bg-tertiary hover:border-accent-green/30 flex items-center justify-center transition-all duration-300 group backdrop-blur-sm"
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-green/20 to-accent-purple/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Icon 
                      icon={social.icon} 
                      size="md" 
                      color="secondary"
                      className="relative z-10 group-hover:text-accent-green transition-colors duration-300"
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Quick Links */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Heading as="h4" variant="card" className="text-text-accent mb-8 text-center md:text-left">
              <span className="bg-gradient-to-r from-accent-green to-accent-purple bg-clip-text text-transparent">
                Links Rápidos
              </span>
            </Heading>
            <div className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-center md:text-left px-4 py-2 rounded-xl text-text-secondary hover:text-accent-green hover:bg-accent-green/5 transition-all duration-300 group"
                  whileHover={{ x: 8, scale: 1.02 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Text variant="body" className="group-hover:font-medium transition-all duration-300">
                    {link.label}
                  </Text>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Heading as="h4" variant="card" className="text-text-accent mb-8 text-center lg:text-left">
              <span className="bg-gradient-to-r from-accent-purple to-accent-green bg-clip-text text-transparent">
                Tecnologias & Ferramentas
              </span>
            </Heading>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="relative group"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-green/20 to-accent-purple/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                  <div className="relative px-4 py-3 bg-bg-tertiary/50 border border-bg-tertiary hover:border-accent-green/30 text-text-secondary rounded-xl text-center backdrop-blur-sm transition-all duration-300 group-hover:text-accent-green">
                    <Text variant="small" className="font-medium">
                      {skill}
                    </Text>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="pt-12 border-t border-bg-tertiary/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 text-center sm:text-left">
              <Text variant="small" color="secondary">
                © {currentYear} Raul Franck. Feito com
              </Text>
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Icon icon={Heart} size="sm" className="text-red-500" />
              </motion.div>
              <Text variant="small" color="secondary">
                usando Next.js e Tailwind CSS
              </Text>
            </div>
            
            <motion.button
              onClick={() => scrollToSection('contato')}
              className="px-8 py-3 bg-gradient-to-r from-accent-green to-accent-purple text-bg-primary rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center space-x-2">
                <Text variant="small" className="font-semibold text-bg-primary">
                  Vamos trabalhar juntos?
                </Text>
                <Icon icon={Sparkles} size="sm" className="group-hover:rotate-12 transition-transform duration-300 text-bg-primary" />
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 