import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Do I need to book an appointment in advance?',
    a: 'To improve efficiency while reducing unused or delayed appointment slots, we have transitioned to a FIRST-COME FIRST-SERVED approach. This ensures faster service for everyone and minimizes unnecessary waiting and scheduling gaps.',
  },
  {
    q: 'What insurance plans do you accept?',
    a: 'We work with most major dental insurance providers. Give us a call and our front desk team will help confirm your coverage before your visit.',
  },
  {
    q: 'How often should I come in for a cleaning?',
    a: 'Most patients benefit from a checkup and cleaning every six months, though your dentist may recommend a different schedule based on your oral health.',
  },
  {
    q: 'Do you treat children and teenagers?',
    a: 'Yes — our team welcomes patients of every age, from a child\u2019s first visit through adult and orthodontic care, in a relaxed family-friendly setting.',
  },
  {
    q: 'What should I do in a dental emergency?',
    a: 'Call our emergency line right away. We reserve same-day slots for urgent issues like severe pain, broken teeth, or swelling, and will guide you on next steps over the phone.',
  },
  {
    q: 'Is parking available at the clinic?',
    a: 'Yes, free on-site parking is available directly in front of the clinic, with additional street parking nearby.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="relative py-24 md:py-32 bg-surface-alt">
      <div className="mx-auto max-w-content px-5 md:px-8 max-w-3xl">
        <div className="text-center mb-14">
          <span className="reveal inline-block text-primary-600 font-heading font-semibold text-sm tracking-widest uppercase mb-4">
            Common Questions
          </span>
          <h2 className="reveal stagger-1 text-3xl md:text-4xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              /* Outer div owns reveal — never re-rendered by isOpen state changes */
              <div key={faq.q} className={`reveal stagger-${Math.min(i + 1, 6)}`}>
                {/* Inner div owns the open/close styling */}
                <div
                  className={`bg-white rounded-card border transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen
                      ? 'border-primary-200 shadow-soft'
                      : 'border-neutral-100 hover:border-neutral-200'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading font-semibold text-ink-deep group-hover:text-primary-700 transition-colors duration-200">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-primary-500 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-ink-soft leading-relaxed text-[15px]">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
