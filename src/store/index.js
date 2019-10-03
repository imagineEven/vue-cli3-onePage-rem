import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import scrollInfo from './modules/scrollInfo'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    'scroll-info': scrollInfo
  },
  getters
})

export default store
