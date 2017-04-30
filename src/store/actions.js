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
  },
  getHouses({
    commit,
    state
  }) {
    let mock = new MockAdapter(axios)
    mock.onGet('/houselist').reply(200, {
      "code": "0",
      "message": "請求成功！",
      "list": [{
        "id": 1,
        "name": "台北福華大飯店",
        "address": "台灣台北市大安區仁愛路三段160號106"
      }, {
        "id": 2,
        "name": "君品酒店",
        "address": "台北市大同區承德路一段3號"
      }, {
        "id": 3,
        "name": "香格里拉台北遠東國際大飯店",
        "address": "台灣台北市敦化南路二段201號106"
      }, {
        "id": 4,
        "name": "晶華酒店",
        "address": "台灣台北市中山區中山北路二段39巷3號104"
      }]
    })
    axios.get('/houselist').then(response => {
      if (response.data.list) {
        commit(types.GET_HOUSES, response.data.list)
      }
    })
  },
  getRooms({
    commit,
    state
  }) {
    let mock = new MockAdapter(axios)
    mock.onGet('/roomlist').reply(200, {
      "code": "0",
      "message": "請求成功！",
      "list": [{
        "id": 1,
        "floor": 1,
        "room_no": 1,
        "tenant": "林書豪",
        "expiry_date": "2017/11/12"
      }, {
        "id": 2,
        "floor": 1,
        "room_no": 2,
        "tenant": "川普",
        "expiry_date": "2017/05/12"
      }, {
        "id": 3,
        "floor": 1,
        "room_no": 3,
        "tenant": "金城武",
        "expiry_date": "2017/05/12"
      }, {
        "id": 4,
        "floor": 2,
        "room_no": 1,
        "tenant": "林志玲",
        "expiry_date": "2017/05/12"
      }, {
        "id": 5,
        "floor": 2,
        "room_no": 2,
        "tenant": "漩渦鳴人",
        "expiry_date": "2017/05/12"
      }, {
        "id": 6,
        "floor": 3,
        "room_no": 1,
        "tenant": "",
        "expiry_date": ""
      }]
    })
    axios.get('/roomlist').then(response => {
      if (response.data.list) {
        commit(types.GET_ROOMS, response.data.list)
      }
    })
  }
}
