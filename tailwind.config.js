/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {

      colors: {
        'dark-main': '#121212',
        'dark-second': '#535353',
        'dark-ft': '#FFFFFF'
      },

      animation: {
        "meteor-effect": "meteor 2s linear infinite " ,
        "slow-spin" : "spin 5s linear infinite"
      },
      
      keyframes: {

        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },

        },
      },

    },
  },
  plugins: [],
}

