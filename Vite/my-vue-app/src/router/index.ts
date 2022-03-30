import { createRouter, createWebHashHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path:'/login',
    name:'login',
    component: () => import('../page/Login/Login.vue')
  },
  {
    path:'/main',
    name:'main',
    component: () => import('../page/main/mian.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
