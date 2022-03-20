import Loding from '../loding.vue';
import {createApp} from 'vue';

const lodingdirectives={
    mounted(el, binding) {
    console.log(getComputedStyle(el,null)['position'])  
    if(['relative','absolute','fixed'].indexOf(getComputedStyle(el,null)['position'])==-1){
      el.style.position='relative'
    }
    
      let app=createApp(Loding);
     const instend=app.mount(document.createElement('div'));
     el.instend=instend;
     if(binding.value){
       console.log('instend',instend)
       append(el)
     }else{
      remove(el)
     }
    },
    updated(el,binding) {
      console.log('updated',el.binding)
        if(binding.value!==binding.oldValue){
          binding.value?append(el):remove(el)
        }
    },
};
function append(el){
  el.appendChild(el.instend.$el)
}
function remove(el){
  el.removeChild(el.instend.$el)
}
export default lodingdirectives