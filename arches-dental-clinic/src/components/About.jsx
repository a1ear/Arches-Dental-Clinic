import { Check } from 'lucide-react'
import ArchSwoop from './ArchSwoop'
import ImageAssets from './ImageAssets'
import { useLocale } from '../i18n/LocaleContext'

import AboutImage from '../assets/images/about.webp'
import FoilBg from '../assets/images/foil-bg.webp'

export default function About() {
  const { t } = useLocale()
  const highlights = t('about.highlights')

  return (
    <section id="about" className="about-foil relative py-24 md:py-32 bg-surface-warm overflow-hidden">
      {/* Foil shimmer — two copies, the second flipped, cross-fading on scroll */}
      <div className="about-foil__bg" aria-hidden="true">
        <img src={FoilBg} alt="" className="about-foil__layer" />
        <img src={FoilBg} alt="" className="about-foil__layer about-foil__layer--b" />
      </div>

      <div className="relative mx-auto max-w-content px-5 md:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Image */}
        <div className="relative reveal order-2 lg:order-1">
          <div className="relative rounded-showcase overflow-hidden shadow-lift aspect-[4/5] max-w-md mx-auto">
            <ImageAssets
              src={AboutImage}
              alt={t('about.imageAlt')}
              label="About"
              className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
            />
          </div>
          {/* Floating stat badge */}
          <div className="absolute -bottom-6 -right-1 sm:-right-1 bg-white rounded-card shadow-lift p-5 max-w-[190px] border border-neutral-100">
            <p className="font-heading font-bold text-3xl text-primary-600 leading-none mb-1">4+</p>
            <p className="text-sm text-ink-soft font-medium leading-snug">{t('about.badgeLabel')}</p>
          </div>
          <ArchSwoop
            variant="tight"
            color="#BBA173"
            strokeWidth={4}
            className="hidden lg:block absolute -top-10 -left-10 w-40 h-20 opacity-50"
          />
        </div>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <span className="reveal inline-block text-primary-600 font-heading font-semibold text-sm tracking-widest uppercase mb-4">
            {t('about.eyebrow')}
          </span>
          <h2 className="reveal stagger-1 text-3xl md:text-4xl font-bold mb-5 tracking-tight">
            {t('about.title')} <span className="text-primary-600">{t('about.titleAccent')}</span>
          </h2>
          <p className="reveal stagger-2 text-ink-soft leading-relaxed mb-9 max-w-[52ch]">
            {t('about.body')}
          </p>

          <ul className="space-y-3">
            {highlights.map((item, i) => (
              <li
                key={item}
                className={`reveal stagger-${Math.min(i + 2, 6)} flex items-center gap-3 text-ink font-medium`}
              >
                <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary-100 text-primary-700 shrink-0 transition-colors duration-200">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
