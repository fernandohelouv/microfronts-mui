import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {federation} from '@module-federation/vite'
import {dependencies} from './package.json'

// https://vite.dev/config/
export default defineConfig(() => ({
	build: {
		target: 'esnext',
	},
	plugins: [
		federation({
			name: 'host',
			manifest: true,
			remotes: {
				remote: {
					type: 'module',
					name: 'remote',
					entry: 'http://localhost:4174/remoteEntry.js',
					entryGlobalName: 'remote',
					shareScope: 'default',
				},
			},
			// exposes: {},
			filename: 'remoteEntry.js',
			shared: {
				react: {
					requiredVersion: dependencies.react,
					singleton: true,
				},
				'react-dom': {
					requiredVersion: dependencies['react-dom'],
					singleton: true,
				},
				'@mui/material': {
					requiredVersion: dependencies['@mui/material'],
					singleton: true,
				},
				'@mui/icons-material': {
					requiredVersion: dependencies['@mui/icons-material'],
					singleton: true,
				},
				'@emotion/react': {
					requiredVersion: dependencies['@emotion/react'],
					singleton: true,
				},
				'@emotion/styled': {
					requiredVersion: dependencies['@emotion/styled'],
					singleton: true,
				},
				'@mui/x-data-grid-premium': {
					requiredVersion: dependencies['@mui/x-data-grid-premium'],
					singleton: true,
				},
			},
		}),
		react(),
	],
}));