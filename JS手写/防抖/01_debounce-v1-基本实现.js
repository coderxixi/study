// 简单实现一个防抖函数
function debounce(fn,delay){
//1.定义一个定时器，保存上一次的定时器
  let timer=null;
//2.真正执行的函数
 const _debounce=function(...args){
//3.取消上一次的定时器

  if(timer) clearTimeout(timer);
  timer= setTimeout(()=>{
  //4.外部传入的真正的执行的函数
    fn.apply(this,args)
   },delay)
 }

 return _debounce
}