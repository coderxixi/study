Function.prototype.mycall=function(obj){
  obj=obj||window
  obj.fn = this;
  if (typeof this !== "function") {
    throw new Error("Type error");
  }
  // 首先获取参数
  let args = [...arguments].slice(1);
  let result = null;
  result = obj.fn(...args);
  console.log('arg参数',args);
  return result
}


function fn(){
  console.log(this.name)
}


let obj={
  name:'刘嘻嘻'
}

fn.mycall(obj,18,19,20)