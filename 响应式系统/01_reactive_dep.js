//收集依赖
class Dep{
  constructor(){
    this.subscribes=new Set();
  }
  addEffect(effect){
    this.subscribes.add(effect)
  }
  notify(){
    this.subscribes.forEach((effect)=>{
      effect();
    })
  }
}



const dep=new Dep()
const info ={counter:100};
function doubleCounter(){
  console.log(info.counter*2)
  }
dep.addEffect(doubleCounter)
info.counter++
dep.notify()