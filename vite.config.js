import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <--- Agregar esta línea

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss() // <--- Agregar esto a los plugins
  ],
})