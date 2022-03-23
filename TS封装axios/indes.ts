//service统一出口
import Xixirequest from "./server/request";
const requestApi=new Xixirequest({
  baseURL:"http://",
  timeout:10000,
  interceptors:{
    requestInterceptors:(config)=>{
      //想做的一些操作
      //1.给请求添加token
      //2.给请求添加其他参数
      //3.loading的动画
      console.log('请求成功的拦截器')
      return config;
    },
    requestInterceptorCatch:(err)=>{
      console.log('请求失败的拦截器')
      return err;
    },
    responseInterceptor:(res)=>{
      console.log('响应成功的拦截器')
          return res
    },
    responseInterceptorCatch:(err)=>{
      console.log('响应失败的拦截器')
      return err
    }
  }
})
export default requestApi;