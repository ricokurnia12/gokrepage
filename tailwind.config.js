/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');
module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    extend: {
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(221deg, #C82A34 53.27%, rgba(200, 42, 52, 0.64) 100%)',
        'custom-gradient2':
          'linear-gradient(295deg, hsl(356deg 65% 47%) 0%, hsl(356deg 64% 49%) 29%, hsl(356deg 62% 50%) 48%, hsl(357deg 63% 51%) 61%, hsl(357deg 65% 52%) 69%, hsl(357deg 66% 53%) 75%, hsl(357deg 68% 55%) 80%, hsl(357deg 70% 56%) 83%, hsl(357deg 72% 57%) 86%, hsl(357deg 74% 58%) 89%, hsl(357deg 76% 59%) 91%, hsl(356deg 78% 60%) 94%, hsl(356deg 81% 61%) 96%, hsl(356deg 83% 63%) 98%, hsl(356deg 86% 64%) 100%)',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
      },
      colors: {
        primary: '#FF3A44',
        secondary: '#FFBD00',
        fontprimary: '#0f172a',
        fontsecondary: '#222831',
      },
      screens: {
        xs: '341px',
        s: '460px',
      },
    },
  },
  plugins: [],
});
