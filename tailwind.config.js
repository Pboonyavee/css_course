module.exports = {
  purge: {
    enabled : true,
    content: ['.dist/**/*.html'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: { 
    debugScreens: {
       position: ['bottom', 'left']},
    extend: {
      fontFamily: {
        headline:['Oswald']
      },
      colors: {
        maincolor: '#212f49'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-debug-screens'),]
}
