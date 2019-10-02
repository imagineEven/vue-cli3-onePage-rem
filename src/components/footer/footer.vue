<template>
  <div class="fixed_lb footer-wrapper w_100 flex_box footer">
    <div v-for="(foot,index) in footList" 
    :key="index" 
    class="flex_1 foot-item">
      <router-link class="w_100 h_100 flex-c-c" :to="foot.path">{{foot.name}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      footList: [
        {name: '首页', path: '/'},
        {name: '滚动', path: '/power'},
        {name: '我的', path: '/user'},
      ]
    }
  },
  computed: {},
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang='scss' scoped>
.footer {
  z-index: 1000;
  background: #ffffff;
}
.foot-item {
  height: 100px;
}
</style>
