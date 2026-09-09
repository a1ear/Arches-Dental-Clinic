import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react'
import ImageAssets from './ImageAssets'
import { useLocale } from '../i18n/LocaleContext'
import ReceptionImage from '../assets/images/reception.webp'
import TreatmentRoomImage from '../assets/images/treatment-room.webp'
import DentalEquipmentImage from '../assets/images/dental-equipment.webp'
import ClinicExteriorImage from '../assets/images/clinic-exterior.webp'

const sources = [ReceptionImage, TreatmentRoomImage, DentalEquipmentImage, ClinicExteriorImage]

/*
 * A bento grid, not a carousel. The reception shot — the most inviting of the
 * four, and the one that sells "welcoming" — gets a wide hero tile; the other
 * three sit underneath at a smaller, still uneven size. Every photo is on
 * screen with nothing to click, which a slider hid two of four behind
 * interaction for no reason. Tapping a tile opens it larger in the dialog
 * below, where prev/next moves through all four without closing.
 *
 * This also retires the Embla carousel entirely, and with it the class of bug
 * it kept producing: a fixed align/width combination that could pass at one
 * breakpoint and clip a card or drop the loop at the next. A CSS grid doesn't
 * have that failure mode.
 */
const TILE_CLASS = [
  'col-span-2 aspect-[16/10] sm:col-span-4 sm:aspect-[21/9]',
  'col-span-2 aspect-[4/3] sm:col-span-2 sm:aspect-auto',
  'col-span-1 aspect-square',
  'col-span-1 aspect-square',
]

export default function Gallery() {
  const { t } = useLocale()
  const photos = t('gallery.photos')
  const [openIndex, setOpenIndex] = useState(null)
  const dialogRef = useRef(null)

  const close = useCallback(() => setOpenIndex(null), [])
  const step = useCallback(
    (delta) => setOpenIndex((i) => (i === null ? i : (i + delta + photos.length) % photos.length)),
    [photos.length]
  )

  useEffect(() => {
    const el = dialogRef.current
    if (!el) return
    if (openIndex !== null && !el.open) el.showModal()
    if (openIndex === null && el.open) el.close()
  }, [openIndex])

  // Arrow keys move through photos while the lightbox is open; Escape and the
  // backdrop click already close it for free via the dialog's own cancel event.
  useEffect(() => {
    if (openIndex === null) return
    const onKey = (e) => {
      if (e.key === 'ArrowRight') step(1)
      else if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [openIndex, step])

  const active = openIndex === null ? null : photos[openIndex]

  return (
    <section className="relative py-24 md:py-32 bg-surface-alt overflow-hidden">
      <div className="mx-auto max-w-content px-5 md:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="reveal inline-block text-primary-600 font-heading font-semibold text-sm tracking-widest uppercase mb-4">
            {t('gallery.eyebrow')}
          </span>
          <h2 className="reveal stagger-1 text-3xl md:text-4xl font-bold tracking-tight mb-3">
            {t('gallery.title')}
          </h2>
          <p className="reveal stagger-2 text-ink-soft leading-relaxed">{t('gallery.body')}</p>
        </div>

        {/* Bento grid */}
        <div className="reveal grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <button
              key={photo.label}
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={t('gallery.viewLarger').replace('{label}', photo.label)}
              className={`group relative overflow-hidden rounded-card shadow-card text-left transition-shadow duration-300 hover:shadow-lift focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 ${TILE_CLASS[i]}`}
            >
              <ImageAssets
                src={sources[i]}
                alt={photo.alt}
                label={photo.label}
                className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-deep/75 via-ink-deep/0 to-transparent" />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 md:p-4">
                <span className="font-heading text-sm font-semibold text-white md:text-base">
                  {photo.label}
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Expand className="h-4 w-4" strokeWidth={2.25} />
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox — native <dialog>, so focus trapping and Escape come free */}
      <dialog
        ref={dialogRef}
        onClose={close}
        onCancel={close}
        aria-label={active?.label}
        className="w-[min(56rem,calc(100vw-2rem))] max-h-[90vh] overflow-hidden rounded-card bg-ink-deep p-0 text-white shadow-lift backdrop:bg-ink-deep/90"
      >
        {active && (
          <div className="relative">
            <img
              src={sources[openIndex]}
              alt={active.alt}
              className="block max-h-[75vh] w-full bg-black object-contain"
            />
            <button
              onClick={close}
              aria-label={t('cta.close')}
              className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-black/60"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              onClick={() => step(-1)}
              aria-label={t('gallery.prev')}
              className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-black/60"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => step(1)}
              aria-label={t('gallery.next')}
              className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-black/60"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="flex items-center justify-between gap-4 px-5 py-4">
              <p className="font-heading font-semibold">{active.label}</p>
              <p className="text-sm text-white/70">
                {t('gallery.counter').replace('{n}', openIndex + 1).replace('{total}', photos.length)}
              </p>
            </div>
          </div>
        )}
      </dialog>
    </section>
  )
}
