import { useRef, useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ImageAssets from './ImageAssets'
import ReceptionImage from '../assets/images/reception.jpg'
import TreatmentRoomImage from '../assets/images/treatment-room.jpg'
import DentalEquipmentImage from '../assets/images/dental-equipment.jpg'
import ClinicExteriorImage from '../assets/images/clinic-exterior.jpg'

const photos = [
  { label: 'Reception Area',    src: ReceptionImage,       alt: 'Welcoming reception area at Arches Dental Clinic' },
  { label: 'Treatment Room',    src: TreatmentRoomImage,   alt: 'Modern treatment room at Arches Dental Clinic' },
  { label: 'Dental Equipment',  src: DentalEquipmentImage, alt: 'Advanced dental equipment at Arches Dental Clinic' },
  { label: 'Clinic Exterior',   src: ClinicExteriorImage,  alt: 'Exterior view of Arches Dental Clinic' },
]

export default function Gallery() {
  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // Sync active dot with scroll position using IntersectionObserver on each slide
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const slides = Array.from(track.querySelectorAll('[data-slide]'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setActiveIndex(Number(entry.target.dataset.slide))
          }
        })
      },
      { root: track, threshold: 0.5 }
    )
    slides.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const scrollTo = useCallback((index) => {
    const track = trackRef.current
    if (!track) return
    const slide = track.querySelector(`[data-slide="${index}"]`)
    slide?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }, [])

  const prev = () => scrollTo(Math.max(0, activeIndex - 1))
  const next = () => scrollTo(Math.min(photos.length - 1, activeIndex + 1))

  return (
    <section className="relative py-24 md:py-32 bg-surface-alt overflow-hidden">
      <div className="mx-auto max-w-content px-5 md:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="reveal inline-block text-primary-600 font-heading font-semibold text-sm tracking-widest uppercase mb-4">
            Take a Look Inside
          </span>
          <h2 className="reveal stagger-1 text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Take a Look Inside Our Clinic
          </h2>
          <p className="reveal stagger-2 text-ink-soft leading-relaxed">
            Explore our welcoming environment and modern facilities.
          </p>
        </div>

        {/* Carousel */}
        <div className="reveal relative">
          {/* Scroll track — CSS snap keeps layout in GPU compositor */}
          <div
            ref={trackRef}
            className="gallery-track flex gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 -mx-5 px-5 md:-mx-8 md:px-8"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {photos.map((photo, i) => (
              <div
                key={photo.label}
                data-slide={i}
                className="snap-center shrink-0 w-[82vw] sm:w-[60vw] md:w-[calc(50%-10px)] lg:w-[calc(40%-10px)] aspect-[4/3] rounded-card overflow-hidden shadow-card group"
              >
                <ImageAssets
                  src={photo.src}
                  alt={photo.alt}
                  label={photo.label}
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Arrow buttons */}
          <button
            onClick={prev}
            disabled={activeIndex === 0}
            aria-label="Previous photo"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 items-center justify-center h-11 w-11 rounded-full bg-white shadow-soft border border-neutral-100 text-ink-deep hover:text-primary-600 hover:shadow-card disabled:opacity-30 disabled:pointer-events-none transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            disabled={activeIndex === photos.length - 1}
            aria-label="Next photo"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 items-center justify-center h-11 w-11 rounded-full bg-white shadow-soft border border-neutral-100 text-ink-deep hover:text-primary-600 hover:shadow-card disabled:opacity-30 disabled:pointer-events-none transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex items-center justify-center gap-2 mt-7" role="tablist" aria-label="Gallery navigation">
          {photos.map((photo, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Go to photo ${i + 1}: ${photo.label}`}
              onClick={() => scrollTo(i)}
              className={`rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                i === activeIndex
                  ? 'w-6 h-2.5 bg-primary-600'
                  : 'w-2.5 h-2.5 bg-neutral-300 hover:bg-neutral-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Hide scrollbar cross-browser via global rule scoped to this component */}
      <style>{`.gallery-track::-webkit-scrollbar { display: none; }`}</style>
    </section>
  )
}
