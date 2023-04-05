/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
	content: [
		"./index.html",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"primary": { ...colors.blue, DEFAULT: colors.blue[500] }
			}
		},
	},
	plugins: [],
};