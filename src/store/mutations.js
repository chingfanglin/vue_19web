import {
  IS_LOGIN,
  GET_USERINFO,
  GET_SLIDERS,
  GET_ROOMS
} from './mutation-types.js'

export default {
  [IS_LOGIN] (state, bool) {
    state.isLogin = bool
  },
  [GET_USERINFO] (state, list) {
    state.userInfo = list
  },
  [GET_SLIDERS] (state, list) {
    state.sliders = list
  },
  [GET_ROOMS] (state, list) {
    state.rooms = list
  }
}
