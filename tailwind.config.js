/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { bg: '#F3F8FB', surface: '#FFFFFF', line: '#DCE8F0', accent: '#B45309', 'accent-soft': '#E6F1F8', glow: '#F2A900', navy: '#0B3C5D', ink: '#0A2536', muted: '#4F6577' },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        rise: { '0%': { opacity: 0, transform: 'translateY(24px)' }, '100%': { opacity: 1, transform: 'none' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
      },
      animation: { rise: 'rise .8s cubic-bezier(.2,.7,.2,1) both', float: 'float 6s ease-in-out infinite' },
    },
  },
  plugins: [],
}
