/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-gold": '#CDAA34'
      },
      fontFamily: {
        'DancingScript': ['"Dancing Script"', 'ui-serif', 'Georgia'],
        'Lora': ["Lora", 'ui-serif', 'Georgia']
      }
    },
    screens: {
      'sm': '360px',
      'md': '768px',
      'lg': '1080px',
      'xl': '1280px',
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};