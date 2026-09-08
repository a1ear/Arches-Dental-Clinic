import { Star, ExternalLink } from 'lucide-react'
import { GoogleGlyph } from './BrandGlyphs'
import { clinic } from '../data/clinic'
import { useLocale } from '../i18n/LocaleContext'

/*
 * Review text and names are shown exactly as the patients wrote them and are
 * never translated — they are attributed quotes, not site copy.
 */
const reviews = [
  {
    name: 'Jezel Gatoc',
    rating: 5,
    text: 'Clinic is super clean, and Doc Hope is very fast, yet I didn\u2019t feel any pressure from her hand. I had teeth cleaning and two permanent fillings; everything was done in an hour. The scheduling is also easy. Highly recommended.',
  },
  {
    name: 'Marchelli Cavile',
    rating: 5,
    text: 'Doc Rikki is cute, friendly and very professional. She did an awesome job cleaning my teeth and giving me educational tips and information. Would highly recommend them for your dental care needs.',
  },
  {
    name: 'Henrietta Mingoy',
    rating: 5,
    text: 'I had my teeth fixed while not having any pain from the whole procedure. This clinic is highly recommended! Thank you, Doc Arches for making the procedure bearable.',
  },
  {
    name: 'Gabbi Garaygay',
    rating: 5,
    text: 'Had a great experience getting my teeth checked and cleaned at ADC + very accommodating staff and beautiful clinic!',
  },
]

export default function GoogleReviews() {
  const { t } = useLocale()

  return (
    <section id="reviews" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="reveal inline-flex items-center justify-center gap-2 text-primary-600 font-heading font-semibold text-sm tracking-wide uppercase mb-3">
            <GoogleGlyph className="h-4 w-4" />
            {t('reviews.eyebrow')}
          </span>
          <h2 className="reveal stagger-1 text-3xl md:text-4xl font-bold">{t('reviews.title')}</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-7">
          {reviews.map((review, index) => (
            <figure
              key={review.name}
              className={`reveal stagger-${Math.min(index + 1, 6)} relative bg-surface-warm rounded-card border border-neutral-100 shadow-card hover:shadow-lift hover:-translate-y-1.5 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] p-8 flex flex-col`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-secondary-600"
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <GoogleGlyph className="h-5 w-5 text-neutral-500" />
              </div>

              <blockquote lang="en" className="text-ink leading-relaxed mb-6 flex-1">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              <figcaption className="flex items-center gap-3 mt-auto pt-4 border-t border-neutral-200">
                <span className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-100 text-primary-700 font-heading font-bold">
                  {review.name.charAt(0)}
                </span>
                <div>
                  <p className="font-heading font-semibold text-sm">{review.name}</p>
                  <p className="text-xs text-ink-soft">{t('reviews.source')}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4">
          <a
            href={clinic.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-ink-deep font-heading font-semibold px-7 py-3.5 rounded-full border-2 border-neutral-200 hover:border-primary-300 hover:text-primary-600 active:scale-[0.97] transition-all duration-300"
          >
            <GoogleGlyph className="h-4 w-4" />
            {t('cta.viewAllReviews')}
            <ExternalLink className="h-4 w-4" />
          </a>
          <p className="text-xs text-ink-soft">{t('reviews.note')}</p>
        </div>
      </div>
    </section>
  )
}
