const userInfo={
   name:'xixi',
   age:18,
   
}

function getValues<T, K extends keyof T>(userInfo: T, keys: K[]): T[K][] {
  return keys.map(key => userInfo[key])
}

let pp= getValues(userInfo,['age']);
console.log('pp',pp)