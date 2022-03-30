import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
  pages: {
    index: {
        entry: 'src/main.ts'
    }
},
  plugins: [
    vue(),
    vueJsx({}),
  AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  }),],
  server: {
    open: true,
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:4000',
        rewrite: (path) => path.replace(/^\/api/, ''),
        changeOrigin: true
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'cp':path.resolve(__dirname, 'src/components'),
     '@utils': path.resolve(__dirname, 'src/utils'),
    }
  },
  build: {
    outDir: 'bulid',
    assetsDir: 'src/image'
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        charset: false
        // additionalData: '@import "./src/assets/style/global.less";',
      }
    }
  },
  
  
})
