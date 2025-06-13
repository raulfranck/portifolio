'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import { Button, Heading, Paragraph, Text, Badge, Icon, AnimatedText } from '@/components/atoms'

const skills = [
  'React', 'Next.js', 'Angular', 'TypeScript', 'Node.js', 
  'Python', 'GCP', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'Redis'
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/raulfranck', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/raulfranck/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:raulengfranck@gmail.com', label: 'Email' }
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
      
      {/* Enhanced Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Existing shapes - enhanced */}
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
          className="absolute bottom-20 right-20 w-16 h-16 bg-accent-purple/10 rounded-xl blur-sm"
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
          className="absolute top-1/3 right-10 w-12 h-12 bg-accent-yellow/10 rounded-full blur-md"
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

        {/* New geometric elements */}
        <motion.div
          className="absolute top-32 right-1/4 w-8 h-8 border border-accent-purple/15 rounded-lg"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.3, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            delay: 0.5
          }}
        />

        <motion.div
          className="absolute bottom-32 left-1/4 w-14 h-14 bg-accent-green/8 rounded-2xl"
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
            rotate: [0, 45, 0]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />

        <motion.div
          className="absolute top-1/2 left-16 w-6 h-6 bg-accent-yellow/15 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 1, 0.4],
            y: [0, -15, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-16 w-10 h-10 border border-accent-yellow/20 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            x: [0, -15, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            delay: 2.5
          }}
        />

        <motion.div
          className="absolute top-16 left-1/3 w-4 h-4 bg-accent-purple/20 rounded-sm"
          animate={{
            rotate: [0, 180, 360],
            y: [0, -20, 0],
            scale: [1, 1.4, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />

        <motion.div
          className="absolute bottom-16 left-20 w-16 h-2 bg-accent-green/10 rounded-full blur-sm"
          animate={{
            scaleX: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
            rotate: [0, 15, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.8
          }}
        />

        <motion.div
          className="absolute top-24 right-32 w-3 h-3 bg-accent-yellow/25 rounded-full"
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0],
            scale: [1, 1.6, 1]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3.5
          }}
        />

        <motion.div
          className="absolute bottom-24 right-1/3 w-7 h-7 border border-accent-green/15 rounded-xl"
          animate={{
            rotate: [0, -90, -180, -270, -360],
            scale: [1, 1.1, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
            delay: 2.2
          }}
        />

        {/* Large ambient shapes */}
        <motion.div
          className="absolute top-1/4 left-1/5 w-32 h-32 bg-accent-green/3 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 20, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/5 w-40 h-40 bg-accent-purple/3 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />

        <motion.div
          className="absolute top-1/2 right-1/4 w-24 h-24 bg-accent-yellow/3 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.6, 0.2],
            x: [0, -25, 0],
            y: [0, 15, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
        />

        {/* Scattered small particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className={`absolute w-1 h-1 rounded-full ${
              i % 3 === 0 ? 'bg-accent-green/30' :
              i % 3 === 1 ? 'bg-accent-purple/30' :
              'bg-accent-yellow/30'
            }`}
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -20 - Math.random() * 15, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Heading as="h1" variant="hero" className="mb-6">
              <span className="text-text-accent">Raul Franck</span>
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
                Desenvolvedor Full Stack com foco em performance, design funcional e código limpo. Ajudo empresas e pessoas a tirarem projetos do papel com agilidade, estratégia e tecnologia de ponta.
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
          </motion.div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none" />
    </section>
  )
}

export default HeroSection 