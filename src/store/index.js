import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

Vue.use(Vuex)

const state = {
  isLogin: false,
  userInfo: [],
  sliders: [],
  houses: [],
  houseid: 0,
  rooms: [],
  roomid: 0,
  tenant: []
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
