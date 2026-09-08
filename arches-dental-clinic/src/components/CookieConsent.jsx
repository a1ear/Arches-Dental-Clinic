import { useEffect, useState } from 'react'
import { Cookie } from 'lucide-react'
import { privacyPolicy } from '../data/legal'

const KEY = 'adc-cookie-consent'

export function getCookieConsent() {
  try {
    return localStorage.getItem(KEY)
  } catch {
    return null
  }
}

/*
 * Shown until a choice is made, then never again. "Essential only" is a real
 * decline — nothing beyond the language preference and this answer is stored,
 * and the site loses no functionality either way.
 */
export default function CookieConsent() {
  const [choice, setChoice] = useState('pending')
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const stored = getCookieConsent()
    if (stored) {
      setChoice(stored)
      return
    }
    setChoice(null)
    const id = setTimeout(() => setShown(true), 900)
    return () => clearTimeout(id)
  }, [])

  const decide = (value) => {
    try {
      localStorage.setItem(KEY, value)
    } catch {
      /* private mode — the banner will simply appear again next visit */
    }
    setShown(false)
    setTimeout(() => setChoice(value), 400)
  }

  if (choice !== null) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie preferences"
      className={`fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:px-6 md:pb-6 ${
        shown ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      <div className="mx-auto flex max-w-content flex-col gap-5 rounded-card border border-neutral-100 bg-white/95 p-5 shadow-lift backdrop-blur-lg md:flex-row md:items-center md:gap-8 md:p-6">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
          <Cookie className="h-5 w-5" strokeWidth={1.9} />
        </span>

        <p className="flex-1 text-[15px] leading-relaxed text-ink-soft">
          We use essential cookies to remember your language and this choice. With your
          permission we would also like anonymous analytics to see how the site is used.{' '}
          <a
            href={`#${privacyPolicy.hash}`}
            className="font-semibold text-primary-700 underline decoration-primary-200 underline-offset-2 transition-colors hover:decoration-primary-600"
          >
            Read our privacy policy
          </a>
          .
        </p>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <button
            onClick={() => decide('essential')}
            className="rounded-full border-2 border-neutral-200 px-6 py-3 font-heading text-sm font-semibold text-ink-deep transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary-300 hover:text-primary-700 active:scale-[0.97]"
          >
            Essential only
          </button>
          <button
            onClick={() => decide('all')}
            className="rounded-full bg-primary-700 px-6 py-3 font-heading text-sm font-semibold text-white shadow-soft transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-primary-800 hover:shadow-lift active:translate-y-0 active:scale-[0.97]"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  )
}
