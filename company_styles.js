/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')


module.exports = {    
  content: [
    './dist/index.html',
    './dist/**/*.html',
  ],
  theme: {    
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,
      blue: colors.blue,
      yellow: colors.yellow,
      gray: colors.slate,
      turquoise: colors.cyan,
      green: colors.lime,
      red: colors.rose,
      },
      
    extend: {
      fontFamily:{
        headline:['Montserrat-ExtraLight'],
        montneg:['Montserrat-Negrita'],
        montnegruesa:['Montserrat-Medium'],
        rubik:['RubikDistressed-Regular'],

      },
      colors:{
        mainColor:'#1E293B'
      },   
    },
  },
}
