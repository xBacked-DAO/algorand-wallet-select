const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  prefix: 'ws-',
  purge: {
    mode: "all",
    content: ["./public/index.html", "./src/**/*.{js,jsx}"],
  },
  darkMode: "media",
  future: "all",
  theme: {
    colors: {
      ...colors,
      transparent: "transparent",
      gray: colors.blueGray,
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      container: { center: true },
    },
  },
  variants: { extend: {} },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/line-clamp")],
}
