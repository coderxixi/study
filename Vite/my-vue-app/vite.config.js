import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({})
  ],
  server:{
    open:true
  },
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'src/page'),
      'cp':path.resolve(__dirname,'src/components')
    }
  },
  build:{
    outDir:'bulid',
    assetsDir:'src/image'
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        charset: false,
        // additionalData: '@import "./src/assets/style/global.less";',
      },
    },
  },
})
