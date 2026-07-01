import { Phone, Mail, MapPin } from 'lucide-react'
import { clinic, navLinks, services } from '../data/clinic'
import { GoogleGlyph, FacebookGlyph, InstagramGlyph } from './BrandGlyphs'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink-deep text-white/80 pt-20 pb-8">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <ArchMark className="h-8 w-8" />
              <span className="font-heading font-bold text-lg text-white leading-none">
                Arches{' '}
                <span className="text-neutral-300 font-semibold">Dental</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/55 mb-6">
              Modern, compassionate dental care for patients of all ages.
            </p>
            <div className="flex gap-2.5">
              <SocialIcon href={clinic.social.facebook} label="Facebook">
                <FacebookGlyph className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href={clinic.social.instagram} label="Instagram">
                <InstagramGlyph className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href={clinic.social.google} label="Google Reviews">
                <GoogleGlyph className="h-4 w-4" />
              </SocialIcon>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-5 text-sm tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-5 text-sm tracking-wide">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-white/70 hover:text-primary-400 transition-colors duration-200"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-5 text-sm tracking-wide">Contact</h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex gap-2.5 text-white/70">
                <MapPin className="h-4 w-4 mt-0.5 text-primary-400 shrink-0" />
                <span className="leading-snug">{clinic.address}</span>
              </li>
              <li className="flex gap-2.5">
                <Phone className="h-4 w-4 mt-0.5 text-primary-400 shrink-0" />
                <a
                  href={clinic.phoneHref}
                  className="text-white/70 hover:text-primary-400 transition-colors duration-200"
                >
                  {clinic.phone}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Mail className="h-4 w-4 mt-0.5 text-primary-400 shrink-0" />
                <a
                  href={`mailto:${clinic.email}`}
                  className="text-white/70 hover:text-primary-400 transition-colors duration-200"
                >
                  {clinic.email}
                </a>
              </li>
            </ul>
            <div className="mt-5 pt-5 border-t border-white/10">
              {clinic.hours.map((h) => (
                <div key={h.day} className="flex justify-between text-xs text-white/55 py-[3px]">
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/55">
          <p>© {year} {clinic.name}. All rights reserved.</p>
          <p>Designed with care for healthier smiles.</p>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-primary-700 hover:scale-110 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
    >
      {children}
    </a>
  )
}

function ArchMark({ className }) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
      <path
        d="M14 12C9 18 9 30 12 42C13.5 47 18 47 19.5 41C21 35 25 35 26 40"
        stroke="#E48A42"
        strokeWidth="5.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M26 18C30 12 38 10 44 16"
        stroke="#B7A392"
        strokeWidth="5.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
