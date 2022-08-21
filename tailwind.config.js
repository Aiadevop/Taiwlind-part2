/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: ['./dist/**/*.html'],
    },
    
  darkMode: 'class', //or media depende de el modo que tengas en Windows
  content: [
    './dist/index.html',
    './dist/**/*.html',
  ],
  theme: {    
    debugScreens: {
      position: ['top','left'],
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
      }     
    },
  },
  plugins: [
    require("tailwindcss-debug-screens"),  
  ],

}
