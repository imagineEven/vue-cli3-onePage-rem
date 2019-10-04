
function getInitState() {
  return {
    isScrolling: false,
    timeOut: null,
  }
}
let actions = {
  onScroll({commit, state}) {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    console.log('监听滚动事件', scrollTop);
  }
}
let mutations = {}
let getters = {}
let module = {
  namespaced: true,
  actions,
  mutations,
  state: getInitState(),
  getters,
}

export default module;