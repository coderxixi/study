// 立即执行的debounce
function debounce(fn,delay,immediate=false){
  //1.定义一个定时器，保存上一次的定时器
    let timer=null;
    let inInvoke=false
  //2.真正执行的函数
   const _debounce=function(...args){
  //3.取消上一次的定时器
    if(timer) clearTimeout(timer);
  //判断是否需要立即执行
  if(immediate &&!inInvoke){
    fn.apply(this,args);
    inInvoke=true;
  }else{
 //延迟执行
 timer= setTimeout(()=>{
   //4.外部传入的真正的执行的函数
    fn.apply(this,args)
    inInvoke=false;
    },delay)
 }

  }
   // 封装一个取消功能
   _debounce.cancel=function(){
     if(timer) clearTimeout(timer);
     timern=null;
     isInvike=false;
   }
   return _debounce
  }