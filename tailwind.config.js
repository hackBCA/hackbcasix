module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "medium-turquoise": "#55DDE0",
        "black-coffee": "#30292F",
        "brilliant-rose": "#FC60A8",
        "french-violet": "#7A28CB",
        "cyber-grape": "#494368",
        "wisteria": "#CCAAEE",
      },
      fontSize: {
        ludicrous: "1000px",
      },
      fontFamily: {
        sans: ["Asap", "ui-sans-serif", "system-ui", "sans-serif"],
      }
    },
  },
  plugins: [],
}
