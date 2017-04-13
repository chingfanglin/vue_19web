<template>
  <div>
    <tabbar>
      <tabbar-item selected link="/home">
        <i slot="icon" class="fa fa-home" aria-hidden="true"></i>
        <span slot="label">首頁</span>
      </tabbar-item>
      <tabbar-item show-dot link="/house" icon-class="fa fa-home">
        <i slot="icon" class="fa fa-handshake-o" aria-hidden="true"></i>
        <span slot="label">房屋</span>
      </tabbar-item>
      <tabbar-item  link="/money" icon-class="fa fa-home">
        <i slot="icon" class="fa fa-money" aria-hidden="true"></i>
        <span slot="label">財務</span>
      </tabbar-item>
      <tabbar-item link="/my">
        <i slot="icon" class="fa fa-user-o" aria-hidden="true"></i>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'
export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  }
}
</script>
