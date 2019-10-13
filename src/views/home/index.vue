<!-- home -->
<template>
  <div class="wh_100">
    <h1 @click="gogo">home</h1>
    <van-button type="primary" @click="clickto">刷新页面</van-button>
    <div class="wh_100 text px_35 flex_box flex_wrap space_between">
      <div 
      v-for="(item, index) in list" :key="index"
      :style="{'animation': 'show ' + ((index+1)*0.2+1) + 's 1'}"
      class="image"></div>
    </div>
  </div>
</template>

<script>
// import { api } from '@/config'
import efooter from '@/components/footer/footer'
import {
  Button
} from 'vant'
export default {
  components: {
    'van-button': Button,
    efooter,
  },

  data () {
    return {
      list: [1,1,1,1,1,1,1,11,1,]
    }
  },

  computed: {},

  mounted () {
    console.log('home 的生命周期')
    // console.log(process.env)
    // console.log('-------------home.vue-------------')
    // console.log('window.history',window.history)
    // console.log('document.referrer',window.document.referrer)
    // console.log('-------------home.vue-------------')
  },

  methods: {
    clickto() {
      // 这种刷新支持回退，
      // window.location.href = 'http://localhost:9018/app/user'
      // 这种也刷新支持回退，
      // window.location.reload();
    },
    gogo() {
      window.history.go(-1);
    }
  }
}

</script>
<style lang='scss' scoped>
@import '../../assets/css/variables';
h1 {
  background: red;
  width: 375px;
}
.nihao {
  color: $red;
}
.text {
  .content {
    height: 100%;
    width: 100%;
    background: red;
  }
  .image {
    height:300px;
    width: 300px;
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('../../assets/images/BasicsBg.png');
    // position: relative;
  }
}
</style>
