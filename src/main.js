// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Login from './pages/login/login'
import Registers from './pages/registers/registers'
import Home from './pages/home/home'
import House from './pages/house/house'
import Account from './pages/account/account'
import My from './pages/my/my'
import { AlertPlugin, LoadingPlugin } from 'vux'

Vue.use(VueRouter)
Vue.use(AlertPlugin)
Vue.use(LoadingPlugin)

const routes = [{
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

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
