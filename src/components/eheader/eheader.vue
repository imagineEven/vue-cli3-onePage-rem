<template>
  <div class="bc_orange fixed_lt w_100 flex_box flex-c-c header-wrapper" 
  :style="{'opacity': headerOpacity, 'height': headerHeight}">
    <div class="mt_10 mr_10 mb_10 ml_20">设置</div>
    <div class="mt_10 ml_auto mb_10 mr_20">我的</div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState('scroll-info', ['headerOpacity','headerHeight'])
  },
  mounted () {
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
.header-wrapper {
  height: 100px;
  transform-origin: top;
}
</style>
