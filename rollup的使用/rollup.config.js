// module.exports={
//   //针对es模块打包
// }
 //针对es模块打包
export default{
  //入口
  input:'./src/main.js',
  //出口
  output:[
    {
      format:'umd',
      name:'whyttils',
      file:'./dist/why.umd.js'
     },
     {
      format:'cjs',
      file:'./dist/why.cjs.js'
     },
     {
      format:'amd',
      file:'./dist/why.amd.js'
     },
     {
      format:'es',
      file:'./dist/why.es.js'
     },
     {
      format:'iife',
      name:'whyUtils',
      file:'./dist/why.browser.js'
     }
  ]
}