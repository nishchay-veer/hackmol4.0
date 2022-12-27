module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screen:{
        'breakpoint':'859px'
     
      },
      boxShadow:{
        '3xl':'5px 5px black',
      }
    },
  },
  plugins: [],
}

