<template>
  <div id="app" class="wh_100 relative">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" :key="routerKey"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" :key="routerKey"></router-view>
    <efooter v-if="$route.meta.footer"></efooter>
  </div>
</template>
<script>
import efooter from '@/components/footer/footer'
  export default {
    name: 'App',
    data() {
      return {
        routerKey: Date.parse(new Date())
      }
    },
    created() {
      // window.addEventListener('scroll',this.onScroll);
    },
    components: {efooter},
    provide() {
      return {
        reload: this.reload
      }
    },
    methods: {
      reload() {
        this.routerKey = Date.parse(new Date());
        console.log('key', this.routerKey);
      }
    },
    mounted() {
      console.log('this.$route',this.$route)
    },
  }

</script>
