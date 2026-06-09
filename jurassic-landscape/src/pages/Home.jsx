import { useEffect } from 'react'
import Navbar          from '../components/Navbar'
import Hero            from '../components/Hero'
import Services        from '../components/Services'
import PortfolioPreview from '../components/PortfolioPreview'
import AboutSection    from '../components/AboutSection'
import Testimonials    from '../components/Testimonials'
import ContactForm     from '../components/ContactForm'
import Footer          from '../components/Footer'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Home() {
  useScrollReveal()

  useEffect(() => {
    document.title = 'Jurassic Landscape Design | Yuma, AZ'
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <PortfolioPreview />
      <AboutSection />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  )
}
