<template>
  <div class="fixed_lb footer-wrapper w_100 flex_box footer">
    <div class="nihao"></div>
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

<style lang='scss'>
.footer {
  z-index: 1000;
  background: #ffffff;
}
.foot-item {
  height: 100px;
}
.nihao {
  width: 50px;
  background: linear-gradient(to right, #e66465, 20%, #9198e5);
  // z-index: 10001;
  animation: haha 6s ease-in infinite;
  position: relative;
  top: 0;
  left: 0;
  opacity: 0.3;
}
@keyframes haha
{
0%   {left:0px;}
50%   {left:700px;}
100% {left:0px;}
}
</style>
