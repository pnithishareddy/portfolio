/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { bg: '#FAF8F5', surface: '#FFFFFF', line: 'rgba(28,25,23,0.1)', accent: '#0F766E', glow: '#10B981' },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
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
