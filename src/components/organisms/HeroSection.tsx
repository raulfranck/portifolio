'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import { Button, Heading, Paragraph, Text, Badge, Icon, AnimatedText } from '@/components/atoms'

const skills = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 
  'Python', 'Tailwind CSS', 'PostgreSQL', 'MongoDB'
]

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:contato@raul.dev', label: 'Email' }
]

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary" />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 border border-accent-green/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-16 h-16 bg-accent-purple/10 rounded-xl"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -180, -360],
            scale: [1, 0.9, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div
          className="absolute top-1/3 right-10 w-12 h-12 bg-accent-yellow/10 rounded-full"
          animate={{
            x: [0, -30, 0],
            y: [0, -15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Text color="secondary" className="text-lg mb-4">
              👋 Olá, eu sou
            </Text>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Heading as="h1" variant="hero" className="mb-6">
              <span className="text-text-accent">Raul</span>
              <br />
              <span className="gradient-text">Full Stack Developer</span>
            </Heading>
          </motion.div>

          {/* Subtitle with animated text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Paragraph variant="lead" color="secondary">
              <AnimatedText delay={0.8}>
                Desenvolvedor apaixonado por criar experiências digitais incríveis 
                usando tecnologias modernas e design centrado no usuário.
              </AnimatedText>
            </Paragraph>
          </motion.div>

          {/* Skills badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 my-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 1.4 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <Badge variant="primary" animated>
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          {/* Action buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            <Button 
              variant="primary" 
              size="lg"
              rightIcon={<Icon icon={ChevronRight} size="sm" />}
              onClick={() => scrollToSection('projetos')}
              className="min-w-[200px]"
            >
              Ver Meus Projetos
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              leftIcon={<Icon icon={Mail} size="sm" />}
              onClick={() => scrollToSection('contato')}
              className="min-w-[200px]"
            >
              Vamos Conversar
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex justify-center gap-6 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 2.4 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-12 h-12 rounded-xl bg-bg-secondary/50 backdrop-blur-sm border border-bg-tertiary/50 flex items-center justify-center group-hover:bg-accent-green/10 group-hover:border-accent-green/30 transition-all duration-300">
                  <Icon 
                    icon={social.icon} 
                    size="md" 
                    color="secondary"
                    className="group-hover:text-accent-green transition-colors duration-300"
                  />
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.8 }}
          >
            <motion.button
              onClick={() => scrollToSection('sobre')}
              className="flex flex-col items-center space-y-2 text-text-secondary hover:text-accent-green transition-colors duration-300"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Text variant="small">Scroll para descobrir mais</Text>
              <Icon icon={ArrowDown} size="sm" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none" />
    </section>
  )
}

export default HeroSection 