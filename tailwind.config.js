/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Premium dark palette
        base: {
          950: '#080a12',
          900: '#0b0e18',
          800: '#111524',
          700: '#1a2036',
        },
        accent: {
          DEFAULT: '#6366f1', // indigo
          soft: '#818cf8',
          glow: '#a5b4fc',
        },
        teal: {
          DEFAULT: '#2dd4bf',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      maxWidth: {
        content: '72rem',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(60% 60% at 50% 0%, rgba(99,102,241,0.18) 0%, rgba(8,10,18,0) 70%)',
        'accent-gradient':
          'linear-gradient(135deg, #818cf8 0%, #6366f1 45%, #2dd4bf 100%)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out both',
      },
    },
  },
  plugins: [],
}
