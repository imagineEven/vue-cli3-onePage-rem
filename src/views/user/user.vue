<template>
  <div>
    user
    <br/>
    <div @click="clickChangeRouter">改变router里面的值</div>
    <br/>
    <div @click="clickRefresh">我想要刷新这个页面</div>
    <br/>
    <div @click="clickStore">点击了状态管理</div>
    <eheader></eheader>
  </div>
</template>

<script>
	import {
		mapState,
		mapActions
	} from "vuex";
  import eheader from '@/components/eheader/eheader'
export default {
  data () {
    return {}
  },
  computed: {
  },
  components: {eheader},
  mounted () {
    console.log('user的生命周期')
  },
  inject: ['reload'],
  methods: {
    ...mapActions('scroll-info', ['nihao']),
    clickChangeRouter() {
      this.$route.meta.keepAlive = false;
      console.log(this.$route.meta.keepAlive);
    },
    clickRefresh() {
      this.reload();
      console.log('执行了刷新的方法')
    },
    clickStore() {
      this.nihao();
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
