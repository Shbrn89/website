/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Restrained editorial dark palette — one accent, used sparingly.
        base: {
          950: '#0a0a0b',
          900: '#111113',
          800: '#18181b',
          700: '#232326',
        },
        accent: {
          DEFAULT: '#c9a24b', // muted brass/gold — used only for small marks
          soft: '#d9bd77',
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
        serif: ['"Source Serif 4"', 'Georgia', 'Cambria', 'serif'],
      },
      maxWidth: {
        content: '72rem',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out both',
      },
    },
  },
  plugins: [],
}
