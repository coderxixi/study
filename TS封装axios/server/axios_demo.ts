import axios,{AxiosResponse} from 'axios';
//axios的实例对象
axios.get('http://123.207.32.32:8000/home/multidata').then((res:AxiosResponse<any>)=>{
  console.log(res)
});
//Promise本身是可以有类型
new Promise<string>((resolve,reject)=>{
    resolve('hello;')
}).then((res)=>{

})

//axios的全局配置选项
axios.defaults.baseURL="http://httpbin.org"
axios.defaults.timeout=10000;
axios.defaults.headers

//axios.all
axios.all([
  axios.get('/get')
])
//6.axios的拦截器
//fn1:请求发送成功执行的函数
//fn2:请求发送失败执行的函数
//请求拦截
axios.interceptors.request.use((config)=>{
  //想做的一些操作
  //1.给请求添加token
  //2.给请求添加其他参数
  //3.loading的动画
  console.log('请求成功的拦截器')
  return config;
},(err)=>{
  console.log('请求失败的拦截器')
  return err;
})
//响应拦截
//fn3:数据响应成功(服务器正常的返回了数据)
//fn4:数据响应失败(服务器返回的数据有问题)
axios.interceptors.response.use((res)=>{
  //想做的一些操作
  //1.判断状态码
  //2.判断数据是否正确
  //3.loading的动画
  console.log('响应成功的拦截器')
  return res;
},(err)=>{
    console.log('响应失败的拦截器')
    return err;
})