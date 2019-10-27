<template>
  <div>
   nihao
  </div>
</template>

<script>
	import {
		mapState,
		mapActions
	} from "vuex";

export default {
  data () {
    return {
    }
  },
  computed: {

  },
  mounted () {
    this.initData();
  },
  inject: ['reload'],
  methods: {
    // 延迟函数
    async delay(time) {
      return await new Promise((resolve, reject) => {
        setTimeout(resolve,time)
      })
    },
    // 调用接口，得到数据；
    async initData() {
      let res = await this.getData();
      if (res.length) {
        // 有数据循环做动画
        this.loop(res);
      } else {
        // 无数据等待十秒；
        await this.delay(10000);
        this.initData();
      }
      console.log('res', res);
    },
    async loop(res) {
      for(let i = 0; i<res.length; i++){
        await this.delay(3000);
        console.log('在这里做每三秒执行的动画');
      };
      this.initData();
    },

    // 模拟接口请求
    async getData() {
      let data = [
        {name: 'even'},
        {name: 'levi'},
        {name: 'baoluo'},
        {name: 'ecr'},
        {name: 'klous'},
      ]
      return await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(data)
        },2000)
      })
    }
  },
}
</script>

<style lang='scss' scoped>

</style>
