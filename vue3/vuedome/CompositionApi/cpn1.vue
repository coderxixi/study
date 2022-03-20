<template>
  <div>
     <Home/>  
   {{age}}-{{name}}
   <button @click="btnClick">点击</button>
  </div>
</template>

<script>
import Home from './Home.vue'
import {ref,readonly,reactive,toRef,toRefs} from 'vue'
  export default {
    props:{
     
    },
    components:{
      Home
    },
     //setup函数的参数 props 父组件传过来的属性
  
     setup(props) {
      
         let pp=reactive({name:'刘茜茜',age:18});
         let {name,age}=toRefs(pp);
       const btnClick=()=>{
        //  age.value='刘嘻嘻';
         pp.name='5446564646';
         pp.age++
          
         };
       return {
         name,
         age,
         btnClick,
        
       }
     }
  }
</script>

<style  scoped>

</style>