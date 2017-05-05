import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/login'
import Registers from '@/pages/registers/registers'
import Registers_complete from '@/pages/registers/registers_detail'
import Home from '@/pages/home/home'
import Category from '@/pages/category/category'
import Housepage from '@/pages/category/houses/house'
import Houses from '@/pages/category/houses/houses'
import HouseDetail from '@/pages/category/houses/house_detail'
import RoomDetail from '@/pages/category/rooms/room_detail'
import Remind from '@/pages/category/remind/remind'
import Account from '@/pages/account/account'
import My from '@/pages/my/my'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    component: Login
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/reg',
    name: 'registers',
    component: Registers
  },
  {
    path: '/reg_complete',
    name: 'reg_complete',
    component: Registers_complete
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/house/houses',
    name: 'houses',
    component: Houses
  },
  {
    path: '/house/housedetail',
    name: 'houseDetail',
    component: HouseDetail
  },

  {
    path: '/housepage',
    name: 'housepage',
    component: Housepage
  },
  {
    path: '/housepage/:id',
    name: 'housepage',
    component: Housepage
  },
  {
    path: '/roomdetail',
    name: 'roomdetail',
    component: RoomDetail
  },
  {
    path: '/roomdetail/:id',
    name: 'roomdetail',
    component: RoomDetail
  },
  {
    path: '/account',
    name: 'account',
    component: Account
  },
  {
    path: '/remind',
    name: 'remind',
    component: Remind
  },
  {
    path: '/my',
    name: 'my',
    component: My
  }]
})
