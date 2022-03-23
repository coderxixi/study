import type {AxiosResponse,AxiosRequestConfig} from 'axios'
export interface XixirequestHook {
  requestInterceptors?:(config:AxiosRequestConfig)=>AxiosRequestConfig
  requestInterceptorCatch?:(err:any)=>any
  responseInterceptor?:(res:any)=>any
  responseInterceptorCatch?:(err:any)=>any
}
export interface Xixiconfig extends AxiosRequestConfig{
  interceptors?:XixirequestHook,
  shouLoding?:boolean
}

