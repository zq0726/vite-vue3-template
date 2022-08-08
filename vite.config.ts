import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    host: '0.0.0.0',
    port: 1236
  },
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
        additionalData: `@import "./src/assets/css/base.scss";`
      }
    }
  },
  plugins: [vue()]
})
