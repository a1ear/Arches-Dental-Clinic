import { Phone, Navigation } from 'lucide-react'
import { clinic } from '../data/clinic'
import ArchSwoop from './ArchSwoop'

export default function FinalCTA() {
  return (
    <section className="relative py-20 md:py-28 px-5 md:px-8">
      <div className="reveal relative mx-auto max-w-content rounded-showcase overflow-hidden bg-gradient-to-br from-primary-700 to-primary-800 px-8 py-16 md:px-16 md:py-20 text-center">
        {/* Ambient glows */}
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full bg-white/8 blur-3xl pointer-events-none" aria-hidden="true" />

        <ArchSwoop
          variant="wide"
          color="rgba(255,255,255,0.2)"
          strokeWidth={3}
          className="absolute top-8 left-1/2 -translate-x-1/2 w-[120%] h-12 hidden md:block"
        />

        <div className="relative">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Ready for a Healthier Smile?
          </h2>
          <p className="text-white/85 text-lg max-w-[46ch] mx-auto mb-10 leading-relaxed">
            Visit {clinic.name} or call us today to schedule your visit — no online booking needed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={clinic.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 font-heading font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] w-full sm:w-auto"
            >
              <Phone className="h-5 w-5" strokeWidth={2.5} />
              Call Now
            </a>
            <a
              href={clinic.mapsDirectionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/12 hover:bg-white/22 text-white font-heading font-semibold px-8 py-4 rounded-full border border-white/30 hover:border-white/50 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] w-full sm:w-auto"
            >
              <Navigation className="h-5 w-5" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
