module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './src/components/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'text': {
          'body': {
            '100': '#FFFFFF',
            '200': '#AFB2B1',
            '300': '#808080',
          },
          'heading': '#494D4B'
        },
        'items': {
          "line": '#E6E8EB',
          "shape": '#F7F8FA',
          "background": '#FFFFFF',
        },
        'primary': {
          'green': '#04D361',
          'purple': {
            '100': '#9F75FF',
            '200': '#8257E5',
            '300': '#6F48C9',
          },
        },
      },
      fontFamily: {
        'archivo': 'Archivo',
        'inter': 'Inter',
      },
      screens: {
        'sm': { 'min':'375px', 'max':'800px' }
      }
   },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
