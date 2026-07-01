import { useEffect } from 'react'

/**
 * Observes all elements with the .reveal class and adds .in-view when they
 * enter the viewport. Content is visible by default via CSS (see index.css),
 * so this is purely additive — nothing depends on JS running for content
 * to appear.
 *
 * IMPORTANT — avoid this bug when adding new .reveal elements:
 * This hook adds the `in-view` class directly to the DOM node, outside of
 * React's own tracking. If that same node also has a className that
 * changes based on component state (e.g. an accordion's `isOpen`), React
 * will rewrite the whole className attribute on the next re-render and
 * silently wipe out `in-view` — since the observer already unobserved the
 * element after its first trigger, nothing re-adds it, and the element
 * gets stuck at opacity: 0 (looks like content "vanishing" after a click).
 *
 * Fix/pattern: keep the `reveal stagger-N` classes on a wrapper element
 * whose className never depends on local state, and put any
 * state-dependent classes on a child element instead. See FAQ.jsx for
 * the corrected pattern (outer div = reveal only, inner div = isOpen
 * styling).
 */
export default function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
