/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        playwrite: ['"Playwrite AU QLD"', 'cursive'],
        nutino: ['"Nunito"', 'sans-serif'],
        quicksand: ['"Quicksand"', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        allan: ['"Allan"', 'serif'],
        pacifico: ['"Pacifico"', 'cursive'],
        lobster: ['"Lobster Two"', 'sans-serif']
      },
      boxShadow: {
        'frame': '0px 0px 18px 2px rgba(255, 255, 255, 0.2)',
        'about-page-header': '0px 0px 12px 12px rgba(0, 0, 0, 0.2)',
        'black-blend': '0px 0px 30px 30px rgba(0, 0, 0, 0.2)'
      },
      screens: {
        'card': '1055px',
        'xs': '440px'
      },
      colors: {
        'brim-blue': '#03045E',
        'accent-blue': '#0003D1',
        'edge-green': '#00ff48',
        'muted-foreground': '#64748b',
        'muted': '#f1f5f9',
        'white-bg-green': '#28af0d',
        'primary': '#03035d',
        'dark-blue': '#050536',
        'brim-text': '#05078c'
      },
      height: {
        max: 'max-content',
        min: 'min-content',
      }
    },
  },
  plugins: [],
}
