import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],  
  base: '/space-tourism-website-main-react/', // <-- Set your base path here

})
