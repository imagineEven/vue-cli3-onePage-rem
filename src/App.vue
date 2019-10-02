<template>
  <div id="app" class="wh_100 relative">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <efooter v-if="$route.meta.footer"></efooter>
  </div>
</template>
<script>
import efooter from '@/components/footer/footer'
  export default {
    name: 'App',
    components: {efooter},
    mounted() {
      console.log('this.$route',this.$route)
    },
  }

</script>
