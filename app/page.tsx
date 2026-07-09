import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import {
  HeroSection,
  AboutSection,
  ServicesSection,
  PortfolioSection,
  TestimonialsSection,
  ContactSection,
} from '@/components/sections'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="relative flex flex-col overflow-hidden">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
