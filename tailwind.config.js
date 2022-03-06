module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif"
      },

      colors: {
        'custom-blue' : '#061122',
        'custom-green' : '#42db7c',
        'custom-hover-green': '#48f188'
      }
    },
  },
  plugins: [],
}
