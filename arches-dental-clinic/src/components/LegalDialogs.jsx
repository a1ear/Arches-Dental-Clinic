import { useCallback, useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { legalDocs, LEGAL_UPDATED } from '../data/legal'

/*
 * Policy documents as a modal, addressed by URL hash (#privacy-policy,
 * #terms-of-service) so they can still be linked to and shared directly.
 * Uses a native <dialog>, which brings focus trapping and Escape with it.
 */
export default function LegalDialogs() {
  const [active, setActive] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    const sync = () => {
      const h = window.location.hash.replace('#', '')
      setActive(legalDocs.find((d) => d.hash === h) ?? null)
    }
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  const close = useCallback(() => {
    const h = window.location.hash.replace('#', '')
    if (legalDocs.some((d) => d.hash === h)) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search)
    }
    setActive(null)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (active && !el.open) el.showModal()
    if (!active && el.open) el.close()
  }, [active])

  return (
    <dialog
      ref={ref}
      onClose={close}
      onCancel={close}
      aria-labelledby="legal-title"
      className="legal-dialog max-h-[85vh] w-[min(46rem,calc(100vw-2rem))] overflow-y-auto rounded-card border border-neutral-100 bg-white p-0 text-ink shadow-lift backdrop:bg-primary-900/60"
    >
      {active && (
        <>
          <div className="sticky top-0 z-10 flex items-start justify-between gap-6 border-b border-neutral-100 bg-white/95 px-6 py-5 backdrop-blur-sm md:px-9">
            <div>
              <h2 id="legal-title" className="font-heading text-xl font-bold text-ink-deep md:text-2xl">
                {active.title}
              </h2>
              <p className="mt-1 text-xs uppercase tracking-wide text-ink-soft">
                Last updated {LEGAL_UPDATED}
              </p>
            </div>
            <button
              onClick={close}
              aria-label={`Close ${active.title}`}
              className="-mr-2 shrink-0 rounded-xl p-2 text-ink-soft transition-colors duration-200 hover:bg-primary-50 hover:text-primary-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="px-6 py-7 md:px-9">
            <p className="mb-8 text-[15px] leading-relaxed text-ink-soft">{active.intro}</p>
            {active.sections.map((s) => (
              <section key={s.heading} className="mb-7 last:mb-0">
                <h3 className="mb-2.5 font-heading text-base font-bold text-ink-deep">{s.heading}</h3>
                {s.paragraphs?.map((p) => (
                  <p key={p} className="mb-2.5 text-[15px] leading-relaxed text-ink-soft last:mb-0">
                    {p}
                  </p>
                ))}
                {s.list && (
                  <ul className="mt-3 space-y-2">
                    {s.list.map((item) => (
                      <li key={item} className="flex gap-2.5 text-[15px] leading-relaxed text-ink-soft">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </>
      )}
    </dialog>
  )
}
