<template>
  <div class="fixed_lb footer-wrapper w_100 flex_box footer">
    <div v-for="(foot,index) in footList" 
    :key="index" 
    class="flex_1 foot-item">
      <router-link class="w_100 h_100 flex-c-c" :to="{'path':foot.path,'query':foot.query}">{{foot.name}}</router-link>
    </div>
  </div>
</template>

<script>
import {
  mapState,
  mapActions
} from "vuex";
export default {
  data () {
    return {
      // footList: [
      //   {name: '首页', path: '/', query:{name:'even'}},
      //   {name: '滚动', path: '/power'},
      //   {name: '我的', path: '/user'},
      // ]
    }
  },
  computed: {
    ...mapState('app-info', ['footList'])
  },
  mounted () {
    console.log('footList', this.footList);
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
