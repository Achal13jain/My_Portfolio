
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import SkillsSection from '@/components/SkillsSection'
import CertificationsSection from '@/components/CertificationsSection'
import ProjectsSection from '@/components/ProjectsSection'
import ExperienceSection from '@/components/ExperienceSection'
import BlogsSection from '@/components/BlogsSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <CertificationsSection />
      <ProjectsSection />
      <BlogsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  )
}
