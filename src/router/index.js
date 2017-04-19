import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/login'
import Registers from '@/pages/registers/registers'
import Home from '@/pages/home/home'
import House from '@/pages/house/house'
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
