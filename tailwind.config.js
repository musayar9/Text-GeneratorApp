/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: ["./src/**/*.{html,js,jsx}", "./public/index.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors:{
        dark:'#222222'
      }
    },
  },
  plugins: [],
}
