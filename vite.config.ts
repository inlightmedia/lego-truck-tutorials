import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Or '/your-app-name/' if deployed in a subdirectory
  plugins: [react(), tailwindcss()],
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.png', '**/*.gif'], // Add file types to be treated as assets
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
