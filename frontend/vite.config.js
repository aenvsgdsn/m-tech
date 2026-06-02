import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: false, // auto-pick next free port if 3000 is busy
    open: true,        // auto-open browser on start
  },
})
