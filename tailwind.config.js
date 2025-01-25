/** @type {import('tailwindcss').Config} */

import { colors } from "./src/utils/colors"

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors
    },
  },
  plugins: [],
}