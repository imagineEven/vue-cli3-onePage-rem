<!-- home -->
<template>
  <div>
    <h1>home</h1>
    <van-button type="primary">主要按钮</van-button>
    <div class="font_size40 opacity50 nihao">nihao</div>
  </div>
</template>

<script>
// import { api } from '@/config'
import {
  Button
} from 'vant'
export default {
  components: {
    'van-button': Button
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
