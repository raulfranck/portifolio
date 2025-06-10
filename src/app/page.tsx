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

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Main Content */}
      <main className="bg-bg-primary">
        
        {/* About Section */}
        <AboutSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Projects Section */}
        <ProjectsSection showAll={false} />

        {/* Blog Section */}
        <BlogSection />

        {/* YouTube Section */}
        <YouTubeSection />

        {/* Contact Section */}
        <ContactSection />

      </main>
      
      {/* Footer */}
      <Footer />
    </>
  )
} 