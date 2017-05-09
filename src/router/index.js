import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/login'
import Registers from '@/pages/registers/registers'
import RegistersComplete from '@/pages/registers/registers_detail'
import Home from '@/pages/home/home'
import Category from '@/pages/category/category'
import Housepage from '@/pages/category/houses/house'
import Houses from '@/pages/category/houses/houses'
import HouseDetail from '@/pages/category/houses/house_detail'
import RoomDetail from '@/pages/category/rooms/room_detail'
import Tenant from '@/pages/category/tenant/tenant'
import TenantDetail from '@/pages/category/tenant/tenant_datail'
import Remind from '@/pages/category/remind/remind'
import Report from '@/pages/report/report'

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
    component: RegistersComplete
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
    path: '/roomdetail',
    name: 'roomdetail',
    component: RoomDetail
  },
  {
    path: '/roomdetail',
    name: 'roomdetail',
    component: RoomDetail
  },
  {
    path: '/tenant',
    name: 'Tenant',
    component: Tenant
  },
  {
    path: '/tenantdetail',
    name: 'tenantdetail',
    component: TenantDetail
  },
  {
    path: '/report',
    name: 'report',
    component: Report
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
