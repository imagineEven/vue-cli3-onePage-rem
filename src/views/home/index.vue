<!-- home -->
<template>
  <div class="wh_100">
    <h1>home</h1>
    <van-button type="primary">主要按钮</van-button>
    <div class="font_size40 opacity50 nihao">nihao</div>
    <efooter></efooter>
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
    return {}
  },

  computed: {},

  mounted () {
    console.log(process.env)
  },

  methods: {}
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
</style>
