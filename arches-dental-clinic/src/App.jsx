import { useEffect } from 'react'
import useScrollReveal from './hooks/useScrollReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStats from './components/TrustStats'
import About from './components/About'
import Services from './components/Services'
import WhyChoose from './components/WhyChoose'
import GoogleReviews from './components/GoogleReviews'
import Gallery from './components/Gallery'
import ClinicInfo from './components/ClinicInfo'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import LegalDialogs from './components/LegalDialogs'

function App() {
  useScrollReveal()

  // Gentle parallax for ambient background shapes — translateY only, no layout thrash.
  useEffect(() => {
    const shapes = document.querySelectorAll('[data-parallax]')
    if (!shapes.length) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let ticking = false
    function onScroll() {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const y = window.scrollY
        shapes.forEach((el) => {
          const speed = parseFloat(el.dataset.parallax) || 0.2
          el.style.transform = `translateY(${y * speed}px)`
        })
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-surface overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        {/* Opaque, above the pinned hero — the page scrolls up over the photo */}
        <div className="relative z-10 bg-surface">
          <TrustStats />
          <About />
          <Services />
          <WhyChoose />
          <GoogleReviews />
          <Gallery />
          <ClinicInfo />
          <FAQ />
          <FinalCTA />
        </div>
      </main>
      <Footer />
      <LegalDialogs />
      <CookieConsent />
    </div>
  )
}

export default App
