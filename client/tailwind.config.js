const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,js}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    
    extend: {
      colors: {
        'primary':'#800020',
        'secondary': '#ffffff',
        'chocolate': '#333333',
        'bgcolor':'#eeeeee',
        'hover':'#666666',
        'btlinks':'#799c79',
        "tcolor":'#333333',
        
      },
      fontFamily: {
        opensans: ['Open Sans', 'sans-serif'],
        prompt: ['Prompt', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

