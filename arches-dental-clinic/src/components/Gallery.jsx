import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ImageAssets from './ImageAssets'
import ReceptionImage from '../assets/images/reception.webp'
import TreatmentRoomImage from '../assets/images/treatment-room.webp'
import DentalEquipmentImage from '../assets/images/dental-equipment.webp'
import ClinicExteriorImage from '../assets/images/clinic-exterior.webp'

const photos = [
  { label: 'Reception Area',    src: ReceptionImage,       alt: 'Welcoming reception area at Arches Dental Clinic' },
  { label: 'Treatment Room',    src: TreatmentRoomImage,   alt: 'Modern treatment room at Arches Dental Clinic' },
  { label: 'Dental Equipment',  src: DentalEquipmentImage, alt: 'Advanced dental equipment at Arches Dental Clinic' },
  { label: 'Clinic Exterior',   src: ClinicExteriorImage,  alt: 'Exterior view of Arches Dental Clinic' },
]

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'center', loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [prevDisabled, setPrevDisabled] = useState(true)
  const [nextDisabled, setNextDisabled] = useState(true)

  const onSelect = useCallback((api) => {
    setSelectedIndex(api.selectedScrollSnap())
    setPrevDisabled(!api.canScrollPrev())
    setNextDisabled(!api.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index) => emblaApi?.scrollTo(index), [emblaApi])

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
          {/* Embla viewport — overflow is clipped here, the container inside is what Embla translates */}
          <div className="overflow-hidden -mx-5 px-5 md:-mx-8 md:px-8" ref={emblaRef}>
            <div className="flex gap-4 md:gap-5">
              {photos.map((photo) => (
                <div
                  key={photo.label}
                  className="shrink-0 w-[82vw] sm:w-[60vw] md:w-[calc(50%-10px)] lg:w-[calc(40%-10px)] aspect-[4/3] rounded-card overflow-hidden shadow-card group"
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
          </div>

          {/* Arrow buttons */}
          <button
            onClick={scrollPrev}
            disabled={prevDisabled}
            aria-label="Previous photo"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 items-center justify-center h-11 w-11 rounded-full bg-white shadow-soft border border-neutral-100 text-ink-deep hover:text-primary-600 hover:shadow-card disabled:opacity-30 disabled:pointer-events-none transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollNext}
            disabled={nextDisabled}
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
              aria-selected={i === selectedIndex}
              aria-label={`Go to photo ${i + 1}: ${photo.label}`}
              onClick={() => scrollTo(i)}
              className={`rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                i === selectedIndex
                  ? 'w-6 h-2.5 bg-primary-600'
                  : 'w-2.5 h-2.5 bg-neutral-300 hover:bg-neutral-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
