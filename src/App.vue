<template>
  <div id="app">
   <router-view>homepage</router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  }
}
</script>

<style lang="less">
  @import "assets/style/reset";
#app{
    width: 100%;
    height: 100%;
}
</style>
