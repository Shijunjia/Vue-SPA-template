<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      transitionName: ''
    }
  },
  watch: {
    $route (to, from) {
      this.transitionName = to.meta.index < from.meta.index ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style>
.slide-left-enter-active {
  transition: all .3s ease;
}
.slide-left-enter, .slide-left-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.slide-right-enter-active {
  transition: all .3s ease;
}
.slide-right-enter, .slide-left-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
