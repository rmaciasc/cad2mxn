import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({registerType: "autoUpdate", 
  devOptions: {
    enabled: true
  },
  mode:'development',
  includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
  manifest: {
  short_name: "CAD Converter",
  name: "CAD Converter",
  icons: [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "android-chrome-192x192",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "android-chrome-512x512",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  start_url: ".",
  display: "standalone",
  theme_color: "#000000",
  background_color: "#ffffff"
  }})],
})
