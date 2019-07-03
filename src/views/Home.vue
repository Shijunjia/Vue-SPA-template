<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Vue.js游乐场"/>
    <!-- 一个 vant button 组件 -->
    <van-button to="/about">关于本项目</van-button>
  </div>
</template>

<script>
// @ 指向 /src
import HelloWorld from '@/components/HelloWorld.vue'

// 导入一个@/request/api.js中暴露出的接口
import { apiName } from '@/request/api.js'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  created: function () {
    // 使用接口
    apiName()
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<!-- 添加 "scoped" 属性把样式限制在组件内 -->
<style scoped>
img {
  width: 100%;
  max-width: 1280px;
}
button {
  margin-top: 40px;
}
</style>
