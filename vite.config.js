import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src/')
      },
      {
        find: '@style',
        replacement: path.resolve(__dirname, 'src/style')
      },
      {
        find: '@store',
        replacement: path.resolve(__dirname, 'src/store')
      },
      {
        find: '@router',
        replacement: path.resolve(__dirname, 'src/router')
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components')
      },
      {
        find: '@assets',
        replacement: path.resolve(__dirname, 'src/assets')
      },
      {
        find: '@compositions',
        replacement: path.resolve(__dirname, 'src/compositions')
      },
      {
        find: '@api',
        replacement: path.resolve(__dirname, 'src/api')
      },
      {
        find: '@views',
        replacement: path.resolve(__dirname, 'src/views')
      }
    ]
  }
})
