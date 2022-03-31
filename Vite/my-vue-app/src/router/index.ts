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
    component: () => import('../views/Login/Login.vue')
  },
  {
    path:'/main',
    name:'main',
    component: () => import('../views/main/mian.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('../components/errorpage/errorpage.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
