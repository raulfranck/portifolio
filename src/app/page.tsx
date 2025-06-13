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
      <GeometricBackground density="low" variant="floating" className="fixed inset-0 z-[-1]" />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Main Content */}
      <main className="relative z-[1] bg-bg-primary/95 backdrop-blur-sm">
        
        {/* About Section */}
        <AboutSection />
        
        {/* Separator */}
        <SectionSeparator />

        {/* Skills Section */}
        <SkillsSection />
        
        {/* Separator */}
        <SectionSeparator />

        {/* Experience Section */}
        <ExperienceSection />
        
        {/* Separator */}
        <SectionSeparator />

        {/* Projects Section */}
        <ProjectsSection showAll={false} />
        
        {/* Separator */}
        <SectionSeparator />

        {/* Blog Section */}
        <BlogSection />
        
        {/* Separator */}
        <SectionSeparator />

        {/* YouTube Section */}
        <YouTubeSection />
        
        {/* Separator */}
        <SectionSeparator />

        {/* Contact Section */}
        <ContactSection />

      </main>
      
      {/* Footer */}
      <Footer />
    </>
  )
} 