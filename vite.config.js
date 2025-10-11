import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Ensure environment variables are available in production
  define: {
    'import.meta.env.VITE_WEB3FORMS_ACCESS_KEY': JSON.stringify(process.env.VITE_WEB3FORMS_ACCESS_KEY),
  },
  
  // Build configuration
  build: {
    // Generate source maps for debugging in production
    sourcemap: true,
    
    // Optimize for production
    minify: 'terser',
    
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
  }
})
