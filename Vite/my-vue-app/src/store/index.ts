import { defineStore } from 'pinia'
import {accountLoginRequest,requestUserMenusByRoleId,requestUserInfoById} from '../server/Login/index'
import LocalCache from '../utils/caceh'
import router from '@/router'
import type {ILoginState} from './config'
export const useStore= defineStore('main', {
     state:()=>{
      return {
        token:'',
        userInfo: {},
        userMenus:[],
        permissions: []
      }as ILoginState
     } ,
     actions:{
       //用户登录逻辑
       async registerUser(name:string,password:string){
         let res= await accountLoginRequest({name,password});
         let {id,token}=res.data
         this.token=token
         LocalCache.setCache('token', token)
         //请求用户信息
         let userInfo =await requestUserInfoById(id)
         console.log('userInfo',userInfo)
         this.userInfo=userInfo
         LocalCache.setCache('userInfo', userInfo)
          //请求菜单路径
         let menus= await requestUserMenusByRoleId(userInfo.data.role.id);
         this.userMenus=menus
         console.log('menus',menus)
         router.push('/main')
      }
      
     
     }
})