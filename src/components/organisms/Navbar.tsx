'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button, Icon } from '@/components/atoms'
import Image from 'next/image'

interface NavItem {
  label: string
  href: string
  hasSubmenu?: boolean
  submenu?: { label: string; href: string }[]
}

const navItems: NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Blog', href: '#blog' },
  { label: 'Vídeos', href: '#videos' },
  { label: 'Contato', href: '#contato' }
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      setIsScrolled(scrolled)
      
      // Calcular progresso do scroll
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0
      setScrollProgress(Math.min(scrollPercent, 1))
    }

    const handleSectionObserver = () => {
      const sections = navItems.map(item => item.href.replace('#', ''))
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('scroll', handleSectionObserver)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', handleSectionObserver)
    }
  }, [])

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <>
      <motion.nav
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${isScrolled 
            ? 'bg-bg-primary/95 backdrop-blur-md shadow-xl border-b border-bg-secondary' 
            : 'bg-transparent'
          }
        `}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative lg:w-80 lg:h-80">
                <Image
                  src="/Made with insMind-ab0f473b-dc51-4b14-8a94-4bb76d4a4c07.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`
                    relative px-3 py-2 text-sm font-medium transition-colors duration-300
                    ${activeSection === item.href.replace('#', '')
                      ? 'text-accent-green'
                      : 'text-text-secondary hover:text-text-primary'
                    }
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  
                  {/* Active indicator */}
                  {activeSection === item.href.replace('#', '') && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-green"
                      layoutId="activeSection"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => scrollToSection('#contato')}
              >
                Fale Comigo
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2"
              >
                <Icon 
                  icon={isOpen ? X : Menu} 
                  size="md" 
                  color="primary"
                />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 right-0 bg-bg-primary/95 backdrop-blur-md border-b border-bg-secondary"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container-custom py-4">
                <div className="flex flex-col space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className={`
                        text-left px-4 py-3 rounded-xl transition-colors duration-300
                        ${activeSection === item.href.replace('#', '')
                          ? 'text-accent-green bg-accent-green/10'
                          : 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary'
                        }
                      `}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                  
                  {/* Mobile CTA */}
                  <motion.div
                    className="pt-4 px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                  >
                    <Button 
                      variant="primary"
                      size="md"
                      className="w-full"
                      onClick={() => scrollToSection('#contato')}
                    >
                      Fale Comigo
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent-green origin-left z-50"
        style={{
          scaleX: scrollProgress,
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      />
    </>
  )
}

export default Navbar 