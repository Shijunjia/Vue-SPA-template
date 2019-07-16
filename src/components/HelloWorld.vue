<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      这是本项目的一个示例组件 - HelloWorld
    </p>
    <h3>项目已应用</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>项目依赖</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Vue</a></li>
      <li><a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a></li>
      <li><a href="https://vuex.vuejs.org/" target="_blank" rel="noopener">Vuex</a></li>
      <li><a href="https://youzan.github.io/vant/" target="_blank" rel="noopener">Vant</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.hello {
  text-align: center
}
h3 {
  margin: 20px 0;
}
ul {
  list-style-type: none;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
