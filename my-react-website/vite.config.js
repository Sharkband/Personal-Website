import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/*',
          dest: '.' // copy into root of dist
        }
      ]
    })
  ],
  server: {
    host: '0.0.0.0',
    port: 80
  },
})


