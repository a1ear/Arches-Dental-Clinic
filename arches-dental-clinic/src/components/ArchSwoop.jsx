/**
 * ArchSwoop — the signature line lifted from the Arches Dental logo's
 * sweeping under-arch. Reused as a section divider, headline underline,
 * card accent, and image frame across the page.
 */
export default function ArchSwoop({
  className = '',
  color = '#D88918',
  strokeWidth = 6,
  flip = false,
  variant = 'wide', // 'wide' | 'tight' | 'underline'
}) {
  const paths = {
    wide: 'M2 40C140 95 360 95 500 40C600 0 700 0 798 38',
    tight: 'M2 24C60 48 180 48 250 24C310 2 370 2 428 22',
    underline: 'M2 14C50 26 150 26 200 14',
  }
  const viewBoxes = {
    wide: '0 0 800 70',
    tight: '0 0 430 50',
    underline: '0 0 202 28',
  }

  return (
    <svg
      viewBox={viewBoxes[variant]}
      className={className}
      style={flip ? { transform: 'scaleY(-1)' } : undefined}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d={paths[variant]}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
