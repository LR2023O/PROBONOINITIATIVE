/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pbi: {
          900: '#123822',
          800: '#1a4d2e',
          700: '#1f6b3a',
          600: '#2a8049',
          500: '#3a9a5c',
          300: '#8cc9a2',
          200: '#bfe0cb',
          100: '#e6f2ea',
          50: '#f4faf6',
        },
        sand: '#f8f6f1',
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        loadingBar: {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(200%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        bounceDot: {
          '0%, 80%, 100%': { transform: 'translateY(0)', opacity: '0.5' },
          '40%': { transform: 'translateY(-4px)', opacity: '1' },
        },
        cycleText: {
          '0%': { opacity: '0' },
          '8%': { opacity: '1' },
          '30%': { opacity: '1' },
          '38%': { opacity: '0' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
        fadeIn: 'fadeIn 0.4s ease-out forwards',
        loadingBar: 'loadingBar 1.8s ease-in-out infinite',
        bounceDot: 'bounceDot 1.2s ease-in-out infinite',
        cycleText: 'cycleText 4.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
