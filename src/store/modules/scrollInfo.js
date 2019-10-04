

// 给mutations的方法定义别名
const mutationTypes = {
  // 设置headerOpacity的值 setHeaderOpacity
  SETHEADEROPACITY: 'SETHEADEROPACITY',
};

function getInitState() {
  return {
    isScrolling: false,
    timeOut: null,
    headerOpacity: 0,
  }
}
let actions = {
  onScroll({commit, state}) {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 100) {
      let value =  (scrollTop-100)/10;
      commit(mutationTypes.SETHEADEROPACITY, value);
    } else if (scrollTop < 100 && scrollTop > 90) {
      let value = (10-(100 - scrollTop))/10;
      commit(mutationTypes.SETHEADEROPACITY, value);
    }
  }
}
let mutations = {
  [mutationTypes.SETHEADEROPACITY](state, value) {
    console.log('value',value);
    state.headerOpacity = value;
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