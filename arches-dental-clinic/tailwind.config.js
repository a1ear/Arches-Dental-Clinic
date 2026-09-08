/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ─── Brand ──────────────────────────────────────────────────────────
        // Anchored on the Arches Dental Clinic logo:
        //   rust #7A290B  → primary-700  (wordmark, tooth outline, swoosh)
        //   tan  #BBA173  → secondary-500 ("DENTAL CLINIC", inner tooth accent)
        // Ramps hold the logo hue (16° / 38°) and taper saturation at the
        // light end so tints stay warm rather than turning neon.
        primary: {
          DEFAULT: '#7A290B',
          50: '#F9F2EF',
          100: '#F3DFD8',
          200: '#EBBEAD',
          300: '#E59476',
          400: '#E46232',
          500: '#C94412',
          600: '#9D350E',
          700: '#7A290B', // brand rust
          800: '#5B1F08',
          900: '#3D1405',
        },
        secondary: {
          DEFAULT: '#BBA173',
          50: '#F7F5F3',
          100: '#EDE9E3',
          200: '#E0D7C8',
          300: '#CEBEA1',
          400: '#C5AF89',
          500: '#BBA173', // brand tan
          600: '#A7874E',
          700: '#846B3E',
          800: '#604E2F',
          900: '#3F3320',
        },
        neutral: {
          DEFAULT: '#B7A392',
          50: '#FAF8F6',
          100: '#F3EEE9',
          200: '#E6DCD2',
          300: '#D2C2B2',
          400: '#B7A392',
          500: '#9A8470',
          600: '#7D6957',
        },
        ink: {
          DEFAULT: '#3A3A3A',
          deep: '#26201B',
          soft: '#5C5550',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          alt: '#F8F8F8',
          warm: '#FBF7F2',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        // Named, deliberate radius scale — replaces what used to be a mix
        // of rounded-3xl / rounded-4xl / arbitrary rounded-[2.5rem] /
        // rounded-[3rem] values used inconsistently for the same kind of
        // element. Three roles only:
        //   card     → standard content cards (services, reviews, FAQ, etc.)
        //   showcase → large hero/about images and the final CTA banner
        card: '1.75rem',
        showcase: '2.5rem',
      },
      boxShadow: {
        // Tinted with the brand rust rather than neutral black.
        soft: '0 4px 24px -4px rgba(61,20,5,0.08)',
        lift: '0 20px 48px -12px rgba(122,41,11,0.26)',
        card: '0 2px 16px -4px rgba(61,20,5,0.06)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
        float: 'float 6s ease-in-out infinite',
      },
      maxWidth: {
        content: '1280px',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
