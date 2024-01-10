/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        prompt:['Prompt','sans-serif']
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 100px rgba(0, 0, 0, 0.25)',
            '0 45px 100px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  plugins: [],
}

