
function getInitState() {
  return {

  }
}
let actions = {
  nihao() {
    console.log('nihao');
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