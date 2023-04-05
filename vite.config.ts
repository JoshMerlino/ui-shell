import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [ react() ],
	root: "app",
	publicDir: "static",
	build: {
		outDir: "../public_html",
		emptyOutDir: true,
	},
	server: {
		port: 8080,
		hmr: {
			protocol: "ws"
		}
	}
});
