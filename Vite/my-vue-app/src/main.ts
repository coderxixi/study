import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'
import App from './App.vue'
import {globalRegister} from './global/index'
import router from './router/index'
createApp(App)
.use(globalRegister)
.use(router)
.mount('#app')


