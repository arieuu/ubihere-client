/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  daisyui: {
    themes: ["light"]
  },

  theme: {
    extend: {
      fontFamily: { // we name our custom font "tiempos"
        Odor: ['Odor', 'serif'],
        Lexend: ['Lexend', 'serif'],
      },

      colors: {
        YellowUbihere: ["#FBE662"],
        LightgrayUbihere: ["#F1EFEF"],
        DarkgrayUbihere: ["#828282"]
      }
    },
  },
  plugins: [
    require("daisyui"),
  ],
}

