module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif"
      },

      colors: {
        'custom-blue' : '#061122',
        'custom-orange' : '#F04024'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
