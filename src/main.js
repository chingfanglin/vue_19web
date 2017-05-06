// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import store from './store/'
import { AlertPlugin, LoadingPlugin, ToastPlugin } from 'vux'



Vue.use(VueRouter)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)


FastClick.attach(document.body)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
next();
})

router.afterEach(function (to) {
  store.commit('IS_USERDETAILS',false)
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
