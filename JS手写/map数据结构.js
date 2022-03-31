let mapObj=new Map();
function app(){
 console.log('我是app')
}
mapObj.set("name",app);
mapObj.set("age",18);
mapObj.set('function',18);
// console.log(mapObj.size);
let obj={}
// console.log(mapObj.get("name"));
mapObj.set(obj,'obj');
mapObj.forEach((item,index)=>{
  // console.log(item,typeof index)
})


let wMap=new WeakMap();
wMap.set(mapObj,'mapObj78977');
console.log(wMap.get(mapObj));
console.log('mapObj',wMap);