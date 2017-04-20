import axios from 'axios'
import * as types from './mutation-types.js'
import MockAdapter from 'axios-mock-adapter'



export default {
  userLogin({
    commit,
    state
  }, userinfo) {
    commit(types.IS_LOGIN, true)
    commit(types.GET_USERINFO, userinfo)
  },
  getSliders({
    commit,
    state
  }) {
    let mock = new MockAdapter(axios)
    mock.onGet('/sliders').reply(200, {
      "code": "0",
      "message": "請求成功！",
      "list": [{
        "url": "",
        "img": "http://cdn2.ettoday.net/images/1624/1624023.jpg",
        "title": ""
      }, {
        "url": "",
        "img": "http://pic.pimg.tw/realestates/1424788034-438499438.jpg?v=1424788036",
        "title": ""
      }, {
        "url": "",
        "img": "https://i.ytimg.com/vi/5nZ8lIhG3Nw/maxresdefault.jpg",
        "title": ""
      }]
    })

    axios.get('/sliders').then(response => {
      if (response.data.list) {
        commit(types.GET_SLIDERS, response.data.list)
      }
    })
  }
}
