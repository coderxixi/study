import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import lodingdirectives from './自定义指令/hook/v-loding'
createApp(App).use(router).directive('loding',lodingdirectives)
.mount('#app')
