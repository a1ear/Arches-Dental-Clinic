import { useEffect, useState } from 'react'

/*
 * Two things the header needs from the scroll position:
 *
 *   page  — how far down the document we are, 0 to 1. Drives the bar under
 *           the nav, so it fills the way the scrollbar does.
 *   index — which of `ids` is currently under the header, so that link can be
 *           marked as the one you're reading.
 *
 * `ids` comes in nav order and is sorted here by measured position, so the two
 * can drift apart without breaking the highlight.
 *
 * Positions are re-read every frame rather than cached. Six reads inside a rAF
 * is cheap, and it means an opening FAQ panel, a late image, or a language
 * switch can't leave the highlight on the wrong link.
 */
export default function useSectionProgress(ids, headerOffset = 100) {
  const [state, setState] = useState({ index: 0, page: 0 })

  useEffect(() => {
    let ticking = false

    function measure() {
      ticking = false
      const doc = document.documentElement
      const maxScroll = doc.scrollHeight - window.innerHeight
      const page = maxScroll > 0 ? Math.min(Math.max(window.scrollY / maxScroll, 0), 1) : 0

      const found = []
      ids.forEach((id, index) => {
        const el = document.getElementById(id)
        if (!el) return
        // The hero is position:sticky, so its rect reports where it is parked
        // rather than where it sits in the flow. It is the top of the page.
        const top = index === 0 ? 0 : el.getBoundingClientRect().top + window.scrollY
        found.push({ index, top })
      })
      found.sort((a, b) => a.top - b.top)

      let index = null
      if (found.length) {
        const line = window.scrollY + headerOffset
        // At the bottom, the last section is the one you're on — a final
        // section shorter than the viewport never reaches the reference line.
        if (maxScroll > 0 && window.scrollY >= maxScroll - 2) {
          index = found[found.length - 1].index
        } else {
          let at = 0
          while (at + 1 < found.length && found[at + 1].top <= line) at++
          index = found[at].index
        }
      }

      // Skip sub-half-percent moves so scrolling doesn't re-render every frame.
      setState((s) => {
        const next = index ?? s.index
        return s.index === next && Math.abs(s.page - page) < 0.005 ? s : { index: next, page }
      })
    }

    function onScroll() {
      if (ticking) return
      ticking = true
      requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids, headerOffset])

  return state
}
