import { useEffect, useRef, useState } from 'react'
import { Check, ChevronDown, Globe } from 'lucide-react'
import { LOCALES } from '../i18n/translations'
import { useLocale } from '../i18n/LocaleContext'

/*
 * variant="bar"    — the desktop dropdown that sits where the CTA used to
 * variant="inline" — a flat row of options inside the mobile menu
 */
export default function LocaleSwitcher({ scrolled = true, variant = 'bar' }) {
  const { locale, setLocale, t } = useLocale()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0]

  useEffect(() => {
    if (!open) return
    const onDown = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  if (variant === 'inline') {
    return (
      <div className="px-1 pb-1 pt-3">
        <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-ink-soft">
          {t('nav.language')}
        </p>
        <div className="flex flex-wrap gap-2">
          {LOCALES.map((l) => (
            <button
              key={l.code}
              onClick={() => setLocale(l.code)}
              aria-pressed={l.code === locale}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                l.code === locale
                  ? 'bg-primary-700 text-white'
                  : 'bg-primary-50 text-ink-soft hover:bg-primary-100 hover:text-primary-700'
              }`}
            >
              {l.code === locale && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
              {l.label}
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t('nav.language')}
        className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 font-heading text-sm font-semibold transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled
            ? 'border-neutral-200 text-ink-deep hover:border-primary-300 hover:text-primary-700'
            : 'border-white/35 text-white hover:border-white/60 hover:bg-white/10'
        }`}
      >
        <Globe className="h-4 w-4" strokeWidth={2.25} />
        <span className="uppercase">{current.short}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <ul
        role="listbox"
        aria-label={t('nav.language')}
        inert={!open}
        className={`absolute right-0 top-[calc(100%+0.5rem)] z-10 min-w-[10rem] overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-card transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-1 opacity-0'
        }`}
      >
        {LOCALES.map((l) => (
          <li key={l.code} role="option" aria-selected={l.code === locale}>
            <button
              onClick={() => { setLocale(l.code); setOpen(false) }}
              className={`flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm transition-colors duration-200 ${
                l.code === locale
                  ? 'bg-primary-50 font-semibold text-primary-700'
                  : 'text-ink-soft hover:bg-primary-50 hover:text-primary-700'
              }`}
            >
              {l.label}
              {l.code === locale && <Check className="h-4 w-4" strokeWidth={3} />}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
