import { ImagePlus } from 'lucide-react'

/**
 * ImageAssets
 * ----------------------------------------------------------------------
 * Drop-in replacement for <img> across the site. Pass a local image via
 * the `src` prop once you have one, and it renders normally. Until then,
 * leave `src` undefined and this component automatically falls back to a
 * clearly labeled placeholder — so the layout never breaks while you're
 * still collecting photos.
 *
 * HOW TO ADD YOUR OWN IMAGE (do this in the parent component, not here):
 *
 *   1. Place your image file inside:
 *        src/assets/images/
 *
 *   2. Import it at the top of the component file that uses it:
 *        import HeroImage from '../assets/images/hero.jpg'
 *
 *   3. Pass it to this component:
 *        <ImageAssets src={HeroImage} alt="..." label="Hero Image" className="..." />
 *
 *   That's it — once `src` is provided, the real photo replaces the
 *   placeholder automatically. No other code needs to change.
 * ----------------------------------------------------------------------
 */
export default function ImageAssets({ src, alt, label, className = '', loading = 'lazy' }) {
  // If a real local image has been imported and passed in, render it.
  if (src) {
    return (
      <img
        src={src}
        alt={alt || label}
        loading={loading}
        decoding="async"
        // `object-cover` is baked in here (not left to the caller) so a
        // large source photo always fills/crops to whatever box the
        // parent's className defines (width/height/aspect-ratio) instead
        // of stretching or overflowing it. `max-w-full` guards the case
        // where a parent forgets to constrain width at all.
        //
        // Note: this is intentionally just `max-w-full`, not `h-auto` —
        // every real usage in this project also passes `h-full` from the
        // parent, and Tailwind's generated stylesheet defines `.h-full`
        // after `.h-auto`, so `h-full` always wins regardless of class
        // order. Adding `h-auto` here would be dead code. The actual
        // safeguard against an oversized source image is `object-cover`
        // combined with each parent container having an explicit,
        // finite size (aspect-ratio or h-full inside a sized ancestor),
        // which every current usage already has.
        className={`${className} max-w-full object-cover`}
      />
    )
  }

  // No image provided yet — show the labeled placeholder so the section
  // still looks intentional instead of broken. This disappears
  // automatically as soon as a `src` is passed in above.
  return (
    <div
      className={`${className} flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-neutral-100 to-primary-50 border-2 border-dashed border-neutral-300 text-center px-6`}
      role="img"
      aria-label={`Placeholder image: ${label}`}
    >
      <span className="flex items-center justify-center h-12 w-12 rounded-2xl bg-white/70 text-primary-600 shrink-0">
        <ImagePlus className="h-6 w-6" strokeWidth={1.75} />
      </span>
      <span className="font-heading font-semibold text-sm text-ink-soft tracking-wide uppercase">
        {label}
      </span>
      <span className="text-xs text-ink-soft">Image coming soon</span>
    </div>
  )
}
