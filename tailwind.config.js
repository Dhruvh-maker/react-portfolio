/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-black": "#050510",
        "neon-blue": "#00f3ff",
        "neon-purple": "#bc13fe",
        "glass-white": "rgba(255, 255, 255, 0.05)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        "neon": "0 0 10px rgba(0, 243, 255, 0.5), 0 0 20px rgba(0, 243, 255, 0.3)",
      }
    },
  },
  plugins: [],
}
