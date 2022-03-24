import type {AxiosRequestConfig} from 'axios';
export interface XirequestHook {  
  requestInterceptors?:(config:AxiosRequestConfig)=>AxiosRequestConfig
  requestInterceptorCatch?:(err:any)=>any
  responseInterceptor?:(res:any)=>any
  responseInterceptorCatch?:(err:any)=>any
}

export interface XirequestConfig extends AxiosRequestConfig{
  interceptors?:XirequestHook,
}