import { useEffect, useMemo, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/clinic'
import { useLocale } from '../i18n/LocaleContext'
import useSectionProgress from '../hooks/useSectionProgress'
import LocaleSwitcher from './LocaleSwitcher'

import logoDark from '../assets/brand/arches-logo-full.png'
import logoLight from '../assets/brand/arches-logo-light.png'

/*
 * Two states. Over the dark hero the bar is transparent with a rust gradient
 * and light type; once scrolled past it, it becomes the white blurred bar with
 * ink type. The logo crossfades between its rust and cream cuts to match.
 *
 * Under the links runs a hairline rule with a marker on it. The marker slides
 * to whichever section you are reading and fills left to right as you scroll
 * through that section, so the rule reads as progress through the page.
 */

const SECTION_IDS = navLinks.map((l) => l.href.slice(1))

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { t } = useLocale()

  const ids = useMemo(() => SECTION_IDS, [])
  const { index: active, page } = useSectionProgress(ids)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled
          ? 'bg-white/95 py-3 shadow-soft backdrop-blur-lg'
          : 'bg-gradient-to-b from-primary-900/75 via-primary-900/25 to-transparent py-5 backdrop-blur-[2px]'
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-5 md:px-8">
        <a href="#home" className="relative shrink-0" aria-label={t('nav.home_aria')}>
          <img
            src={logoLight}
            alt=""
            width="1400"
            height="480"
            className={`h-11 w-auto transition-opacity duration-500 md:h-14 ${
              scrolled ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <img
            src={logoDark}
            alt=""
            width="1400"
            height="480"
            aria-hidden="true"
            className={`absolute left-0 top-0 h-11 w-auto transition-opacity duration-500 md:h-14 ${
              scrolled ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </a>

        <ul className="relative hidden items-center gap-7 md:flex lg:gap-8">
          {navLinks.map((link, i) => {
            const isActive = i === active
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`group relative py-1 text-[15px] transition-colors duration-200 ${
                    isActive ? 'font-semibold' : 'font-medium'
                  } ${
                    scrolled
                      ? isActive
                        ? 'text-primary-700'
                        : 'text-ink-soft hover:text-primary-700'
                      : isActive
                        ? 'text-white'
                        : 'text-white/85 hover:text-white'
                  }`}
                >
                  {t(`nav.${link.href.slice(1)}`)}
                  {!isActive && (
                    <span
                      className={`absolute -bottom-0.5 left-0 h-[2px] w-0 rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full ${
                        scrolled ? 'bg-primary-300' : 'bg-white/50'
                      }`}
                    />
                  )}
                </a>
              </li>
            )
          })}

          {/* Scroll progress: the rule under the links fills left to right in
              step with the scrollbar. Track and fill share one element so the
              fill can't drift off the rule at any width. */}
          <span
            aria-hidden="true"
            className={`pointer-events-none absolute -bottom-2 left-0 right-0 h-[2px] overflow-hidden rounded-full transition-colors duration-500 ${
              scrolled ? 'bg-neutral-200' : 'bg-white/25'
            }`}
          >
            <span
              className={`block h-full rounded-full transition-[width] duration-150 ease-linear motion-reduce:transition-none ${
                scrolled ? 'bg-primary-600' : 'bg-secondary-400'
              }`}
              style={{ width: `${page * 100}%` }}
            />
          </span>
        </ul>

        <div className="hidden items-center md:flex">
          <LocaleSwitcher scrolled={scrolled} />
        </div>

        <button
          className={`-mr-2 rounded-xl p-2 transition-colors duration-200 md:hidden ${
            scrolled ? 'text-ink-deep hover:bg-neutral-100' : 'text-white hover:bg-white/15'
          }`}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        inert={!open}
        className={`grid transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          open ? 'mt-3 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="mx-4 overflow-hidden rounded-card border border-neutral-100 bg-white p-3 shadow-card">
          <ul className="flex flex-col">
            {navLinks.map((link, i) => {
              const isActive = i === active
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative block rounded-xl px-3 py-2.5 font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-primary-50 font-semibold text-primary-700'
                        : 'text-ink-soft hover:bg-primary-50 hover:text-primary-700'
                    }`}
                  >
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-y-2 left-0 w-[3px] rounded-full bg-primary-600"
                      />
                    )}
                    {t(`nav.${link.href.slice(1)}`)}
                  </a>
                </li>
              )
            })}
          </ul>
          <div className="mt-2 border-t border-neutral-100">
            <LocaleSwitcher variant="inline" />
          </div>
        </div>
      </div>
    </header>
  )
}
