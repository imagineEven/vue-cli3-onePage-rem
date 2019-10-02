<template>
  <div>
    user
    <br/>
    <div @click="clickChangeRouter">改变router里面的值</div>
    <br/>
    <div @click="clickRefresh">我想要刷新这个页面</div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  mounted () {
    console.log('user的生命周期')
  },
  methods: {
    clickChangeRouter() {
      this.$route.meta.keepAlive = false;
      console.log(this.$route.meta.keepAlive);
    },
    clickRefresh() {
      console.log('执行了刷新的方法')
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
