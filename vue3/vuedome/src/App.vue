

<template>
 <div>
   <!-- <h2>hahah</h2>
  <Inpt/>
  <Chacao>
    <div>1</div>
  </Chacao>
  <Chacao>

   <Inpt/>
  </Chacao> -->
   <!-- <Chacao v-loding='true'>

  </Chacao>
 <Navbar v-loding='true'>
   <template v-slot:left>
       <button>按钮</button>
   </template>
    
 </Navbar>
 <Cpn/>
 {{age}}
 <button  @click="togglefn">切换</button> -->
  
 <ShareSheet/>
 <div class="van-cell">
   <div class="van-cell-item">分享面板</div>
   <span class="van-cell-span"><svg t="1646292567858" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1606" width="32" height="32"><path d="M326.46133845 220.54667653l186.87199488 249.16265711 186.87199488-249.16265712h286.53705524l-460.95091604 622.90664695-460.95091606-622.90664695h261.6207871z" fill="" p-id="1607"></path></svg></span>
 </div>
 </div>
</template>
<script>
// import Inpt from './组件通信/Inject.vue'
// import Chacao from './插槽/chacao.vue'
// import Navbar from './插槽/Navicat.vue'
// import Cpn from '../CompositionApi/cpn1.vue'
import {computed} from 'vue';
import ShareSheet from './components/ShareSheet.vue'
export default{
  data(){
    return{
      names:['1','2','3','4','5'],
      isloding:false,
      age:18
    }
  },
 
  provide(){
    return{
    name:'why',
    age:18,
    length:computed(()=>this.names.length)
    }
   
  },
 
  components:{
  //  Inpt,
  //  Chacao,
  //  Navbar,
  //  Cpn
  ShareSheet
  },
  methods: {
    togglefn(){
      console.log('6666')
      this.isloding=true;
      this.age++
    }
  },
}
</script>
<style>
html,body{
 background-color: #2c3e50;
  height: 100%;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 margin-top: 350px
 
}
#app div{
  margin: 0px auto;
}
.van-cell{
  position: relative;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 10px;
    overflow: hidden;
    color: #323233;
    font-size: 14px;
    line-height: 14px;
    background: #fff;
    width: 350px;
    display: flex;
    align-items: center;
    border-radius: 12px;
    box-sizing: border-box;
}
.van-cell .van-cell-item{
  flex: 1;
  text-align: start;
}
.van-cell .van-cell-span{
  display: inline-block;
  width: 50px;
  height: 50px;
  line-height: 50px;
  display: flex;
  align-items: center;
}
.relative{
  position: relative;
}
</style>
