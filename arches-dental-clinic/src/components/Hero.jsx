import { useEffect, useState } from 'react'
import { Phone, ArrowRight } from 'lucide-react'
import { clinic } from '../data/clinic'
import { useLocale } from '../i18n/LocaleContext'

import HeroImage from '../assets/images/hero-reception.webp'

/*
 * Full-bleed editorial hero: the clinic photo fills the section, a rust scrim
 * carries the copy, and a two-panel curtain wipes the image in on load.
 * Copy sits in an asymmetric 12-column grid — headline pinned to the top-left,
 * body + CTAs pinned to the bottom-left — leaving the right side to the photo.
 */

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const { t, locale } = useLocale()

  // Trigger the word stagger one frame after mount so the transition runs.
  // Re-runs on locale change so a switched headline animates in again.
  useEffect(() => {
    setLoaded(false)
    const id = requestAnimationFrame(() => setLoaded(true))
    return () => cancelAnimationFrame(id)
  }, [locale])

  const lines = [
    { words: t('hero.title1').split(/\s+/), accent: false },
    { words: t('hero.title2').split(/\s+/), accent: true },
  ]
  let wordIndex = -1

  return (
    <section
      id="home"
      className={`hero sticky top-0 overflow-hidden bg-primary-900 ${loaded ? 'hero--loaded' : ''}`}
    >
      {/* ─── Backdrop ─────────────────────────────────────────────────────── */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={HeroImage}
          alt=""
          width="2000"
          height="1500"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[60%_30%]"
        />
        {/* Scrim — heavy at top and bottom, light through the middle band */}
        <div className="hero__scrim" />
        {/* Curtain wipe — also settles into the left-hand copy scrim */}
        <span className="hero__wipe hero__wipe--left" />
        <span className="hero__wipe hero__wipe--right" />
      </div>

      {/* ─── Copy ─────────────────────────────────────────────────────────── */}
      <div className="relative mx-auto max-w-content px-5 md:px-8">
        <div className="grid min-h-[100svh] grid-cols-1 gap-x-6 gap-y-10 pb-14 pt-32 md:grid-cols-12 md:grid-rows-4 md:pb-16 md:pt-44">
          {/* Headline — top left */}
          <div className="md:col-span-6 md:col-start-1 md:row-span-2 md:row-start-1 lg:col-span-5">

            <h1 className="font-heading text-[2.75rem] font-bold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-[4rem]">
              {lines.map((line, li) => (
                <span key={li} className="block">
                  {line.words.map((word, wi) => {
                    wordIndex += 1
                    return (
                      <span key={`${li}-${wi}`}>
                        <span
                          className={`hero__word ${line.accent ? 'text-secondary-300' : ''}`}
                          style={{ transitionDelay: `${0.4 + wordIndex * 0.13}s` }}
                        >
                          {word}
                        </span>{' '}
                      </span>
                    )
                  })}
                </span>
              ))}
            </h1>
          </div>

          {/* Body + actions — bottom left */}
          <div className="self-end md:col-span-6 md:col-start-1 md:row-span-2 md:row-start-3 lg:col-span-5">
            <p className="hero__fade hero__fade--2 max-w-[46ch] text-lg leading-relaxed text-white/80">
              {clinic.name} {t('hero.body')}
            </p>

            <div className="hero__fade hero__fade--3 mt-9 flex flex-col items-stretch gap-3.5 sm:flex-row sm:items-center">
              <a
                href={clinic.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-heading font-semibold text-primary-700 shadow-lift transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-surface-warm active:translate-y-0 active:scale-[0.97]"
              >
                <Phone className="h-4 w-4" strokeWidth={2.5} />
                {t('cta.call')}
              </a>
              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/35 px-7 py-4 font-heading font-semibold text-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-white/60 hover:bg-white/10 active:scale-[0.97]"
              >
                {t('cta.viewServices')}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
