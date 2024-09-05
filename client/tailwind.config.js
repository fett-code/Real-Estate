/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#1D3557',
        'custom-text': '#F1FAEE',
        'second-text': '#1D3557',
        'custom-hover': '#1D3557'
      },
      aspectRatio: {
        '3/4': '3 / 4',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover'],
    },
  },
  plugins: [],
}

