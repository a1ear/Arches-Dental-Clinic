import { Phone, ArrowRight, Sparkles, AlignCenter, Stethoscope } from 'lucide-react'
import { clinic } from '../data/clinic'
import ArchSwoop from './ArchSwoop'
import ImageAssets from './ImageAssets'

import HeroImage from '../assets/images/hero.jpg'

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      {/* Ambient blobs */}
      <div
        className="absolute -top-24 -left-32 w-[480px] h-[480px] rounded-full bg-primary-100/50 blur-3xl parallax-shape pointer-events-none"
        data-parallax="0.15"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -right-40 w-[460px] h-[460px] rounded-full bg-secondary-100/40 blur-3xl parallax-shape pointer-events-none"
        data-parallax="0.25"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-content px-5 md:px-8 grid lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-10 items-center">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <span className="reveal inline-flex items-center gap-2 bg-primary-50 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-7 border border-primary-100">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-500" aria-hidden="true" />
            Now welcoming new patients
          </span>

          <h1 className="reveal stagger-1 text-[2.5rem] leading-[1.08] sm:text-5xl md:text-[3.5rem] font-bold text-ink-deep mb-5 tracking-tight">
            Healthy Smiles
            <br />
            <span className="relative inline-block text-primary-500">
              Begin Here
              <ArchSwoop
                variant="underline"
                color="#E48A42"
                strokeWidth={4}
                className="absolute left-0 -bottom-2 w-full h-3"
              />
            </span>
          </h1>

          <p className="reveal stagger-2 text-lg text-ink-soft max-w-[42ch] mx-auto lg:mx-0 mb-9 leading-relaxed">
            {clinic.name} provides compassionate dental care for patients of all ages using
            modern technology in a comfortable environment.
          </p>

          <div className="reveal stagger-3 flex flex-col sm:flex-row items-center gap-3.5 justify-center lg:justify-start">

            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-2 bg-white text-ink-deep font-heading font-semibold px-7 py-3.5 rounded-full border-2 border-neutral-200 hover:border-primary-200 hover:text-primary-700 hover:bg-primary-50/50 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] w-full sm:w-auto"
            >
              View Services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative reveal stagger-2 mt-4 lg:mt-0">
          <div className="relative aspect-[4/5] sm:aspect-square max-w-md mx-auto">
            {/* Decorative ring behind the photo */}
            <div className="absolute inset-0 rounded-showcase bg-gradient-to-br from-primary-100 to-secondary-50 rotate-3 scale-[1.03]" />
            <ImageAssets
              src={HeroImage}
              alt="Patient at Arches Dental Clinic smiling in front of the clinic sign"
              label="Hero Image"
              loading="eager"
              className="relative w-full h-full object-cover rounded-showcase shadow-lift"
            />

            <FloatingPill
              icon={<Sparkles className="h-4 w-4" />}
              label="General Dentistry"
              className="absolute -left-4 top-8 sm:-left-10 sm:top-10 animate-float"
              delay="0s"
            />
            <FloatingPill
              icon={<AlignCenter className="h-4 w-4" />}
              label="Orthodontics"
              className="absolute -right-3 top-1/2 -translate-y-1/2 sm:-right-8 animate-float"
              delay="1.5s"
            />
            <FloatingPill
              icon={<Stethoscope className="h-4 w-4" />}
              label="Oral Surgery"
              className="absolute -left-2 bottom-6 sm:-left-6 sm:bottom-10 animate-float"
              delay="3s"
            />
          </div>

          <ArchSwoop
            variant="wide"
            color="#D88918"
            strokeWidth={4}
            className="hidden sm:block absolute -bottom-10 left-1/2 -translate-x-1/2 w-[110%] h-14 opacity-60"
          />
        </div>
      </div>
    </section>
  )
}

function FloatingPill({ icon, label, className, delay }) {
  return (
    <div
      className={`${className} flex items-center gap-2.5 bg-white/96 bg-white rounded-2xl shadow-lift px-4 py-3 border border-neutral-100`}
      style={{ animationDelay: delay }}
    >
      <span className="flex items-center justify-center h-8 w-8 rounded-xl bg-primary-50 text-primary-600 shrink-0">
        {icon}
      </span>
      <span className="text-sm font-heading font-semibold text-ink-deep whitespace-nowrap">{label}</span>
    </div>
  )
}
