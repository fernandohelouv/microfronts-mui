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
      name: 'remote-app',
      filename: 'remoteEntry.js',
      // Modules to expose
      exposes: {
          './data-grid-crud': './src/components/data-grid-crud',
      },
      shared: ['react', 'react-dom', '@mui/material', '@emotion/react', '@emotion/styled', '@mui/x-data-grid-premium']
    }),
    react(),
  ],
}));