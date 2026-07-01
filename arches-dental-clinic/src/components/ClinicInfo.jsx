import { Phone, MapPin, Mail, Clock, PhoneCall, Navigation } from 'lucide-react'
import { clinic } from '../data/clinic'

export default function ClinicInfo() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="reveal inline-block text-primary-600 font-heading font-semibold text-sm tracking-wide uppercase mb-3">
            Visit Us
          </span>
          <h2 className="reveal stagger-1 text-3xl md:text-4xl font-bold mb-4">Find Us & Plan Your Visit</h2>
          <p className="reveal stagger-2 text-ink-soft leading-relaxed">
            No need to book online — just call ahead or stop by during business hours and our team
            will take great care of you.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-stretch">
          {/* Info card */}
          <div className="reveal bg-surface-warm rounded-card border border-neutral-100 shadow-soft p-8 md:p-10 flex flex-col">
            <div className="space-y-7 flex-1">
              <InfoRow icon={MapPin} label="Address" value={clinic.address} />
              <InfoRow icon={Phone} label="Phone" value={clinic.phone} href={clinic.phoneHref} />
              <InfoRow icon={Mail} label="Email" value={clinic.email} href={`mailto:${clinic.email}`} />
              <InfoRow
                icon={PhoneCall}
                label="Emergency Line"
                value={clinic.emergencyPhone}
                href={clinic.emergencyPhoneHref}
              />
              <div className="flex gap-4">
                <span className="flex items-center justify-center h-10 w-10 rounded-2xl bg-primary-50 text-primary-600 shrink-0">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-ink-soft uppercase tracking-wide mb-2">Business Hours</p>
                  <dl className="space-y-1.5">
                    {clinic.hours.map((h) => (
                      <div key={h.day} className="flex justify-between gap-6 text-sm">
                        <dt className="text-ink-soft">{h.day}</dt>
                        <dd className="text-ink-deep font-medium">{h.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={clinic.phoneHref}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-primary-700 hover:bg-primary-800 text-white font-heading font-semibold px-6 py-4 rounded-full shadow-lift transition-all duration-300 hover:-translate-y-1"
              >
                <Phone className="h-5 w-5" strokeWidth={2.5} />
                Call Now
              </a>
              <a
                href={clinic.mapsDirectionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-ink-deep font-heading font-semibold px-6 py-4 rounded-full border-2 border-neutral-200 hover:border-primary-300 hover:text-primary-600 transition-all duration-300"
              >
                <Navigation className="h-5 w-5" strokeWidth={2.25} />
                Get Directions
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="reveal stagger-1 relative rounded-card overflow-hidden shadow-soft border border-neutral-100 min-h-[400px] lg:min-h-0">
            <iframe
              title="Arches Dental Clinic location"
              src={clinic.mapsEmbedSrc}
              className="absolute inset-0 w-full h-full grayscale-[15%]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoRow({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex gap-4 items-start">
      <span className="flex items-center justify-center h-10 w-10 rounded-2xl bg-primary-50 text-primary-600 shrink-0">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-semibold text-ink-soft uppercase tracking-wide mb-0.5">{label}</p>
        <p className="text-ink-deep font-medium">{value}</p>
      </div>
    </div>
  )
  return href ? (
    <a href={href} className="group block transition-all duration-200">
      <div className="flex gap-4 items-start">
        <span className="flex items-center justify-center h-10 w-10 rounded-2xl bg-primary-50 text-primary-600 group-hover:bg-primary-100 transition-colors duration-200 shrink-0">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <p className="text-xs font-semibold text-ink-soft uppercase tracking-wide mb-0.5">{label}</p>
          <p className="text-ink-deep font-medium group-hover:text-primary-700 transition-colors duration-200">{value}</p>
        </div>
      </div>
    </a>
  ) : (
    content
  )
}
