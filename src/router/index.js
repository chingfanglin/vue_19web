import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/login'
import Registers from '@/pages/registers/registers'
import Home from '@/pages/home/home'
import House from '@/pages/house/house'
import Houses from '@/pages/house/houses/houses'
import HouseDetail from '@/pages/house/houses/house_detail'

import Rooms from '@/pages/house/rooms'
import Room from '@/pages/house/room'
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
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/house',
    name: 'house',
    component: House
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
    path: '/rooms',
    name: 'rooms',
    component: Rooms
  },
  {
    path: '/rooms/:id',
    name: 'rooms',
    component: Rooms
  },
  {
    path: '/room',
    name: 'room',
    component: Room
  },
  {
    path: '/room/:id',
    name: 'room',
    component: Room
  },
  {
    path: '/account',
    name: 'account',
    component: Account
  },
  {
    path: '/my',
    name: 'my',
    component: My
  }]
})
