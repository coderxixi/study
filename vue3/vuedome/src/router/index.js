import {createRouter, createWebHashHistory,} from "vue-router"
// import Home from "../pages/Home.vue"
import About from "../pages/About.vue"
//配置映射关系
const routes=[
  {path:'/',redirect:'/home'},
  {
    path:'/home', 
    name:'home',
    meta:{
      name:'xixu'
    },
    component:()=>import("../pages/Home.vue")
   },
  {
    path:'/about',
    component:About
  },
  {
    path:'/user/abc', 
    name:'User',
    meta:{
      name:'xixu'
    },
    component:()=>import("../pages/User.vue")
   },
  
 
]
//创建一个路由对象router
const router=createRouter({
  routes,
  history:createWebHashHistory()
})
export default router