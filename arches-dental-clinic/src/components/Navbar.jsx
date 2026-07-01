import { useEffect, useState } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import { navLinks, clinic } from '../data/clinic'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled
          ? 'bg-white/92 backdrop-blur-lg shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto max-w-content px-5 md:px-8 flex items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-2.5 shrink-0"
          aria-label="Arches Dental Clinic home"
        >
          <ArchMark className="h-9 w-9 md:h-10 md:w-10" />
          <span className="font-heading font-bold text-lg md:text-xl text-ink-deep tracking-tight leading-none">
            Arches{' '}
            <span className="text-neutral-500 font-semibold">Dental</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-[15px] font-medium text-ink-soft hover:text-primary-600 transition-colors duration-200 py-1"
              >
                {link.label}
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-primary-500 rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center">
          <a
            href={clinic.phoneHref}
            className="inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-800 text-white font-heading font-semibold text-sm px-5 py-2.5 rounded-full shadow-soft hover:shadow-lift transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} />
            Call Now
          </a>
        </div>

        <button
          className="md:hidden p-2 -mr-2 rounded-xl text-ink-deep hover:bg-neutral-100 transition-colors duration-200"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="mx-4 bg-white rounded-card shadow-card border border-neutral-100 p-3 flex flex-col">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 px-3 rounded-xl text-ink-soft font-medium hover:text-primary-600 hover:bg-primary-50 transition-all duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2 px-1 pb-1">
            <a
              href={clinic.phoneHref}
              className="inline-flex w-full items-center justify-center gap-2 bg-primary-700 hover:bg-primary-800 text-white font-heading font-semibold text-sm px-5 py-3 rounded-full transition-colors duration-200"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              Call Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

function ArchMark({ className }) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
      <path
        d="M14 12C9 18 9 30 12 42C13.5 47 18 47 19.5 41C21 35 25 35 26 40"
        stroke="#D88918"
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
