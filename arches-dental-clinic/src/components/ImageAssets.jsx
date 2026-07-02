import { ImagePlus } from 'lucide-react'
export default function ImageAssets({ src, alt, label, className = '', loading = 'lazy' }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt || label}
        loading={loading}
        decoding="async"
        className={`${className} max-w-full object-cover`}
      />
    )
  }
  // No image yet 
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
