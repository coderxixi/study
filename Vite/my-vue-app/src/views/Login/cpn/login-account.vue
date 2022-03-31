<template>
  <el-form label-width="80px" :rules="rules" :model="user" ref="formRef">
    <el-form-item label="用户名" prop="name">
      <el-input v-model="user.name" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="user.password" />
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/account-config'
import { ElForm } from 'element-plus'
import LocalCache from '../../../utils/caceh'
import { useStore } from '../../../store/index'
export default defineComponent({
  setup() {
    const store=useStore()
    let user = reactive({
      name:LocalCache.getCache('name')?? '',
      password: LocalCache.getCache('password')?? ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAction =async (isKeepPassword:boolean) => {
      formRef.value?.validate(async(valid) => {
        console.log('valid', valid)
        if (valid) {
          //判断是否需要记住密码
          if(isKeepPassword){
            //本地缓存
            LocalCache.setCache('name',user.name);
            LocalCache.setCache('password',user.password);
          }else{
            //清除本地缓存
            LocalCache.deleteCache('name');
            LocalCache.deleteCache('password');
          }
       
          store.registerUser(user.name,user.password)
          console.log('登录成功')
        }else{
          console.log('登录失败')
        }
      })
    }
    return {
      user,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped></style>
