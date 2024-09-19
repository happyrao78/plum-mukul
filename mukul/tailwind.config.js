/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #1D0716 61.62%, #360828 112.03%)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        Chromatica: ['Chromatica-Thin', 'Chromatica-Bold'],  // Set 'Inter' as the default sans-serif font
      },
      fontSize: {
        base: ['24px', '29.05px'],  // Set default font size and line height
      },
    },
  },
  plugins: [],
}

