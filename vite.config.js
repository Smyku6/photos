import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Redirect /admin/ to /admin/index.html
    {
      name: 'admin-redirect',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/photos/admin' || req.url === '/photos/admin/') {
            req.url = '/photos/admin/index.html'
          }
          next()
        })
      }
    }
  ],
  base: '/photos/', // GitHub repo name - change if different
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  },
  // Ensure public files are copied as-is
  publicDir: 'public'
})
