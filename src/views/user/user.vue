<template>
  <div>
    user
    <br/>
    <div @click="clickChangeRouter">改变router里面的值</div>
    <br/>
    <div @click="clickRefresh">我想要刷新这个页面</div>
    <br/>
    <div class="mb_20" @click="clickStore">点击了状态管理</div>
    <br/>
    <div class="px_20 py_20 bc_orange inline_block" @click="tauchstart('shake')" :class="`animation-${animation}`">抖动</div>
    <div class="vw_100 vh_100 bc_4d pt_20">
      <div class="avart-circle px_10 py_10 bc_fff inline_block">
        <div class="user-avart animation_avart"></div>
      </div>
    </div>
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
    return {
      animation: ''
    }
  },
  computed: {
    ...mapState('app-info', ['footList'])
  },
  components: {eheader},
  mounted () {
    console.log('user的生命周期')
    this.$store.commit('app-info/SETROUTERQUERY');
    console.log('footList', this.footList);
    // console.log('-------------power.vue-------------')
    // console.log('window.history',window.history)
    // console.log('document.referrer',window.document.referrer)
    // console.log('-------------power.vue-------------')
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
    },
    tauchstart(value) {
      console.log('window.history', window.history.length);
      // window.history.back();
      window.history.go(-1);
      // this.animation = value;
      // setTimeout(() => {
      //   this.animation = ''
      // },1000)
    },
  },
}
</script>

<style lang='scss' scoped>
.user-avart {
  height: 100px;
  width: 100px;
  background-image: url('../../assets/images/BasicsBg.png');
  border-radius:50px;
  background-size: cover;
  background-position: center;
}
.avart-circle {
  border-radius:50%;
}
</style>
