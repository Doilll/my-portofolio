/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'],
      },colors: {
        brutal: {
          bg: "#1A1A1A" ,
          card: "#F5F5F5" ,
          accent: "#00FF85" ,
          text: "#FF6B00",
          border: "#00FF85" ,
        }
      }
    },
  },
  plugins: [],
}

