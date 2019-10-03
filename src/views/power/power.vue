<template>
  <div class="scroll-wrapper">
    <div class="scroll-content">
      <div class="font_size40" v-for="(item, index) in list" :key="index">{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {list:[1,1,1,1,1,1,1,1,1,1,1,11,,11,1,1,1,1,1,,1,1,11,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,2,2,2,2,2,2,2,2]}
  },
  computed: {},
  created() {
    window.addEventListener('scroll',this.onScroll);
  },
  mounted () {
    console.log('scroll的生命周期')
  },
  methods: {
    onScroll() {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      console.log('监听滚动事件', scrollTop);
      // alert(111);
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
