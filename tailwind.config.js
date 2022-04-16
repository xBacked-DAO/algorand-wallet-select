const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  prefix: "ws-",
  purge: {
    mode: "all",
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./stories/**/*.{js,ts,jsx,tsx,mdx}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      white: "white",
      black: "black",
      transparent: "transparent",
      gray: colors.blueGray,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
