'use client'

import { Button, Heading, Paragraph, Text, Badge, Spinner, Icon, Input, Textarea } from '@/components/atoms'
import { Card, ProjectCard, BlogCard, VideoCard, SkillItem, SocialLink } from '@/components/molecules'
import { Navbar, HeroSection, Footer, SkillsSection } from '@/components/organisms'
import { ChevronRight, Github, Mail, ExternalLink, Code, Database, Server } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Main Content */}
      <main className="bg-bg-primary">
        
        {/* Demo Section - Showcase dos componentes */}
        <section id="sobre" className="section-spacing border-t border-bg-secondary">
          <div className="container-custom">
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
          </div>
        </section>

        {/* Demo Section - Molecules */}
        <section className="section-spacing border-t border-bg-secondary">
          <div className="container-custom">
            <div className="text-center space-y-12">
              <Heading as="h2" variant="section">
                Componentes <Text color="purple">Molecules</Text> Criados
              </Heading>
              
              {/* Cards showcase */}
              <div className="space-y-8">
                <Heading as="h3" variant="subsection" color="secondary">Cards Base</Heading>
                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                   <Card variant="default" animated={false}>
                     <Text>Card Default</Text>
                   </Card>
                   <Card variant="elevated" animated={false}>
                     <Text>Card Elevated</Text>
                   </Card>
                   <Card variant="bordered" animated={false}>
                     <Text>Card Bordered</Text>
                   </Card>
                   <Card variant="glass" animated={false}>
                     <Text>Card Glass</Text>
                   </Card>
                 </div>
              </div>

              {/* Project Cards */}
              <div className="space-y-8">
                <Heading as="h3" variant="subsection" color="secondary">Project Cards</Heading>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ProjectCard
                    title="Portfolio Website"
                    description="Meu portfólio pessoal criado com Next.js, TypeScript e Tailwind CSS. Design moderno e responsivo."
                    image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
                    technologies={['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']}
                    githubUrl="https://github.com"
                    liveUrl="https://example.com"
                    featured
                  />
                  <ProjectCard
                    title="E-commerce App"
                    description="Aplicação de e-commerce completa com carrinho de compras e sistema de pagamento."
                    image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
                    technologies={['React', 'Node.js', 'MongoDB']}
                    githubUrl="https://github.com"
                  />
                </div>
              </div>

              {/* Skills Items */}
              <div className="space-y-8">
                <Heading as="h3" variant="subsection" color="secondary">Skill Items</Heading>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <SkillItem
                    name="React"
                    experience="4 anos"
                    category="frontend"
                    variant="detailed"
                    description="Biblioteca para interfaces de usuário"
                  />
                  <SkillItem
                    name="Node.js"
                    experience="3 anos"
                    category="backend"
                  />
                  <SkillItem
                    name="MongoDB"
                    experience="2 anos"
                    category="database"
                    variant="compact"
                  />
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-8">
                <Heading as="h3" variant="subsection" color="secondary">Social Links</Heading>
                <div className="flex justify-center gap-6">
                  <SocialLink
                    href="https://github.com"
                    icon={Github}
                    label="GitHub"
                    variant="default"
                    showLabel
                  />
                                     <SocialLink
                     href="https://linkedin.com"
                     icon={ExternalLink}
                     label="LinkedIn"
                     variant="card"
                     size="lg"
                   />
                  <SocialLink
                    href="mailto:test@example.com"
                    icon={Mail}
                    label="Email"
                    variant="minimal"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section - Real */}
        <SkillsSection />

        {/* Seções futuras placeholder */}
        <section id="projetos" className="section-spacing">
          <div className="container-custom text-center">
            <Heading as="h2" variant="section" className="mb-8">
              Projetos
            </Heading>
            <Text color="secondary">Seção em desenvolvimento...</Text>
          </div>
        </section>

        <section id="blog" className="section-spacing">
          <div className="container-custom text-center">
            <Heading as="h2" variant="section" className="mb-8">
              Blog
            </Heading>
            <Text color="secondary">Seção em desenvolvimento...</Text>
          </div>
        </section>

        <section id="videos" className="section-spacing">
          <div className="container-custom text-center">
            <Heading as="h2" variant="section" className="mb-8">
              Vídeos
            </Heading>
            <Text color="secondary">Seção em desenvolvimento...</Text>
          </div>
        </section>

        <section id="contato" className="section-spacing">
          <div className="container-custom text-center">
            <Heading as="h2" variant="section" className="mb-8">
              Contato
            </Heading>
            <Text color="secondary">Seção em desenvolvimento...</Text>
          </div>
        </section>

      </main>
      
      {/* Footer */}
      <Footer />
    </>
  )
} 