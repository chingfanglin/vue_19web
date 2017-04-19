import axios from 'axios'
import * as types from './mutation-types.js'

export default {
  userLogin ({
    commit,
    state
  }, userinfo) {
    commit(types.IS_LOGIN, true)
    commit(types.GET_USERINFO, userinfo)
  },
  getSliders ({
    commit,
    state
  }) {
    axios.get('/mock/home/sliders.json').then((response) => {
      if (response.data.list) {
        commit(types.GET_SLIDERS, response.data.list)
      }
    })
  }
}
