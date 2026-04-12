import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // REQUIRED for GitHub Pages — must match your repo name exactly
  base: '/Capstone-Project-Foai/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Content-hash filenames = automatic cache-busting on every build
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
})
