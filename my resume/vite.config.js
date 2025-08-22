import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server:{
    allowedHosts:[
      "processed-appears-guatemala-sunglasses.trycloudflare.com",
    ]
  }
})
