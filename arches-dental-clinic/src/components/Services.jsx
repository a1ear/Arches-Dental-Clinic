import { useState } from 'react'
import { Sparkles, AlignCenter, Stethoscope, ChevronDown } from 'lucide-react'
import { services } from '../data/clinic'
import ArchSwoop from './ArchSwoop'

const icons = { Sparkles, AlignCenter, Stethoscope }

const details = {
  'general-dentistry': {
    points: [
      'Tooth Restoration',
      'Professional cleaning & fluoride treatments',
      'Cavity fillings',
      'Fixed Bridge',
      'Denture',
      'Tooth Crown',
      'Teeth Whitening',
      'Root Canal Treatment',
      'Pits and Fissure Sealant',
    ],
  },
  orthodontics: {
    points: [
      'Traditional metal & ceramic braces',
      'Early orthodontic evaluation for children',
      'Retainers & post-treatment maintenance',
    ],
  },
  'oral-surgery': {
    points: [
      'Simple & surgical tooth extractions',
      'Dental implant placement',
      'Wisdom teeth removal',
      'Implants',
      'Others',
    ],
  },
}
export default function Services() {
  const [openId, setOpenId] = useState(null)

  function handleLearnMore(id) {
    setOpenId((current) => (current === id ? current : id))
    requestAnimationFrame(() => {
      document.getElementById(`detail-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    })
  }

  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="reveal inline-block text-primary-600 font-heading font-semibold text-sm tracking-widest uppercase mb-4">
            What We Offer
          </span>
          <h2 className="reveal stagger-1 text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Services designed around your smile
          </h2>
          <p className="reveal stagger-2 text-ink-soft leading-relaxed max-w-[50ch] mx-auto">
            From routine checkups to advanced procedures, every treatment is delivered with the same
            gentle, attentive care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = icons[service.icon]
            return (
              <div key={service.id} className={`reveal stagger-${i + 1}`}>
                <div className="group relative bg-white rounded-card border border-neutral-100 shadow-card hover:shadow-lift hover:-translate-y-1.5 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] p-8 flex flex-col h-full">
                  {/* Top accent line on hover */}
                  <div className="absolute top-0 left-8 right-8 h-[2px] rounded-full bg-gradient-to-r from-primary-400 to-secondary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="flex items-center justify-center h-14 w-14 rounded-2xl bg-primary-50 text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
                    <Icon className="h-7 w-7" strokeWidth={1.75} />
                  </span>
                  <h3 className="text-xl font-bold mb-3 tracking-tight">{service.name}</h3>
                  <p className="text-ink-soft leading-relaxed mb-6 flex-1 text-[15px]">{service.description}</p>
                  <button
                    onClick={() => handleLearnMore(service.id)}
                    className="inline-flex items-center gap-1.5 text-primary-600 font-heading font-semibold text-sm hover:text-primary-700 transition-all duration-200 self-start group/btn"
                  >
                    Learn More
                    <ChevronDown className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-y-0.5" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Detail panels — outer div owns reveal class, inner div owns open/close state */}
        <div className="mt-8 space-y-4">
          {services.map((service) => {
            const isOpen = openId === service.id
            return (
              <div
                key={service.id}
                id={`detail-${service.id}`}
                className={`grid rounded-card bg-surface-warm border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isOpen
                    ? 'grid-rows-[1fr] opacity-100 border-primary-100'
                    : 'grid-rows-[0fr] opacity-0 border-transparent'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="flex items-center justify-between mb-4 px-7 md:px-9 pt-7">
                    <h4 className="font-heading font-bold text-base text-ink-deep">{service.name}</h4>
                    <button
                      onClick={() => setOpenId(null)}
                      className="text-ink-soft hover:text-primary-600 text-sm font-medium transition-colors duration-200 px-2 py-1 rounded-lg hover:bg-primary-50"
                      aria-label={`Close ${service.name} details`}
                    >
                      Close ✕
                    </button>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5 px-7 md:px-9 pb-7">
                    {details[service.id].points.map((point) => (
                      <li key={point} className="text-ink-soft text-sm flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-400 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        <ArchSwoop
          variant="wide"
          color="#E6DCD2"
          strokeWidth={3}
          className="hidden md:block w-full h-10 mt-16 opacity-70"
        />
      </div>
    </section>
  )
}
