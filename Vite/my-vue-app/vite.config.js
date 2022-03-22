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
  plugins: [vue(),vueJsx({}), AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  }),],
  server: {
    open: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/page'),
      cp: path.resolve(__dirname, 'src/components')
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
