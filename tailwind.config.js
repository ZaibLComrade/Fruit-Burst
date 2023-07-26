/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
	  colors: {
		  'custom-coral-red': '#F85559',
		  'custom-black': '#121212',

	  },
    extend: {},
  },
  plugins: [require("daisyui")],
}

