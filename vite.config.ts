import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(process.cwd(), 'index.html'),
      },
    },
  },
  server: {
    port: 5173
  },
  preview: {
    port: 10000
  }
}) 