/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(221deg, #C82A34 53.27%, rgba(200, 42, 52, 0.64) 100%)',
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
        fontsecondary: '#334155',
      },
      screens: {
        xs: '341px',
        s: '460px',
      },
    },
  },
  plugins: [],
};
