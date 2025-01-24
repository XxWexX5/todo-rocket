/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          600: "#1E6F9F",
          300: "#4EA8DE"
        },
        secondary: {
          600: '#5E60CE',
          300: '#8284FA'
        },
        neutral: {
          100: "#F2F2F2",
          200: "#D9D9D9",
          300: "#808080",
          400: "#333333",
          500: "#262626",
          600: "#1A1A1A",
          700: "#0D0D0D"
        },
        error: {
          500: "#E25858"
        }
      }
    },
  },
  plugins: [],
}