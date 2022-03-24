import axios from 'axios';
import { AxiosInstance } from 'axios'
import { XirequestHook, XirequestConfig } from './type'
//创建一个类封装请求
class Xirequest {
  instance: AxiosInstance
  interceptors: XirequestHook
  constructor(config: XirequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors
    //单个实例添加拦截器
    this.instance.interceptors.request.use(
      this.interceptors.requestInterceptors,
      this.interceptors.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors.responseInterceptor,
      this.interceptors.responseInterceptorCatch
    );
    //添加所有实例的都有的拦截器
    this.instance.interceptors.request.use((config) => {
      console.log('所有的实例都有的请求拦截器:请求拦截');
    }, (err) => {
      console.log('所有的实例都有的请求拦截器:请求拦截失败');
    })
    this.instance.interceptors.response.use((res) => {
      console.log('所有的实例都有的响应拦截器:响应成功拦截');
      return res.data
    }, (err) => {
      console.log('所有的实例都有的拦截器:响应失败拦截');
    })
  }
  request<T>(config: XirequestConfig): Promise<any> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config)
      }
      this.instance.request<any, T>(config).then((res) => {
        if (config.interceptors?.responseInterceptor) {
          res = config.interceptors.responseInterceptor(res)
        }
        resolve(res)
        console.log(res)
      })
    })

  }
  get<T>(config: XirequestConfig): Promise<any> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: XirequestConfig): Promise<any> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  patch<T>(config: XirequestConfig): Promise<any> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default Xirequest