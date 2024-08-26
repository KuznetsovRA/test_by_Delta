import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/test_by_Delta/",
  build: {
    outDir: 'dist',  // Папка для финальной сборки
    assetsDir: 'assets',  // Папка для скриптов и стилей
  },
})
