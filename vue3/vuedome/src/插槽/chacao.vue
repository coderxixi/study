<template>
  <div class="chacao">
    <h2>组件开始</h2>
    <slot>
      <i>我是默认的内容</i>
    </slot>
     <h2>组件结束</h2>
      <slot></slot>
      <slot></slot>
      <slot></slot>
    
  </div>
</template>

<script>
export default {
  data () {
    return {

 
    }
  }
}
</script>
 
<style sscoped>
  .chacao{
    position: relative;
    height: 250px;
  }
</style>