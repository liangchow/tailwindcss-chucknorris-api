import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: 'index.html', // This is needed if using index.html as entry
      output: {
        entryFileNames: 'app.js', // Outputs main JS file as app.js
      }
    },
    outDir: 'dist', // Default is 'dist', you can change this
    emptyOutDir: true,
  }
});