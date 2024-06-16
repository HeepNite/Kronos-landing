/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#030c14",
          100: "#2997FF",
        },
        titanium: {
          light: 'rgb(105, 88, 66)',
          DEFAULT: 'rgb(111, 102, 85)',
          dark: 'rgb(77, 70, 60)',
        },

        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570"
        },
        zinc: "#101010",
        gold:'#8d6d2d',
      },
      backgroundImage: theme => ({
        'titanium-gradient': `linear-gradient(135deg, ${theme('colors.titanium.light')} 0%, ${theme('colors.titanium.DEFAULT')} 50%, ${theme('colors.titanium.dark')} 100%)`,
      }),
    },
  },
  plugins: [],
}