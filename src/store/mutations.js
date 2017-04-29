import {
  IS_LOGIN,
  IS_USERDETAILS,
  GET_USERINFO,
  GET_SLIDERS,
  GET_HOUSES,
  GET_ROOMS
} from './mutation-types.js'

export default {
  [IS_LOGIN] (state, bool) {
    state.isLogin = bool
  },
  [IS_USERDETAILS] (state, bool) {
    state.isUserDetails = bool
  },
  [GET_USERINFO] (state, list) {
    state.userInfo = list
  },
  [GET_SLIDERS] (state, list) {
    state.sliders = list
  },
  [GET_HOUSES] (state, list) {
    state.houses = list
  },
  [GET_ROOMS] (state, list) {
    state.rooms = list
  }
}
