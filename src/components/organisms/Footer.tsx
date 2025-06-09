'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'
import { Heading, Text, Icon, Button } from '@/components/atoms'
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
  'React', 'Next.js', 'TypeScript', 'Node.js', 
  'Python', 'PostgreSQL', 'MongoDB', 'Docker'
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
    <footer className="relative bg-bg-secondary border-t border-bg-tertiary">
      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-accent-green text-bg-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Icon 
          icon={ArrowUp} 
          size="sm" 
          className="group-hover:scale-110 transition-transform duration-300"
        />
      </motion.button>

      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="relative w-16 h-16">
                <Image
                  src="/Made with insMind-ab0f473b-dc51-4b14-8a94-4bb76d4a4c07.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            <Text color="secondary" className="mb-6 max-w-md">
              Desenvolvedor Full Stack dedicado a criar soluções digitais inovadoras 
              e experiências de usuário excepcionais.
            </Text>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-bg-tertiary hover:bg-accent-green/10 border border-bg-tertiary hover:border-accent-green/30 flex items-center justify-center transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Icon 
                    icon={social.icon} 
                    size="sm" 
                    color="secondary"
                    className="group-hover:text-accent-green transition-colors duration-300"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Heading as="h4" variant="card" className="text-text-accent mb-6">
              Links Rápidos
            </Heading>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-text-secondary hover:text-accent-green transition-colors duration-300 text-left"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Text variant="small">{link.label}</Text>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Heading as="h4" variant="card" className="text-text-accent mb-6">
              Tecnologias
            </Heading>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1 bg-bg-tertiary text-text-secondary rounded-lg text-sm hover:bg-accent-green/10 hover:text-accent-green transition-all duration-300"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 border-t border-bg-tertiary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Text variant="small" color="secondary">
                © {currentYear} Raul. Feito com
              </Text>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Icon icon={Heart} size="sm" color="green" />
              </motion.div>
              <Text variant="small" color="secondary">
                usando Next.js e Tailwind CSS
              </Text>
            </div>
            
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={() => scrollToSection('contato')}
                className="text-text-secondary hover:text-accent-green transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Text variant="small">Vamos trabalhar juntos?</Text>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/50 to-transparent pointer-events-none" />
    </footer>
  )
}

export default Footer 