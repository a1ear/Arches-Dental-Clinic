/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D88918',
          50: '#FDF6EB',
          100: '#FBEAD2',
          200: '#F5D2A0',
          300: '#EFB96E',
          400: '#E29F3D',
          500: '#D88918',
          600: '#A66411',
          700: '#94590F',
          800: '#70430B',
          900: '#4C2D08',
        },
        secondary: {
          DEFAULT: '#E48A42',
          50: '#FDF3EB',
          100: '#FAE2CC',
          400: '#EAA468',
          500: '#E48A42',
          600: '#C66F2C',
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
        soft: '0 4px 24px -4px rgba(58,42,16,0.08)',
        lift: '0 20px 48px -12px rgba(184,111,19,0.28)',
        card: '0 2px 16px -4px rgba(58,42,16,0.06)',
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
