'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heading, Text, Button } from '@/components/atoms'
import { ContactField, Card, SocialLink } from '@/components/molecules'
import { Send, MapPin, Mail, Phone, MessageSquare, Github, Linkedin, Twitter, Calendar, CheckCircle, AlertCircle } from 'lucide-react'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

interface ContactSectionProps {
  className?: string
}

const ContactSection = ({ className = '' }: ContactSectionProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'raulengfranck@gmail.com',
      href: 'mailto:raulengfranck@gmail.com',
      description: 'Respondo em até 12h'
    },
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/raulfranck', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/raulfranck/', label: 'LinkedIn' },
  ]

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically send the data to your API
      console.log('Form submitted:', formData)
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.name && formData.email && formData.message

  return (
    <section id="contato" className={`section-spacing relative overflow-hidden ${className}`}>
      {/* Background Geometric Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-24 right-12 w-20 h-20 border border-accent-yellow/15 rounded-xl"
          animate={{
            rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-16 left-10 w-16 h-16 bg-accent-green/6 rounded-full blur-lg"
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div
          className="absolute top-1/2 left-16 w-10 h-10 bg-accent-purple/8 rounded-lg blur-sm"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <motion.div
          className="absolute top-20 left-1/3 w-4 h-4 bg-accent-yellow/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 1, 0.4]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heading as="h2" variant="section" className="mb-4">
            Vamos <span className="gradient-text">Conversar</span>
          </Heading>
          <Text variant="body" color="secondary" className="max-w-2xl mx-auto">
            Tem um projeto em mente? Quer trocar uma ideia sobre tecnologia? 
            Ou apenas dizer olá? Adoraria ouvir de você!
          </Text>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card variant="elevated" padding="xl">
              <Heading as="h3" variant="subsection" className="mb-6">
                Envie uma Mensagem
              </Heading>

              <form onSubmit={handleSubmit} className="space-y-6">
                                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <ContactField
                     label="Nome *"
                     placeholder="Seu nome completo"
                     value={formData.name}
                     onChange={(value) => handleInputChange('name', value)}
                     required
                   />
                   <ContactField
                     label="Email *"
                     inputType="email"
                     placeholder="seu@email.com"
                     value={formData.email}
                     onChange={(value) => handleInputChange('email', value)}
                     icon={Mail}
                     required
                   />
                 </div>

                 <ContactField
                   label="Assunto"
                   placeholder="Sobre o que gostaria de conversar?"
                   value={formData.subject}
                   onChange={(value) => handleInputChange('subject', value)}
                 />

                 <ContactField
                   label="Mensagem *"
                   type="textarea"
                   placeholder="Conte-me mais sobre seu projeto ou ideia..."
                   value={formData.message}
                   onChange={(value) => handleInputChange('message', value)}
                   rows={5}
                   required
                 />

                {/* Submit Status */}
                {submitStatus === 'success' && (
                  <motion.div
                    className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle size={18} />
                    <Text variant="small">Mensagem enviada com sucesso! Responderei em breve.</Text>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AlertCircle size={18} />
                    <Text variant="small">Erro ao enviar mensagem. Tente novamente.</Text>
                  </motion.div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  leftIcon={<Send size={18} />}
                  isLoading={isSubmitting}
                  disabled={!isFormValid || isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Contact Methods */}
            <div className="space-y-6">
              <Heading as="h3" variant="subsection">
                Outras Formas de Contato
              </Heading>
              
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card variant="default" className="p-6 group hover:border-accent-green/30 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent-green/10 rounded-lg flex items-center justify-center group-hover:bg-accent-green/20 transition-colors duration-300">
                        <info.icon className="w-6 h-6 text-accent-green" />
                      </div>
                      <div className="flex-1">
                        <Heading as="h4" variant="card" className="mb-1 group-hover:text-accent-green transition-colors duration-300">
                          {info.label}
                        </Heading>
                        <Text variant="body" color="accent" className="mb-1">
                          {info.value}
                        </Text>
                        <br />
                        <Text variant="small" color="secondary">
                          {info.description}
                        </Text>
                      </div>
                    </div>
                  </Card>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Heading as="h3" variant="subsection">
                Redes Sociais
              </Heading>
              
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  >
                    <SocialLink
                      href={social.href}
                      icon={social.icon}
                      label={social.label}
                      variant="card"
                      size="md"
                      showLabel
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Response Time */}
           {/*  <motion.div
              className="p-6 bg-gradient-to-r from-accent-green/10 to-accent-purple/10 rounded-xl border border-accent-green/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse" />
                <Heading as="h4" variant="card" color="accent">
                  Tempo de Resposta
                </Heading>
              </div>
              <Text variant="body" color="secondary">
                Normalmente respondo emails em até <span className="text-accent-green font-semibold">24 horas</span>. 
                Para projetos urgentes, entre em contato via WhatsApp.
              </Text>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection 