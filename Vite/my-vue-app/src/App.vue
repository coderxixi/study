<template>
  <div>
    <Index />
    <Steps>
      <Step>
        <h3>城市物流单</h3>
        <p>2022-03-11 14:28</p>
      </Step>
    </Steps>
    <Picker :isactive="isactive" @closeFn="closefn"> 6666 </Picker>
    <button @click="btnClick">点击显示</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import Index from '@/Home/index.jsx'
import Picker from 'cp/Picker/Picker.jsx'
import Steps from 'cp/steps/steps.jsx'
import Step from 'cp/step/step.jsx'
export default {
  components: {
    Index,
    Picker,
    Steps,
    Step
  },
  setup() {
    const isactive = ref(false)
    const btnClick = () => {
      isactive.value = !isactive.value
      console.log('6666')
    }
    const closefn = (arg) => {
      isactive.value = arg
      console.log('arg', arg)
    }
    return {
      btnClick,
      closefn,
      isactive
    }
  }
}
</script>

<style lang="less" scoped>
h3 {
  margin: 0;
  padding: 0;
}
p {
  margin: 0;
  padding: 0;
}
</style>
