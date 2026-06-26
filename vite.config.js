import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {  // ← function مش object
          if (id.includes('node_modules')) {
            if (id.includes('react-dom')) return 'react-dom'
            if (id.includes('@mui')) return 'mui'
            if (id.includes('framer-motion')) return 'motion'
            if (id.includes('swiper')) return 'swiper'
            if (id.includes('react-router')) return 'router'
            if (id.includes('react-icons')) return 'icons'
          }
        }
      }
    }
  }
})
