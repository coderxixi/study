<template>
 <el-form label-width="60px">
    <el-form-item label="用户名" prop="num">
      <el-input v-model="user.name"/>
    </el-form-item>
    <el-form-item label="密码" prop="code">
        <el-input v-model="user.password"/>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent,reactive} from 'vue'

export default defineComponent({
  setup () {
     let user=reactive({
         name:'',
         password:''
     })

    return {
      user
    }
  }
})
</script>

<style scoped>

</style>