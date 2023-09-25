/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#BC7AF9',
        dark: '#0f172a', 
        secondary: '#64748b',
      },
      backgroundImage: {
        clients: 'url("/dist/img/bg-clients.jpg")',
      },
    screens: {
      // 'xl': '1280px',
      '2xl': '1320px',
    }
    },
  },
  plugins: [],
}