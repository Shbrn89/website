/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Premium dark palette
        base: {
          950: '#070912',
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
          soft: '#5eead4',
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
          'radial-gradient(60% 55% at 50% 0%, rgba(99,102,241,0.20) 0%, rgba(7,9,18,0) 70%)',
        'accent-gradient':
          'linear-gradient(135deg, #818cf8 0%, #6366f1 45%, #2dd4bf 100%)',
        'grid-faint':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(99,102,241,0.15), 0 20px 50px -20px rgba(99,102,241,0.45)',
        'glow-teal':
          '0 0 0 1px rgba(45,212,191,0.15), 0 20px 50px -20px rgba(45,212,191,0.35)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out both',
        'fade-in': 'fade-in 0.8s ease-out both',
        float: 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
