module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      mono: ['JetBrains Mono'],
      sans: ['Avenir', 'Helvetica', 'Arial']
    }
    // extend: {},
  },
  variants: {
    extend: {}
  },
  plugins: []
}