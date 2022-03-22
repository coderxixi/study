<template>
  <div>
    <!-- <router-view></router-view> -->
    <el-row class="mb-4">
    <el-button plain>Plain</el-button>
    <el-button type="primary" plain>Primary</el-button>
    <el-button type="success" plain>Success</el-button>
    <el-button type="info" plain>Info</el-button>
    <el-button type="warning" plain>Warning</el-button>
    <el-button type="danger" plain>Danger</el-button>
    </el-row>
  </div>
</template>

<script>

// import { ref } from 'vue'
// import Index from '@/Home/index.jsx'
// import Picker from 'cp/Picker/Picker.jsx'
// import Steps from 'cp/steps/steps.jsx'
// import Step from 'cp/step/step.jsx'

export default {
  components: {
  
  },
  setup() {
    // const isactive = ref(false)
    // const btnClick = () => {
    //   isactive.value = !isactive.value
    //   console.log('6666')
    // }
    // const closefn = (arg) => {
    //   isactive.value = arg
    //   console.log('arg', arg)
    // }
    // return {
    //   btnClick,
    //   closefn,
    //   isactive
    // }
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
