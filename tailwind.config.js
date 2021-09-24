module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: { 
    debugScreens: {
       position: ['bottom', 'left']},
    extend: {
      fontFamily: {
        headline:['Oswald']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-debug-screens'),]
}
