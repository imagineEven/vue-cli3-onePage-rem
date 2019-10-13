import Vue from 'vue';
const mutationTypes = {
  // 改变路由传递参数的方法，
  SETROUTERQUERY: 'SETROUTERQUERY',
};

const state = {
  footList: [
    {name: '首页', path: '/'},
    {name: '滚动', path: '/power', query:{name:'even'}},
    {name: '我的', path: '/user'},
  ]
}

const mutations = {
  [mutationTypes.SETROUTERQUERY] (state) {
    Vue.set(state.footList[1].query, 'name', 'levi');
  }
}

const actions = {
   
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
