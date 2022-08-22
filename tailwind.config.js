/** @type {import('tailwindcss').Config} */

module.exports = {  
  presets: [
    require('./company_styles')
  ],
  corePlugins: {
    //Dentro de aqui desactivamos las clases de tailwind que queramos que queramos.
    //float:false,
  },
  darkMode: 'class', //or media depende de el modo que tengas en Windows
  content: [
    './dist/index.html',
    './dist/**/*.html',
  ],
  theme: {
    debugScreens: {
      position: ['top', 'left'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem',
        sm: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl':'4rem'
      },
    },
    extend: {

    },
  },
  variants: {
     extend:{
      width:['hover'],      
     },
     //así puedo borrar opciones de las variables
     backgroundColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
  },
  plugins: [
    require("tailwindcss-debug-screens"),
  ],

}
