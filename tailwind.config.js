/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        "pure-black": "#000000",
        "surface": "#0C0C0C",
        "surface-light": "#1A1A1A",
        "border-color": "rgba(255, 255, 255, 0.1)",
        "gradient-start": "#ff4d4d",
        "gradient-mid": "#ff007f",
        "gradient-end": "#ff8800",
        "ribbon-red": "#d91e1e",
        "ribbon-crimson": "#b31212",
        "text-muted": "#A1A1AA"
      },
      backgroundImage: {
        'sunset-gradient': 'linear-gradient(to right, #ffcf75, #ff5c5c, #e81cff)',
      },
      boxShadow: {
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.5)",
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}
