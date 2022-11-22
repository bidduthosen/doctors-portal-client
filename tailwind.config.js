/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui:{
    themes:[
      {
        doctorsPortalTheme:{
          primary: '#0FCFEC',
          "base-100" : "#FFFFFF",
          success : "#19D3AE",
          naturel : '#3A4256',
          danger: '#e11d48',
          "light": '#FFFFFF',
          dark : "#000000"
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
