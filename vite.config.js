import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/photos/', // GitHub repo name - change if different
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
})
