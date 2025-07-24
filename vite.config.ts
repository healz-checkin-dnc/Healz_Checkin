import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Alias para facilitar imports
    },
  },

  build: {
    target: 'es2022',     // Código moderno, menos polyfills
    sourcemap: true,      // Facilita debug pós-build
    outDir: 'dist',       // Pasta de saída padrão
    minify: 'esbuild',    // Minificador rápido e eficiente
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',   // Arquivos de entrada com hash para cache busting
        chunkFileNames: 'assets/[name].[hash].js',   // Arquivos em chunk
        assetFileNames: 'assets/[name].[hash].[ext]',// Assets como imagens e css
      },
    },
  },

  server: {
    port: 5173,   // Porta local padrão do Vite
    open: true,   // Abre navegador automaticamente
  },

  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
})
