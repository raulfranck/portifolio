'use client'

import { 
  Navbar, 
  HeroSection, 
  AboutSection, 
  SkillsSection, 
  ProjectsSection, 
  ExperienceSection,
  BlogSection, 
  YouTubeSection, 
  ContactSection, 
  Footer 
} from '@/components/organisms'
import { SectionSeparator, GeometricBackground } from '@/components/atoms'

export default function Home() {
  return (
    <>
      {/* Global Geometric Background */}
      <GeometricBackground density="low" variant="floating" className="fixed inset-0 z-0" />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Main Content */}
      <main className="relative z-10 bg-bg-primary/95 backdrop-blur-sm">
        
        {/* About Section */}
        <AboutSection />
        
        {/* Separator */}
        <SectionSeparator variant="gradient" />

        {/* Skills Section */}
        <SkillsSection />
        
        {/* Separator */}
        <SectionSeparator variant="minimal" />

        {/* Experience Section */}
        <ExperienceSection />
        
        {/* Separator */}
        <SectionSeparator variant="default" />

        {/* Projects Section */}
        <ProjectsSection showAll={false} />
        
        {/* Separator */}
        <SectionSeparator variant="gradient" />

        {/* Blog Section */}
        <BlogSection />
        
        {/* Separator */}
        <SectionSeparator variant="minimal" />

        {/* YouTube Section */}
        <YouTubeSection />
        
        {/* Separator */}
        <SectionSeparator variant="default" />

        {/* Contact Section */}
        <ContactSection />

      </main>
      
      {/* Footer */}
      <Footer />
    </>
  )
} 