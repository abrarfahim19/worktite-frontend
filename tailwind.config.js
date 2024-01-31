/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        brand: '#E55E2C',
        brandBackground: '#F6F0EE',
        softDark: '#2C2C2C',
        secondary: '#FEF8F6',
        tertiary: '#FFF0EB',
        special: '#f4e1db',
      },
      fontSize: {
        h1: ['80px', { lineHeight: '80px', letterSpacing: '-0.032em' }],
        heading: ['40px', { lineHeight: '60px', letterSpacing: '-0.032em' }],
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        kaushan: ['Kaushan Script', 'cursive'],
        raleway: ['Raleway', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      gridTemplateColumns: {
        gallery: 'repeat(auto-fit, minmax(300px, 1fr))',
      },
    },
  },
  plugins: [],
};
