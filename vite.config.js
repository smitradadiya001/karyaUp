import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'

const generateVersion = () => {
  return {
    name: 'generate-version',
    writeBundle() {
      const versionData = { version: Date.now().toString() };
      fs.writeFileSync('dist/version.json', JSON.stringify(versionData));
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    generateVersion(),
    
  ],
  assetsInclude: ['**/*.glb'],
  server: {
    host: true
  },
  preview: {
    host: true,
    allowedHosts: ["all", "karyaup-website.onrender.com", "karyaup.com", "onrender.com"]
    
  }
})

