/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
	content: [
		"./app/index.html",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"primary": { ...colors.blue, DEFAULT: colors.blue[500] },
				"success": { ...colors.green, DEFAULT: colors.green[500] },
				"warn": { ...colors.amber, DEFAULT: colors.amber[500] },
				"error": { ...colors.red, DEFAULT: colors.red[500] },
			}
		},
	},
	darkMode: "class",
	plugins: [],
};