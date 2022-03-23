//收集依赖
class Dep {
  constructor() {
    this.subscribes = new Set();
  }
  notify() {
    this.subscribes.forEach((effect) => {
      effect();
    })
  }
  depeend() {
    if (activeEffect) {
      this.subscribes.add(activeEffect)
    }
  }
}
const targetMap = new WeakMap()
function getDep(target, key) {
  //1.根据对象target取出对应的map对象
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap)
  }
  //2.取出具体的Dep对象
  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Dep();
    depsMap.set(key, dep)
  }
  return dep
}
//vue2对raw进行数据劫持

function reactive(raw) {
  Object.keys(raw).forEach(key => {
    let dep=getDep(raw,key);
    let value=raw[key]
    Object.defineProperty(raw, key, {
      get() {
       dep.depeend();
       return value
      },
      set(newValue) {
       value=newValue
        dep.notify()
      }
    })
  })
  return raw
}

let activeEffect = null;
function watchEffect(effect) {
  activeEffect = effect;
  effect()
  activeEffect = null;
}
const info = reactive({ counter: 100, name: '嘻嘻' });
const foo =reactive({ height: 1.88 });
watchEffect(function () {
  console.log('info.counter',info.counter * 9)
})
watchEffect(function () {
  console.log('info.name',info.name)
})
watchEffect(function () {
  console.log('foo.height',foo.height)
})
// info.counter++

foo.height = 'xialu'
// info.height='1999'

