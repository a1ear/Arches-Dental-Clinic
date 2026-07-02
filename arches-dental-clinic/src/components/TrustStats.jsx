import { Users, Award, Cpu, HeartHandshake } from 'lucide-react'

const stats = [
  { icon: Users, value: '2,000+', label: 'Happy Patients' },
  { icon: Award, value: '3+', label: 'Years Experience' },
  { icon: Cpu, value: 'Modern', label: 'Equipment' },
  { icon: HeartHandshake, value: 'Friendly', label: 'Professionals' },
]

export default function TrustStats() {
  return (
    <section className="relative -mt-6 pb-4 z-10">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 bg-white rounded-card shadow-soft border border-neutral-100 p-6 md:p-8 lg:p-10">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center gap-2 py-2 ${
                i !== 0 ? 'md:border-l md:border-neutral-100' : ''
              }`}
            >
              <span className="flex items-center justify-center h-12 w-12 rounded-2xl bg-primary-50 text-primary-600 mb-1">
                <stat.icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <span className="font-heading font-bold text-2xl md:text-3xl text-ink-deep leading-none">
                {stat.value}
              </span>
              <span className="text-sm text-ink-soft font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
