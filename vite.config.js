import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: './', // relative paths so it works under a GitHub Pages subpath
  plugins: [react()],
  server: { host: true }, // so a phone on the same Wi-Fi can open the dev server
})
