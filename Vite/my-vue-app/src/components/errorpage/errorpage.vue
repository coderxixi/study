<template>
  <div class="errpage">
    <h1>您没有权限访问该页面,请联系管理员开通</h1>
    <img
      class="img"
      src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/ca1e08b7f30860aecb1b7bb31ae18e50.svg"
      style="margin: 50px 0px"
    />
    <el-button type="primary" @click="handleBlack"> 回到首页 </el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const route = useRouter()
    const handleBlack = () => {
      route.push({
        path: '/login'
      })
    }

    return {
      handleBlack
    }
  }
})
</script>

<style scoped lang="less">
.errpage {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .img {
    width: 400px;
    height: 400px;
  }
}
</style>
