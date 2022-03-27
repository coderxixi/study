function add(x,y,z){
  x=x+2;
  y=y+2
  z=z+2
  return x+y+z
}
console.log(add(1,2,3));

function sum(x){
  x=x+2;
  return function(y){
    y=y+2;
    return function(z){
      return x+y+z
    }
  }
}
sum(1)(2)(3);



//逻辑的复用
function sum1(m,n){
    return m+n
}
function makeAdder(count){
   return function(num){
    return count+num 
   }
}
let addr5=makeAdder(5);
addr5(10);
addr5(20);
addr5(30);


//逻辑的复用02

function log(date,type,message){
    console.log(`${date.getHours()}:${date.getMiutes()} ${type} ${message}`)
}

log(new Date(),"INFO","hello world");
log(new Date(),"INFO","hello world")


//科里化优化
let log1=date=>type=>message=>{
  console.log(`${date.getHours()}:${date.getMiutes()} ${type} ${message}`)
}

var nowLog=log1(new Date());
nowLog("INFO")("hello world");

function add1(x,y,z){
  return x+y+z
}

//科里化的实现
function Xicurrying(fn){
  function curried(...args){
    //判断当前已经接受的参数的个数，可以参数本身需要接受的参数的是否已经一致了
    if(args.length>=fn.length){
     return fn.apply(this,args);
    }else{
      return function(...args2){
        return curried.apply(this,args.concat(args2));
      }
    }
     
    }
  return curried;
}

var currAdd=Xicurrying(add1);
currAdd(1,2,3)
currAdd(1)(2)(3);
