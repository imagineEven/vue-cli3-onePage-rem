<template>
  <div id="app" class="wh_100 relative">
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
