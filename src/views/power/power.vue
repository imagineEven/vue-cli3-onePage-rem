<template>
  <div class="scroll-wrapper">
    <div @click="gogo">抖动</div>

    

    <div class="my_60">
      <div id='card' ref='transitionEnd' :style="transformObj" class="f-c-c personal">asdf</div>
    </div>



    <div class="scroll-content">
      <div class="font_size40" v-for="(item, index) in list" :key="index">{{item}}</div>
    </div>
  </div>
</template>

<script>
import eheader from '@/components/eheader/eheader'
export default {
  data () {
    return {
      transformObj: {
        transform: 'translateX(-100%)',
        transition: '0',
      },
      list:[1,1,1,1,1,1,1,1,1,1,1,11,,11,1,1,1,1,1,,1,1,11,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,2,2,2,2,2,2,2,2]}
  },
  computed: {},
  components: {eheader},
  created() {
  },
  mounted () {
    console.log('scroll的生命周期');
    this.$refs.transitionEnd.addEventListener('transitionend', this.handle, false)
  },
  methods: {
    handle() {
      console.log('我什么时候执行')
      let opacity = getComputedStyle(this.$refs.transitionEnd,null)['opacity']
      if (opacity == 1) {
        this.transformObj = {
          transition: 0,
          opacity: 0,
        }
      } else {
        setTimeout(() => {
          this.transformObj = {
            transform: 'translateX(-100%)',
          }
        },0)
      }
    },
    gogo() {
      // window.history.go(-3);
      // console.log('我执行了吗？')
      this.transformObj = {
        transform: 'translateX(0)',
        opacity: 1,
        transition: '1s',
      }
      // this.$store.commit('app-info/SETROUTERQUERY');
    }
    // onScroll() {
    //   var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    //   console.log('监听滚动事件', scrollTop);
    //   // alert(111);
    // }
  }
}
</script>

<style lang='scss' scoped>
.personal {
  height: 60px;
  width: 100px;
  background: red;
  border-radius: 0px 50px 50px 0;
}
</style>
