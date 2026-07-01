import { Heart, Zap, Wallet, Sparkle, MapPin, GraduationCap } from 'lucide-react'

const features = [
  { icon: Heart, title: 'Gentle Care', desc: 'Patient, reassuring treatment for nervous visitors and kids alike.' },
  { icon: Zap, title: 'Modern Technology', desc: 'Digital imaging and up-to-date tools for faster, more precise care.' },
  { icon: Wallet, title: 'Affordable Treatment', desc: 'Transparent pricing and flexible options that fit your budget.' },
  { icon: Sparkle, title: 'Clean & Comfortable Clinic', desc: 'A bright, spotless space designed to put you at ease.' },
  { icon: MapPin, title: 'Convenient Location', desc: 'Easy to find, easy to park, easy to fit into your day.' },
  { icon: GraduationCap, title: 'Experienced Team', desc: 'Skilled clinicians with years of hands-on dental expertise.' },
]

export default function WhyChoose() {
  return (
    <section className="relative py-24 md:py-32 bg-surface-alt overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-secondary-50/60 blur-3xl parallax-shape -translate-y-1/3 translate-x-1/3 pointer-events-none"
        data-parallax="0.18"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-content px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="reveal inline-block text-primary-600 font-heading font-semibold text-sm tracking-widest uppercase mb-4">
            Why Choose Us
          </span>
          <h2 className="reveal stagger-1 text-3xl md:text-4xl font-bold tracking-tight">
            Why Patients Choose Arches
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`reveal stagger-${Math.min(i + 1, 6)} group bg-white rounded-card p-7 shadow-card hover:shadow-lift hover:-translate-y-1.5 border border-neutral-100 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]`}
            >
              <span className="flex items-center justify-center h-12 w-12 rounded-2xl bg-primary-50 text-primary-600 mb-5 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
                <f.icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h3 className="font-heading font-bold text-[17px] mb-2 tracking-tight">{f.title}</h3>
              <p className="text-ink-soft text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
