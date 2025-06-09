'use client'

import { Button, Heading, Paragraph, Text, Badge, Spinner, Icon, Input, Textarea } from '@/components/atoms'
import { ChevronRight, Github, Mail, ExternalLink } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <div className="container-custom">
        {/* Hero Section */}
        <section className="section-spacing flex items-center justify-center min-h-screen">
          <div className="text-center space-y-8">
            <Heading as="h1" variant="hero" gradient>
              Olá, eu sou Raul
            </Heading>
            
            <Paragraph variant="lead" color="secondary" className="max-w-2xl mx-auto">
              Desenvolvedor Full Stack apaixonado por criar experiências digitais incríveis 
              usando tecnologias modernas e design centrado no usuário.
            </Paragraph>
            
            {/* Skills badges */}
            <div className="flex flex-wrap justify-center gap-3 my-8">
              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Python'].map((skill) => (
                <Badge key={skill} variant="primary" animated>
                  {skill}
                </Badge>
              ))}
            </div>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="lg"
                rightIcon={<Icon icon={ChevronRight} size="sm" />}
              >
                Ver Projetos
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                leftIcon={<Icon icon={Mail} size="sm" />}
              >
                Fale Comigo
              </Button>
            </div>
            
            {/* Social links */}
            <div className="flex justify-center gap-6 pt-8">
              <Icon 
                icon={Github} 
                size="lg" 
                color="secondary" 
                animated 
                hoverEffect="scale"
                className="cursor-pointer"
              />
              <Icon 
                icon={ExternalLink} 
                size="lg" 
                color="secondary" 
                animated 
                hoverEffect="bounce"
                className="cursor-pointer"
              />
            </div>
          </div>
        </section>
        
        {/* Demo Section - Showcase dos componentes */}
        <section className="section-spacing border-t border-bg-secondary">
          <div className="text-center space-y-12">
            <Heading as="h2" variant="section">
              Componentes <Text color="green">Atoms</Text> Criados
            </Heading>
            
            {/* Button variants */}
            <div className="space-y-6">
              <Heading as="h3" variant="subsection" color="secondary">Botões</Heading>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="primary" isLoading>Loading</Button>
              </div>
            </div>
            
            {/* Typography showcase */}
            <div className="space-y-6">
              <Heading as="h3" variant="subsection" color="secondary">Tipografia</Heading>
              <div className="space-y-4 text-left max-w-2xl mx-auto">
                <Heading as="h1" variant="hero">Hero Heading</Heading>
                <Heading as="h2" variant="section">Section Heading</Heading>
                <Heading as="h3" variant="subsection">Subsection Heading</Heading>
                <Paragraph variant="lead">Este é um parágrafo principal (lead)</Paragraph>
                <Paragraph variant="body">Este é um parágrafo comum com texto normal</Paragraph>
                <Text variant="small" color="secondary">Texto pequeno secundário</Text>
              </div>
            </div>
            
            {/* Badge showcase */}
            <div className="space-y-6">
              <Heading as="h3" variant="subsection" color="secondary">Badges</Heading>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="primary">React</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="success">TypeScript</Badge>
                <Badge variant="warning">JavaScript</Badge>
                <Badge variant="outline">CSS</Badge>
              </div>
            </div>
            
            {/* Spinner showcase */}
            <div className="space-y-6">
              <Heading as="h3" variant="subsection" color="secondary">Loading States</Heading>
              <div className="flex justify-center gap-8">
                <div className="text-center space-y-2">
                  <Spinner variant="spinner" color="green" />
                  <Text variant="small">Spinner</Text>
                </div>
                <div className="text-center space-y-2">
                  <Spinner variant="dots" color="purple" />
                  <Text variant="small">Dots</Text>
                </div>
                <div className="text-center space-y-2">
                  <Spinner variant="pulse" color="yellow" />
                  <Text variant="small">Pulse</Text>
                </div>
                <div className="text-center space-y-2">
                  <Spinner variant="bars" color="accent" />
                  <Text variant="small">Bars</Text>
                </div>
              </div>
            </div>
            
            {/* Form Controls showcase */}
            <div className="space-y-6">
              <Heading as="h3" variant="subsection" color="secondary">Formulários</Heading>
              <div className="max-w-md mx-auto space-y-6">
                <Input
                  label="Nome"
                  placeholder="Digite seu nome"
                  variant="outlined"
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="seu@email.com"
                  variant="filled"
                  leftIcon={<Icon icon={Mail} size="sm" />}
                />
                <Input
                  label="Campo com erro"
                  placeholder="Digite algo..."
                  variant="minimal"
                  error="Este campo é obrigatório"
                />
                <Textarea
                  label="Mensagem"
                  placeholder="Escreva sua mensagem aqui..."
                  variant="outlined"
                  rows={4}
                />
                <Textarea
                  label="Comentário (Auto-resize)"
                  placeholder="Digite e veja o campo crescer automaticamente..."
                  variant="filled"
                  autoResize
                  rows={2}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
} 