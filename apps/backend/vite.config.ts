import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        // Externalize dependencies that shouldn't be bundled
        'pg',
        'awilix',
        '@medusajs/framework',
      ]
    },
    // Increase memory for build
    minify: process.env.NODE_ENV === 'production' ? 'terser' : false,
    // Disable source maps in production to save memory
    sourcemap: false,
  },
  // Optimize deps
  optimizeDeps: {
    exclude: ['@medusajs/framework']
  }
})