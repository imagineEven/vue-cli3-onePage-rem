

// 给mutations的方法定义别名
const mutationTypes = {
  // 设置headerOpacity的值 setHeaderOpacity
  SETHEADEROPACITY: 'SETHEADEROPACITY',
  // 设置heaserHeight值， set设置headerHeight值，
  SETHEADERHEIGHT: 'SETHEADERHEIGHT',
};

function getInitState() {
  return {
    headerOpacity: 0,
    headerHeight: 0,
  }
}
let actions = {
  onScroll({commit, state}) {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      let value =  (scrollTop)/200;
      let height = (scrollTop*5)/20 + 'px'
      if (value > 1) {
        if (state.headerOpacity == 1) return ;
        commit(mutationTypes.SETHEADEROPACITY, 1);
        commit(mutationTypes.SETHEADERHEIGHT, '50px');
        return;
      }
      console.log('111', scrollTop);
      commit(mutationTypes.SETHEADEROPACITY, value);
      commit(mutationTypes.SETHEADERHEIGHT, height);
  }
}
let mutations = {
  [mutationTypes.SETHEADEROPACITY](state, value) {
    state.headerOpacity = value;
  },
  [mutationTypes.SETHEADERHEIGHT](state, value) {
    state.headerHeight = value;
  }
}
let getters = {}
let module = {
  namespaced: true,
  actions,
  mutations,
  state: getInitState(),
  getters,
}

export default module;