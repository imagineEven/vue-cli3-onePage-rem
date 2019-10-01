<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
  export default {
    name: 'App',
    mounted() {
      console.log('this.$route',this.$route)
    },
  }

</script>
