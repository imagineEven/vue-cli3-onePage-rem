<!-- home -->
<template>
  <div class="wh_100">
    <h1>home</h1>
    <van-button type="primary">主要按钮</van-button>
    <div class="wh_100 text px_35 flex_box flex_wrap space_between">
      <img src="@/assets/images/BasicsBg.png" 
      v-for="(item, index) in list" :key="index"
      :style="{'animation': 'show ' + ((index+1)*0.2+1) + 's 1'}"
      class="image"></img>
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
    // console.log(process.env)
    console.log('home的生命周期')
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
.text {
  .content {
    height: 100%;
    width: 100%;
    background: red;
  }
  .image {
    height:300px;
    width: 300px;
  }
}
	@keyframes show {
		0% {
			transform: translateY(-50px);
		}

		60% {
			transform: translateY(40upx);
		}

		100% {
			transform: translateY(0px);
		}
	}
</style>
