module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "medium-turquoise": {
          "400": "#55DDE0",
        },
        "brilliant-rose": {
          "300": "#FF8FC3",
          "500": "#FC60A8",
        },
        "french-violet": {
          "100": "#E3C7FF",
          "400": "#A154EC",
          "600": "#7A28CB",
          "800": "#471777",
          "1000": "#12081C",
        },
      },
      fontSize: {
        ludicrous: "1000px",
      },
      fontFamily: {
        sans: ["Asap", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
