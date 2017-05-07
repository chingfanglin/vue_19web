import axios from 'axios'
import * as types from './mutation-types.js'
import MockAdapter from 'axios-mock-adapter'



export default {
  userLogin({ commit, state }, userinfo) {
    commit(types.IS_LOGIN, true)
    commit(types.GET_USERINFO, userinfo)
  },
  getSliders({ commit, state }) {
    let mock = new MockAdapter(axios)
    mock.onGet('/sliders').reply(200, {
      'code': '0',
      'message': '請求成功！',
      'list': [{
        'url': '',
        'img': 'http://cdn2.ettoday.net/images/1624/1624023.jpg',
        'title': ''
      }, {
        'url': '',
        'img': 'http://pic.pimg.tw/realestates/1424788034-438499438.jpg?v=1424788036',
        'title': ''
      }, {
        'url': '',
        'img': 'https://i.ytimg.com/vi/5nZ8lIhG3Nw/maxresdefault.jpg',
        'title': ''
      }]
    })

    axios.get('/sliders').then(response => {
      if (response.data.list) {
        commit(types.GET_SLIDERS, response.data.list)
      }
    })
  },
  getHouses({ commit, state }) {
    let mock = new MockAdapter(axios)
    mock.onGet('/houselist').reply(200, {
      'code': '0',
      'message': '請求成功！',
      'list': [{
        'id': 1,
        'name': '台北福華大飯店',
        'address': '台灣台北市大安區仁愛路三段160號106'
      }, {
        'id': 2,
        'name': '君品酒店',
        'address': '台北市大同區承德路一段3號'
      }, {
        'id': 3,
        'name': '香格里拉台北遠東國際大飯店',
        'address': '台灣台北市敦化南路二段201號106'
      }, {
        'id': 4,
        'name': '晶華酒店',
        'address': '台灣台北市中山區中山北路二段39巷3號104'
      }]
    })
    axios.get('/houselist').then(response => {
      if (response.data.list) {
        commit(types.GET_HOUSES, response.data.list)
      }
    })
  },
  getHouse_datail({ commit, state }) {

  },
  getRooms({ commit, state }) {
    let mock = new MockAdapter(axios)
    mock.onGet('/roomlist').reply(200, {
      'code': '0',
      'message': '請求成功！',
      'list': [{
        'id': 1,
        'floor': 1,
        'room_no': 1,
        'tenant': '林書豪',
        'start_date': '2011/09/07',
        'expiry_date': '2017/11/12',
        'monthly_date': '12',
        'deposit': 14000,
        'monthly_rent': 7000,
        'first_rent': 7500,
        'isRent': true,
        'notes': '籃球員'

      }, {
        'id': 2,
        'floor': 1,
        'room_no': 2,
        'tenant': '川普',
        'start_date': '2015/04/02',
        'expiry_date': '2017/05/12',
        'monthly_date': '25',
        'deposit': 15000,
        'monthly_rent': 7500,
        'first_rent': 7500,
        'isRent': true,
        'notes': '總統'
      }, {
        'id': 3,
        'floor': 1,
        'room_no': 3,
        'tenant': '金城武',
        'start_date': '2011/01/27',
        'expiry_date': '2017/05/12',
        'monthly_date': '05',
        'deposit': 15000,
        'monthly_rent': 7500,
        'first_rent': 7500,
        'isRent': true,
        'notes': '演員'
      }, {
        'id': 4,
        'floor': 2,
        'room_no': 1,
        'tenant': '林志玲',
        'start_date': '2013/11/12',
        'expiry_date': '2017/05/12',
        'monthly_date': '22',
        'deposit': 13000,
        'monthly_rent': 6500,
        'first_rent': 6500,
        'isRent': true,
        'notes': '模特兒'
      }, {
        'id': 5,
        'floor': 2,
        'room_no': 2,
        'tenant': '漩渦鳴人',
        'start_date': '2013/09/22',
        'expiry_date': '2017/05/12',
        'monthly_date': '26',
        'deposit': 12000,
        'monthly_rent': 6000,
        'first_rent': 6000,
        'isRent': true,
        'notes': '火影'
      }, {
        'id': 6,
        'floor': 3,
        'room_no': 1,
        'tenant': '',
        'start_date': '',
        'expiry_date': '',
        'monthly_date': '',
        'deposit': 0,
        'monthly_rent': 0,
        'first_rent': 0,
        'isRent': false,
        'notes': ''
      }]
    })
    axios.get('/roomlist').then(response => {
      if (response.data.list) {
        commit(types.GET_ROOMS, response.data.list)
      }
    })
  },
  getTenant({ commit, state }) {
    let mock = new MockAdapter(axios)
    mock.onGet('/tenantlist').reply(200, {
      'code': '0',
      'message': '請求成功！',
      'list': [{
        'id': 1,
        'name': '林書豪',
        'sex': '男',
        'mobile': '0915123456',
        'birthday': '1985/5/29',
        'email': '123@xx.xx',
        'school': '123@xx.xx',
        'department': '123@xx.xx',
        'company': '123@xx.xx',
        'duties': '123@xx.xx',
        'contact_person': []
      }, {
        'id': 2,
        'name': '川普',
        'sex': '男',
        'mobile': '0987325716',
        'birthday': '1977/1/1',
        'email': '123@xx.xx',
        'school': '123@xx.xx',
        'department': '123@xx.xx',
        'company': '123@xx.xx',
        'duties': '123@xx.xx',
        'contact_person': []
      }, {
        'id': 3,
        'name': '林志玲',
        'sex': '女',
        'mobile': '0987645123',
        'birthday': '1980/12/22',
        'email': '123@xx.xx',
        'school': '123@xx.xx',
        'department': '123@xx.xx',
        'company': '123@xx.xx',
        'duties': '123@xx.xx',
        'contact_person': []
      }, {
        'id': 4,
        'name': '漩渦鳴人',
        'sex': '男',
        'mobile': '0912288811',
        'birthday': '1995/8/17',
        'email': '123@xx.xx',
        'school': '123@xx.xx',
        'department': '123@xx.xx',
        'company': '123@xx.xx',
        'duties': '123@xx.xx',
        'contact_person': []
      }]
    })
    axios.get('/tenantlist').then(response => {
      if (response.data.list) {
        commit(types.GET_TENANT, response.data.list)
      }
    })
  }
}
