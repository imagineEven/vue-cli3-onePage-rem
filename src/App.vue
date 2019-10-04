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
import {mapActions} from 'vuex'
  export default {
    name: 'App',
    data() {
      return {
        routerKey: Date.parse(new Date()),
        isScrolling: false,
        timeOut: null,
      }
    },
    created() {
      window.addEventListener('scroll',this.onScroll)
    },
    components: {efooter},
    provide() {
      return {
        reload: this.reload,
        debounce: this.debounce,
      }
    },
    methods: {
      ...mapActions('scroll-info', ['onScroll']),
      // 节流防抖函数
      debounce(time, fun) {
        if (this.isScrolling) return;
        this.timeOut && clearTimeout(this.timeOut);
        this.isScrolling = true;
        this.timeOut = setTimeout(() => {
          fun()
          this.isScrolling = false;
        },time)
      },
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
