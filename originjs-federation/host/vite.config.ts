import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig(() => ({
	build: {
		target: 'esnext',
	},
	plugins: [
		federation({
			name: 'host-app',
			remotes: {
					remote_app: "http://localhost:4176/assets/remoteEntry.js",
			},
			shared: ['react', 'react-dom', '@mui/material', '@emotion/react', '@emotion/styled', '@mui/x-data-grid-premium']
		}),
		react(),
	],
}));