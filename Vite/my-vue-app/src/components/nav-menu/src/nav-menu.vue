<template>
  <div class="nav-menu">
      <div class="logo">
        <img class='img' src="~@/assets/img/logo.svg" alt="logn" />
        <span class="title">vue3+ts+vite+pinia</span>
      </div>
      <el-menu
      class="el-menu-vertical"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <templat v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <!-- 二级菜单的可以展开的标题 -->
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <!-- 遍历里面的item -->
            <div v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleMenuItemClick(subitem)"
              >
                <i v-if="subitem.icon" :class="subitem.icon"></i>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </div>
          </el-sub-menu>
        </template>
        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </templat>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent,computed,ref} from 'vue'
import {useStore} from '../../../store/index'
import { useRouter, useRoute} from 'vue-router'
export default defineComponent({
   props: {
    collapse: {
      type: Boolean,
      default: false
    }
    },
  setup () {
    const router = useRouter()
    const route = useRoute()
    const store=useStore()
    // const menu = pathMapToMenu(userMenus.value, currentPath)
    // const defaultValue = ref(menu.id + '')
    const userMenus=computed(()=>{
      console.log('store.userMenus',store.userMenus)
      return store.userMenus
    })
    const handleOpen=()=>{

    }
   const handleClose=()=>{
   
   }
   const handleMenuItemClick=(subitem:any)=>{
     console.log(subitem);
      console.log('--------')
      router.push({
        path: subitem.url ?? '/not-found'
      })
   }
    return {
      handleOpen,
      handleClose,
      handleMenuItemClick,
      userMenus,
    
    
    }
  }
})
</script>

<style scoped lang="less">
.nav-menu{
  height: 100%;
  background: #001529;
.logo{
  display: flex;
  height: 28px;
  padding: 12px 10px 8px 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  .img{
    margin: 0 10px;
     height: 100%;
  }
  .title{
    font-size: 16px;
    font-weight: 700;
    color: white;
  }

}

}
</style>